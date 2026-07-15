import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { OAuth2Client } from 'google-auth-library';
import { query } from '../db.js';
import { authenticate } from '../middleware/auth.js';
import { logAudit, validatePassword, blacklistToken } from '../utils/compliance.js';
import { buildAccountExport } from '../utils/dataExport.js';

const router = express.Router();
const CURRENT_POLICY_VERSION = '2026-07-15';

// Lazy — dotenv may load after this module is imported
function getGoogleClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) return null;
  return new OAuth2Client(clientId);
}

/* ─── Validation helpers ─── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9\s\-]{8,20}$/;
const MAX_NAME_LEN = 100;
const MAX_EMAIL_LEN = 255;
const MAX_PHONE_LEN = 20;

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.trim();
}

/**
 * Generate JWT token with jti and token_version for secure logout
 */
function generateToken(user) {
  const jti = uuidv4();
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d';
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name, jti, token_version: user.token_version || 0 },
    process.env.JWT_SECRET,
    { expiresIn }
  );
  return { token, jti, expiresIn };
}

function parseExpiresInToDate(expiresIn) {
  const match = expiresIn.match(/^(\d+)([dhms])$/);
  if (!match) return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const val = parseInt(match[1], 10);
  const unit = match[2];
  const ms = unit === 'd' ? val * 24 * 60 * 60 * 1000 :
             unit === 'h' ? val * 60 * 60 * 1000 :
             unit === 'm' ? val * 60 * 1000 :
             val * 1000;
  return new Date(Date.now() + ms);
}

/**
 * POST /api/auth/register
 * Register a new donor or hospital
 */
router.post('/register', async (req, res) => {
  try {
    const {
      email, phone, password, name, role,
      blood_group, latitude, longitude, city, state,
      hospital_name, address, license_number, consent_given,
      consent_policy_version
    } = req.body;

    if (!email || !phone || !password || !name || !role) {
      return res.status(400).json({ success: false, error: 'Email, phone, password, name, and role are required' });
    }

    if (!['donor', 'hospital'].includes(role)) {
      return res.status(400).json({ success: false, error: 'Role must be donor or hospital' });
    }

    // Privacy readiness: require an affirmative choice before health data processing.
    if (!consent_given) {
      return res.status(400).json({ success: false, error: 'Consent is required to process your personal and health data' });
    }
    if (consent_policy_version && consent_policy_version !== CURRENT_POLICY_VERSION) {
      return res.status(409).json({ success: false, error: 'The privacy notice has changed. Refresh and review it before continuing.' });
    }

    // Password strength validation
    const pwCheck = validatePassword(password);
    if (!pwCheck.valid) {
      return res.status(400).json({ success: false, error: pwCheck.errors.join('; ') });
    }

    // Check if email already exists
    const existing = await query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ success: false, error: 'Email already registered' });
    }

    // Hash password
    const password_hash = await bcrypt.hash(password, 12);
    const userId = uuidv4();
    const now = new Date();

    // Insert user
    const userResult = await query(
      `INSERT INTO users (id, email, phone, password_hash, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, consent_given, consent_given_at, consent_policy_version, consent_source, token_version, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
       RETURNING id, email, phone, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, consent_given, consent_given_at, consent_policy_version, consent_source, created_at`,
      [
        userId, email, phone, password_hash, name, role,
        blood_group || null, latitude || null, longitude || null, city || null, state || null,
        false, role === 'donor' ? false : null, role === 'donor' ? 10 : null,
        true, now, CURRENT_POLICY_VERSION, 'registration_form', 0, now, now
      ]
    );

    const user = userResult.rows[0];

    // If hospital role, create hospital record
    if (role === 'hospital') {
      const hospitalId = uuidv4();
      await query(
        `INSERT INTO hospitals (id, user_id, name, address, license_number, latitude, longitude, city, state, phone, is_verified, created_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        [
          hospitalId, userId, hospital_name || name, address || '', license_number || null,
          latitude || null, longitude || null, city || null, state || null,
          phone || null, false, now
        ]
      );
    }

    const { token } = generateToken(user);

    await logAudit({ userId: user.id, action: 'REGISTER', resourceType: 'user', resourceId: user.id, details: { role }, req });

    return res.status(201).json({
      success: true,
      data: {
        user: { ...user, password_hash: undefined },
        token
      }
    });
  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ success: false, error: 'Registration failed' });
  }
});

/**
 * POST /api/auth/login
 * JWT login
 */
router.post('/login', async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!password || (!email && !phone)) {
      return res.status(400).json({ success: false, error: 'Email or phone, and password are required' });
    }

    // Query by email or phone
    const lookupField = email ? 'email' : 'phone';
    const lookupValue = email || phone;

    const result = await query(
      `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date, password_hash, token_version, created_at FROM users WHERE ${lookupField} = $1`,
      [lookupValue]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    delete user.password_hash;
    const { token, jti } = generateToken(user);
    const expiresAt = parseExpiresInToDate(process.env.JWT_EXPIRES_IN || '7d');

    await logAudit({ userId: user.id, action: 'LOGIN', resourceType: 'user', resourceId: user.id, details: { jti }, req });

    return res.json({
      success: true,
      data: { user, token }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ success: false, error: 'Login failed' });
  }
});

/**
 * POST /api/auth/google
 * Google Identity Services ID token → existing JWT session
 */
router.post('/google', async (req, res) => {
  try {
    const googleClient = getGoogleClient();
    if (!googleClient) {
      return res.status(503).json({
        success: false,
        error: 'Google Sign-In not configured. Set GOOGLE_CLIENT_ID on the server.',
      });
    }

    const { id_token, consent_given, consent_policy_version } = req.body || {};
    if (!id_token || typeof id_token !== 'string') {
      return res.status(400).json({ success: false, error: 'id_token is required' });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    if (!payload?.sub || !payload.email) {
      return res.status(401).json({ success: false, error: 'Invalid Google token' });
    }

    const googleSub = payload.sub;
    const email = payload.email.toLowerCase();
    const name = sanitize(payload.name || email.split('@')[0]).slice(0, MAX_NAME_LEN) || 'Google User';

    // Prefer google_sub match, then email
    let result = await query(
      `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state,
              is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date,
              token_version, consent_given, google_sub, created_at
       FROM users WHERE google_sub = $1 OR email = $2
       ORDER BY CASE WHEN google_sub = $1 THEN 0 ELSE 1 END
       LIMIT 1`,
      [googleSub, email]
    );

    let user;
    if (result.rows.length > 0) {
      user = result.rows[0];
      if (!user.google_sub) {
        await query(
          'UPDATE users SET google_sub = $1, updated_at = NOW() WHERE id = $2',
          [googleSub, user.id]
        );
        user.google_sub = googleSub;
      }
    } else {
      if (!consent_given) {
        return res.status(400).json({
          success: false,
          error: 'Consent is required to create an account with Google Sign-In',
        });
      }
      if (consent_policy_version && consent_policy_version !== CURRENT_POLICY_VERSION) {
        return res.status(409).json({
          success: false,
          error: 'The privacy notice has changed. Refresh and review it before continuing.',
        });
      }
      const userId = uuidv4();
      const now = new Date();
      // Opaque password — Google users sign in via Google only
      const password_hash = await bcrypt.hash(uuidv4() + uuidv4(), 12);
      const phone = `g_${googleSub.slice(0, 16)}`;
      const insert = await query(
        `INSERT INTO users (
           id, email, phone, password_hash, name, role, is_verified, is_on_call,
           ping_radius_km, consent_given, consent_given_at, consent_policy_version,
           consent_source, token_version, google_sub, created_at, updated_at
         ) VALUES ($1,$2,$3,$4,$5,'donor',false,false,10,true,$6,$7,'google_sign_in',0,$8,$9,$9)
         RETURNING id, email, phone, name, role, blood_group, latitude, longitude, city, state,
                   is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date,
                   token_version, consent_given, consent_given_at, consent_policy_version,
                   consent_source, google_sub, created_at`,
        [userId, email, phone, password_hash, name, now, CURRENT_POLICY_VERSION, googleSub, now]
      );
      user = insert.rows[0];
    }

    const { token, jti } = generateToken(user);
    await logAudit({
      userId: user.id,
      action: 'LOGIN_GOOGLE',
      resourceType: 'user',
      resourceId: user.id,
      details: { jti },
      req,
    });

    return res.json({ success: true, data: { user, token } });
  } catch (err) {
    console.error('Google auth error:', err);
    const msg = err?.message?.includes('Wrong number of segments')
      ? 'Invalid Google token'
      : 'Google Sign-In failed';
    return res.status(401).json({ success: false, error: msg });
  }
});

/**
 * POST /api/auth/logout
 * Secure logout — blacklist the token
 */
router.post('/logout', authenticate, async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.slice(7);
    const decoded = jwt.decode(token);
    if (decoded?.jti) {
      const expiresAt = parseExpiresInToDate(process.env.JWT_EXPIRES_IN || '7d');
      await blacklistToken(decoded.jti, req.user.id, expiresAt);
    }
    await logAudit({ userId: req.user.id, action: 'LOGOUT', resourceType: 'user', resourceId: req.user.id, req });
    return res.json({ success: true, data: { message: 'Logged out successfully' } });
  } catch (err) {
    console.error('Logout error:', err);
    return res.status(500).json({ success: false, error: 'Logout failed' });
  }
});

/**
 * POST /api/auth/consent
 * Record or update user consent for privacy-readiness workflows.
 */
router.post('/consent', authenticate, async (req, res) => {
  try {
    const { consent_given } = req.body;
    if (typeof consent_given !== 'boolean') {
      return res.status(400).json({ success: false, error: 'consent_given boolean is required' });
    }
    const result = await query(
      `UPDATE users SET consent_given = $1, consent_given_at = NOW(),
       consent_policy_version = $2, consent_source = 'account_settings', updated_at = NOW()
       WHERE id = $3
       RETURNING id, consent_given, consent_given_at, consent_policy_version, consent_source`,
      [consent_given, CURRENT_POLICY_VERSION, req.user.id]
    );
    await logAudit({ userId: req.user.id, action: consent_given ? 'CONSENT_GIVEN' : 'CONSENT_REVOKED', resourceType: 'user', resourceId: req.user.id, req });
    return res.json({ success: true, data: { consent: result.rows[0] } });
  } catch (err) {
    console.error('Consent error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update consent' });
  }
});

/**
 * GET /api/auth/export
 * Export data scoped to the authenticated account.
 */
router.get('/export', authenticate, async (req, res) => {
  try {
    const userId = req.user.id;
    const [userResult, hospitalResult] = await Promise.all([
      query(
        `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state,
                is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date,
                consent_given, consent_given_at, consent_policy_version, consent_source,
                created_at, updated_at
         FROM users WHERE id = $1`,
        [userId]
      ),
      query(
        `SELECT id, name, address, license_number, latitude, longitude, city, state,
                phone, is_verified, operating_hours, created_at
         FROM hospitals WHERE user_id = $1`,
        [userId]
      ),
    ]);

    if (userResult.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const hospital = hospitalResult.rows[0] || null;
    const [
      donationsResult,
      responsesResult,
      creditsResult,
      familyResult,
      notificationsResult,
      requestsResult,
    ] = await Promise.all([
      query(
        `SELECT id, request_id, hospital_id, units, blood_group, verified_at,
                credits_earned, ref_code, created_at
         FROM donations WHERE donor_id = $1 ORDER BY created_at DESC`,
        [userId]
      ),
      query(
        `SELECT id, request_id, status, responded_at, arrived_at, completed_at, created_at
         FROM donor_responses WHERE donor_id = $1 ORDER BY created_at DESC`,
        [userId]
      ),
      query(
        `SELECT id, amount, type, description, related_donation_id, created_at
         FROM credits WHERE donor_id = $1 ORDER BY created_at DESC`,
        [userId]
      ),
      query(
        `SELECT id, name, relationship, blood_group, created_at
         FROM family_members WHERE donor_id = $1 ORDER BY created_at DESC`,
        [userId]
      ),
      query(
        `SELECT id, type, title, body, data, is_read, created_at
         FROM notifications WHERE user_id = $1 ORDER BY created_at DESC`,
        [userId]
      ),
      hospital
        ? query(
            `SELECT id, blood_group, units_needed, urgency, status, radius_km,
                    latitude, longitude, notes, ref_code, needed_by, filled_at, created_at
             FROM blood_requests WHERE hospital_id = $1 ORDER BY created_at DESC`,
            [hospital.id]
          )
        : Promise.resolve({ rows: [] }),
    ]);

    const exportData = buildAccountExport({
      user: userResult.rows[0],
      hospital,
      bloodRequests: requestsResult.rows,
      donations: donationsResult.rows,
      responses: responsesResult.rows,
      credits: creditsResult.rows,
      familyMembers: familyResult.rows,
      notifications: notificationsResult.rows,
    });

    await logAudit({
      userId,
      action: 'ACCOUNT_DATA_EXPORTED',
      resourceType: 'user',
      resourceId: userId,
      req,
    });

    res.setHeader('Cache-Control', 'no-store');
    return res.json({ success: true, data: exportData });
  } catch (err) {
    console.error('Account export error:', err.message);
    return res.status(500).json({ success: false, error: 'Failed to export account data' });
  }
});

/**
 * GET /api/auth/me
 * Current user profile
 */
router.get('/me', authenticate, async (req, res) => {
  try {
    const result = await query(
      `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state,
              is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date,
              consent_given, consent_given_at, consent_policy_version, consent_source,
              created_at, updated_at
       FROM users WHERE id = $1`,
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const user = result.rows[0];

    // If hospital, include hospital info
    if (user.role === 'hospital') {
      const hospResult = await query('SELECT id, name, address, license_number, latitude, longitude, city, state, phone, is_verified FROM hospitals WHERE user_id = $1', [user.id]);
      if (hospResult.rows.length > 0) {
        user.hospital = hospResult.rows[0];
      }
    }

    return res.json({ success: true, data: { user } });
  } catch (err) {
    console.error('Me error:', err);
    return res.status(500).json({ success: false, error: 'Failed to fetch profile' });
  }
});

/**
 * DELETE /api/auth/me
 * Right to Erasure — DPDP Act India compliance
 * Soft-deletes user account and anonymizes PII
 */
router.delete('/me', authenticate, async (req, res) => {
  try {
    const userId = req.user.id;
    const anonymizedEmail = `deleted_${userId}@anonymized.local`;
    const anonymizedPhone = `deleted_${userId.slice(0, 12)}`;
    const anonymizedName = 'Deleted User';

    await Promise.all([
      query('DELETE FROM push_subscriptions WHERE user_id = $1', [userId]),
      query('DELETE FROM family_members WHERE donor_id = $1', [userId]),
      query('DELETE FROM notifications WHERE user_id = $1', [userId]),
    ]);

    // Anonymize the account while retaining referential integrity.
    await query(
      `UPDATE users SET
        email = $1, phone = $2, name = $3, password_hash = $4,
        is_on_call = false, is_verified = false, consent_given = false,
        latitude = NULL, longitude = NULL, blood_group = NULL,
        google_sub = NULL, consent_given_at = NULL, consent_policy_version = NULL,
        consent_source = 'account_deletion',
        updated_at = NOW(), deleted_at = NOW()
       WHERE id = $5`,
      [anonymizedEmail, anonymizedPhone, anonymizedName, '[DELETED]', userId]
    );

    // Blacklist all tokens for this user
    await query(
      'UPDATE users SET token_version = token_version + 1 WHERE id = $1',
      [userId]
    );

    await logAudit({ userId, action: 'ACCOUNT_DELETED', resourceType: 'user', resourceId: userId, details: { reason: 'User-requested account deletion' }, req });

    return res.json({ success: true, data: { message: 'Account deleted and direct profile identifiers anonymized.' } });
  } catch (err) {
    console.error('Delete account error:', err);
    return res.status(500).json({ success: false, error: 'Failed to delete account' });
  }
});

export default router;

