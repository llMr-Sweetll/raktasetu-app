# Changelog

All notable changes to RaktaSetu are documented in this file.

## [2.0.1] — 2026-07-18

### Security

- Removed unused Railway `INITIAL_ADMIN_PASSWORD` after confirming admin login, pending hospital review, role denials, and logout revocation on production
- Ignored local `.cursor/` IDE metadata so workspace settings are not committed

### Notes

- Production remains on the MVP Release deployment (`fe5201da…`); no application rebuild required for the env/hygiene hardening above
- GitHub→Railway auto-deploy still needs a repository `RAILWAY_TOKEN` (and `MIGRATION_DATABASE_URL`) secret — create a Railway project/account token in the dashboard and set it with `gh secret set`
- Neon safety branch `mvp-pre-role-switch-2026-07-16` can be deleted from the Neon console when no longer needed
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
