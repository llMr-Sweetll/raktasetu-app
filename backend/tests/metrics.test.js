import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import pg from 'pg';
import { createApp } from '../src/app.js';
import {
  getMetricsSummary,
  getRareMetrics,
  getResponseTimes,
  percentile,
  resolveMetricsRange,
  responseTimesToCsv,
} from '../src/services/metricsService.js';

const { Client } = pg;
const hasTestDatabase = Boolean(process.env.TEST_DATABASE_URL?.startsWith('postgres'));

/** Must match backend/scripts/seed-fixtures.js metrics mini-scenario. */
const METRICS_FIXTURE = {
  hospitalA: 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1',
  hospitalB: 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1',
  request1: 'rrrrrrrr-rrrr-4rrr-8rrr-rrrrrrrrrrr1',
  request2: 'rrrrrrrr-rrrr-4rrr-8rrr-rrrrrrrrrrr2',
  request3: 'rrrrrrrr-rrrr-4rrr-8rrr-rrrrrrrrrrr3',
};

test('percentile and date-range helpers', () => {
  assert.equal(percentile([], 0.5), null);
  assert.equal(percentile([10], 0.5), 10);
  assert.equal(percentile([10, 20, 30], 0.5), 20);
  assert.equal(percentile([10, 20, 30, 40, 50], 0.9), 46);
  const range = resolveMetricsRange('2026-07-01T00:00:00.000Z', '2026-07-31T23:59:59.000Z');
  assert.equal(range.from, '2026-07-01T00:00:00.000Z');
  assert.match(range.to, /^2026-07-31/);
});

test('responseTimesToCsv has no donor columns', () => {
  const csv = responseTimesToCsv({
    requests: [{
      request_id: 'r1', blood_group: 'O+', urgency: 'urgent', escalation_level: 0,
      minutes_to_first_accept: 10, minutes_to_first_arrival: 30, minutes_to_completion: 60,
    }],
  });
  assert.match(csv, /^request_id,blood_group,urgency/);
  assert.equal(csv.includes('donor'), false);
  assert.equal(csv.includes('phone'), false);
  assert.equal(csv.includes('email'), false);
});

test('admin and hospital metrics routes require auth', async () => {
  const app = createApp({ env: { NODE_ENV: 'test', SERVE_FRONTEND: 'false' } });
  await request(app).get('/api/admin/metrics/summary').expect(401);
  await request(app).get('/api/admin/metrics/response-times').expect(401);
  await request(app).get('/api/admin/metrics/rare').expect(401);
  await request(app).get('/api/admin/metrics/export.csv').expect(401);
  await request(app).get('/api/hospital/metrics/summary').expect(401);
});

test('metrics math against fixture scenario', {
  skip: !hasTestDatabase,
}, async () => {
  const client = new Client({
    connectionString: process.env.TEST_DATABASE_URL,
    ssl: process.env.TEST_DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
  });
  await client.connect();
  const queryFn = (text, params) => client.query(text, params);
  try {
    const from = '2026-07-01T00:00:00.000Z';
    const to = '2026-07-20T23:59:59.000Z';

    const summary = await getMetricsSummary({ from, to, queryFn });
    // 3 fixture requests: units 2+1+1 = 4 collected / 4 requested
    assert.ok(summary.total_requests >= 3);
    assert.equal(summary.fill_rate, 1);
    assert.ok(summary.donations_count >= 3);
    assert.ok(summary.credits_earned >= 300);

    const times = await getResponseTimes({ from, to, queryFn });
    const byId = Object.fromEntries(times.requests.map((r) => [r.request_id, r]));
    assert.equal(byId[METRICS_FIXTURE.request1]?.minutes_to_first_accept, 10);
    assert.equal(byId[METRICS_FIXTURE.request1]?.minutes_to_first_arrival, 30);
    assert.equal(byId[METRICS_FIXTURE.request1]?.minutes_to_completion, 60);
    assert.equal(byId[METRICS_FIXTURE.request2]?.minutes_to_first_accept, 20);
    assert.equal(byId[METRICS_FIXTURE.request3]?.minutes_to_first_accept, 5);
    assert.equal(byId[METRICS_FIXTURE.request3]?.escalation_level, 1);
    assert.ok(!JSON.stringify(times).includes('dddddddd-dddd'));
    assert.equal(times.p50.minutes_to_first_accept, 10);

    const hospitalA = await getMetricsSummary({
      from, to, hospitalId: METRICS_FIXTURE.hospitalA, queryFn,
    });
    const hospitalB = await getMetricsSummary({
      from, to, hospitalId: METRICS_FIXTURE.hospitalB, queryFn,
    });
    assert.equal(hospitalA.total_requests, 2);
    assert.equal(hospitalB.total_requests, 1);
    assert.equal(hospitalA.units_collected, 3);
    assert.equal(hospitalB.units_collected, 1);

    const rare = await getRareMetrics({ from, to, queryFn });
    assert.ok(rare.rare['O-']);
    assert.equal(rare.rare['O-'].request_count, 1);
    assert.equal(rare.rare['O-'].fill_rate, 1);
    assert.equal(rare.rare['O-'].avg_escalation_level, 1);
  } finally {
    await client.end();
  }
});
