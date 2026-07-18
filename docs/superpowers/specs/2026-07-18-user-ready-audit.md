# RaktaSetu User-Ready Audit

**Date:** 2026-07-18  
**Status:** Plan only. Do not implement until explicitly approved.  
**Live:** https://raktasetu-production.up.railway.app/  
**Neon:** project `raktasetu` / `cool-firefly-17917748` (Postgres 17, `main` only)  
**Railway:** project `raktasetu`, service Online, region Southeast Asia

This note records verified evidence for invite-only readiness. It is not a certification of DPDP, HIPAA, GDPR, or any other regime.

---

## Verdict

**Not user-ready today for untrusted or open invites.**

The product has a credible public presence, strong auth scaffolding, FORCE RLS on sensitive tables, and a live Railway + Neon stack. Core coordination still fails under the intended security model: hospital donor matching and donation completion cannot read donor rows under `users_isolation`, Web Push does not fire on new requests, and the donor QR payload does not match hospital verify lookup.

**Invite-only MVP can become safe enough after P0 fixes** if operators manually approve hospitals, set clear expectations (no SMS, no emergency dispatch, poll or push after wiring), and keep the cohort small.

Overall readiness score (practical invite MVP, not enterprise): **42 / 100**.

| Area | Score | Notes |
|------|------:|-------|
| Production / hosting | 62 | Healthy deploy, good headers; CI deploy secrets missing; owner migration URL on app service; no retention cron |
| Application journeys | 38 | Public/auth good; matching/ping/QR broken or incomplete |
| Routing / PWA | 55 | HashRouter works; Capacitor deep links unfinished |
| UI / UX | 68 | Brand coherent; contrast work landed; some misleading copy |
| Backend | 48 | Auth/Zod solid; realtime unused; push test-only |
| Database / RLS | 35 | FORCE RLS present; hospital cannot read donors; `schema.sql` stale |
| Security ops | 55 | Role switch intentional; migration owner URL on runtime; GH Actions deploy broken |
| Compliance readiness | 30 | Notices and export/delete exist; legal/org work unfinished |

---

## Method and evidence sources

- Code review of frontend screens/routes, backend routes/services/RLS migrations, workflows, ops docs
- Live smoke (non-destructive): health, SPA, headers, CSP/HSTS, manifest, SW, push status, login, security-readiness
- Railway CLI: service Online; variable **names** and DB role usernames only (no secret values)
- Neon MCP: roles, FORCE RLS flags, `users_isolation` expression, migration names, aggregate counts
- Prior docs under `docs/superpowers/` and `docs/security/` treated as hypotheses and re-checked

Prior remediation plan (`docs/superpowers/plans/2026-07-15-raktasetu-remediation.md`) correctly required RLS and hospital approval. Several Phase 2/3 items (push delivery, donation path under RLS) remain open despite MVP cutover notes.

---

## 1. Production / hosting

### Confirmed working

- `GET /api/health` → healthy, version `2.0.0`, live timestamp
- SPA at `/` HTTP 200; title and landing content load
- Helmet-class headers present: HSTS, CSP, `X-Frame-Options`, `X-Content-Type-Options`, Referrer-Policy, Permissions-Policy (geolocation self)
- Rate limit headers on API (`400;w=900`)
- PWA: `manifest.json` and Workbox `sw.js` serve; push handler precached
- `GET /api/push/status` → `{ configured: true }`
- Single Railway service serves API + `frontend/dist`
- Neon `main` only (safety branch removed per changelog)

### Railway env (names only)

**Set:** `DATABASE_URL`, `DB_RUNTIME_ROLE`, `MIGRATION_DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `FRONTEND_ORIGINS`, `GOOGLE_CLIENT_ID`, `VITE_GOOGLE_CLIENT_ID`, `VAPID_*`, `INITIAL_ADMIN_EMAIL`, `NODE_ENV`, plus Railway-injected vars.

**Missing:** `RETENTION_DATABASE_URL`, `INITIAL_ADMIN_PASSWORD`, `ALLOW_ADMIN_BOOTSTRAP`

**Role usernames (not secrets):**

- App `DATABASE_URL` user: `raktasetu_app`
- `MIGRATION_DATABASE_URL` user: `neondb_owner`

### Hosting risks

| Finding | Severity | Evidence |
|---------|----------|----------|
| GitHub Actions deploy fails: empty `MIGRATION_DATABASE_URL` secret | P0 ops | Workflow log: `MIGRATION_DATABASE_URL is required`; `gh secret list` empty for deploy secrets |
| Owner migration URL present on the **app** Railway service | P1 | Variable name present; username `neondb_owner`. Ops doc says never expose to app process |
| No retention cron / no `RETENTION_DATABASE_URL` | P1 | Job exists in code; not scheduled in infra |
| Neon PITR / history retention ~6 hours (`history_retention_seconds: 21600`) | P1 | Neon project settings; weak restore window |
| Neon `hipaa: false`, region `aws-us-east-1` while app is SEA | P1 compliance | Cross-border data path for Indian principals |
| Frontend CI mobile Playwright fails (webkit not installed) | P1 | Workflow: `npx playwright install` missing |
| Deploys appear CLI-driven, not reliable CI | P1 | Recent successful deploy via Railway; GH deploy failing |
| CSP allows `'unsafe-inline'` scripts | P2 | Live CSP header |
| DB TLS `rejectUnauthorized: false` | P1 | `backend/src/db.js` |
| No custom domain | P2 | Only `*.up.railway.app` |

### Uptime

- Single Node service, single Neon compute (0.25 CU). Cold starts and single-region outage are accepted MVP risks.
- No separate worker for retention or push retries.

---

## 2. Application review

### Public and auth (live smoke)

- Landing: brand-forward, honest emergency disclaimer, policy footer links
- Donor login at `/#/login` with Google button when client ID baked in
- Security readiness page correctly disclaims certification and lists limitations
- Hospital access is discreet (`Hospital login` / footer)

### Donor journey

| Step | Status |
|------|--------|
| Register / password login | Works in product design |
| Google onboarding / link | Implemented; account-link race with authed redirect (P1) |
| Home, on-call, profile, credits, history | Present; profile gates on-call completeness |
| Requests list + map | Present in code |
| Alert accept/decline | Present |
| On-the-way QR | **Broken contract** (P0): encodes `RS-DONOR-${request.id}`; hospital looks up `blood_requests.ref_code` |
| Push enable/test | Profile only; not journey-integrated |
| Data rights export/delete | Authenticated tools present |

### Hospital journey

| Step | Status |
|------|--------|
| Register → pending | Works |
| Login while pending | API 403; UI does not route to `/hospital-pending` (P1) |
| Create request | Inserts request; donor SELECT under RLS returns no rows (P0) |
| "Ping" | DB `notifications` only; no web-push; no socket emit (P0/P1) |
| Verify donation | Transaction logic strong; donor `users` read blocked by RLS (P0); QR scan path wrong (P0) |
| Console reach copy | Fabricated client-side reach count (P1) |

### Admin journey

- `/#/admin` with pending hospital approval, lists, stats
- Bootstrap via `bootstrap-admin.js` (not public demo password)
- Empty states weak on some tabs (P2)

### Aggregate data (Neon, counts only)

- Users: 1 admin, 13 active donors, 1 suspended donor, 6 hospital users
- Hospitals: 4 approved, 2 pending
- Requests: 26 open, 2 filled

Historical filled rows do not prove the current RLS role switch still allows matching/verify.

---

## 3. Routing

- **HashRouter** in `frontend/src/main.jsx`. Canonical deep links are `/#/...`.
- Path-only URLs like `/privacy` still return SPA shell (200) but React route only activates with hash.
- All screen files under `frontend/src/screens/` are registered in `App.jsx`.
- Capacitor present in package tree; **no Cap App URL listeners in `src/`**; Android manifest lacks VIEW deep-link filters.
- PWA `start_url: '/'` is fine with HashRouter once loaded; notification click defaults to `/#/home`.
- Orphan: `useSocket.js` never imported by screens.

**Recommendation for invite MVP:** keep HashRouter; document hash URLs; defer BrowserRouter until server fallbacks and Cap deep links are designed.

---

## 4. UI / UX

- Brand tokens (oxblood / night / porcelain) consistent on public and console shells.
- Contrast fixes in 2.0.2 are in git; latest Railway deploy (2026-07-18) likely includes them (verify under OS dark preference).
- Misleading UX: console "donors pinged" uses fabricated reach; Kannada chip without translations.
- a11y: skip link on public shell; BottomNav lacks `aria-current` / labels.
- Copy on privacy/security pages is appropriately non-certifying.

---

## 5. Backend

### Route surface

- `/api/auth`, `/api/donor`, `/api/hospital`, `/api/admin`, `/api/push`, `/api/health`
- Zod validation on many mutations; some hospital/donor legacy string errors remain
- Rate limits: API 400/15m, auth 30/15m; JSON body 10 KB
- Socket.IO: auth payload only, identity rooms, mutations rejected; **publish helpers unused** on request create
- Retention job: `backend/src/jobs/retention.js` (manual / needs cron)
- Email/SMS: **none**
- Web Push send: **only** `POST /api/push/test`

### Critical code contracts

1. Hospital create-request selects donors from `users` then inserts `notifications` (`backend/src/routes/hospital.js`).
2. Donation completion selects `blood_group` from `users` (`backend/src/services/donationService.js`).
3. Authenticated requests run under ALS context + `SET ROLE raktasetu_rls` (`backend/src/middleware/auth.js`, `backend/src/db.js`).

---

## 6. Database

### Roles (Neon verified)

| Role | Login | BYPASSRLS | Notes |
|------|-------|-----------|-------|
| `neondb_owner` | yes | true | Migration only |
| `raktasetu_app` | yes | **true** | Neon login role; must `SET ROLE` |
| `raktasetu_rls` | no | **false** | Intended runtime |

FORCE RLS is on for identity, hospital, request, response, donation, credit, notification, push, token, audit, pending Google tables.

### Confirmed policy gap (P0)

`users_isolation` USING:

```text
admin OR id = app_user_id() OR app_role() IN ('auth','session')
```

No hospital read path. Therefore under correct runtime role:

- Create-request donor discovery → empty
- Donation verify donor blood group → fail
- `/api/hospital/donors` → empty / useless

**Fix direction:** narrow hospital-safe donor visibility (SECURITY DEFINER function or policy allowing hospital to read only `id`, `blood_group`, coarse location for on-call active donors; donation path needs blood group only). Do not grant full PII SELECT to hospitals.

### Other DB notes

- Applied migrations: `2026-07-15-google-push.sql`, `2026-07-15-privacy-readiness.sql`, `2026-07-16-security-remediation.sql`
- `backend/db/schema.sql` is a **stale snapshot** (missing remediation objects). Migrations are source of truth.
- Consent columns and policy version `2026-07-15` exist
- Soft-delete anonymization via `DELETE /api/auth/me`
- `family_members` / `aadhaar_hash` largely unused

---

## 7. Security

### Implemented technical controls (supported by code)

- bcrypt passwords; Google audience/issuer/email checks; no email auto-link; privileged roles denied Google
- Access JWT issuer/audience/jti/token_version; refresh rotation; logout blacklist; socket disconnect on logout/approval
- Hospital pending until admin approval; middleware re-checks approval
- Donation completion locked transaction with replay rejection (when donor row readable)
- Zod bounds; rate limits; Helmet/CSP/HSTS; parameterized SQL
- Owner-scoped push subscriptions; export excludes push secrets

### Gaps and risks

| Finding | Severity |
|---------|----------|
| Hospital↔donor RLS gap breaks isolation-correct matching/verify | P0 |
| `MIGRATION_DATABASE_URL` (owner) on app service | P1 |
| GH deploy secrets absent; CI cannot migrate/deploy | P0 ops |
| Create-request response may return `nearby_donors` PII if SELECT ever succeeds | P1 |
| JWT TTL may be long (`JWT_EXPIRES_IN` set; README historically used `7d`) | P1 verify |
| Tokens in localStorage (XSS impact) | Accepted MVP; documented |
| No MFA | P2 |
| VAPID historically may need rotation if ever exposed | P2 |

---

## 8. Compliance readiness (honest)

### India DPDP Act

**Technical support present:** consent flag + policy version + source at registration/onboarding; export; anonymized erasure; age ≥18 validation; privacy/data-rights notices; contact emails in README/UI.

**Not established by this codebase:**

- Data Fiduciary determination and published notices meeting statutory form
- Purpose limitation enforcement beyond product UX
- Consent event ledger / version history
- Formal grievance officer and response SLAs (mailbox names alone are insufficient)
- Processor contracts with Railway, Neon, Google, push infrastructure
- Cross-border transfer assessment (Neon US-East, Railway SEA)
- Validated retention schedule operated in production
- Children's data program beyond DOB check
- Security safeguards as org program (training, access reviews, DPIA-equivalent)

**Language to use:** "DPDP readiness support" / "technical controls designed to support" — never "DPDP compliant".

### HIPAA

**Usually out of scope** unless a US covered entity / business associate relationship exists. Neon project `hipaa: false`. No BAA evidence in repo.

**Technical controls that would matter if HIPAA applied:** TLS at edge, RBAC, audit logs (selected), encryption at rest via provider defaults.

**Missing for any HIPAA claim:** CE/BA determination, BAAs, risk analysis, workforce controls, contingency testing, breach notification procedures, eligible hosting configs.

**Language to use:** readiness / technical safeguards only — never "HIPAA compliant" or "HIPAA security implemented" as a blanket claim.

### What blocks real users today vs org/legal

| Blocks invite traffic today | Org/legal (can invite with disclaimer) |
|-----------------------------|----------------------------------------|
| RLS matching/verify breakage | Fiduciary notices, grievance officer |
| QR verify mismatch | Processor contracts |
| No real request delivery (push/socket) | Breach runbook with counsel |
| Owner DB URL on app + broken CI deploy | HIPAA CE/BA analysis (if ever US) |
| Retention not scheduled | Cross-border legal mechanism |

---

## Gate checklist for "invite-ready"

1. Hospital can discover on-call compatible donors under `raktasetu_rls` without reading unnecessary PII
2. Donor accept → arrive → hospital verify completes with correct `ref_code` / QR
3. Donors receive a real signal (web push and/or in-app realtime) or product copy honestly says "open the app"
4. Migration owner credential removed from app service; GH secrets set; deploy pipeline green or documented CLI runbook
5. Retention cron exists or retention deferred with explicit operator acceptance
6. Admin can approve hospitals; pending hospitals cannot operate
7. Privacy contacts monitored; invitees told this is closed beta, not emergency care

---

## Explicit non-goals for this audit

- No code fixes, deploys, or credential rotation performed during the audit
- No production mutation or load testing
- No legal opinion

---

## Related artifacts

- Implementation plan: `docs/superpowers/plans/2026-07-18-user-ready-today.md`
- Canvas overview: workspace canvases `user-ready-audit.canvas.tsx`
- Security controls: `docs/security/security-controls.md`
- Ops: `docs/operational-readiness.md`
