import { query as defaultQuery } from '../db.js';

const DAY_MS = 24 * 60 * 60 * 1000;

/** Resolve ISO date range; defaults to last 30 days ending now (UTC). */
export function resolveMetricsRange(fromInput, toInput, now = new Date()) {
  const to = toInput ? new Date(toInput) : now;
  const from = fromInput ? new Date(fromInput) : new Date(to.getTime() - 30 * DAY_MS);
  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
    const error = new Error('Invalid from/to date');
    error.status = 400;
    error.code = 'VALIDATION_ERROR';
    throw error;
  }
  if (from > to) {
    const error = new Error('from must be before to');
    error.status = 400;
    error.code = 'VALIDATION_ERROR';
    throw error;
  }
  return { from: from.toISOString(), to: to.toISOString() };
}

/** Inclusive percentile (p in 0..1) over a sorted numeric array; null if empty. */
export function percentile(sortedValues, p) {
  if (!sortedValues.length) return null;
  if (sortedValues.length === 1) return sortedValues[0];
  const rank = (sortedValues.length - 1) * p;
  const lo = Math.floor(rank);
  const hi = Math.ceil(rank);
  if (lo === hi) return sortedValues[lo];
  const weight = rank - lo;
  return sortedValues[lo] * (1 - weight) + sortedValues[hi] * weight;
}

function num(value) {
  if (value == null) return 0;
  return Number(value);
}

function hospitalFilter(hospitalId, startIndex) {
  if (!hospitalId) return { sql: '', params: [] };
  return { sql: ` AND br.hospital_id = $${startIndex}`, params: [hospitalId] };
}

/**
 * Aggregate pilot summary. When hospitalId is set, scopes to that hospital only
 * (donors_registered / median_on_call stay platform-wide — hospitals never get donor PII).
 */
export async function getMetricsSummary({ from, to, hospitalId = null, queryFn = defaultQuery } = {}) {
  const range = resolveMetricsRange(from, to);
  const hf = hospitalFilter(hospitalId, 3);

  const requestsSql = `
    SELECT
      COUNT(*)::int AS total_requests,
      COUNT(*) FILTER (WHERE urgency = 'critical')::int AS urgency_critical,
      COUNT(*) FILTER (WHERE urgency = 'urgent')::int AS urgency_urgent,
      COUNT(*) FILTER (WHERE urgency = 'scheduled')::int AS urgency_scheduled,
      COUNT(*) FILTER (WHERE status = 'open')::int AS status_open,
      COUNT(*) FILTER (WHERE status = 'filled')::int AS status_filled,
      COUNT(*) FILTER (WHERE status = 'closed')::int AS status_closed,
      COALESCE(SUM(units_needed), 0)::numeric AS units_requested
    FROM blood_requests br
    WHERE br.created_at >= $1::timestamptz AND br.created_at <= $2::timestamptz
    ${hf.sql}`;

  const donationsSql = `
    SELECT
      COUNT(*)::int AS donations_count,
      COALESCE(SUM(d.units), 0)::numeric AS units_collected
    FROM donations d
    JOIN blood_requests br ON br.id = d.request_id
    WHERE d.verified_at IS NOT NULL
      AND br.created_at >= $1::timestamptz AND br.created_at <= $2::timestamptz
    ${hf.sql}`;

  const creditsSql = hospitalId
    ? `
      SELECT
        COALESCE(SUM(c.amount) FILTER (WHERE c.type = 'earned'), 0)::numeric AS credits_earned,
        COALESCE(SUM(ABS(c.amount)) FILTER (WHERE c.type = 'redeemed'), 0)::numeric AS credits_redeemed
      FROM credits c
      WHERE c.created_at >= $1::timestamptz AND c.created_at <= $2::timestamptz
        AND (
          c.related_donation_id IN (
            SELECT d.id FROM donations d WHERE d.hospital_id = $3
          )
          OR c.related_redemption_id IN (
            SELECT r.id FROM redemptions r WHERE r.hospital_id = $3
          )
        )`
    : `
      SELECT
        COALESCE(SUM(amount) FILTER (WHERE type = 'earned'), 0)::numeric AS credits_earned,
        COALESCE(SUM(ABS(amount)) FILTER (WHERE type = 'redeemed'), 0)::numeric AS credits_redeemed
      FROM credits
      WHERE created_at >= $1::timestamptz AND created_at <= $2::timestamptz`;

  const donorsSql = `
    SELECT COUNT(*)::int AS donors_registered
    FROM users
    WHERE role = 'donor' AND deleted_at IS NULL
      AND created_at >= $1::timestamptz AND created_at <= $2::timestamptz`;

  // Without historical on-call snapshots, median of the current on-call set is the count itself.
  const onCallSql = `
    SELECT COUNT(*)::int AS on_call_count
    FROM users
    WHERE role = 'donor' AND deleted_at IS NULL AND is_on_call = true`;

  const requestsByDaySql = `
    SELECT DATE(br.created_at AT TIME ZONE 'UTC') AS day, COUNT(*)::int AS count
    FROM blood_requests br
    WHERE br.created_at >= $1::timestamptz AND br.created_at <= $2::timestamptz
    ${hf.sql}
    GROUP BY 1
    ORDER BY 1`;

  const rangeParams = [range.from, range.to];
  const scopedParams = [...rangeParams, ...hf.params];
  const creditParams = hospitalId ? [...rangeParams, hospitalId] : rangeParams;

  const [requests, donations, credits, donors, onCall, byDay] = await Promise.all([
    queryFn(requestsSql, scopedParams),
    queryFn(donationsSql, scopedParams),
    queryFn(creditsSql, creditParams),
    queryFn(donorsSql, rangeParams),
    queryFn(onCallSql, []),
    queryFn(requestsByDaySql, scopedParams),
  ]);

  const req = requests.rows[0] || {};
  const don = donations.rows[0] || {};
  const cred = credits.rows[0] || {};
  const unitsRequested = num(req.units_requested);
  const unitsCollected = num(don.units_collected);
  const fillRate = unitsRequested > 0 ? unitsCollected / unitsRequested : null;
  const onCallCount = num(onCall.rows[0]?.on_call_count);

  return {
    from: range.from,
    to: range.to,
    requests_by_urgency: {
      critical: num(req.urgency_critical),
      urgent: num(req.urgency_urgent),
      scheduled: num(req.urgency_scheduled),
    },
    requests_by_status: {
      open: num(req.status_open),
      filled: num(req.status_filled),
      closed: num(req.status_closed),
    },
    total_requests: num(req.total_requests),
    units_requested: unitsRequested,
    units_collected: unitsCollected,
    fill_rate: fillRate == null ? null : Math.round(fillRate * 10000) / 10000,
    donations_count: num(don.donations_count),
    credits_earned: num(cred.credits_earned),
    credits_redeemed: num(cred.credits_redeemed),
    donors_registered: hospitalId ? null : num(donors.rows[0]?.donors_registered),
    median_on_call_count: hospitalId ? null : onCallCount,
    requests_by_day: (byDay.rows || []).map((row) => ({
      day: row.day instanceof Date ? row.day.toISOString().slice(0, 10) : String(row.day).slice(0, 10),
      count: num(row.count),
    })),
  };
}

/** Per-request funnel timings + p50/p90. Never returns donor ids. */
export async function getResponseTimes({ from, to, hospitalId = null, queryFn = defaultQuery } = {}) {
  const range = resolveMetricsRange(from, to);
  const hf = hospitalFilter(hospitalId, 3);

  const sql = `
    SELECT
      br.id AS request_id,
      br.blood_group,
      br.urgency,
      br.escalation_level,
      EXTRACT(EPOCH FROM (
        MIN(dr.responded_at) FILTER (WHERE dr.status IN ('accepted', 'arrived', 'completed'))
        - br.created_at
      )) / 60.0 AS minutes_to_first_accept,
      EXTRACT(EPOCH FROM (
        MIN(dr.arrived_at) FILTER (WHERE dr.arrived_at IS NOT NULL)
        - br.created_at
      )) / 60.0 AS minutes_to_first_arrival,
      EXTRACT(EPOCH FROM (
        COALESCE(
          MIN(d.verified_at) FILTER (WHERE d.verified_at IS NOT NULL),
          MIN(dr.completed_at) FILTER (WHERE dr.completed_at IS NOT NULL)
        ) - br.created_at
      )) / 60.0 AS minutes_to_completion
    FROM blood_requests br
    LEFT JOIN donor_responses dr ON dr.request_id = br.id
    LEFT JOIN donations d ON d.request_id = br.id
    WHERE br.created_at >= $1::timestamptz AND br.created_at <= $2::timestamptz
    ${hf.sql}
    GROUP BY br.id, br.blood_group, br.urgency, br.escalation_level, br.created_at
    ORDER BY br.created_at ASC`;

  const result = await queryFn(sql, [range.from, range.to, ...hf.params]);
  const requests = (result.rows || []).map((row) => ({
    request_id: row.request_id,
    blood_group: row.blood_group,
    urgency: row.urgency,
    escalation_level: num(row.escalation_level),
    minutes_to_first_accept: row.minutes_to_first_accept == null ? null : Math.round(num(row.minutes_to_first_accept) * 100) / 100,
    minutes_to_first_arrival: row.minutes_to_first_arrival == null ? null : Math.round(num(row.minutes_to_first_arrival) * 100) / 100,
    minutes_to_completion: row.minutes_to_completion == null ? null : Math.round(num(row.minutes_to_completion) * 100) / 100,
  }));

  const accepts = requests.map((r) => r.minutes_to_first_accept).filter((v) => v != null).sort((a, b) => a - b);
  const arrivals = requests.map((r) => r.minutes_to_first_arrival).filter((v) => v != null).sort((a, b) => a - b);
  const completions = requests.map((r) => r.minutes_to_completion).filter((v) => v != null).sort((a, b) => a - b);

  const roundOrNull = (v) => (v == null ? null : Math.round(v * 100) / 100);

  return {
    from: range.from,
    to: range.to,
    p50: {
      minutes_to_first_accept: roundOrNull(percentile(accepts, 0.5)),
      minutes_to_first_arrival: roundOrNull(percentile(arrivals, 0.5)),
      minutes_to_completion: roundOrNull(percentile(completions, 0.5)),
    },
    p90: {
      minutes_to_first_accept: roundOrNull(percentile(accepts, 0.9)),
      minutes_to_first_arrival: roundOrNull(percentile(arrivals, 0.9)),
      minutes_to_completion: roundOrNull(percentile(completions, 0.9)),
    },
    requests,
  };
}

/** Rare type (O- / AB-) aggregates. */
export async function getRareMetrics({ from, to, hospitalId = null, queryFn = defaultQuery } = {}) {
  const range = resolveMetricsRange(from, to);
  const hf = hospitalFilter(hospitalId, 3);

  const sql = `
    SELECT
      br.blood_group,
      COUNT(*)::int AS request_count,
      COALESCE(SUM(br.units_needed), 0)::numeric AS units_requested,
      COALESCE(SUM(collected.units), 0)::numeric AS units_collected,
      COALESCE(AVG(br.escalation_level), 0)::numeric AS avg_escalation_level
    FROM blood_requests br
    LEFT JOIN LATERAL (
      SELECT COALESCE(SUM(d.units), 0) AS units
      FROM donations d
      WHERE d.request_id = br.id AND d.verified_at IS NOT NULL
    ) collected ON true
    WHERE br.blood_group IN ('O-', 'AB-')
      AND br.created_at >= $1::timestamptz AND br.created_at <= $2::timestamptz
    ${hf.sql}
    GROUP BY br.blood_group`;

  const result = await queryFn(sql, [range.from, range.to, ...hf.params]);
  const byGroup = { 'O-': null, 'AB-': null };
  for (const row of result.rows || []) {
    const unitsRequested = num(row.units_requested);
    const unitsCollected = num(row.units_collected);
    byGroup[row.blood_group] = {
      request_count: num(row.request_count),
      units_requested: unitsRequested,
      units_collected: unitsCollected,
      fill_rate: unitsRequested > 0 ? Math.round((unitsCollected / unitsRequested) * 10000) / 10000 : null,
      avg_escalation_level: Math.round(num(row.avg_escalation_level) * 100) / 100,
    };
  }

  return {
    from: range.from,
    to: range.to,
    rare: byGroup,
  };
}

export function responseTimesToCsv(payload) {
  const header = [
    'request_id',
    'blood_group',
    'urgency',
    'escalation_level',
    'minutes_to_first_accept',
    'minutes_to_first_arrival',
    'minutes_to_completion',
  ];
  const lines = [header.join(',')];
  for (const row of payload.requests || []) {
    lines.push([
      row.request_id,
      row.blood_group,
      row.urgency,
      row.escalation_level,
      row.minutes_to_first_accept ?? '',
      row.minutes_to_first_arrival ?? '',
      row.minutes_to_completion ?? '',
    ].join(','));
  }
  return `${lines.join('\n')}\n`;
}
