# Changelog

All notable changes to RaktaSetu are documented in this file.

## [Unreleased]

### Planned / in progress

- Three.js animated brand landing at `/`
- Google Sign-In (OAuth) into existing JWT auth
- PWA installability + Web Push foundation (VAPID)
- Documentation, contacts, and deployment notes refresh

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
