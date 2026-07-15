# Route & auth verification checklist — 2026-07-15

Live: https://raktasetu-production.up.railway.app/  
Deploy: `e64bbc1f` SUCCESS · bundle `assets/index-BRjL71vq.js`

## Happy path (blue)

| # | Steps | Expected | Result |
|---|-------|----------|--------|
| 1 | `GET /api/health` | 200 OK | ✅ 200 healthy |
| 2 | Open `/#/` | Brand hero + Mission / Vision / How it works; Hospital login in footer | ✅ strings in live bundle |
| 3 | Sign in as donor → `/#/login` | Donor sign in; Hospital login discreet top-right | ✅ |
| 4 | Demo donor login | → `/home`; API 200 on `/api/donor/dashboard` | ✅ role=donor |
| 5 | `/#/login?role=hospital` | Hospital sign in; no Google | ✅ |
| 6 | Demo hospital login | → `/console`; API 200 on `/api/hospital/dashboard` | ✅ role=hospital |
| 7 | `/#/register` | Donor form; Hospital registration discreet | ✅ |
| 8 | `/#/register?role=hospital` | Hospital form | ✅ |

## Cross-role denial (red)

| # | Steps | Expected | Result |
|---|-------|----------|--------|
| 9 | Donor JWT → `/api/hospital/dashboard` | 403 | ✅ Insufficient permissions |
| 10 | Hospital JWT → `/api/donor/dashboard` | 403 | ✅ Insufficient permissions |
| 11 | Guest → protected routes | Redirect `/login` via ProtectedRoute | ✅ (client) |
| 12 | `?next=` ignored | `roleHome` only | ✅ no redirect param consumed |
| 13 | No Admin on landing | Obscure | ✅ |

## Phone test (manual)

1. Open https://raktasetu-production.up.railway.app/#/ in mobile Safari/Chrome  
2. Scroll Mission → Vision → How it works  
3. Tap **Sign in as donor** (full-width ≥44px)  
4. Confirm **Hospital login** is small top-right text only  
5. Optional: `/#/login?role=hospital` + hospital demo creds → console  
