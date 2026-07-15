# MVP Release (Neon + Railway) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a working MVP on a single Railway service: Express/Socket.io API + Vite SPA (`frontend/dist`), backed by Neon Postgres. No Cloudflare tunnels. No GitHub Pages dependency for MVP.

**Architecture:** Browser → Railway Node service (Nixpacks builds frontend + backend; Express serves SPA + `/api` + Socket.io) → Neon project `raktasetu` (`cool-firefly-17917748`, DB `neondb`). Same-origin: leave `VITE_API_URL` empty so the SPA calls `/api` on the Railway host. CORS via `FRONTEND_ORIGINS` mainly for local Vite (`http://localhost:5173`).

**Tech Stack:** React 18 + Vite + Capacitor (frontend), Express 4 + Socket.io + `pg` (backend), Neon Postgres 17, Railway (Nixpacks).

## Global Constraints

- Database host: Neon only (no local Postgres required for deploy verification).
- App host: **Railway only** for MVP (API + frontend on one service).
- Do **not** rely on Cloudflare tunnels or dead `trycloudflare.com` URLs.
- GitHub Pages workflow is build-check only (hosting retired for MVP).
- Node engine: `>=20.0.0`.
- Do not commit secrets (`.env`, connection passwords, JWT secrets).
- Do not bake `.env` into Docker images.
- `VITE_API_URL` empty/unset = same-origin `/api` (Railway). If set, must be origin only (no trailing slash, no `/api`).
- Health check path for Railway: `/api/health` (already in `railway.toml` / `railway.json`).
- Prefer smallest change that unblocks ship; no unrelated refactors.

---

## File map

| Path | Responsibility |
|------|----------------|
| `backend/db/schema.sql` | Reproducible DDL for Neon |
| `backend/.env.example` | Backend env checklist |
| `backend/src/server.js` | CORS / Socket origins; serves `frontend/dist` |
| `backend/Dockerfile` | API-only image (optional fallback) |
| `frontend/.env.example` | Frontend env checklist |
| `frontend/src/config.js` | Same-origin `/api` or `VITE_API_URL` |
| `frontend/src/hooks/useSocket.js` | Socket client uses `SOCKET_URL` |
| `frontend/vite.config.js` | `base: '/'` for Railway root |
| `nixpacks.toml` / `railway.toml` / `package.json` | Build SPA + start backend |
| `.github/workflows/railway-deploy.yml` | Push-deploy when `RAILWAY_TOKEN` set |
| `.github/workflows/frontend-deploy.yml` | Frontend build check only |
| `docs/superpowers/specs/2026-07-15-mvp-release-design.md` | Design context |

---

### Task 1: Confirm Neon readiness (read-only)

**Files:**
- Verify: `backend/db/schema.sql`
- Verify via Neon MCP / `psql`: project `cool-firefly-17917748`

**Interfaces:**
- Consumes: Neon project id `cool-firefly-17917748`, database `neondb`
- Produces: Confirmed table list + row counts for smoke baseline

- [x] **Step 1: List tables via Neon MCP** — confirmed in assessment
- [x] **Step 2: Confirm seed volume** — users/hospitals/requests present
- [x] **Step 3: Schema snapshot** — `backend/db/schema.sql`
- [x] **Step 4: Acceptance** — Neon ready

---

### Task 2: Deploy unified app to Railway

**Files:**
- Use: `railway.toml`, `railway.json`, `nixpacks.toml`, root `package.json`, `start.sh`, `backend/src/server.js`, `frontend/`
- Modify (Railway dashboard / CLI only): service env vars — not committed

**Interfaces:**
- Consumes: Neon `DATABASE_URL` (pooled, `sslmode=require`)
- Produces: Public HTTPS origin serving SPA + API, e.g. `https://<service>.up.railway.app`

- [ ] **Step 1: Authenticate Railway CLI**

```bash
npm i -g @railway/cli
railway login
# OR: railway login --browserless  → open https://railway.com/activate
# OR for CI: export RAILWAY_TOKEN=...
railway whoami
```

- [ ] **Step 2: Link / create project from repo root**

```bash
cd /Users/cgh/Code/kimi/Doner/raktasetu-app
railway init   # or railway link
railway status
```

- [ ] **Step 3: Set required secrets**

```bash
openssl rand -base64 32

railway variables set \
  DATABASE_URL="<neon-pooled-connection-string>" \
  JWT_SECRET="<output-of-openssl>" \
  JWT_EXPIRES_IN="7d" \
  FRONTEND_ORIGINS="http://localhost:5173" \
  NODE_ENV="production"
```

Do **not** set a fixed `PORT` — Railway injects `PORT`.

- [ ] **Step 4: Deploy**

```bash
railway up
railway domain
```

Expected: deploy succeeds; healthcheck `/api/health` passes; SPA loads at `/`.

- [ ] **Step 5: Smoke health + login + SPA**

```bash
curl -sf "https://<railway-host>/api/health"
./test_login.sh "https://<railway-host>"
curl -sfI "https://<railway-host>/"
```

- [ ] **Step 6: Acceptance**

Railway URL is stable; SPA + `/api/health` + `/api/auth/login` work against Neon. No Cloudflare hosts anywhere in runtime config.

---

### Task 3: Frontend same-origin wiring

**Files:** `frontend/src/config.js`, `frontend/vite.config.js`, `frontend/src/hooks/useSocket.js`

- [x] Empty `VITE_API_URL` → `API_URL='/api'`, `SOCKET_URL` same-origin
- [x] Vite `base: '/'`
- [x] Express serves `frontend/dist` when present
- [x] GH Pages workflow demoted to build-check only

---

### Task 4: Railway MCP

- No Railway MCP was enabled in this Cursor project initially.
- Official options:
  - Remote: `{ "mcpServers": { "railway": { "url": "https://mcp.railway.com" } } }` in `~/.cursor/mcp.json`
  - Local: `railway mcp install --agent cursor` after CLI login
- Docs: https://docs.railway.com/ai/mcp-server

---

## Env checklist (Railway)

| Variable | Required | Notes |
|----------|----------|-------|
| `DATABASE_URL` | yes | Neon pooled + `sslmode=require` |
| `JWT_SECRET` | yes | random |
| `JWT_EXPIRES_IN` | yes | `7d` |
| `NODE_ENV` | yes | `production` |
| `FRONTEND_ORIGINS` | recommended | at least `http://localhost:5173` |
| `PORT` | no | Railway-injected |
| `SERVE_FRONTEND` | no | default on when `frontend/dist` exists |

## Changelog (this pass)

1. `frontend/src/config.js` — same-origin `/api` when `VITE_API_URL` unset
2. `frontend/vite.config.js` — `base: '/'`
3. `backend/src/server.js` — serve SPA; CORS defaults without GH Pages / Cloudflare
4. `nixpacks.toml` / root `package.json` — build frontend + start backend
5. Docs/workflows — Railway-only hosting; retire GH Pages deploy
6. Removed dead Cloudflare URLs from test scripts
