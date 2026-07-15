# RaktaSetu Deployment Guide

## Live app (Railway)

Single Railway service serves the SPA and API:

- SPA: `https://<your-app>.up.railway.app/`
- Health: `https://<your-app>.up.railway.app/api/health`

GitHub Pages is **not** used for MVP hosting.

## Backend + Frontend Deployment (Railway)

```bash
npm i -g @railway/cli
railway login
railway init   # from repo root
railway variables set DATABASE_URL="..." JWT_SECRET="..." JWT_EXPIRES_IN=7d NODE_ENV=production FRONTEND_ORIGINS="http://localhost:5173"
railway up
railway domain
```

**Required Environment Variables:**
- `DATABASE_URL` — Neon Postgres connection string (pooled, `sslmode=require`)
- `JWT_SECRET` — Random secret for JWT signing
- `JWT_EXPIRES_IN` — e.g. `7d`
- `NODE_ENV` — `production`
- `FRONTEND_ORIGINS` — comma-separated extra origins (local Vite)
- `PORT` — injected by Railway (do not hardcode)

Nixpacks builds `frontend/dist` and starts Express, which serves the SPA when the dist folder exists.

## Mobile Builds

### iOS
```bash
cd frontend
npm run build
npx cap sync ios
npx cap open ios
```

### Android
```bash
cd frontend
npm run build
npx cap sync android
npx cap open android
```

## API Endpoints (smoke)

- `GET /api/health` — Health check (preferred; legacy `GET /health` still works)
- `POST /api/auth/login` — Login
- `PATCH /api/hospital/requests/:id` — Update request status
- `POST /api/hospital/verify-donation` — Verify donation + award credits
- `GET /api/hospital/donors` — Nearby on-call donors

## Socket.io Events

See README and backend socket handlers in `backend/src/server.js`.
