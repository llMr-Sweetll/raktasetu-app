# Changelog

All notable changes to RaktaSetu are documented in this file.

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
