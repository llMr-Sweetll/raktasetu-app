# RaktaSetu — Landing + Donor-First Auth UX Design

**Date:** 2026-07-15  
**Status:** Approved for implementation (product brief)  
**Live target:** https://raktasetu-production.up.railway.app/

## Problem

1. Landing at `/#/` is hero-only — missing mission, vision, and how-it-works content from the product plan.
2. Login/Register treat donor and hospital as equal dual CTAs — hospital path should be discreet.
3. Mobile/WebView (Capacitor) needs primary attention: touch targets, safe areas, reduced Three.js cost.
4. Role redirects exist but should be centralized and verified (no open redirects; cross-role denial).

## Brand kit (source of truth — do not invent)

From `plan.md` and prior landing design:

| Token | Value | Use |
|-------|-------|-----|
| Name | RaktaSetu (रक्तसेतु) — "Blood Bridge" | Brand hero |
| Tagline | Connect. Donate. Save Lives. | Supporting line |
| Display font | Anek Latin | Headlines, CTAs |
| Body font | Public Sans | Body, forms |
| Oxblood | `#7A1626` | Primary brand |
| Arterial | `#C8102E` | Alerts / primary CTA on dark |
| Ink | `#17151A` | Light-surface text |
| Porcelain | `#F5F3F0` | Light surfaces / dashboards |
| Leaf | `#0F6B4A` | Success |
| Console | `#14161C` | Hospital console (unchanged) |

**Landing atmosphere (existing Living Bridge palette):** void `#0A0506`, clot `#3D0A14`, plasma `#F2E8E6`, ash `#A89B96`.

## Goals

| Area | Success |
|------|---------|
| Landing | Full marketing page: hero + mission + vision + how it works + CTA; Living Bridge improved for mobile |
| Auth UX | Default login/register = donor; hospital via discreet top/footer link only |
| Redirects | Central `roleHome()`; donors ↔ hospital routes denied; no open redirects; Google stays donor-first |
| Mobile | 44px targets, safe-area padding, no hover-only UX, lower particle/dpr on narrow viewports |
| Deploy | Railway redeploy; verify routes + auth matrix |

## Non-goals

- Redesigning authenticated donor/hospital consoles
- Admin on marketing landing (keep obscure)
- New Google path for hospitals
- Replacing demo password logins

## Approaches considered

### Landing content
1. **Recommended:** Scrollable landing — sticky/full-bleed Living Bridge behind hero only; subsequent sections on dark atmospheric panels (one job each). Mission/vision copy derived from brand tagline + product purpose in `plan.md`.
2. Single-screen hero only — fails mission/vision requirement.
3. Separate `/about` page — extra hop; weaker first impression.

### Hospital auth entry
1. **Recommended:** Same `/#/login` and `/#/register` routes; `?role=hospital` query flips mode. Discreet text link (“Hospital login”) top-right on login, and footer on landing. Default = donor.
2. Separate `/#/hospital/login` route — clearer isolation but duplicates forms; optional alias redirecting to `?role=hospital`.
3. Dual primary CTAs on landing — rejected by brief.

### Redirect safety
1. **Recommended:** Hardcoded role → path map only (`donor→/home`, `hospital→/console`, `admin→/admin`). Ignore any `?next=` / `returnUrl` if present. Shared helper used by Login, Register, Landing, ProtectedRoute, App.
2. Allowlist relative paths from query — unnecessary complexity for this app.

## Design — Landing

**Subject:** RaktaSetu — the blood bridge between donors and hospitals.  
**First viewport job:** Brand + one promise + donor CTAs (Sign in / Create account). Hospital link only in footer, not competing CTAs.

### Sections (one job each)

1. **Hero** — Brand “RaktaSetu”, Hindi subtitle optional “रक्तसेतु”, headline “The living bridge between donors and hospitals.”, tagline support, primary “Sign in as donor”, secondary “Create account”. Full-bleed Living Bridge.
2. **Mission** — “Connect donors and hospitals in real time when blood is needed.” Short paragraph on GPS matching and emergency pings.
3. **Vision** — “No emergency unanswered — a living network of verified donors across India.”
4. **How it works** — Three short steps: Go on call → Get matched → Donate & earn credits. Not a card grid of marketing fluff; simple numbered process (order matters).
5. **Closing CTA** — Repeat donor Sign in / Create account.
6. **Footer** — Privacy, support email, discreet “Hospital login”.

### Mobile / Capacitor

- `env(safe-area-inset-*)` on landing shell and auth screens.
- CTA `min-height: 44px`, tap-friendly gaps ≥ 10px.
- `BloodBridgeScene`: on `width < 768` or coarse pointer → `devicePixelRatio` cap 1.25, particle count ~180, dust ~60; pause animation when `document.hidden`.
- Prefer scroll over hover tooltips; no hover-only hospital entry.

## Design — Auth UX

### Login (`/#/login`)

| Mode | Trigger | UI |
|------|---------|-----|
| Donor (default) | `/login` or `?role=donor` | Title “Donor sign in”; Google button if configured; demo donor hint |
| Hospital | `?role=hospital` | Title “Hospital sign in”; no Google; demo hospital hint; link back “← Donor sign in” |

Top of donor login: small right-aligned text “Hospital login” → `/login?role=hospital`.

After success: navigate via `roleHome(user)` only (ignore query for destination).

### Register (`/#/register`)

| Mode | Trigger | UI |
|------|---------|-----|
| Donor (default) | `/register` | Donor fields including blood group; no dual pill toggle as equal CTAs |
| Hospital | `?role=hospital` | Hospital fields; discreet “Register as donor instead” |

Remove equal dual primary role toggles; hospital is secondary link only.

### Google

- Shown only on donor login mode.
- Backend already creates `role: donor` — keep that.
- If a hospital somehow authenticates via Google email match to existing hospital account, still redirect by actual `user.role` (secure).

## Design — Redirects & security

```
roleHome(user):
  hospital → /console
  admin → /admin
  else → /home

ProtectedRoute(role):
  !user → /login (donor default; no open redirect)
  wrong role → roleHome(user)  // never the requested protected path
```

- No `redirect`, `next`, `returnUrl` query consumed for navigation.
- Backend `requireRole` already returns 403 — unchanged.
- Catch-all `*` → role home if logged in, else `/`.

## Architecture

```
Guest → /#/ Landing (scroll + Living Bridge)
      → /#/login (donor) | /#/login?role=hospital
      → /#/register | /#/register?role=hospital
Login/Register → JWT → roleHome(user)
ProtectedRoute → role gate
```

Shared: `frontend/src/lib/roleHome.js` (or colocated in `ProtectedRoute` export).

## Copy (canonical)

- **Mission:** Connect willing donors with hospitals in real time so blood reaches patients faster.
- **Vision:** A living bridge across India where verified donors answer when every minute counts.
- **How it works:** (1) Donors go on call in the app. (2) Hospitals broadcast compatible requests nearby. (3) Donors respond, arrive, and earn credits.

## Testing / verification matrix

| Case | Expected |
|------|----------|
| Guest `/#/` | Landing with mission/vision; mobile scroll OK |
| Donor login | → `/home` |
| Hospital login via discreet link | → `/console` |
| Donor JWT on `/#/console` | Redirect `/home` |
| Hospital JWT on `/#/home` | Redirect `/console` |
| Google button | Visible only donor login when `VITE_GOOGLE_CLIENT_ID` set |
| Open redirect attempt `?next=https://evil` | Ignored; role home only |
| Admin | Still `/admin`; not linked from landing |

## Out of scope follow-ups

- Dedicated hospital marketing page
- Aadhaar onboarding redesign
