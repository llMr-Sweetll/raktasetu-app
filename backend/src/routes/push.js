import express from 'express';
import webpush from 'web-push';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

function vapidConfigured() {
  return Boolean(
    process.env.VAPID_PUBLIC_KEY &&
    process.env.VAPID_PRIVATE_KEY &&
    process.env.VAPID_SUBJECT
  );
}

function configureWebPush() {
  if (!vapidConfigured()) return false;
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT,
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
  return true;
}

/**
 * GET /api/push/vapid-public-key
 */
router.get('/vapid-public-key', (req, res) => {
  if (!process.env.VAPID_PUBLIC_KEY) {
    return res.status(503).json({
      success: false,
      error: 'Web Push not configured. Set VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT.',
    });
  }
  return res.json({ success: true, data: { publicKey: process.env.VAPID_PUBLIC_KEY } });
});

/**
 * POST /api/push/subscribe
 * Body: { endpoint, keys: { p256dh, auth } }
 */
router.post('/subscribe', authenticate, async (req, res) => {
  try {
    const { endpoint, keys } = req.body || {};
    if (!endpoint || !keys?.p256dh || !keys?.auth) {
      return res.status(400).json({ success: false, error: 'endpoint and keys.p256dh/keys.auth required' });
    }

    await query(
      `INSERT INTO push_subscriptions (id, user_id, endpoint, p256dh, auth, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, NOW(), NOW())
       ON CONFLICT (endpoint) DO UPDATE SET
         user_id = EXCLUDED.user_id,
         p256dh = EXCLUDED.p256dh,
         auth = EXCLUDED.auth,
         updated_at = NOW()`,
      [uuidv4(), req.user.id, endpoint, keys.p256dh, keys.auth]
    );

    return res.json({ success: true, data: { subscribed: true } });
  } catch (err) {
    console.error('Push subscribe error:', err);
    if (err.code === '42P01') {
      return res.status(503).json({
        success: false,
        error: 'push_subscriptions table missing — run backend/db/migrations/2026-07-15-google-push.sql',
      });
    }
    return res.status(500).json({ success: false, error: 'Failed to save subscription' });
  }
});

/**
 * POST /api/push/test
 * Sends a test push if VAPID is configured; otherwise 501.
 */
router.post('/test', authenticate, async (req, res) => {
  try {
    if (!configureWebPush()) {
      return res.status(501).json({
        success: false,
        error: 'Web Push not configured. Use local notifications, or set VAPID keys on the server.',
      });
    }

    const result = await query(
      'SELECT endpoint, p256dh, auth FROM push_subscriptions WHERE user_id = $1',
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'No push subscription for this user' });
    }

    const payload = JSON.stringify({
      title: 'RaktaSetu',
      body: req.body?.body || 'Test alert — you are reachable for blood requests.',
      url: '/#/home',
    });

    const results = [];
    for (const row of result.rows) {
      try {
        await webpush.sendNotification(
          { endpoint: row.endpoint, keys: { p256dh: row.p256dh, auth: row.auth } },
          payload
        );
        results.push({ endpoint: row.endpoint, ok: true });
      } catch (err) {
        if (err.statusCode === 404 || err.statusCode === 410) {
          await query('DELETE FROM push_subscriptions WHERE endpoint = $1', [row.endpoint]);
        }
        results.push({ endpoint: row.endpoint, ok: false, error: err.message });
      }
    }

    return res.json({ success: true, data: { results } });
  } catch (err) {
    console.error('Push test error:', err);
    return res.status(500).json({ success: false, error: 'Failed to send test push' });
  }
});

export default router;
export { vapidConfigured, configureWebPush };
