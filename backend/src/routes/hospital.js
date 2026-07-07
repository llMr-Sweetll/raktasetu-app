import express from 'express';
import { query } from '../db.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { v4 as uuidv4 } from 'uuid';

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

const RARE = ['O-', 'AB-'];

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

/**
 * Generate a reference code for donation verification
 */
function generateRefCode() {
  return `RS-${Date.now().toString(36).toUpperCase().slice(-4)}`;
}

// All hospital routes require hospital role
router.use(authenticate, requireRole('hospital'));

/**
 * GET /api/hospital/dashboard
 * Live board with active requests + stats
 */
router.get('/dashboard', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospitalId = hospitalResult.rows[0].id;

    // Active requests for this hospital
    const requestsResult = await query(
      `SELECT br.*,
        (SELECT COUNT(*) FROM donor_responses dr WHERE dr.request_id = br.id AND dr.status = 'accepted') AS accepted_count,
        (SELECT COUNT(*) FROM donor_responses dr WHERE dr.request_id = br.id AND dr.status = 'arrived') AS arrived_count
       FROM blood_requests br
       WHERE br.hospital_id = $1 AND br.status IN ('open', 'filled')
       ORDER BY br.created_at DESC`,
      [hospitalId]
    );

    // Stats
    const statsResult = await query(
      `SELECT
        COUNT(*) FILTER (WHERE status = 'open') AS active_requests,
        COUNT(*) FILTER (WHERE status = 'filled') AS filled_requests,
        COALESCE(SUM(units_needed), 0) AS total_units_needed
       FROM blood_requests WHERE hospital_id = $1`,
      [hospitalId]
    );

    // Recent donations (last 30 days)
    const donationsResult = await query(
      `SELECT d.*, u.name AS donor_name
       FROM donations d
       JOIN users u ON u.id = d.donor_id
       WHERE d.hospital_id = $1 AND d.verified_at > NOW() - INTERVAL '30 days'
       ORDER BY d.verified_at DESC`,
      [hospitalId]
    );

    return res.json({
      success: true,
      data: {
        hospital_id: hospitalId,
        stats: statsResult.rows[0],
        active_requests: requestsResult.rows,
        recent_donations: donationsResult.rows
      }
    });
  } catch (err) {
    console.error('Hospital dashboard error:', err);
    return res.status(500).json({ success: false, error: 'Failed to load dashboard' });
  }
});

/**
 * POST /api/hospital/requests
 * Create a new blood request
 */
router.post('/requests', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id, latitude, longitude FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospital = hospitalResult.rows[0];

    const { blood_group, units_needed, urgency, radius_km, notes, needed_by } = req.body;

    if (!blood_group || !units_needed || !urgency) {
      return res.status(400).json({ success: false, error: 'blood_group, units_needed, and urgency are required' });
    }

    if (!['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].includes(blood_group)) {
      return res.status(400).json({ success: false, error: 'Invalid blood group' });
    }

    if (!['scheduled', 'urgent', 'critical'].includes(urgency)) {
      return res.status(400).json({ success: false, error: 'urgency must be scheduled, urgent, or critical' });
    }

    const requestId = uuidv4();
    const refCode = generateRefCode();
    const isRare = RARE.includes(blood_group);
    const effectiveRadius = isRare ? 25 : (radius_km || 10);

    const result = await query(
      `INSERT INTO blood_requests (id, hospital_id, blood_group, units_needed, urgency, status, radius_km, latitude, longitude, notes, ref_code, needed_by, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
       RETURNING *`,
      [
        requestId, hospital.id, blood_group, units_needed, urgency, 'open',
        effectiveRadius, hospital.latitude, hospital.longitude,
        notes || null, refCode, needed_by ? new Date(needed_by) : null
      ]
    );

    const request = result.rows[0];

    // Find compatible on-call donors within radius
    const compatibleDonors = GIVERS[blood_group];
    const donorsResult = await query(
      `SELECT id, name, blood_group, latitude, longitude, phone
       FROM users
       WHERE role = 'donor' AND is_on_call = true AND blood_group = ANY($1)`,
      [compatibleDonors]
    );

    const nearbyDonors = donorsResult.rows
      .map(d => {
        const dist = haversine(
          parseFloat(hospital.latitude), parseFloat(hospital.longitude),
          parseFloat(d.latitude), parseFloat(d.longitude)
        );
        return { ...d, distance_km: Math.round(dist * 10) / 10 };
      })
      .filter(d => d.distance_km <= effectiveRadius);

    // Send notifications to matching donors
    for (const donor of nearbyDonors) {
      const notifId = uuidv4();
      await query(
        `INSERT INTO notifications (id, user_id, type, title, body, data, is_read, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
        [
          notifId, donor.id, 'blood_request',
          `${urgency.toUpperCase()}: Blood needed at ${req.user.name || 'Hospital'}`,
          `${blood_group} blood needed urgently. ${units_needed} unit(s) required.`,
          JSON.stringify({ request_id: requestId, hospital_id: hospital.id, blood_group, urgency }),
          false
        ]
      );
    }

    return res.status(201).json({
      success: true,
      data: { request, donors_notified: nearbyDonors.length, nearby_donors: nearbyDonors }
    });
  } catch (err) {
    console.error('Create request error:', err);
    return res.status(500).json({ success: false, error: 'Failed to create request' });
  }
});

/**
 * GET /api/hospital/requests/:id
 * Request detail with donor responses
 */
router.get('/requests/:id', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospitalId = hospitalResult.rows[0].id;
    const { id } = req.params;

    const requestResult = await query(
      `SELECT br.* FROM blood_requests br WHERE br.id = $1 AND br.hospital_id = $2`,
      [id, hospitalId]
    );

    if (requestResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }

    const request = requestResult.rows[0];

    // Get donor responses with donor details
    const responsesResult = await query(
      `SELECT dr.*, u.name AS donor_name, u.phone AS donor_phone, u.blood_group AS donor_blood_group
       FROM donor_responses dr
       JOIN users u ON u.id = dr.donor_id
       WHERE dr.request_id = $1
       ORDER BY dr.responded_at DESC`,
      [id]
    );

    return res.json({
      success: true,
      data: { request, responses: responsesResult.rows }
    });
  } catch (err) {
    console.error('Request detail error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch request detail' });
  }
});

/**
 * PATCH /api/hospital/requests/:id
 * Update request status (open, filled, closed)
 */
router.patch('/requests/:id', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospitalId = hospitalResult.rows[0].id;
    const { id } = req.params;
    const { status } = req.body;

    if (!['open', 'filled', 'closed'].includes(status)) {
      return res.status(400).json({ success: false, error: 'status must be open, filled, or closed' });
    }

    const updates = ['status = $1'];
    const values = [status, id, hospitalId];

    if (status === 'filled') {
      updates.push('filled_at = NOW()');
    }

    const result = await query(
      `UPDATE blood_requests SET ${updates.join(', ')} WHERE id = $2 AND hospital_id = $3 RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Request not found' });
    }

    return res.json({ success: true, data: { request: result.rows[0] } });
  } catch (err) {
    console.error('Update request error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update request' });
  }
});

/**
 * POST /api/hospital/verify-donation
 * Verify donor arrival (QR scan or manual ref code)
 */
router.post('/verify-donation', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospitalId = hospitalResult.rows[0].id;

    const { ref_code, donor_id, request_id, units, blood_group } = req.body;

    // Verify by ref_code or by donor_id + request_id
    let verifiedDonorId = donor_id;
    let verifiedRequestId = request_id;
    let verifiedBloodGroup = blood_group;

    if (ref_code) {
      const reqResult = await query(
        'SELECT id, blood_group, hospital_id FROM blood_requests WHERE ref_code = $1',
        [ref_code]
      );
      if (reqResult.rows.length === 0) {
        return res.status(404).json({ success: false, error: 'Invalid reference code' });
      }
      const request = reqResult.rows[0];
      if (request.hospital_id !== hospitalId) {
        return res.status(403).json({ success: false, error: 'Request does not belong to your hospital' });
      }
      verifiedRequestId = request.id;
      verifiedBloodGroup = request.blood_group;

      // Find the donor who responded and arrived
      if (!verifiedDonorId) {
        const respResult = await query(
          `SELECT donor_id FROM donor_responses
           WHERE request_id = $1 AND status = 'arrived'
           ORDER BY arrived_at DESC LIMIT 1`,
          [verifiedRequestId]
        );
        if (respResult.rows.length === 0) {
          return res.status(404).json({ success: false, error: 'No donor has arrived for this request' });
        }
        verifiedDonorId = respResult.rows[0].donor_id;
      }
    }

    if (!verifiedDonorId) {
      return res.status(400).json({ success: false, error: 'donor_id or ref_code required' });
    }

    // If blood_group not provided, fetch from request
    if (!verifiedBloodGroup && verifiedRequestId) {
      const bgResult = await query('SELECT blood_group FROM blood_requests WHERE id = $1', [verifiedRequestId]);
      if (bgResult.rows.length > 0) {
        verifiedBloodGroup = bgResult.rows[0].blood_group;
      }
    }

    // Check donor response status
    const responseCheck = await query(
      `SELECT id, status FROM donor_responses
       WHERE request_id = $1 AND donor_id = $2`,
      [verifiedRequestId, verifiedDonorId]
    );

    if (responseCheck.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'No donor response found for this request' });
    }

    // Update donor response to completed
    await query(
      `UPDATE donor_responses SET status = 'completed', completed_at = NOW()
       WHERE request_id = $1 AND donor_id = $2`,
      [verifiedRequestId, verifiedDonorId]
    );

    // Create donation record
    const donationId = uuidv4();
    const donationRef = generateRefCode();
    const creditsEarned = 100;

    // Fallback blood group: try request, then donor
    let finalBloodGroup = verifiedBloodGroup;
    if (!finalBloodGroup) {
      const donorBg = await query('SELECT blood_group FROM users WHERE id = $1', [verifiedDonorId]);
      finalBloodGroup = donorBg.rows[0]?.blood_group || '?';
    }

    await query(
      `INSERT INTO donations (id, donor_id, request_id, hospital_id, units, blood_group, verified_by, verified_at, credits_earned, ref_code, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), $8, $9, NOW())`,
      [
        donationId, verifiedDonorId, verifiedRequestId, hospitalId,
        units || 1, finalBloodGroup, req.user.id,
        creditsEarned, donationRef
      ]
    );

    // Award credits
    const creditId = uuidv4();
    await query(
      `INSERT INTO credits (id, donor_id, amount, type, description, related_donation_id, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW())`,
      [
        creditId, verifiedDonorId, creditsEarned, 'earned',
        `Donation verified at ${req.user.name || 'hospital'}`,
        donationId
      ]
    );

    // Update donor's last donation date and next eligible date
    const today = new Date();
    const nextEligible = new Date(today);
    nextEligible.setDate(nextEligible.getDate() + 56); // 8 weeks

    await query(
      `UPDATE users SET last_donation_date = $1, next_eligible_date = $2, updated_at = NOW()
       WHERE id = $3`,
      [today, nextEligible, verifiedDonorId]
    );

    // Notify donor
    const notifId = uuidv4();
    await query(
      `INSERT INTO notifications (id, user_id, type, title, body, data, is_read, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())`,
      [
        notifId, verifiedDonorId, 'donation_verified',
        'Donation Verified!',
        `You earned ${creditsEarned} credits for your donation. Thank you for saving lives!`,
        JSON.stringify({ donation_id: donationId, credits_earned: creditsEarned }),
        false
      ]
    );

    return res.json({
      success: true,
      data: {
        donation_id: donationId,
        ref_code: donationRef,
        credits_earned: creditsEarned,
        donor_id: verifiedDonorId,
        request_id: verifiedRequestId
      }
    });
  } catch (err) {
    console.error('Verify donation error:', err);
    return res.status(500).json({ success: false, error: 'Failed to verify donation' });
  }
});

/**
 * GET /api/hospital/donors
 * Nearby on-call donors
 */
router.get('/donors', async (req, res) => {
  try {
    const hospitalResult = await query('SELECT id, latitude, longitude FROM hospitals WHERE user_id = $1', [req.user.id]);
    if (hospitalResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Hospital profile not found' });
    }
    const hospital = hospitalResult.rows[0];

    const { radius = 10, blood_group } = req.query;

    let donorQuery = `SELECT id, name, blood_group, latitude, longitude, city, phone, is_on_call, last_donation_date, next_eligible_date
                      FROM users WHERE role = 'donor' AND is_on_call = true`;
    const queryParams = [];

    if (blood_group) {
      donorQuery += ' AND blood_group = $1';
      queryParams.push(blood_group);
    }

    const donorsResult = await query(donorQuery, queryParams);

    const donors = donorsResult.rows
      .map(d => {
        const dist = haversine(
          parseFloat(hospital.latitude), parseFloat(hospital.longitude),
          parseFloat(d.latitude), parseFloat(d.longitude)
        );
        return { ...d, distance_km: Math.round(dist * 10) / 10 };
      })
      .filter(d => d.distance_km <= parseInt(radius))
      .sort((a, b) => a.distance_km - b.distance_km);

    return res.json({ success: true, data: { donors } });
  } catch (err) {
    console.error('Nearby donors error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch nearby donors' });
  }
});

export default router;
