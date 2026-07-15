# RaktaSetu MVP Release — Design Spec

**Date:** 2026-07-15  
**Status:** Updated — full Railway hosting (API + SPA); Neon DB; Cloudflare retired

## Problem

The app code is largely complete for an MVP, but production wiring was broken: the frontend API URL pointed at a dead Cloudflare tunnel, GitHub Pages returned 404, and Railway was configured in-repo but not authenticated/deployed from this environment.

## Recommended architecture (MVP)

```
Browser / Capacitor
        │
        ▼
Railway (single Node 20 service)
  Express + Socket.io  →  /api/*, Socket.io
  Static Vite SPA      →  frontend/dist at /
        │  DATABASE_URL (pooled)
        ▼
Neon Postgres (project: raktasetu / cool-firefly-17917748)
```

**Why this shape:** One deployable unit, same-origin REST + sockets (no CORS drama, no separate Pages URL), long-lived Node for Socket.io, Neon already holds schema + seed data. Cloudflare tunnels are ephemeral and were dead — do not use.

## Alternatives considered

1. **GitHub Pages + Railway API** — previous plan; Pages was 404 and split hosting adds CORS/`VITE_API_URL` churn. Retired for MVP.
2. **Render instead of Railway** — still available via `backend/render.yaml`; fallback only.
3. **Cloudflare tunnel for API** — previously used; do not use for MVP.

## Non-goals for MVP

- Native App Store release
- Full HIPAA/DPDP certification
- Horizontal scaling / multi-region
- Replacing JWT with OAuth providers

## Success criteria

1. `GET https://<railway-host>/api/health` returns `{ success: true, data.status: "healthy" }`
2. `GET https://<railway-host>/` serves the SPA (HTTP 200)
3. Demo donor login works against Railway + Neon
4. Hospital can create a request; on-call donor sees it (REST; Socket.io bonus)
5. Schema reproducible via `backend/db/schema.sql`
6. No runtime dependency on `trycloudflare.com` or GitHub Pages

## Risks

- Railway account / `RAILWAY_TOKEN` not available until interactive `railway login`
- `gh` CLI auth token may be invalid — not required if deploying via Railway CLI
- Demo passwords in README are weak — acceptable only for private MVP demo
