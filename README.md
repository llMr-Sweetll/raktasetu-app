# RaktaSetu — Blood Donation Platform

> **Connect. Donate. Save Lives.**
> A cross-platform blood donation matching platform for donors, hospitals, and administrators.

## Live MVP (Railway)

One Railway service hosts **both** the Express/Socket.io API and the Vite SPA (`frontend/dist` served by Express). Neon Postgres is the database.

```bash
# After deploy, smoke-test:
curl https://<your-app>.up.railway.app/api/health
./test_login.sh https://<your-app>.up.railway.app
```

## Deploy on Railway (recommended)

1. Install CLI: `npm i -g @railway/cli` then `railway login`
2. From repo root:
   ```bash
   railway init   # or link existing project
   railway variables set \
     DATABASE_URL="postgresql://...neon.tech/neondb?sslmode=require" \
     JWT_SECRET="$(openssl rand -base64 32)" \
     JWT_EXPIRES_IN=7d \
     NODE_ENV=production \
     FRONTEND_ORIGINS="http://localhost:5173"
   railway up
   railway domain   # attach a public *.up.railway.app URL
   ```
3. Open the Railway URL — SPA at `/`, API at `/api/*`, health at `/api/health`.

Build uses Nixpacks: installs backend + frontend, builds the SPA, starts `backend` which serves `frontend/dist`.

### Local development

```bash
# Terminal 1 — API
cd backend && cp .env.example .env   # set DATABASE_URL + JWT_SECRET
npm install && npm run dev

# Terminal 2 — Vite (proxies /api to :3001)
cd frontend && npm install && npm run dev
```

Same-origin production builds leave `VITE_API_URL` empty so the browser calls `/api` on the Railway host. For a split frontend host, set `VITE_API_URL` to the API origin and `FRONTEND_ORIGINS` accordingly.

### Optional: Render / Fly / Docker (API-only)

See `backend/render.yaml`, `backend/fly.toml`, and `backend/Dockerfile` if you need an API-only fallback. Prefer Railway for the unified MVP.

## Demo Credentials

| Role | Phone / Email | Password |
|------|--------------|----------|
| Donor | `+919876543210` | `password123` |
| Donor | `+919876543211` | `password123` |
| Hospital | `+918312456789` | `password123` |
| Admin | `admin@raktasetu.in` | `password123` |

## Features

### Donor App
- **On-call toggle** — donors signal availability with a single tap
- **Emergency pings** — real-time blood requests from nearby hospitals
- **GPS matching** — haversine distance + blood compatibility matrix
- **Credits system** — earn 100 credits per verified donation, redeem for family
- **Donation history** — complete ledger with hospital, date, credits
- **Profile** — Aadhaar verification status, ping radius, eligibility tracker

### Hospital Console
- **Live board** — real-time request tracking with donor response counts
- **New request** — broadcast to compatible on-call donors within radius
- **Verify donor** — QR scan or manual ref code entry, instant credit issuance
- **Stats** — pinged / accepted / arrived / collected progress bars

### Admin Dashboard
- **Platform analytics** — total donors, hospitals, active requests, credits
- **User management** — view all donors and hospitals with verification status
- **Request monitoring** — track all blood requests across the platform

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Capacitor, HashRouter |
| Backend | Express 4, Socket.io, JWT |
| Database | Neon Postgres |
| Hosting | Railway (API + SPA) |

## Railway MCP (Cursor)

Official Railway MCP: remote `https://mcp.railway.com` or local via CLI (`railway mcp`).

Add to `~/.cursor/mcp.json` (or project `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "railway": {
      "url": "https://mcp.railway.com"
    }
  }
}
```

Or after `railway login`:

```bash
railway mcp install --agent cursor
# remote alternative:
railway mcp install --agent cursor --remote
```

Docs: https://docs.railway.com/ai/mcp-server

## More docs

- MVP plan: `docs/superpowers/plans/2026-07-15-mvp-release.md`
- Design: `docs/superpowers/specs/2026-07-15-mvp-release-design.md`
- Schema: `backend/db/schema.sql`
