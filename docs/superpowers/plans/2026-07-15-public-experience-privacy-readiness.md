# Public Experience and Privacy Readiness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a responsive public RaktaSetu experience with accurate marketing copy, SEO, privacy and data-rights tools, security readiness documentation, and production security headers.

**Architecture:** Keep the existing Vite React SPA, HashRouter, Express API, and single Railway service. Build shared public page primitives, preserve donor-first auth behavior, add a scoped authenticated export API, and expose only the root URL to search crawlers because fragment routes are not reliable index targets.

**Tech Stack:** React 18, Vite 5, React Router 6 HashRouter, Three.js, Express 4, Helmet 7, PostgreSQL, Railway

## Global Constraints

- Do not use the em dash character in public-facing copy or newly written policy documentation.
- Do not claim GDPR compliance, HIPAA compliance, certification, audit completion, or legal verification.
- Use "readiness", "designed to support", or "technical controls" where accurate.
- Preserve Google donor-only sign-in, `?role=hospital`, role-derived redirects, CORS behavior, and the public-route loading fix.
- Keep all interactive targets at least 44px and support 360px through 1440px and wider viewports.
- Do not add analytics or a cookie banner when the app has no nonessential cookies.

---

### Task 1: Public Design System and Landing

**Files:**
- Create: `frontend/src/public.css`
- Create: `frontend/src/components/PublicShell.jsx`
- Modify: `frontend/src/screens/Landing.jsx`
- Modify: `frontend/src/components/BloodBridgeScene.jsx`
- Modify: `frontend/src/index.css`

**Interfaces:**
- `PublicShell({ children, tone, compact })` provides shared public navigation and footer.
- `PublicFooter()` exposes policy, readiness, donor, hospital, and contact links.
- Landing keeps `useAuth()` and `roleHome(user)` redirect behavior.

- [ ] **Step 1: Create semantic public shell styles**

Define responsive layout tokens, navigation disclosure behavior, focus states, safe-area spacing, hero grid, content grids, policy typography, and target sizes in `frontend/src/public.css`.

- [ ] **Step 2: Build shared public navigation and footer**

Create `PublicShell.jsx` with a skip link, semantic header, desktop links, mobile `details` navigation, and footer links to `/#/privacy`, `/#/terms`, `/#/data-rights`, and `/#/security-readiness`.

- [ ] **Step 3: Rebuild landing content**

Replace inline mobile-only styling with semantic sections and the approved donor-first copy. Keep the Three.js scene in the hero, use one primary CTA, and provide discreet hospital access.

- [ ] **Step 4: Improve reduced-motion rendering**

When `prefers-reduced-motion: reduce` is active, render one frame and do not schedule an animation loop. Keep the visibility pause and disposal behavior for normal motion.

- [ ] **Step 5: Verify responsive structure**

Run:

```bash
cd frontend && npm run build
```

Expected: Vite exits with code 0 and emits the landing bundle.

### Task 2: Public Policies and Route Metadata

**Files:**
- Create: `frontend/src/hooks/usePageMeta.js`
- Create: `frontend/src/screens/TermsOfService.jsx`
- Create: `frontend/src/screens/DataRights.jsx`
- Create: `frontend/src/screens/SecurityReadiness.jsx`
- Modify: `frontend/src/screens/PrivacyPolicy.jsx`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/screens/Login.jsx`
- Modify: `frontend/src/screens/Register.jsx`

**Interfaces:**
- `usePageMeta({ title, description, path })` updates title, description, and canonical URL.
- `/terms`, `/data-rights`, and `/security-readiness` are public hash routes.
- `DataRights` calls `GET /auth/export` and `DELETE /auth/me` when authenticated.

- [ ] **Step 1: Add route-aware metadata**

Create the metadata hook and apply it to each public page without changing HashRouter.

- [ ] **Step 2: Rewrite the privacy policy**

Document actual fields, purposes, legal-basis categories that require organizational confirmation, storage behavior, Google Identity Services, Neon and Railway providers, rights, transfers, retention uncertainty, children, security limits, and contact workflow.

- [ ] **Step 3: Add terms and readiness pages**

State the service boundaries, user responsibilities, emergency limitations, implemented controls, and remaining legal and operational blockers.

- [ ] **Step 4: Add functional data-rights page**

Allow signed-in users to download the API export as JSON and request account deletion after an explicit confirmation. For signed-out visitors, provide the contact workflow.

- [ ] **Step 5: Tighten auth consent copy**

Link registration consent to both Privacy and Terms. State that Google Identity Services loads on donor sign-in and avoid describing one checkbox as blanket legal consent.

### Task 3: Export API, Consent Versioning, and Security Headers

**Files:**
- Modify: `backend/src/routes/auth.js`
- Modify: `backend/src/server.js`
- Modify: `backend/db/schema.sql`
- Create: `backend/db/migrations/2026-07-15-privacy-readiness.sql`
- Create: `backend/tests/security-static.test.js`

**Interfaces:**
- `GET /api/auth/export` returns `{ success, data: { exported_at, account, hospital, donations, responses, credits, family_members, notifications } }`.
- Registration accepts `consent_policy_version` and records a server-owned version when omitted.
- Production responses include CSP, HSTS, Referrer Policy, Permissions Policy, frame protection, and no-sniff headers.

- [ ] **Step 1: Write header and static route tests**

Test `/api/health` for security headers and the built static routes for `robots.txt` and `sitemap.xml`.

- [ ] **Step 2: Add consent schema fields**

Add `consent_policy_version varchar` and `consent_source varchar` to the schema, migration, and idempotent startup migration.

- [ ] **Step 3: Record versioned consent**

On donor or hospital registration and new Google account creation, store the current policy version and source. Do not accept an arbitrary source from the client.

- [ ] **Step 4: Implement scoped data export**

Query only records related to the authenticated user. Exclude secrets, audit IP addresses, password hashes, Google subject identifiers, push encryption data, and tokens.

- [ ] **Step 5: Configure security headers**

Enable Helmet CSP with the minimum sources required by the current app, Google Identity Services, Google Fonts, Leaflet assets, and Socket.io. Disable unneeded browser capabilities.

- [ ] **Step 6: Run backend tests**

Run:

```bash
cd backend && npm test -- --runInBand
```

Expected: all Jest suites pass with no failed tests.

### Task 4: SEO and PWA Metadata

**Files:**
- Modify: `frontend/index.html`
- Modify: `frontend/vite.config.js`
- Modify: `frontend/public/manifest.json`
- Create: `frontend/public/robots.txt`
- Create: `frontend/public/sitemap.xml`

**Interfaces:**
- Canonical origin is `https://raktasetu-production.up.railway.app/`.
- Sitemap contains the canonical root only.
- JSON-LD identifies RaktaSetu as an Organization and WebSite without a fabricated address, phone, awards, or medical claims.

- [ ] **Step 1: Add complete root metadata**

Add title, description, canonical, robots, Open Graph, Twitter, application metadata, theme color, and JSON-LD.

- [ ] **Step 2: Add a useful non-script fallback**

Replace the loading placeholder with a branded loading state and add a `noscript` summary with mission, donor action, and policy links.

- [ ] **Step 3: Add crawler files**

Create root-only `robots.txt` and `sitemap.xml` with accurate dates and no fragment URLs.

- [ ] **Step 4: Align PWA metadata**

Update both public manifest sources with the same natural description, categories, language, and orientation behavior.

### Task 5: Copy Audit and Verification

**Files:**
- Modify: relevant `frontend/src/screens/*.jsx` files containing public user-facing em dash text
- Verify: all files above

**Interfaces:** None.

- [ ] **Step 1: Remove user-facing em dash characters**

Replace em dash punctuation in public and product UI strings with periods, commas, colons, or parentheses. Comment punctuation may remain only outside files touched by this work, but the frontend string scan must return no user-facing matches.

- [ ] **Step 2: Run frontend checks**

Run:

```bash
cd frontend && npm run build && npm test -- --run
```

Expected: build exits 0; Vitest exits 0 or reports no test files according to repository configuration.

- [ ] **Step 3: Run repository scans**

Run:

```bash
rg "—" frontend/src docs/superpowers/specs/2026-07-15-public-experience-privacy-readiness-design.md docs/superpowers/plans/2026-07-15-public-experience-privacy-readiness.md
rg "GDPR compliant|HIPAA compliant|certified|legally verified" frontend/src
```

Expected: no public copy violations. Any accurate caveat that quotes a prohibited claim must be reviewed manually.

- [ ] **Step 4: Run local route checks**

Start the service with production environment variables, then verify `/`, `/api/health`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/#/login`, and `/#/login?role=hospital`.

### Task 6: Commit, Deploy, and Live Verification

**Files:** All changed files.

**Interfaces:** Railway main branch deployment.

- [ ] **Step 1: Commit logical groups**

Create separate commits for design documentation, public frontend and policy work, and backend readiness and SEO work. Do not include `.cursor/settings.json` or environment files.

- [ ] **Step 2: Push main**

Run:

```bash
git push origin main
```

Expected: remote main advances without force.

- [ ] **Step 3: Deploy with Railway CLI**

Run:

```bash
railway up --detach
```

Expected: Railway accepts the deployment and reports the target service.

- [ ] **Step 4: Verify production**

Check:

```bash
curl -fsS https://raktasetu-production.up.railway.app/api/health
curl -fsSI https://raktasetu-production.up.railway.app/
curl -fsS https://raktasetu-production.up.railway.app/robots.txt
curl -fsS https://raktasetu-production.up.railway.app/sitemap.xml
```

Expected: health JSON is healthy, root is 200 with security headers, and crawler files contain the canonical production URL.

- [ ] **Step 5: Verify role isolation**

Authenticate using authorized demo credentials, then verify donor tokens receive 403 on hospital APIs and hospital tokens receive 403 on donor APIs. Do not print tokens in logs or the final report.
