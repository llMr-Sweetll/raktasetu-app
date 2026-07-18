import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import authRoutes from './routes/auth.js';
import donorRoutes from './routes/donor.js';
import hospitalRoutes from './routes/hospital.js';
import adminRoutes from './routes/admin.js';
import pushRoutes from './routes/push.js';
import { applyPrivacyHeaders, buildHelmetOptions } from './security.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_ORIGINS = ['http://localhost:5173', 'http://localhost:3001'];

export function buildAllowedOrigins(env = process.env) {
  const configured = (env.FRONTEND_ORIGINS || DEFAULT_ORIGINS.join(','))
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
  const railwayOrigins = [
    env.RAILWAY_PUBLIC_DOMAIN,
    env.RAILWAY_STATIC_URL,
    env.RAILWAY_SERVICE_RAKTASETU_URL,
  ]
    .filter(Boolean)
    .map((value) => `https://${String(value).replace(/^https?:\/\//, '').replace(/\/$/, '')}`);
  return [...new Set([...configured, ...railwayOrigins])];
}

export function createApp({ env = process.env } = {}) {
  const app = express();
  const isProduction = env.NODE_ENV === 'production' || Boolean(env.RAILWAY_ENVIRONMENT);
  const allowedOrigins = buildAllowedOrigins(env);

  app.set('trust proxy', 1);
  app.use(helmet(buildHelmetOptions(isProduction)));
  app.use(applyPrivacyHeaders);
  app.use(cors({
    origin: (origin, callback) => callback(null, !origin || allowedOrigins.includes(origin)),
  }));
  app.use(express.json({ limit: '10kb', strict: true }));
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 400,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => !req.path.startsWith('/api'),
  }));
  app.use('/api/auth/', rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
  }));

  app.use('/api/auth', authRoutes);
  app.use('/api/donor', donorRoutes);
  app.use('/api/hospital', hospitalRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/push', pushRoutes);

  app.get('/api/health', (req, res) => {
    res.json({
      success: true,
      data: {
        status: 'healthy',
        version: '2.0.4',
        timestamp: new Date().toISOString(),
      },
    });
  });
  app.get('/health', (req, res) => {
    res.json({ success: true, data: { status: 'ok', timestamp: new Date().toISOString() } });
  });

  const frontendDist = path.resolve(__dirname, '../../frontend/dist');
  if (env.SERVE_FRONTEND !== 'false' && fs.existsSync(frontendDist)) {
    app.use(express.static(frontendDist, { index: false }));
    app.get(/^(?!\/api(?:\/|$)|\/socket\.io(?:\/|$)).*/, (req, res, next) => {
      if (req.method !== 'GET' && req.method !== 'HEAD') return next();
      if (path.extname(req.path)) return next();
      return res.sendFile(path.join(frontendDist, 'index.html'), (error) => {
        if (error) next(error);
      });
    });
  }

  app.use((req, res) => {
    res.status(404).json({ success: false, error: { code: 'NOT_FOUND', message: 'Endpoint not found' } });
  });
  app.use((error, req, res, next) => {
    if (res.headersSent) return next(error);
    const status = error.type === 'entity.too.large' ? 413 : (error.status || 500);
    return res.status(status).json({
      success: false,
      error: {
        code: status === 413 ? 'BODY_TOO_LARGE' : 'INTERNAL_ERROR',
        message: status === 413 ? 'Request body is too large' : 'Internal server error',
      },
    });
  });

  return app;
}

export default createApp;
