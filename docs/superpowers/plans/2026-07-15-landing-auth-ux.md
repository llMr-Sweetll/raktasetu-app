# Landing + Donor-First Auth UX Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a mission/vision landing (mobile-first Living Bridge) and donor-first auth UX with safe role redirects, then redeploy Railway.

**Architecture:** Upgrade `Landing.jsx` to a scrollable brand page; centralize `roleHome` + safe navigation; Login/Register default to donor with `?role=hospital` secondary mode; tune `BloodBridgeScene` for mobile performance.

**Tech Stack:** React 18, HashRouter, Three.js, existing theme tokens from `plan.md` / `theme.js`.

## Global Constraints

- Brand kit from `plan.md` — oxblood/arterial/Anek/Public Sans only; no new identity.
- HashRouter preserved; Express serves SPA; Google GIS donor-only; demo logins work.
- No open redirects; no secrets in git; `VITE_GOOGLE_CLIENT_ID` must remain bakeable on Railway rebuild.
- Capacitor/WebView: 44px touch targets, safe areas, reduced motion respected.
- Ponytail: fewest files; reuse Living Bridge; no new animation library.

## File map

| File | Responsibility |
|------|----------------|
| `frontend/src/lib/roleHome.js` | `roleHome(user)`, `isHospitalAuthMode(search)` |
| `frontend/src/components/BloodBridgeScene.jsx` | Mobile-aware particle/dpr; pause when hidden |
| `frontend/src/screens/Landing.jsx` | Full landing sections + CTAs |
| `frontend/src/screens/Login.jsx` | Donor-first; hospital via query; Google donor-only |
| `frontend/src/screens/Register.jsx` | Donor-first; hospital via query |
| `frontend/src/components/ProtectedRoute.jsx` | Use shared `roleHome` |
| `frontend/src/App.jsx` | Use shared `roleHome`; landing full-bleed scroll |
| `frontend/src/index.css` | Safe-area utilities if needed |
| `docs/superpowers/specs/2026-07-15-landing-auth-ux-design.md` | Spec (already written) |
| `CHANGELOG.md` / `README.md` | User-facing notes |

---

### Task 1: Shared roleHome helper

**Files:**
- Create: `frontend/src/lib/roleHome.js`
- Modify: `frontend/src/components/ProtectedRoute.jsx`
- Modify: `frontend/src/App.jsx`

**Interfaces:**
- Produces: `roleHome(user) → string`, `parseAuthRole(searchParams) → 'donor'|'hospital'`

- [ ] **Step 1: Create helper**

```js
/** Hardcoded role destinations — never trust query redirect params. */
export function roleHome(user) {
  if (!user) return '/login';
  if (user.role === 'hospital') return '/console';
  if (user.role === 'admin') return '/admin';
  return '/home';
}

/** Auth screen mode from ?role= — defaults to donor. */
export function parseAuthRole(searchParams) {
  const r = (searchParams?.get?.('role') || '').toLowerCase();
  return r === 'hospital' ? 'hospital' : 'donor';
}
```

- [ ] **Step 2: Wire ProtectedRoute + App to import `roleHome`**

- [ ] **Step 3: Commit**

```bash
git add frontend/src/lib/roleHome.js frontend/src/components/ProtectedRoute.jsx frontend/src/App.jsx
git commit -m "feat: centralize safe roleHome redirects"
```

---

### Task 2: Mobile-tuned Living Bridge

**Files:**
- Modify: `frontend/src/components/BloodBridgeScene.jsx`

- [ ] **Step 1: Detect mobile / coarse pointer; lower COUNT, DUST, pixelRatio; pause on `visibilitychange`**

Key knobs:
- `isMobile = matchMedia('(max-width: 768px), (pointer: coarse)').matches`
- `setPixelRatio(Math.min(dpr, isMobile ? 1.25 : 2))`
- `COUNT = reduceMotion ? 60 : isMobile ? 160 : 420`
- `DUST = reduceMotion ? 30 : isMobile ? 50 : 160`
- On `document.hidden`, cancel RAF; on visible, restart.

- [ ] **Step 2: Commit**

```bash
git commit -m "perf: tune Living Bridge for mobile WebView"
```

---

### Task 3: Full landing page

**Files:**
- Modify: `frontend/src/screens/Landing.jsx`

- [ ] **Step 1: Restructure** — hero (min-height 100dvh) + mission + vision + how-it-works + closing CTA + footer with discreet hospital login. Safe-area padding. CTAs ≥ 44px. Primary links → `/login` and `/register` (donor). Footer: `Link to="/login?role=hospital"`.

- [ ] **Step 2: Keep authenticated redirect via `roleHome`**

- [ ] **Step 3: Commit**

```bash
git commit -m "feat: mission/vision landing with mobile-first CTAs"
```

---

### Task 4: Donor-first Login

**Files:**
- Modify: `frontend/src/screens/Login.jsx`

- [ ] **Step 1: Read `useSearchParams`; `parseAuthRole`; hospital mode hides Google; top discreet hospital link on donor mode; “← Donor sign in” on hospital mode; navigate with `roleHome(user)` only.**

- [ ] **Step 2: Commit**

```bash
git commit -m "feat: donor-first login with discreet hospital path"
```

---

### Task 5: Donor-first Register

**Files:**
- Modify: `frontend/src/screens/Register.jsx`

- [ ] **Step 1: Default role from `parseAuthRole`; remove equal dual toggle; discreet switch link; navigate via `roleHome`.**

- [ ] **Step 2: Commit**

```bash
git commit -m "feat: donor-first register with secondary hospital path"
```

---

### Task 6: Docs + verification + deploy

**Files:**
- Modify: `CHANGELOG.md`, `README.md`

- [ ] **Step 1: Update README auth paths and landing description**
- [ ] **Step 2: Manual / curl verification checklist (see below)**
- [ ] **Step 3: Commit docs, push, `railway up` or trigger redeploy**

### Verification checklist

| # | Check | Pass? |
|---|-------|-------|
| 1 | `GET /api/health` 200 | |
| 2 | `/#/` shows mission + vision; scrollable on narrow viewport | |
| 3 | Sign in → donor login; hospital link top/footer only | |
| 4 | Demo donor → `/#/home` | |
| 5 | `/#/login?role=hospital` + demo hospital → `/#/console` | |
| 6 | Donor session cannot stay on `/#/console` | |
| 7 | Hospital session cannot stay on `/#/home` | |
| 8 | `?next=https://evil.com` ignored | |
| 9 | Google button only on donor login when client ID present | |
| 10 | Landing CTAs ≥ 44px; safe areas respected | |

---

## Self-review

- Spec coverage: landing content, auth split, redirects, brand kit, mobile, deploy — all tasked.
- No placeholders.
- `roleHome` name consistent across tasks.
