# Landing + Google Sign-In + PWA Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. Prefer inline execution in one session; commit after each major task.

**Goal:** Ship a Three.js brand landing, Google OAuth into existing JWT auth, and PWA/push foundation on Railway without breaking demo logins.

**Architecture:** Guest landing at HashRouter `/`; public routes render without waiting on `/auth/me`; Google GIS ID token verified server-side; `vite-plugin-pwa` + Web Push/VAPID with graceful degradation.

**Tech Stack:** React 18, Vite, three, @react-three/fiber (or raw three — prefer raw three for smaller surface), Google Identity Services, web-push, vite-plugin-pwa, Express, Neon Postgres, Railway.

## Global Constraints

- Preserve donor/hospital/admin demo password logins.
- Do not regress CORS / Railway SPA serving.
- Hide Google button when `VITE_GOOGLE_CLIENT_ID` unset; push works partially without VAPID.
- No Google Ads. No dashboard redesign.
- Dashboard design system (`theme.js`) unchanged for authenticated screens.
- Commit after each feature lands; no secrets in git.

---

### Task 1: Spec + changelog scaffolding

**Files:**
- Create: `docs/superpowers/specs/2026-07-15-landing-google-pwa-design.md` (done)
- Create: `docs/superpowers/plans/2026-07-15-landing-google-pwa.md` (this file)
- Create: `CHANGELOG.md`

- [ ] **Step 1:** Ensure design + plan exist under `docs/superpowers/`.
- [ ] **Step 2:** Create `CHANGELOG.md` with Unreleased section listing planned work.
- [ ] **Step 3:** Commit docs.

```bash
git add docs/superpowers/specs/2026-07-15-landing-google-pwa-design.md \
  docs/superpowers/plans/2026-07-15-landing-google-pwa.md CHANGELOG.md
git commit -m "$(cat <<'EOF'
docs: add landing, Google auth, and PWA design plan

EOF
)"
```

---

### Task 2: Public routes without auth spinner

**Files:**
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/hooks/useAuth.js` (only if needed)

**Interfaces:**
- Produces: Landing route at `/`; guests see landing while `loading`; authed users still redirect from `/`.

- [ ] **Step 1:** Extract `isPublicPath` for `/`, `/login`, `/register`, `/privacy`.
- [ ] **Step 2:** Only show full-page “Loading RaktaSetu…” for protected routes when `loading`.
- [ ] **Step 3:** Replace `/` Navigate-to-login with Landing component (placeholder OK until Task 3).
- [ ] **Step 4:** Commit.

---

### Task 3: Three.js Landing page

**Files:**
- Create: `frontend/src/screens/Landing.jsx`
- Create: `frontend/src/components/BloodBridgeScene.jsx`
- Modify: `frontend/package.json` (add `three`)
- Modify: `frontend/index.html` (fonts if needed — keep Anek + Public Sans)
- Modify: `frontend/src/App.jsx` (route + allow full-bleed for landing — no 430px clamp)

**Interfaces:**
- Consumes: `useNavigate`, `useAuth` (redirect if user)
- Produces: Animated canvas + brand + CTAs to `/login`, `/register`

- [ ] **Step 1:** `cd frontend && npm install three`
- [ ] **Step 2:** Implement `BloodBridgeScene` with raw three.js (particles, two nodes, heartbeat pulse, dispose on unmount, reduced-motion fallback).
- [ ] **Step 3:** Implement `Landing.jsx` overlay: brand RaktaSetu, headline, subcopy, CTAs.
- [ ] **Step 4:** App layout: landing/login/register use full width (skip maxWidth 430).
- [ ] **Step 5:** Manual check locally or after build; commit.

---

### Task 4: Login polish + Google Sign-In (frontend)

**Files:**
- Modify: `frontend/src/screens/Login.jsx`
- Modify: `frontend/src/hooks/useAuth.js` — add `loginWithGoogle(idToken)`
- Modify: `frontend/src/config.js` — export `GOOGLE_CLIENT_ID` from `import.meta.env.VITE_GOOGLE_CLIENT_ID`
- Modify: `frontend/index.html` — optional GIS script load from Login only via dynamic script

**Interfaces:**
- Produces: `loginWithGoogle(credential: string) => Promise<user>`
- Consumes: `POST /api/auth/google` `{ id_token, consent_given? }`

- [ ] **Step 1:** Add Google button when `VITE_GOOGLE_CLIENT_ID` present; GIS `initialize` + `renderButton` or One Tap.
- [ ] **Step 2:** Link back to landing; keep password form + demo credentials hint.
- [ ] **Step 3:** Commit frontend auth UI (works against backend stub until Task 5).

---

### Task 5: Google Sign-In backend

**Files:**
- Modify: `backend/src/routes/auth.js` — `POST /google`
- Modify: `backend/db/schema.sql` — `google_sub`, nullable phone/password if needed
- Create: `backend/db/migrations/2026-07-15-google-push.sql`
- Modify: `backend/package.json` — `google-auth-library`
- Modify: `backend/.env.example`

**Interfaces:**
- `POST /api/auth/google` body: `{ id_token: string, consent_given?: boolean }`
- Response: same shape as login `{ success, data: { user, token } }`
- If `!process.env.GOOGLE_CLIENT_ID` → 503 `{ error: 'Google Sign-In not configured' }`

- [ ] **Step 1:** Add migration SQL for `google_sub VARCHAR UNIQUE` on users.
- [ ] **Step 2:** Implement verify + upsert donor + JWT.
- [ ] **Step 3:** Document env vars; commit.

---

### Task 6: PWA + push foundation

**Files:**
- Modify: `frontend/vite.config.js` — VitePWA plugin
- Create: `frontend/src/sw.js` or use generateSW defaults + push handler via `injectManifest` if needed
- Create: `frontend/src/lib/notifications.js`
- Modify: `frontend/src/main.jsx` — register SW
- Create: `backend/src/routes/push.js`
- Modify: `backend/src/server.js` — mount push routes
- Modify: `backend/package.json` — `web-push`
- Modify: `frontend/src/screens/DonorProfile.jsx` — enable/test notifications UI
- Modify: migration SQL — `push_subscriptions` table

**Interfaces:**
- `GET /api/push/vapid-public-key` → `{ publicKey }` or 503
- `POST /api/push/subscribe` auth → store subscription
- `POST /api/push/test` auth → send or 501
- `showLocalNotification(title, body)` client helper

- [ ] **Step 1:** Configure vite-plugin-pwa; rebuild generates SW.
- [ ] **Step 2:** Backend push routes + table.
- [ ] **Step 3:** Profile UI for permission + local test + subscribe when VAPID present.
- [ ] **Step 4:** Generate VAPID keys locally; document Railway `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`.
- [ ] **Step 5:** Commit.

---

### Task 7: Docs, contacts, CHANGELOG

**Files:**
- Modify: `README.md`
- Modify: `CHANGELOG.md`
- Modify: `frontend/src/screens/PrivacyPolicy.jsx` contacts if needed
- Modify: `CI_CD_GUIDE.md` / `DEPLOYMENT_PLAN.md` — point to Railway, note Cloudflare retired

- [ ] **Step 1:** README: live URL, Google setup, VAPID setup, PWA notes, contacts (`privacy@raktasetu.org`, support email).
- [ ] **Step 2:** CHANGELOG release notes for this pass.
- [ ] **Step 3:** Commit.

---

### Task 8: Build, deploy, verify

- [ ] **Step 1:** `cd frontend && npm run build`
- [ ] **Step 2:** Commit `frontend/dist` if repo tracks it (check git status — prior commits include dist).
- [ ] **Step 3:** `railway up` or git push + Railway deploy.
- [ ] **Step 4:** Verify live: health, landing animation, demo login, no spinner regression.
- [ ] **Step 5:** Final CHANGELOG tweak + summary commit if needed.

---

## Verification checklist

- [ ] `GET /api/health` → healthy
- [ ] `/#/` shows Three.js landing (or reduced-motion fallback)
- [ ] Demo donor login works
- [ ] Google button absent without client ID; API 503 if called without config
- [ ] PWA manifest + SW present in production build
- [ ] Local notification demo works in supporting browsers
- [ ] No Cloudflare runtime dependency
