import express from 'express';
import { query } from '../db.js';
import { authenticate, requireActiveAccount, requireRole } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';
import { logAudit } from '../utils/compliance.js';
import {
  donorProfileSchema,
  donorRequestParamsSchema,
  donorResponseSchema,
  onCallSchema,
  paginationSchema,
  validate,
} from '../validation/schemas.js';

const router = express.Router();

/**
 * Blood compatibility matrix: which blood groups can DONATE to a given recipient group
 */
const GIVERS = {
  'O-':  ['O-'],
  'O+':  ['O-', 'O+'],
  'A-':  ['O-', 'A-'],
  'A+':  ['O-', 'O+', 'A-', 'A+'],
  'B-':  ['O-', 'B-'],
  'B+':  ['O-', 'O+', 'B-', 'B+'],
  'AB-': ['O-', 'A-', 'B-', 'AB-'],
  'AB+': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
};

/**
 * Haversine distance in km between two lat/lng points
 */
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// All donor routes require donor role
router.use(authenticate, requireActiveAccount, requireRole('donor'));

/**
 * GET /api/donor/dashboard
 * Donor home dashboard: stats, nearby active requests
 */
router.get('/dashboard', async (req, res) => {
  try {
    const donorId = req.user.id;

    // Donor stats
    const statsResult = await query(
      `SELECT
        COUNT(DISTINCT d.id) AS total_donations,
        COALESCE(SUM(c.amount) FILTER (WHERE c.type = 'earned'), 0) - COALESCE(SUM(c.amount) FILTER (WHERE c.type = 'redeemed'), 0) AS credit_balance
       FROM users u
       LEFT JOIN donations d ON d.donor_id = u.id AND d.verified_at IS NOT NULL
       LEFT JOIN credits c ON c.donor_id = u.id
       WHERE u.id = $1`,
      [donorId]
    );
    const stats = statsResult.rows[0] || { total_donations: 0, credit_balance: 0 };

    // Next eligible date
    const userResult = await query(
      'SELECT next_eligible_date, is_on_call, blood_group, latitude, longitude, ping_radius_km FROM users WHERE id = $1',
      [donorId]
    );
    const user = userResult.rows[0];

    // Nearby active requests compatible with donor's blood group
    let nearbyRequests = [];
    if (user && user.latitude && user.longitude && user.is_on_call) {
      const compatibleGroups = Object.keys(GIVERS).filter(g => GIVERS[g].includes(user.blood_group));
      const requestsResult = await query(
        `SELECT br.*, h.name AS hospital_name, h.latitude AS h_lat, h.longitude AS h_lng, h.phone AS hospital_phone
         FROM blood_requests br
         JOIN hospitals h ON h.id = br.hospital_id
         WHERE br.status = 'open'
           AND br.blood_group = ANY($1)
           AND br.created_at > NOW() - INTERVAL '24 hours'
         ORDER BY br.created_at DESC`,
        [compatibleGroups]
      );

      nearbyRequests = requestsResult.rows
        .map(r => {
          const dist = haversine(
            parseFloat(user.latitude), parseFloat(user.longitude),
            parseFloat(r.latitude || r.h_lat), parseFloat(r.longitude || r.h_lng)
          );
          return { ...r, distance_km: Math.round(dist * 10) / 10 };
        })
        .filter(r => r.distance_km <= (user.ping_radius_km || 10));
    }

    return res.json({
      success: true,
      data: {
        stats: {
          total_donations: parseInt(stats.total_donations) || 0,
          credit_balance: parseInt(stats.credit_balance) || 0
        },
        user_status: {
          is_on_call: user?.is_on_call || false,
          next_eligible_date: user?.next_eligible_date || null,
          blood_group: user?.blood_group || null
        },
        nearby_requests: nearbyRequests,
        credits: parseInt(stats.credit_balance) || 0,
        eligible: !user?.next_eligible_date || new Date(user.next_eligible_date) <= new Date(),
        is_on_call: user?.is_on_call || false
      }
    });
  } catch (err) {
    console.error('Donor dashboard error:', err);
    return res.status(500).json({ success: false, error: 'Failed to load dashboard' });
  }
});

/**
 * PATCH /api/donor/on-call
 * Toggle donor availability status
 */
router.patch('/on-call', validate(onCallSchema), async (req, res) => {
  try {
    const { is_on_call } = req.body;
    const donorId = req.user.id;

    if (typeof is_on_call !== 'boolean') {
      return res.status(400).json({ success: false, error: 'is_on_call boolean required' });
    }

    if (is_on_call) {
      const eligibility = await query(
        `SELECT blood_group,date_of_birth,phone,consent_given,next_eligible_date
         FROM users WHERE id=$1`,
        [donorId],
      );
      const donor = eligibility.rows[0];
      if (!donor?.blood_group || !donor?.date_of_birth || !donor?.phone || !donor?.consent_given) {
        return res.status(409).json({
          success: false,
          error: { code: 'DONOR_PROFILE_INCOMPLETE', message: 'Complete your donor profile before going on call' },
        });
      }
      if (donor.next_eligible_date && new Date(donor.next_eligible_date) > new Date()) {
        return res.status(409).json({
          success: false,
          error: { code: 'DONOR_NOT_ELIGIBLE', message: 'You are not yet eligible to donate again' },
        });
      }
    }
    const result = await query(
      'UPDATE users SET is_on_call = $1, updated_at = NOW() WHERE id = $2 RETURNING is_on_call',
      [is_on_call, donorId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Donor not found' });
    }

    await logAudit({ userId: donorId, action: 'ON_CALL_TOGGLE', resourceType: 'user', resourceId: donorId, details: { is_on_call: result.rows[0].is_on_call }, req });

    return res.json({ success: true, data: { is_on_call: result.rows[0].is_on_call } });
  } catch (err) {
    console.error('On-call toggle error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update availability' });
  }
});

/**
 * GET /api/donor/requests
 * Nearby active requests with distance
 */
router.get('/requests', validate(paginationSchema, 'query'), async (req, res) => {
  try {
    const donorId = req.user.id;
    const userResult = await query(
      'SELECT blood_group, latitude, longitude, ping_radius_km, is_on_call FROM users WHERE id = $1',
      [donorId]
    );
    const user = userResult.rows[0];

    if (!user || !user.latitude || !user.longitude) {
      return res.json({ success: true, data: { requests: [], message: 'Update your location to see nearby requests' } });
    }

    const compatibleGroups = Object.keys(GIVERS).filter(g => GIVERS[g].includes(user.blood_group));
    const radius = user.ping_radius_km || 10;

    const requestsResult = await query(
      `SELECT br.*, h.name AS hospital_name, h.latitude AS h_lat, h.longitude AS h_lng, h.phone AS hospital_phone, h.address AS hospital_address
       FROM blood_requests br
       JOIN hospitals h ON h.id = br.hospital_id
       WHERE br.status = 'open'
         AND br.blood_group = ANY($1)
         AND br.created_at > NOW() - INTERVAL '24 hours'
       ORDER BY br.created_at DESC`,
      [compatibleGroups]
    );

    const requests = requestsResult.rows
      .map(r => {
        const dist = haversine(
          parseFloat(user.latitude), parseFloat(user.longitude),
          parseFloat(r.latitude || r.h_lat), parseFloat(r.longitude || r.h_lng)
        );
        return { ...r, distance_km: Math.round(dist * 10) / 10 };
      })
      .filter(r => r.distance_km <= radius)
      .slice(0, req.query.limit);

    return res.json({ success: true, data: { requests } });
  } catch (err) {
    console.error('Donor requests error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch requests' });
  }
});

/**
 * POST /api/donor/respond/:requestId
 * Accept or decline a blood request
 */
router.post('/respond/:requestId', validate(donorRequestParamsSchema, 'params'), validate(donorResponseSchema), async (req, res) => {
  try {
    const donorId = req.user.id;
    const { requestId } = req.params;
    const { status } = req.body; // 'accepted' or 'declined'

    if (!['accepted', 'declined'].includes(status)) {
      return res.status(400).json({ success: false, error: 'Status must be accepted or declined' });
    }

    // Verify request exists and is open
    const reqCheck = await query('SELECT id, status FROM blood_requests WHERE id = $1', [requestId]);
    if (reqCheck.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }
    if (reqCheck.rows[0].status !== 'open') {
      return res.status(400).json({ success: false, error: 'Request is no longer open' });
    }

    // Check if donor already responded
    const existing = await query(
      'SELECT id, status FROM donor_responses WHERE request_id = $1 AND donor_id = $2',
      [requestId, donorId]
    );

    let response;
    if (existing.rows.length > 0) {
      const result = await query(
        `UPDATE donor_responses SET status = $1, responded_at = NOW() WHERE request_id = $2 AND donor_id = $3 RETURNING *`,
        [status, requestId, donorId]
      );
      response = result.rows[0];
    } else {
      const responseId = uuidv4();
      const result = await query(
        `INSERT INTO donor_responses (id, request_id, donor_id, status, responded_at, created_at)
         VALUES ($1, $2, $3, $4, NOW(), NOW()) RETURNING *`,
        [responseId, requestId, donorId, status]
      );
      response = result.rows[0];
    }

    // Create notification for hospital
    const requestInfo = await query(
      `SELECT br.*, h.user_id AS hospital_user_id, u.name AS donor_name
       FROM blood_requests br
       JOIN hospitals h ON h.id = br.hospital_id
       JOIN users u ON u.id = $1
       WHERE br.id = $2`,
      [donorId, requestId]
    );
    if (requestInfo.rows.length > 0) {
      const notifTitle = status === 'accepted' ? 'Donor Accepted Request' : 'Donor Declined Request';
      await query(
        `SELECT enqueue_notification($1, $2, $3, $4, $5::jsonb)`,
        [
          requestInfo.rows[0].hospital_user_id,
          'donor_response',
          notifTitle,
          `${requestInfo.rows[0].donor_name} has ${status} your request for ${requestInfo.rows[0].blood_group}`,
          JSON.stringify({ request_id: requestId, donor_id: donorId, response_status: status }),
        ]
      );
    }

    await logAudit({ userId: donorId, action: 'DONOR_RESPONSE', resourceType: 'donor_response', resourceId: response.id, details: { request_id: requestId, status }, req });

    return res.json({ success: true, data: { response } });
  } catch (err) {
    console.error('Respond error:', err);
    return res.status(500).json({ success: false, error: 'Failed to respond to request' });
  }
});

/**
 * POST /api/donor/arrived/:requestId
 * Mark donor as arrived at hospital
 */
router.post('/arrived/:requestId', validate(donorRequestParamsSchema, 'params'), async (req, res) => {
  try {
    const donorId = req.user.id;
    const { requestId } = req.params;

    const existing = await query(
      'SELECT id, status FROM donor_responses WHERE request_id = $1 AND donor_id = $2',
      [requestId, donorId]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'No response found for this request' });
    }

    const result = await query(
      `UPDATE donor_responses SET status = 'arrived', arrived_at = NOW() WHERE request_id = $1 AND donor_id = $2 RETURNING *`,
      [requestId, donorId]
    );

    // Notify hospital
    const requestInfo = await query(
      `SELECT br.*, h.user_id AS hospital_user_id, u.name AS donor_name
       FROM blood_requests br
       JOIN hospitals h ON h.id = br.hospital_id
       JOIN users u ON u.id = $1
       WHERE br.id = $2`,
      [donorId, requestId]
    );
    if (requestInfo.rows.length > 0) {
      await query(
        `SELECT enqueue_notification($1, $2, $3, $4, $5::jsonb)`,
        [
          requestInfo.rows[0].hospital_user_id,
          'donor_arrived',
          'Donor Has Arrived',
          `${requestInfo.rows[0].donor_name} has arrived at your hospital`,
          JSON.stringify({ request_id: requestId, donor_id: donorId }),
        ]
      );
    }

    await logAudit({ userId: donorId, action: 'DONOR_ARRIVED', resourceType: 'donor_response', resourceId: result.rows[0].id, details: { request_id: requestId }, req });

    return res.json({ success: true, data: { response: result.rows[0] } });
  } catch (err) {
    console.error('Arrived error:', err);
    return res.status(500).json({ success: false, error: 'Failed to mark arrival' });
  }
});

/**
 * GET /api/donor/credits
 * Credit balance + history
 */
router.get('/credits', validate(paginationSchema, 'query'), async (req, res) => {
  try {
    const donorId = req.user.id;

    const balanceResult = await query(
      `SELECT
        COALESCE(SUM(amount) FILTER (WHERE type = 'earned'), 0) - COALESCE(SUM(amount) FILTER (WHERE type = 'redeemed'), 0) AS balance
       FROM credits WHERE donor_id = $1`,
      [donorId]
    );
    const balance = parseInt(balanceResult.rows[0]?.balance) || 0;

    const historyResult = await query(
      `SELECT c.*, d.ref_code AS donation_ref
       FROM credits c
       LEFT JOIN donations d ON d.id = c.related_donation_id
       WHERE c.donor_id = $1
       ORDER BY c.created_at DESC,c.id DESC LIMIT $2`,
      [donorId, req.query.limit]
    );

    return res.json({
      success: true,
      data: { balance, history: historyResult.rows }
    });
  } catch (err) {
    console.error('Credits error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch credits' });
  }
});

/**
 * GET /api/donor/history
 * Donation history
 */
router.get('/history', validate(paginationSchema, 'query'), async (req, res) => {
  try {
    const donorId = req.user.id;

    const result = await query(
      `SELECT d.*, h.name AS hospital_name, br.blood_group AS request_blood_group, br.urgency
       FROM donations d
       LEFT JOIN hospitals h ON h.id = d.hospital_id
       LEFT JOIN blood_requests br ON br.id = d.request_id
       WHERE d.donor_id = $1
       ORDER BY d.created_at DESC,d.id DESC LIMIT $2`,
      [donorId, req.query.limit]
    );

    return res.json({ success: true, data: { donations: result.rows } });
  } catch (err) {
    console.error('History error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch donation history' });
  }
});

/**
 * PATCH /api/donor/profile
 * Update donor profile and location
 */
router.patch('/profile', validate(donorProfileSchema), async (req, res) => {
  try {
    const donorId = req.user.id;
    const { name, phone, blood_group, date_of_birth, latitude, longitude, city, state, ping_radius_km } = req.body;

    const updates = [];
    const values = [];
    let idx = 1;

    if (name !== undefined) { updates.push(`name = $${idx++}`); values.push(name); }
    if (phone !== undefined) { updates.push(`phone = $${idx++}`); values.push(phone); }
    if (blood_group !== undefined) { updates.push(`blood_group = $${idx++}`); values.push(blood_group); }
    if (date_of_birth !== undefined) { updates.push(`date_of_birth = $${idx++}`); values.push(date_of_birth); }
    if (latitude !== undefined) { updates.push(`latitude = $${idx++}`); values.push(latitude); }
    if (longitude !== undefined) { updates.push(`longitude = $${idx++}`); values.push(longitude); }
    if (city !== undefined) { updates.push(`city = $${idx++}`); values.push(city); }
    if (state !== undefined) { updates.push(`state = $${idx++}`); values.push(state); }
    if (ping_radius_km !== undefined) {
      updates.push(`ping_radius_km = $${idx++}`);
      values.push(ping_radius_km);
    }

    if (updates.length === 0) {
      return res.status(400).json({ success: false, error: 'No fields to update' });
    }

    updates.push(`updated_at = NOW()`);
    values.push(donorId);

    const result = await query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = $${idx} RETURNING id, email, phone, name, role, blood_group, date_of_birth, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, updated_at`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Donor not found' });
    }

    await logAudit({ userId: donorId, action: 'PROFILE_UPDATE', resourceType: 'user', resourceId: donorId, details: { fields: updates.map(u => u.split(' = ')[0]) }, req });

    return res.json({ success: true, data: { user: result.rows[0] } });
  } catch (err) {
    console.error('Profile update error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update profile' });
  }
});

export default router;
