import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { query } from '../db.js';
import { authenticate } from '../middleware/auth.js';

const router = express.Router();

/**
 * Generate JWT token for a user
 */
function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
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
      hospital_name, address, license_number
    } = req.body;

    if (!email || !phone || !password || !name || !role) {
      return res.status(400).json({ success: false, error: 'Email, phone, password, name, and role are required' });
    }

    if (!['donor', 'hospital'].includes(role)) {
      return res.status(400).json({ success: false, error: 'Role must be donor or hospital' });
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
      `INSERT INTO users (id, email, phone, password_hash, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
       RETURNING id, email, phone, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, created_at`,
      [
        userId, email, phone, password_hash, name, role,
        blood_group || null, latitude || null, longitude || null, city || null, state || null,
        false, role === 'donor' ? false : null, role === 'donor' ? 10 : null, now, now
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

    const token = generateToken(user);

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
      `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, password_hash, created_at FROM users WHERE ${lookupField} = $1`,
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
    const token = generateToken(user);

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
 * GET /api/auth/me
 * Current user profile
 */
router.get('/me', authenticate, async (req, res) => {
  try {
    const result = await query(
      `SELECT id, email, phone, name, role, blood_group, latitude, longitude, city, state,
              is_verified, is_on_call, ping_radius_km, last_donation_date, next_eligible_date, created_at, updated_at
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

export default router;
