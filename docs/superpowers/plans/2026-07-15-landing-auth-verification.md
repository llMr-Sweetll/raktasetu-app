# Route & auth verification checklist — 2026-07-15

Live: https://raktasetu-production.up.railway.app/

## Happy path (blue)

| # | Steps | Expected | Result |
|---|-------|----------|--------|
| 1 | `curl …/api/health` | 200 OK | |
| 2 | Open `/#/` on phone or narrow viewport | Brand hero, scroll to Mission / Vision / How it works; CTAs ≥ 44px; Hospital login only in footer | |
| 3 | Tap **Sign in as donor** | `/#/login` — title “Donor sign in”; Google if configured; top-right “Hospital login” discreet | |
| 4 | Demo donor `+919876543210` / `password123` | Redirect `/#/home` | |
| 5 | Logout → footer **Hospital login** or `/#/login?role=hospital` | Title “Hospital sign in”; no Google; demo hospital hint | |
| 6 | Demo hospital `+918312456789` / `password123` | Redirect `/#/console` | |
| 7 | `/#/register` | Donor form; blood groups; discreet “Hospital registration” | |
| 8 | `/#/register?role=hospital` | Hospital form; no dual primary role pills | |

## Cross-role denial (red)

| # | Steps | Expected | Result |
|---|-------|----------|--------|
| 9 | Donor session → navigate `/#/console` | Redirect to `/#/home` | |
| 10 | Hospital session → navigate `/#/home` | Redirect to `/#/console` | |
| 11 | Guest → `/#/home` | Redirect `/#/login` | |
| 12 | `/#/login?next=https://evil.com` then login | Still `roleHome` only — never evil.com | |
| 13 | Landing / login — no Admin CTA | Admin not on marketing surfaces | |

## Notes

- Destinations come only from `roleHome(user)` in `frontend/src/lib/roleHome.js`.
- Backend `requireRole` still returns 403 on wrong-role API calls (unchanged).
