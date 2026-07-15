import express from 'express';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

import { query, pool } from './db.js';
import authRoutes from './routes/auth.js';
import donorRoutes from './routes/donor.js';
import hospitalRoutes from './routes/hospital.js';
import adminRoutes from './routes/admin.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Trust proxy (Railway / reverse proxies send X-Forwarded-For)
app.set('trust proxy', 1);

const server = http.createServer(app);
const DEFAULT_ORIGINS = ['http://localhost:5173', 'http://localhost:3001'];
function buildAllowedOrigins() {
  const fromEnv = (process.env.FRONTEND_ORIGINS || DEFAULT_ORIGINS.join(','))
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);
  // Unified Railway deploy: Vite emits crossorigin assets that send Origin even same-origin.
  // Missing production origin → CORS error → HTTP 500 JSON → SPA stuck on loading screen.
  const extras = [];
  for (const raw of [
    process.env.RAILWAY_PUBLIC_DOMAIN,
    process.env.RAILWAY_STATIC_URL,
    process.env.RAILWAY_SERVICE_RAKTASETU_URL,
  ]) {
    if (!raw) continue;
    const host = String(raw).replace(/^https?:\/\//, '').replace(/\/$/, '');
    if (host) extras.push(`https://${host}`);
  }
  return [...new Set([...fromEnv, ...extras])];
}
const ALLOWED_ORIGINS = buildAllowedOrigins();

const io = new Server(server, {
  cors: {
    origin: ALLOWED_ORIGINS,
    methods: ['GET', 'POST']
  }
});

/**
 * =======================
 *  Middleware
 * =======================
 */
app.use(helmet({
  contentSecurityPolicy: false, // SPA assets + Socket.io on same origin
}));

// CORS — never throw: cors(Error) becomes HTTP 500 and breaks module/CSS loads.
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(null, false);
  }
}));
app.use(express.json({ limit: '10kb' }));

// Rate limiting — API only (SPA assets must not share the budget)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 400,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => req.ip || req.connection.remoteAddress || 'unknown',
  skip: (req) => !req.path.startsWith('/api'),
});
app.use(limiter);

// Stricter limit for auth endpoints (still high enough for MVP demo role-switching)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  keyGenerator: (req) => req.ip || req.connection.remoteAddress || 'unknown'
});
app.use('/api/auth/', authLimiter);

/**
 * =======================
 *  Blood Compatibility Helpers
 * =======================
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

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function generateRefCode() {
  return `RS-${Date.now().toString(36).toUpperCase().slice(-4)}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
}

/**
 * =======================
 *  Routes
 * =======================
 */
app.use('/api/auth', authRoutes);
app.use('/api/donor', donorRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/admin', adminRoutes);

/**
 * Health check — CI/CD endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    data: {
      status: 'healthy',
      version: '1.0.3',
      timestamp: new Date().toISOString()
    }
  });
});

/**
 * Legacy /health redirect (kept for backward compatibility)
 */
app.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'ok', timestamp: new Date().toISOString() } });
});

/**
 * Serve Vite SPA from frontend/dist (unified Railway hosting).
 * Same-origin: browser hits /api + Socket.io on this service.
 */
const frontendDist = path.resolve(__dirname, '../../frontend/dist');
const serveFrontend = process.env.SERVE_FRONTEND !== 'false' && fs.existsSync(frontendDist);

if (serveFrontend) {
  app.use(express.static(frontendDist, { index: false }));
  app.get(/^(?!\/api(?:\/|$)|\/socket\.io(?:\/|$)).*/, (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') return next();
    // Missing hashed assets must 404 as JSON/empty — never return index.html (breaks MIME checks)
    if (path.extname(req.path)) return next();
    res.sendFile(path.join(frontendDist, 'index.html'), (err) => {
      if (err) next();
    });
  });
  console.log(`Serving frontend from ${frontendDist}`);
  console.log(`CORS allowed origins: ${ALLOWED_ORIGINS.join(', ')}`);
}

/**
 * 404 handler (API + missing routes)
 */
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  // Never leak stack traces in API responses
  res.status(err.status || 500).json({
    success: false,
    error: 'Internal server error'
  });
});

/**
 * =======================
 *  Socket.io
 * =======================
 */
const connectedUsers = new Map(); // userId -> socket
const hospitalSockets = new Map(); // hospitalId -> socket
const donorSockets = new Map(); // donorId -> socket

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth?.token || socket.handshake.query?.token;
    if (!token) {
      return next(new Error('Authentication token required'));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.userId = decoded.id;
    socket.userRole = decoded.role;
    socket.userName = decoded.name;
    next();
  } catch (err) {
    next(new Error('Invalid token'));
  }
});

io.on('connection', (socket) => {
  console.log(`Socket connected: ${socket.id} (user: ${socket.userId}, role: ${socket.userRole})`);

  connectedUsers.set(socket.userId, socket);

  if (socket.userRole === 'hospital') {
    donorSockets.delete(socket.userId);
    hospitalSockets.set(socket.userId, socket);
  } else if (socket.userRole === 'donor') {
    hospitalSockets.delete(socket.userId);
    donorSockets.set(socket.userId, socket);
  }

  /**
   * donor:go-on-call
   * Donor toggles on-call status — notify nearby hospitals
   */
  socket.on('donor:go-on-call', async (data) => {
    try {
      const { is_on_call } = data;
      const donorId = socket.userId;

      await query(
        'UPDATE users SET is_on_call = $1, updated_at = NOW() WHERE id = $2',
        [is_on_call, donorId]
      );

      const donorResult = await query(
        'SELECT blood_group, latitude, longitude, ping_radius_km FROM users WHERE id = $1',
        [donorId]
      );
      if (donorResult.rows.length === 0) return;
      const donor = donorResult.rows[0];

      if (!is_on_call || !donor.latitude || !donor.longitude) return;

      // Find hospitals within radius
      const hospitalsResult = await query(
        'SELECT id, user_id, name, latitude, longitude FROM hospitals WHERE latitude IS NOT NULL AND longitude IS NOT NULL'
      );

      for (const h of hospitalsResult.rows) {
        const dist = haversine(
          parseFloat(donor.latitude), parseFloat(donor.longitude),
          parseFloat(h.latitude), parseFloat(h.longitude)
        );
        if (dist <= (donor.ping_radius_km || 10)) {
          const hs = hospitalSockets.get(h.user_id);
          if (hs) {
            hs.emit('donor:available', {
              donor_id: donorId,
              donor_name: socket.userName,
              blood_group: donor.blood_group,
              distance_km: Math.round(dist * 10) / 10
            });
          }
        }
      }
    } catch (err) {
      console.error('Socket donor:go-on-call error:', err);
    }
  });

  /**
   * donor:go-off-call
   * Donor goes off-call — update DB and optionally notify hospitals
   */
  socket.on('donor:go-off-call', async (data) => {
    try {
      const donorId = socket.userId;
      await query(
        'UPDATE users SET is_on_call = false, updated_at = NOW() WHERE id = $1',
        [donorId]
      );
      // Optionally notify hospitals that this donor went off-call
      const donorResult = await query(
        'SELECT blood_group, latitude, longitude FROM users WHERE id = $1',
        [donorId]
      );
      if (donorResult.rows.length > 0) {
        const donor = donorResult.rows[0];
        const hospitalsResult = await query(
          'SELECT id, user_id, name, latitude, longitude FROM hospitals WHERE latitude IS NOT NULL AND longitude IS NOT NULL'
        );
        for (const h of hospitalsResult.rows) {
          const dist = haversine(
            parseFloat(donor.latitude), parseFloat(donor.longitude),
            parseFloat(h.latitude), parseFloat(h.longitude)
          );
          if (dist <= 10) {
            const hs = hospitalSockets.get(h.user_id);
            if (hs) {
              hs.emit('donor:unavailable', {
                donor_id: donorId,
                donor_name: socket.userName,
                blood_group: donor.blood_group
              });
            }
          }
        }
      }
    } catch (err) {
      console.error('Socket donor:go-off-call error:', err);
    }
  });
  /**
   * hospital:new-request
   * Hospital creates a new request — ping compatible donors
   */
  socket.on('hospital:new-request', async (data) => {
    try {
      const { request_id } = data;
      const hospitalUserId = socket.userId;

      const hospitalResult = await query(
        'SELECT id, latitude, longitude FROM hospitals WHERE user_id = $1',
        [hospitalUserId]
      );
      if (hospitalResult.rows.length === 0) return;
      const hospital = hospitalResult.rows[0];

      const requestResult = await query(
        'SELECT blood_group, radius_km FROM blood_requests WHERE id = $1 AND hospital_id = $2',
        [request_id, hospital.id]
      );
      if (requestResult.rows.length === 0) return;
      const request = requestResult.rows[0];

      const compatibleDonors = GIVERS[request.blood_group] || [];
      const donorsResult = await query(
        `SELECT id, name, blood_group, latitude, longitude
         FROM users WHERE role = 'donor' AND is_on_call = true AND blood_group = ANY($1)`,
        [compatibleDonors]
      );

      for (const d of donorsResult.rows) {
        const dist = haversine(
          parseFloat(hospital.latitude), parseFloat(hospital.longitude),
          parseFloat(d.latitude), parseFloat(d.longitude)
        );
        if (dist <= request.radius_km) {
          const ds = donorSockets.get(d.id);
          if (ds) {
            ds.emit('blood-request', {
              request_id,
              hospital_id: hospital.id,
              hospital_name: socket.userName,
              blood_group: request.blood_group,
              distance_km: Math.round(dist * 10) / 10
            });
          }
        }
      }
    } catch (err) {
      console.error('Socket hospital:new-request error:', err);
    }
  });

  /**
   * donor:respond
   * Donor accepts/declines a request — notify hospital
   */
  socket.on('donor:respond', async (data) => {
    try {
      const { request_id, status } = data;
      const donorId = socket.userId;

      const requestInfo = await query(
        `SELECT br.*, h.user_id AS hospital_user_id, u.name AS donor_name
         FROM blood_requests br
         JOIN hospitals h ON h.id = br.hospital_id
         JOIN users u ON u.id = $1
         WHERE br.id = $2`,
        [donorId, request_id]
      );

      if (requestInfo.rows.length === 0) return;
      const info = requestInfo.rows[0];

      const hs = hospitalSockets.get(info.hospital_user_id);
      if (hs) {
        hs.emit('donor:response', {
          request_id,
          donor_id: donorId,
          donor_name: info.donor_name,
          blood_group: info.blood_group,
          status,
          timestamp: new Date().toISOString()
        });
      }
    } catch (err) {
      console.error('Socket donor:respond error:', err);
    }
  });

  /**
   * donor:arrived
   * Donor marks arrival — update hospital board
   */
  socket.on('donor:arrived', async (data) => {
    try {
      const { request_id } = data;
      const donorId = socket.userId;

      const requestInfo = await query(
        `SELECT br.*, h.user_id AS hospital_user_id, u.name AS donor_name
         FROM blood_requests br
         JOIN hospitals h ON h.id = br.hospital_id
         JOIN users u ON u.id = $1
         WHERE br.id = $2`,
        [donorId, request_id]
      );

      if (requestInfo.rows.length === 0) return;
      const info = requestInfo.rows[0];

      const hs = hospitalSockets.get(info.hospital_user_id);
      if (hs) {
        hs.emit('donor:arrived', {
          request_id,
          donor_id: donorId,
          donor_name: info.donor_name,
          timestamp: new Date().toISOString()
        });
      }
    } catch (err) {
      console.error('Socket donor:arrived error:', err);
    }
  });

  /**
   * hospital:verify
   * Hospital verifies donation — confirm and issue credits
   */
  socket.on('hospital:verify', async (data) => {
    try {
      const { donation_id, donor_id, credits_earned } = data;
      const hospitalUserId = socket.userId;

      const ds = donorSockets.get(donor_id);
      if (ds) {
        ds.emit('donation:verified', {
          donation_id,
          credits_earned: credits_earned || 100,
          verified_at: new Date().toISOString(),
          hospital_name: socket.userName
        });
      }
    } catch (err) {
      console.error('Socket hospital:verify error:', err);
    }
  });

  /**
   * disconnect
   */
  socket.on('disconnect', () => {
    console.log(`Socket disconnected: ${socket.id}`);
    connectedUsers.delete(socket.userId);
    hospitalSockets.delete(socket.userId);
    donorSockets.delete(socket.userId);
  });
});

/**
 * =======================
 *  Seed Data
 * =======================
 */
async function seedData() {
  try {
    console.log('Checking seed data...');

    // NOTE: Removed password reset on startup — was resetting all passwords every restart
    // const password_hash = await bcrypt.hash('password123', 12);
    // await query('UPDATE users SET password_hash = $1 WHERE password_hash = $2 OR password_hash NOT LIKE $3', [
    //   password_hash, '$2a$10$YourHashedPasswordHere', '$2a$%'
    // ]);
    // console.log('  Reset all user passwords to: password123');

    const password_hash = await bcrypt.hash('password123', 12);

    // Admin user
    const adminEmail = 'admin@raktasetu.in';
    const adminExisting = await query('SELECT id FROM users WHERE email = $1', [adminEmail]);
    if (adminExisting.rows.length === 0) {
      const adminId = uuidv4();
      await query(
        `INSERT INTO users (id, email, phone, password_hash, name, role, city, state, is_verified, is_on_call, ping_radius_km, created_at, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW())`,
        [adminId, adminEmail, '+91-00000-00000', password_hash, 'RaktaSetu Admin', 'admin', 'Hubballi', 'Karnataka', true, false, null]
      );
      console.log('  Seeded admin: admin@raktasetu.in / password123');
    }

    // 5 more donors around Hubballi (lat ~15.36, lng ~75.12)
    const newDonors = [
      { id: uuidv4(), email: 'anita.k@gmail.com', name: 'Anita Kulkarni', blood_group: 'A+', lat: 15.355, lng: 75.115, is_on_call: true },
      { id: uuidv4(), email: 'vikram.d@gmail.com', name: 'Vikram Desai', blood_group: 'B-', lat: 15.368, lng: 75.135, is_on_call: true },
      { id: uuidv4(), email: 'sunita.r@gmail.com', name: 'Sunita Rao', blood_group: 'AB-', lat: 15.348, lng: 75.105, is_on_call: false },
      { id: uuidv4(), email: 'kiran.m@gmail.com', name: 'Kiran M', blood_group: 'O-', lat: 15.375, lng: 75.145, is_on_call: true },
      { id: uuidv4(), email: 'neha.p@gmail.com', name: 'Neha Patil', blood_group: 'A+', lat: 15.358, lng: 75.118, is_on_call: true }
    ];

    for (const d of newDonors) {
      const existing = await query('SELECT id FROM users WHERE email = $1', [d.email]);
      if (existing.rows.length === 0) {
        await query(
          `INSERT INTO users (id, email, phone, password_hash, name, role, blood_group, latitude, longitude, city, state, is_verified, is_on_call, ping_radius_km, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, NOW(), NOW())`,
          [
            d.id, d.email, '+91-98765-' + Math.floor(10000 + Math.random() * 90000), password_hash, d.name, 'donor',
            d.blood_group, d.lat, d.lng, 'Hubballi', 'Karnataka', true, d.is_on_call, 10
          ]
        );
        console.log(`  Seeded donor: ${d.name} (${d.blood_group})`);
      }
    }

    // 2 more hospitals
    const newHospitals = [
      { id: uuidv4(), user_id: null, email: 'hospital.admin@sdm.com', name: 'SDM Medical College Hospital', lat: 15.370, lng: 75.130 },
      { id: uuidv4(), user_id: null, email: 'admin@vinayak.com', name: 'Vinayak Hospital', lat: 15.352, lng: 75.108 }
    ];

    for (const h of newHospitals) {
      const existing = await query('SELECT id FROM users WHERE email = $1', [h.email]);
      if (existing.rows.length === 0) {
        const hospUserId = uuidv4();
        await query(
          `INSERT INTO users (id, email, phone, password_hash, name, role, city, state, is_verified, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())`,
          [
            hospUserId, h.email, '+91-80-' + Math.floor(10000000 + Math.random() * 90000000), password_hash, h.name, 'hospital',
            'Hubballi', 'Karnataka', true
          ]
        );
        await query(
          `INSERT INTO hospitals (id, user_id, name, address, latitude, longitude, city, state, phone, is_verified, created_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())`,
          [
            h.id, hospUserId, h.name, h.name + ', Hubballi, Karnataka', h.lat, h.lng, 'Hubballi', 'Karnataka',
            '+91-80-' + Math.floor(10000000 + Math.random() * 90000000), true
          ]
        );
        console.log(`  Seeded hospital: ${h.name}`);
      }
    }

    // 3 more active blood requests (idempotent: check by hospital + blood_group + status)
    const kleHosp = await query("SELECT id FROM hospitals WHERE name = 'KLE Hospital'");
    const sdmHosp = await query("SELECT id FROM hospitals WHERE name = 'SDM Medical College Hospital'");
    const vinHosp = await query("SELECT id FROM hospitals WHERE name = 'Vinayak Hospital'");

    const kleId = kleHosp.rows[0]?.id;
    const sdmId = sdmHosp.rows[0]?.id;
    const vinId = vinHosp.rows[0]?.id;

    const newRequests = [
      { hospital_id: kleId, blood_group: 'A+', units: 3, urgency: 'urgent', status: 'open', radius: 10, lat: 15.3647, lng: 75.124 },
      { hospital_id: sdmId, blood_group: 'O-', units: 1, urgency: 'critical', status: 'open', radius: 25, lat: 15.370, lng: 75.130 },
      { hospital_id: vinId, blood_group: 'B+', units: 2, urgency: 'urgent', status: 'open', radius: 12, lat: 15.352, lng: 75.108 }
    ];

    for (const r of newRequests) {
      if (!r.hospital_id) continue;
      const existing = await query(
        'SELECT id FROM blood_requests WHERE hospital_id = $1 AND blood_group = $2 AND status = $3',
        [r.hospital_id, r.blood_group, r.status]
      );
      if (existing.rows.length === 0) {
        const reqId = uuidv4();
        await query(
          `INSERT INTO blood_requests (id, hospital_id, blood_group, units_needed, urgency, status, radius_km, latitude, longitude, ref_code, created_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())`,
          [
            reqId, r.hospital_id, r.blood_group, r.units, r.urgency, r.status,
            r.radius, r.lat, r.lng, generateRefCode()
          ]
        );
        console.log(`  Seeded request: ${r.blood_group} (${r.urgency}) at ${r.hospital_id}`);
      }
    }

    console.log('Seed data complete.');
  } catch (err) {
    console.error('Seed error:', err);
  }
}

/**
 * =======================
 *  Start Server
 * =======================
 */
const PORT = process.env.PORT || 3001;

server.listen(PORT, async () => {
  console.log(`RaktaSetu API running on port ${PORT}`);
  await seedData();
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  server.close(() => {
    console.log('HTTP server closed');
  });
  await pool.end();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully');
  server.close(() => {
    console.log('HTTP server closed');
  });
  await pool.end();
  process.exit(0);
});

// Export app for testing
export { app };
