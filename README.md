# RaktaSetu — Blood Donation Platform

> **Connect. Donate. Save Lives.**  
> A cross-platform blood donation matching platform for donors, hospitals, and administrators.

## Live MVP

**https://raktasetu-production.up.railway.app/**

One Railway service hosts **both** the Express/Socket.io API and the Vite SPA (`frontend/dist` served by Express). Neon Postgres is the database.

```bash
curl https://raktasetu-production.up.railway.app/api/health
./test_login.sh https://raktasetu-production.up.railway.app
```

Guest landing (mission / vision / Living Bridge) is at `/#/`.  
Donor sign-in: `/#/login` · Hospital sign-in (discreet): `/#/login?role=hospital`.

## Contacts

| Role | Contact |
|------|---------|
| Support | support@raktasetu.org |
| Privacy / DPO | privacy@raktasetu.org |
| Org | RaktaSetu Trust, Bengaluru, Karnataka |

## Features

### Public
- **Landing** — mission, vision, how-it-works + Three.js Living Bridge (mobile-tuned)
- **Donor-first auth** — default login/register for donors; hospital via discreet link (`?role=hospital`)
- **PWA** — installable web app + service worker; local notifications; Web Push when VAPID keys are set
- **Google Sign-In** — donor login only (GIS → JWT when `VITE_GOOGLE_CLIENT_ID` configured)

### Donor App
- On-call toggle, emergency pings, GPS matching, credits, history, profile

### Hospital Console
- Live board, new request broadcast, donor verification, stats

### Admin Dashboard
- Platform analytics, user management, request monitoring

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Three.js, Capacitor, HashRouter, vite-plugin-pwa |
| Backend | Express 4, Socket.io, JWT, google-auth-library, web-push |
| Database | Neon Postgres |
| Hosting | Railway (API + SPA) |

## Deploy on Railway

1. `npm i -g @railway/cli` then `railway login`
2. From repo root:
   ```bash
   railway link   # or railway init
   railway variables set \
     DATABASE_URL="postgresql://...neon.tech/neondb?sslmode=require" \
     JWT_SECRET="$(openssl rand -base64 32)" \
     JWT_EXPIRES_IN=30m \
     NODE_ENV=production \
     FRONTEND_ORIGINS="http://localhost:5173,https://raktasetu-production.up.railway.app"
   railway up
   ```
3. Open the Railway URL — SPA at `/`, API at `/api/*`, health at `/api/health`.

Build uses Nixpacks: installs backend + frontend, builds the SPA, starts `backend` which serves `frontend/dist`.

### Optional: Google Sign-In

1. Create an OAuth 2.0 **Web** client in [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
2. Authorized JavaScript origins: `https://raktasetu-production.up.railway.app`, `http://localhost:5173`.
3. Set on Railway / `.env`:
   - `GOOGLE_CLIENT_ID` (backend)
   - `VITE_GOOGLE_CLIENT_ID` (same value; rebuild frontend so it is baked into the SPA)
4. Without these vars the Google button is hidden and `POST /api/auth/google` returns 503 — password login still works.

### Optional: Web Push (VAPID)

```bash
npx web-push generate-vapid-keys
railway variables set \
  VAPID_PUBLIC_KEY="..." \
  VAPID_PRIVATE_KEY="..." \
  VAPID_SUBJECT="mailto:support@raktasetu.org"
```

Donors can enable push from **Profile**. Local notification testing works without VAPID.

Database migrations are applied explicitly with the migration owner credential. Application startup never mutates schema or creates users.

### Local development

```bash
# Terminal 1 — API
cd backend && cp .env.example .env   # set DATABASE_URL + JWT_SECRET
npm install && npm run dev

# Terminal 2 — Vite (proxies /api to :3001)
cd frontend && cp .env.example .env  # optional Google client ID
npm install && npm run dev
```

Same-origin production builds leave `VITE_API_URL` empty so the browser calls `/api` on the Railway host.

Local and staging fixtures must be created with the test fixture script. It refuses to run when
`NODE_ENV=production`; production identities are provisioned through registration and admin approval only.

## Docs

- Changelog: [`CHANGELOG.md`](./CHANGELOG.md)
- Landing / Google / PWA design: `docs/superpowers/specs/2026-07-15-landing-google-pwa-design.md`
- Implementation plan: `docs/superpowers/plans/2026-07-15-landing-google-pwa.md`
- MVP Railway design: `docs/superpowers/specs/2026-07-15-mvp-release-design.md`
- Schema: `backend/db/schema.sql`

**Note:** Older reports may mention Cloudflare tunnels or GitHub Pages — those are **retired**. Production is Railway only.
