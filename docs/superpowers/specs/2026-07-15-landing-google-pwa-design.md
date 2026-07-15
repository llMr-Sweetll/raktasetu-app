# RaktaSetu — Landing, Google Sign-In & PWA Design

**Date:** 2026-07-15  
**Status:** Approved for implementation (product brief)  
**Live target:** https://raktasetu-production.up.railway.app/

## Problem

1. `/` redirects straight to login — no brand landing, no first-impression.
2. Auth loading can flash “Loading RaktaSetu…” before public pages render.
3. No Google OAuth path (JWT/password only).
4. Manifest exists but PWA/push is not wired (`vite-plugin-pwa` unused).
5. Docs still mention retired Cloudflare / GH Pages in places; contacts/changelog incomplete.

## Goals

| Area | Success |
|------|---------|
| Landing | Animated Three.js experience at `/#/` for guests; brand-first; CTAs to login/register |
| Auth UX | Public routes never blocked by `/auth/me`; demo logins still work |
| Google | End-to-end Google Identity → same JWT model; hide/disable when env unset |
| PWA | Installable; SW registered; push subscribe API + VAPID when keys present; local notification demo always |
| Docs | README, CHANGELOG, contacts, Google/VAPID setup; no stale Cloudflare as production |
| Deploy | Railway redeploy; landing animates; login + health OK |

## Non-goals

- Google Ads campaigns
- Dashboard visual redesign
- Perfect multi-browser push without user VAPID/FCM setup
- Replacing demo password logins

## Approaches considered

### Landing
1. **Recommended:** Dedicated `#/` Landing with full-bleed Three.js canvas + brand/CTA overlay; login stays functional form with optional shared atmosphere.
2. Combined landing+login single scroll — denser, weaker brand moment.
3. CSS-only landing — fails Three.js requirement.

### Google auth
1. **Recommended:** Google Identity Services (GIS) ID token → `POST /api/auth/google` → verify → upsert donor user → issue existing JWT.
2. Full OAuth redirect code flow — heavier for HashRouter SPA.
3. Firebase Auth — extra vendor; not needed.

### Push
1. **Recommended:** Web Push + VAPID (`web-push`), `push_subscriptions` table, SW push handler; local `Notification` demo when VAPID missing.
2. FCM-only — more Google Console surface than needed for MVP.
3. Socket.io only — already exists for in-app; does not cover background.

## Design — Landing (“Living Bridge”)

**Subject:** RaktaSetu — the blood donation bridge between donor and hospital.  
**Job of first viewport:** Brand presence + one promise + one CTA path into the app.

**Palette (landing only; dashboards keep `theme.js`):**
- `void` `#0A0506` — canvas deep
- `clot` `#3D0A14` — mid atmosphere
- `oxblood` `#7A1626` — brand (existing)
- `arterial` `#C8102E` — particle accent
- `plasma` `#F2E8E6` — primary text on dark
- `ash` `#A89B96` — secondary text

**Type:** Keep **Anek Latin** (display) + **Public Sans** (body) — already brand; amplify size/weight on landing. No Inter/Roboto. Avoid cream+serif and purple-gradient clichés.

**Signature:** Three.js particle stream that forms a living bridge — two soft nodes (donor ↔ hospital) with flowing droplets and a subtle heartbeat scale pulse. `prefers-reduced-motion`: static gradient + still bridge silhouette.

**Hero budget:** Brand name, one headline, one supporting line, CTA group (Enter / Sign in / Create account). No stats strip, no cards in hero.

**Layout:** Full-bleed canvas behind; content centered; max-width ~480 for copy/CTAs; desktop same composition wider. Authenticated users hitting `/` still redirect to role home.

## Design — Google Sign-In

- Env: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (secret optional for ID-token verify), `VITE_GOOGLE_CLIENT_ID` for frontend.
- Frontend: GIS script; button only if `VITE_GOOGLE_CLIENT_ID` set; else omit or show “Configure Google Sign-In” in docs only.
- Backend: verify ID token (audience = client ID); find/create `users` row (`role: donor` default; `password_hash` random opaque; `google_sub` column); return JWT + user.
- Phone: placeholder unique string if missing (`g_` + sub).
- Consent: require `consent_given` on first Google register (checkbox next to Google button) or accept privacy link acknowledgment.

## Design — PWA & notifications

- Wire `vite-plugin-pwa` with existing manifest; register SW in `main.jsx`.
- `GET /api/push/vapid-public-key` — 503/empty when unset.
- `POST /api/push/subscribe` (auth) — store endpoint + keys.
- `POST /api/push/test` (auth) — send test push if VAPID configured; else 501 with message.
- Frontend Profile (or Login footer): “Enable notifications” + “Test local notification” using Notification API (works without VAPID).
- Schema: `push_subscriptions` + optional `users.google_sub`.

## Architecture

```
Guest → /#/ Landing (Three.js) → /#/login | /#/register
Login → password OR Google GIS → JWT (unchanged)
Authenticated → role dashboards (unchanged)
SW → cache shell; push events when subscribed
Express → /api/auth/google, /api/push/*, SPA static
```

## Error handling

- Missing Google env: no button / 503 on Google endpoint — app otherwise fine.
- Missing VAPID: PWA install + local notifications still work; push endpoints document setup.
- Auth `/me` failure: clear token; public routes already visible.

## Testing / verification

1. `curl` health on Railway
2. Open `/` — canvas animates; CTAs navigate
3. Demo donor login
4. Google path unit-smoke when keys absent (button hidden, POST returns clear error)
5. Notification permission + local notification in browser
6. No CORS regression / no infinite loading spinner
