import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db.js';
import { authenticate } from '../middleware/auth.js';
import { logAudit, validatePassword, blacklistToken } from '../utils/compliance.js';

const router = express.Router();

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
      hospital_name, address, license_number, consent_given
    } = req.body;

    if (!email || !phone || !password || !name || !role) {
      return res.status(400).json({ success: false, error: 'Email, phone, password, name, and role are required' });
    }

    if (!['donor', 'hospital'].includes(role)) {
      return res.status(400).json({ success: false, error: 'Role must be donor or hospital' });
    }

    // DPDP / HIPAA: require explicit consent for health data processing
    if (!consent_given) {
      return res.status(400).json({ success: false, error: 'Consent is required to process your personal and health data' });
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
      `INSERT INTO users (id, email, phone, password_hash, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, consent_given, consent_given_at, token_version, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
       RETURNING id, email, phone, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, consent_given, created_at`,
      [
        userId, email, phone, password_hash, name, role,
        blood_group || null, latitude || null, longitude || null, city || null, state || null,
        false, role === 'donor' ? false : null, role === 'donor' ? 10 : null,
        true, now, 0, now, now
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
 * Record or update user consent (DPDP compliance)
 */
router.post('/consent', authenticate, async (req, res) => {
  try {
    const { consent_given } = req.body;
    if (typeof consent_given !== 'boolean') {
      return res.status(400).json({ success: false, error: 'consent_given boolean is required' });
    }
    const result = await query(
      'UPDATE users SET consent_given = $1, consent_given_at = NOW(), updated_at = NOW() WHERE id = $2 RETURNING id, consent_given, consent_given_at',
      [consent_given, req.user.id]
    );
    await logAudit({ userId: req.user.id, action: consent_given ? 'CONSENT_GIVEN' : 'CONSENT_REVOKED', resourceType: 'user', resourceId: req.user.id, req });
    return res.json({ success: true, data: { consent: result.rows[0] } });
  } catch (err) {
    console.error('Consent error:', err);
    return res.status(500).json({ success: false, error: 'Failed to update consent' });
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
              is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date, consent_given, created_at, updated_at
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
    const anonymizedEmail = `deleted_${userId.slice(0, 8)}@anonymized.local`;
    const anonymizedPhone = `0000000000`;
    const anonymizedName = 'Deleted User';

    // Anonymize user record (soft delete)
    await query(
      `UPDATE users SET
        email = $1, phone = $2, name = $3, password_hash = $4,
        is_on_call = false, is_verified = false, consent_given = false,
        latitude = NULL, longitude = NULL, blood_group = NULL,
        updated_at = NOW(), deleted_at = NOW()
       WHERE id = $5`,
      [anonymizedEmail, anonymizedPhone, anonymizedName, '[DELETED]', userId]
    );

    // Blacklist all tokens for this user
    await query(
      'UPDATE users SET token_version = token_version + 1 WHERE id = $1',
      [userId]
    );

    await logAudit({ userId, action: 'ACCOUNT_DELETED', resourceType: 'user', resourceId: userId, details: { reason: 'Right to Erasure (DPDP)' }, req });

    return res.json({ success: true, data: { message: 'Account deleted successfully. Your personal data has been erased per DPDP Act requirements.' } });
  } catch (err) {
    console.error('Delete account error:', err);
    return res.status(500).json({ success: false, error: 'Failed to delete account' });
  }
});

export default router;

