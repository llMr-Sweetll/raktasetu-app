import express from 'express';
import { query } from '../db.js';
import { authenticate, requireRole } from '../middleware/auth.js';
import { logAudit } from '../utils/compliance.js';

const router = express.Router();

router.use(authenticate, requireRole('admin'));

/**
 * GET /api/admin/users
 * List all users
 */
router.get('/users', async (req, res) => {
  try {
    const result = await query(
      `SELECT id, email, phone, name, role, blood_group, city, is_verified, is_on_call, consent_given, created_at
       FROM users ORDER BY created_at DESC`
    );
    await logAudit({ userId: req.user.id, action: 'ADMIN_VIEW_USERS', resourceType: 'user', details: { count: result.rows.length }, req });
    return res.json({ success: true, data: { users: result.rows } });
  } catch (err) {
    console.error('Admin users error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch users' });
  }
});

/**
 * GET /api/admin/requests
 * List all blood requests
 */
router.get('/requests', async (req, res) => {
  try {
    const result = await query(
      `SELECT br.*, h.name AS hospital_name
       FROM blood_requests br
       JOIN hospitals h ON h.id = br.hospital_id
       ORDER BY br.created_at DESC`
    );
    await logAudit({ userId: req.user.id, action: 'ADMIN_VIEW_REQUESTS', resourceType: 'blood_request', details: { count: result.rows.length }, req });
    return res.json({ success: true, data: { requests: result.rows } });
  } catch (err) {
    console.error('Admin requests error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch requests' });
  }
});

/**
 * GET /api/admin/stats
 * Platform-wide statistics
 */
router.get('/stats', async (req, res) => {
  try {
    const stats = await query(
      `SELECT
        (SELECT COUNT(*) FROM users WHERE role = 'donor') AS total_donors,
        (SELECT COUNT(*) FROM users WHERE role = 'hospital') AS total_hospitals,
        (SELECT COUNT(*) FROM blood_requests) AS total_requests,
        (SELECT COUNT(*) FROM blood_requests WHERE status = 'open') AS active_requests,
        (SELECT COUNT(*) FROM donations) AS total_donations,
        (SELECT COALESCE(SUM(amount), 0) FROM credits WHERE type = 'earned') AS total_credits_earned
       FROM users LIMIT 1`
    );
    await logAudit({ userId: req.user.id, action: 'ADMIN_VIEW_STATS', resourceType: 'platform', req });
    return res.json({ success: true, data: { stats: stats.rows[0] } });
  } catch (err) {
    console.error('Admin stats error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch stats' });
  }
});

/**
 * GET /api/admin/audit-logs
 * View audit logs (HIPAA requirement)
 */
router.get('/audit-logs', async (req, res) => {
  try {
    const { limit = 100, offset = 0 } = req.query;
    const result = await query(
      `SELECT al.*, u.name AS user_name
       FROM audit_logs al
       LEFT JOIN users u ON u.id = al.user_id
       ORDER BY al.created_at DESC
       LIMIT $1 OFFSET $2`,
      [Math.min(parseInt(limit) || 100, 500), parseInt(offset) || 0]
    );
    await logAudit({ userId: req.user.id, action: 'ADMIN_VIEW_AUDIT', resourceType: 'audit_log', details: { count: result.rows.length }, req });
    return res.json({ success: true, data: { logs: result.rows } });
  } catch (err) {
    console.error('Admin audit logs error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch audit logs' });
  }
});

export default router;
