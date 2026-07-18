# Changelog

All notable changes to RaktaSetu are documented in this file.

## [2.0.3] — 2026-07-18

### Security

- Hospitals discover and verify donors through narrow `SECURITY DEFINER` helpers under `raktasetu_rls` (blood group + coarse location only; no email/phone/name SELECT)
- Production app process refuses to boot when `MIGRATION_DATABASE_URL` is present
- Database TLS verification enabled by default for remote Postgres (`DATABASE_SSL_INSECURE=1` break-glass only)

### Fixed

- Create-request matching and donation completion work without owner RLS bypass
- Donor on-the-way QR encodes the hospital `ref_code` used by console verify
- Web Push (and socket `blood_request`) fires when hospitals broadcast requests, not only via `/api/push/test`
- Create-request response returns `donors_notified` only (no `nearby_donors` PII array)
- Pending hospital login routes to `/hospital-pending`
- Google account-link no longer races authenticated redirects
- Console reach copy uses API `donors_notified` instead of fabricated counts

### Ops

- Invite cohort runbook and retention cron guidance in `docs/operational-readiness.md`
- Access token sample TTL documented as `30m` (refresh tokens remain the long-lived path)
- Frontend CI installs Chromium and WebKit for Playwright mobile/desktop projects
- GitHub→Railway deploy still requires repository secrets `RAILWAY_TOKEN` and `MIGRATION_DATABASE_URL` if not already set

### Notes

- Invite-only readiness support only. This release does not claim DPDP, HIPAA, or other compliance certification.

## [2.0.2] — 2026-07-18

### Fixed

- Light form fields (register, profile DOB, data-rights delete confirm) stay ink-on-white under OS dark preference
- Login and auth-flow placeholders use stronger contrast on dark fields
- On-the-way screen renders a real scannable verification QR
- Landing night disclaimer/footer muted text and console subtitle contrast improved
- Bottom navigation respects device safe-area insets

### Notes

- Neon safety branch `mvp-pre-role-switch-2026-07-16` was deleted; production uses Neon primary `main` only

## [2.0.1] — 2026-07-18

### Security

- Removed unused Railway `INITIAL_ADMIN_PASSWORD` after confirming admin login, pending hospital review, role denials, and logout revocation on production
- Ignored local `.cursor/` IDE metadata so workspace settings are not committed

### Notes

- Production remains on the MVP Release deployment (`fe5201da…`); no application rebuild required for the env/hygiene hardening above
- GitHub→Railway auto-deploy still needs a repository `RAILWAY_TOKEN` (and `MIGRATION_DATABASE_URL`) secret — create a Railway project/account token in the dashboard and set it with `gh secret set`
- Optional: rotate VAPID if keys were ever committed historically (requires donor re-subscribe); JWT rotation deferred because it invalidates all sessions

## [2.0.0] — 2026-07-15

### Security

- Removed production demo seeding and public demo credentials from startup, login, and README
- Hospital accounts stay pending until admin approval; operational routes require approved hospital state
- Google Sign-In uses verified identity only; no email auto-link; privileged roles denied; donor onboarding/link flows required
- Access tokens use issuer/audience/`jti`/token version; logout blacklists tokens, rotates refresh tokens, and disconnects sockets
- Donation completion is a single locked transaction with replay rejection and server-derived blood group
- Push subscriptions are owner-scoped; Socket.IO accepts auth-payload tokens only and no longer mutates state
- Strict Zod validation, pagination bounds, RLS policies, least-privileged app role grants, retention job, and CI security gates

### Added

- Google onboarding, account-link, and hospital-pending screens
- Admin hospital approval controls
- Donor request map view (Leaflet) with accessible list fallback
- Operational readiness and security-controls documentation

### Changed

- Royal maroon / black / white brand tokens across console, admin, and auth shells
- Vite manual chunks for `three`, `leaflet`, and vendor to reduce main-route lag
- Responsive `app-shell` widths for mobile, tablet, and desktop

### Notes

- Technical controls are not GDPR or HIPAA certification claims
- Production demo passwords must be rotated out-of-band if still in use; fixture seeding refuses production

## [1.2.0] — 2026-07-15

### Added

- Full landing: mission, vision, how-it-works (brand kit from `plan.md`)
- Donor-first auth UX: `/#/login` and `/#/register` default to donor; hospital via discreet `?role=hospital` links
- Centralized `roleHome()` — no open redirects from query params
- Design + plan: `docs/superpowers/specs/2026-07-15-landing-auth-ux-design.md`, `docs/superpowers/plans/2026-07-15-landing-auth-ux.md`

### Changed

- Living Bridge: lower particle count / DPR on mobile; pause when tab hidden
- Landing + auth: safe-area padding, ≥44px touch targets
- Google Sign-In shown only on donor login

## [1.1.0] — 2026-07-15

### Added

- Three.js “Living Bridge” animated landing at `/#/` (brand-first guest experience)
- Google Sign-In path (`POST /api/auth/google` + GIS button when `VITE_GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_ID` set)
- PWA via `vite-plugin-pwa` (service worker, installable manifest)
- Web Push foundation (`/api/push/*`, VAPID, `push_subscriptions` table) + local notification demo on donor Profile
- `CHANGELOG.md`, landing/Google/PWA design + plan under `docs/superpowers/`
- Contacts: support@raktasetu.org, privacy@raktasetu.org (Privacy Policy + README)

### Changed

- Public routes (`/`, `/login`, `/register`, `/privacy`) no longer blocked by auth loading spinner
- Login screen shares landing atmosphere; link back to landing
- README points at Railway live URL; Cloudflare / GH Pages noted as retired
- App version bump to 1.1.0

### Fixed

- Guest first paint stuck on “Loading RaktaSetu…” when only landing was needed

## [1.0.0] — 2026-07-15

### Fixed

- Production SPA stuck on loading due to CORS 500s on Railway same-origin
- Auth state shared via AuthProvider so login navigates correctly
- Auth `/me` timeout so public pages are not blocked forever
- Auth/API rate limits raised for MVP demo role switching

### Changed

- Unified Railway hosting: Express serves `frontend/dist` + API
- Retired Cloudflare tunnel / GitHub Pages as production hosts

### Added

- Neon schema snapshot, Railway/Nixpacks deploy config
- MVP design + implementation docs under `docs/superpowers/`
