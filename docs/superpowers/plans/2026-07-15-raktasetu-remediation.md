# RaktaSetu Security, Data Isolation, and UX Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove RaktaSetu's confirmed release-blocking security failures, restore the confirmed map and responsive UX defects, and establish repeatable authorization, privacy, performance, and release evidence.

**Architecture:** Keep the existing React/Vite, Express, Socket.IO, Railway, and Neon stack. Move authentication and resource authorization into shared server services, run tenant-sensitive database work through an explicit authorization context and least-privileged role, and make donation completion a single idempotent transaction. Treat WebSocket and push as delivery channels for already-authorized server state, not parallel trust paths.

**Tech Stack:** React 18, Vite 5, React Router 6, Leaflet and React Leaflet, Express 4, Socket.IO 4, Node.js 20 or later, PostgreSQL on Neon, Railway, GitHub Actions.

## Global Constraints

- This document is a plan only. Do not begin implementation without explicit user approval.
- Do not expose credentials, tokens, secret values, personal data, or production record contents in code, tests, logs, screenshots, or review notes.
- Do not load-test production. Use local or staging environments with isolated seeded data for mutations, concurrency, WebSocket, push, and bounded performance tests.
- Do not run destructive security tests against production.
- Use test-owned users, hospitals, requests, responses, subscriptions, and devices. Run the cleanup script after each staged test session.
- Security release blockers outrank map, responsive layout, and visual polish.
- Phase 0 and Phase 1 are minimum release prerequisites, not sufficient proof for workflows still blocked by Phase 2 or Phase 3.
- Do not enable donation verification until Phase 2 passes.
- Do not enable realtime or web push for general use until Phase 3 passes.
- Do not claim GDPR, HIPAA, DPDP, or other legal compliance. Readiness artifacts and technical controls are not legal certification.
- Preserve the existing positive controls: parameterized SQL, React escaping, the 10 KB JSON body limit, CORS restrictions, security headers, and owner-scoped account export.
- Keep SQL migration execution separate from the runtime application role.
- No phase may weaken denial behavior to improve UX. Authorization failures remain server-enforced.
- Do not add time estimates to implementation updates or release notes.

---

## Evidence Classification

### Confirmed vulnerabilities

- A publicly documented production admin demo credential authenticated successfully.
- Self-registered, unverified hospitals immediately received operational access.
- Donation verification can cross hospital ownership boundaries through the direct identifier path and can be replayed.
- WebSocket events lack per-event role and resource authorization and do not match HTTP revocation behavior.
- Production Neon tables had no RLS policies, and the application used `neondb_owner` with `rolbypassrls`.
- Secret-bearing environment files existed in Git history. Treat those values as exposed until every related secret is rotated and invalidation is verified.
- Google sign-in silently creates incomplete donor accounts, links email-matched accounts without verified-email or recent-auth safeguards, and can link privileged accounts.
- Frontend sign-out removes local storage only and does not revoke the server token.
- Strict schemas, pagination, bounded queries, audit coverage, retention controls, push ownership controls, and security regression CI are missing or incomplete.

### Confirmed functional bugs

- The live donor Requests map view does not render at any tested viewport. The button state changes, but no map container appears and Leaflet does not load.

### Likely root causes requiring implementation confirmation

- The current checkout of `frontend/src/screens/DonorRequests.jsx` updates `view` but does not render a map branch. Confirm that the deployed asset corresponds to this source before declaring this the complete production root cause.
- Mobile 360 and 390 browser automation appeared constrained to a narrow left column. Current CSS does not prove a single cause. Reproduce with CSS box measurements and physical devices before changing layout rules.

### Contradictory evidence

- The profile UI says push works when VAPID is configured, and the live audit inferred configuration was pending.
- Earlier deployment work stated VAPID keys were set.
- Resolve this only through a low-volume direct public-key endpoint check and a staged end-to-end device delivery test. Do not treat UI copy or deployment notes as final evidence.

### Untested assumptions

- No real Google identity was used.
- No destructive production mutation, production load test, full admin UI audit, or authenticated cross-role WebSocket emission was performed.
- No physical iOS or Android device was tested.
- Full two-hospital and donor-to-donor mutation tests were not performed against production and must remain outside production.

---

## File and Responsibility Map

### Existing files to modify

- `backend/src/server.js`: app startup, production seed removal, Socket.IO composition.
- `backend/src/db.js`: least-privileged pool and transaction helpers.
- `backend/src/middleware/auth.js`: shared session resolution, account state, role, and hospital approval gates.
- `backend/src/routes/auth.js`: registration, Google exchange, explicit account linking, onboarding, logout, export, deletion.
- `backend/src/routes/admin.js`: hospital approval, bounded admin lists, audit review.
- `backend/src/routes/donor.js`: validated donor inputs, resource checks, paginated owner data.
- `backend/src/routes/hospital.js`: verified hospital gate, bounded donor search, transaction-backed donation verification.
- `backend/src/routes/push.js`: subscription ownership, validation, unsubscribe, staged delivery behavior.
- `backend/src/utils/compliance.js`: fail-closed revocation, required audit events, retention support.
- `backend/db/schema.sql`: canonical constraints, indexes, account states, RLS, and push ownership.
- `frontend/src/hooks/useAuth.js`: async server-revoking logout and onboarding state.
- `frontend/src/hooks/useSocket.js`: socket lifecycle tied to current session and logout.
- `frontend/src/screens/Login.jsx`: Google new-user and existing-user branching.
- `frontend/src/screens/Register.jsx`: pending hospital result and complete server-aligned validation.
- `frontend/src/screens/AdminDashboard.jsx`: pending hospital review and approval controls.
- `frontend/src/screens/DonorRequests.jsx`: real list/map branching and accessible states.
- `frontend/src/screens/DonorProfile.jsx`: push capability state and async logout.
- `frontend/src/lib/notifications.js`: ownership-safe subscribe and unsubscribe.
- `frontend/public/push-handler.js`: same-origin navigation allowlist.
- `frontend/src/index.css`: global width, focus, touch target, map, and reduced-motion rules.
- `frontend/src/public.css`: verified mobile layout fixes only.
- `backend/package.json`, `backend/package-lock.json`: executable test, schema, and security tooling.
- `frontend/package.json`, `frontend/package-lock.json`: executable component and browser tests.
- `.github/workflows/backend-ci.yml`: blocking backend security and migration tests.
- `.github/workflows/frontend-deploy.yml`: blocking frontend tests, build, and viewport smoke checks.

### New focused files

- `backend/db/migrations/2026-07-16-security-remediation.sql`: account states, uniqueness, transaction constraints, indexes, RLS, and grants.
- `backend/src/app.js`: Express app factory without listening, seeding, or migration side effects.
- `backend/src/auth/session.js`: token verification and current database session resolution shared by HTTP and Socket.IO.
- `backend/src/auth/policy.js`: RBAC, record access control, account state, and hospital approval policies.
- `backend/src/auth/google.js`: verified Google token parsing and onboarding or linking decisions.
- `backend/src/db/authorizedTransaction.js`: transaction-local authorization context and rollback handling.
- `backend/src/services/donationService.js`: owner-scoped, locked, idempotent donation completion.
- `backend/src/realtime/socketAuthorization.js`: socket handshake and per-event authorization.
- `backend/src/realtime/publisher.js`: post-commit user and hospital event delivery.
- `backend/src/validation/schemas.js`: strict request schemas and pagination parsing.
- `backend/src/jobs/retention.js`: bounded deletion or anonymization batches from approved retention rules.
- `backend/tests/helpers/seedSecurityFixtures.js`: two hospitals, two donors, admin, requests, responses, and cleanup IDs.
- `backend/tests/auth.identity.test.js`: hospital approval, Google onboarding, linking, and logout tests.
- `backend/tests/access.matrix.test.js`: anonymous, donor, hospital, and admin route matrix.
- `backend/tests/access.idor.test.js`: two-hospital and donor-to-donor resource isolation.
- `backend/tests/donation.transaction.test.js`: ownership, state transition, replay, and rollback.
- `backend/tests/socket.authorization.test.js`: cross-role, stale token, deleted user, and resource event tests.
- `backend/tests/push.ownership.test.js`: subscription ownership, validation, and unsubscribe.
- `backend/tests/validation.pagination.test.js`: strict schemas, limits, and cursor behavior.
- `backend/tests/rls.integration.test.js`: direct database policy tests with the runtime role.
- `backend/tests/retention.audit.test.js`: retention, audit event, and redaction tests.
- `backend/scripts/cleanup-test-data.js`: idempotent cleanup by a test-run identifier.
- `backend/scripts/bounded-performance.js`: capped local or staging performance scenarios.
- `frontend/src/components/RequestMap.jsx`: map rendering and loading, error, location, and empty states.
- `frontend/src/screens/GoogleOnboarding.jsx`: explicit new-account profile completion.
- `frontend/src/screens/AccountLink.jsx`: explicit donor-only Google linking after recent authentication.
- `frontend/src/screens/HospitalPending.jsx`: pending approval status with no operational controls.
- `frontend/src/test/auth.flows.test.jsx`: new Google, existing Google, linking, hospital pending, and logout UI.
- `frontend/src/test/requests.map.test.jsx`: map/list rendering and empty/error behavior.
- `frontend/src/test/responsive.accessibility.test.jsx`: focus, reduced motion, touch target, and width assertions.
- `frontend/e2e/remediation.spec.js`: staged role, map, viewport, logout, and push browser flows.
- `docs/security/credential-rotation-runbook.md`: secret classes, owners, invalidation evidence, and rollback.
- `docs/security/access-matrix.md`: approved role, resource, action, and condition matrix.
- `docs/security/data-retention.md`: approved retention and deletion rules by data class.
- `docs/security/release-evidence.md`: sanitized evidence links and final sign-offs.

---

## Dependency and Release Gates

1. Phase 0 must finish before any release candidate is built.
2. Phase 1 must finish before donor or hospital registration is reopened.
3. Phase 2 must finish before hospital donor discovery, request mutation, or donation verification is enabled.
4. Phase 3 must finish before realtime state delivery or push is enabled for general use.
5. Phase 4 must finish before broad mobile launch.
6. Phase 5 must finish before sustained general availability.
7. Passing Phase 0 and Phase 1 is necessary but does not waive Phase 2 or Phase 3 blockers for those workflows.

---

## Safe Testing Strategy

- Use a dedicated staging Railway service and Neon branch or a local database. Never point test runners at the production `DATABASE_URL`.
- Seed each run with a random `test_run_id` and exactly one admin, two hospitals, two donors, two blood requests, and the response records required by the test.
- Use non-routable example email domains and synthetic phone values reserved for testing.
- Keep performance scenarios bounded to the documented fixture sizes. Default caps:
  - 1,000 donors
  - 200 hospitals
  - 5,000 blood requests
  - 10 concurrent API clients
  - 50 WebSocket clients
  - 20 pages per pagination walk
- Record p50, p95, maximum response time, query count, and error rate. The test must stop if any cap is exceeded.
- Do not compare staging capacity to production capacity without infrastructure parity. Use bounded tests to detect regressions, not to certify maximum scale.
- Use a dedicated browser profile and test device for push. Remove the backend subscription, call browser unsubscribe, clear site data, and verify the test endpoint no longer exists after the run.
- Run `node backend/scripts/cleanup-test-data.js --run-id "$TEST_RUN_ID"` after every staged mutation suite.
- Expected cleanup result: `users=0 hospitals=0 requests=0 responses=0 donations=0 credits=0 subscriptions=0` for the specified test run.
- Production post-deployment smoke tests are limited to health, headers, old-credential denial, pending-role denial, low-volume route denial, and approved account login. No production load or mutation replay test is permitted.

---

## Phase 0: Containment and Credential Rotation

### Task 1: Contain production access and rotate exposed secrets

**Files:**
- Create: `docs/security/credential-rotation-runbook.md`
- Modify during approved execution: Railway and Neon secret configuration, not repository files
- Verify: Git history, Railway variables, Neon roles, Google OAuth client, VAPID keys, CI or deployment tokens

**Interfaces:**
- Consumes: secret inventory with values redacted
- Produces: rotation record containing secret class, owner, rotation timestamp, invalidation check, and evidence reference

- [ ] **Step 1: Write the redacted rotation inventory**

The runbook must contain these secret classes without values:

```markdown
- Neon owner or migration credential
- Neon runtime application credential
- JWT signing secret
- Google OAuth client configuration and any secret-bearing credential
- VAPID private key and subject
- Railway project or deployment token
- GitHub Actions deployment token
- Any third-party API key found by secret scanning
```

- [ ] **Step 2: Disable public demo identities before rotating**

Use an approved administrative database session to suspend known demo users by stable identifiers. Do not include identifiers in the runbook output.

Expected verification: every published demo login returns `401 Invalid credentials` or `403 Account suspended`, and no token is issued.

- [ ] **Step 3: Rotate each secret independently**

Rotate the database credentials first, then the JWT secret, OAuth credentials, VAPID key pair, and deployment tokens. Keep the previous value disabled after the new value passes its one-purpose smoke check.

- [ ] **Step 4: Invalidate existing sessions**

Increment `token_version` for active users as part of the approved containment operation, then verify an existing pre-rotation token receives 401 from both `/api/auth/me` and the Socket.IO handshake.

- [ ] **Step 5: Run secret scanning across current content and history**

Run:

```bash
git log --all --full-history -- backend/.env frontend/.env .env
gitleaks git --redact --no-banner
```

Expected: the scan may report historical findings, but every reported credential class is mapped to a completed rotation record. Current tracked files contain no live secret.

- [ ] **Step 6: Record containment evidence**

Evidence must include sanitized status codes, secret class names, and provider audit references. It must not include token prefixes, connection strings, email addresses, or secret fragments.

**Phase acceptance checks:**

- All publicly documented credentials are denied.
- All historical secret classes are rotated and old values are invalid.
- Existing JWTs are invalid.
- The production runtime does not use an owner or bypass-RLS credential.
- A rollback procedure exists that does not restore an exposed secret.

### Task 2: Remove runtime demo seeding and credential publication

**Files:**
- Create: `backend/src/app.js`
- Modify: `backend/src/server.js`
- Modify: `README.md`
- Modify: `frontend/src/screens/Login.jsx`
- Modify: `.github/workflows/backend-ci.yml`
- Test: `backend/tests/startup.security.test.js`

**Interfaces:**
- Consumes: `createApp({ query, sessionResolver })`
- Produces: side-effect-free app import and production startup with no seed path

- [ ] **Step 1: Write the failing startup test**

```js
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('production startup contains no demo seed or credential copy', async () => {
  const server = await readFile(new URL('../src/server.js', import.meta.url), 'utf8');
  const login = await readFile(new URL('../../frontend/src/screens/Login.jsx', import.meta.url), 'utf8');
  assert.doesNotMatch(server, /seedData\s*\(/);
  assert.doesNotMatch(server, /Seeded admin|password123/);
  assert.doesNotMatch(login, /Demo:/);
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `node --test backend/tests/startup.security.test.js`

Expected: FAIL because runtime seeding and demo copy still exist.

- [ ] **Step 3: Split application creation from server startup**

`backend/src/app.js` must export:

```js
export function createApp({ query, sessionResolver }) {
  const app = express();
  // Register middleware and routes with injected dependencies.
  return app;
}
```

`backend/src/server.js` may listen, create Socket.IO, and close the pool. It must not seed users, mutate schema, or print credentials.

- [ ] **Step 4: Remove demo copy and update operator documentation**

Remove all passwords and usable demo account identifiers from `README.md` and `frontend/src/screens/Login.jsx`. Document a staging-only fixture command that refuses to run when `NODE_ENV=production`.

- [ ] **Step 5: Run the startup and health tests**

Run:

```bash
node --test backend/tests/startup.security.test.js backend/tests/health.test.js
npm --prefix frontend run build
```

Expected: PASS, and importing `createApp` does not bind a port or touch the database.

- [ ] **Step 6: Commit the containment code only after approval**

```bash
git add backend/src/app.js backend/src/server.js backend/tests/startup.security.test.js README.md frontend/src/screens/Login.jsx .github/workflows/backend-ci.yml
git commit -m "security: remove production demo access paths"
```

---

## Phase 1: Identity, Hospital Approval, Google Onboarding, and Account Linking

### Task 3: Add explicit account and hospital approval states

**Files:**
- Create: `backend/db/migrations/2026-07-16-security-remediation.sql`
- Modify: `backend/db/schema.sql`
- Modify: `backend/src/middleware/auth.js`
- Modify: `backend/src/routes/auth.js`
- Modify: `backend/src/routes/admin.js`
- Modify: `frontend/src/App.jsx`
- Create: `frontend/src/screens/HospitalPending.jsx`
- Modify: `frontend/src/screens/Register.jsx`
- Modify: `frontend/src/screens/AdminDashboard.jsx`
- Test: `backend/tests/auth.identity.test.js`

**Interfaces:**
- Produces: `account_status` in `pending_onboarding | active | suspended | deleted`
- Produces: `approval_status` in `pending | approved | rejected | suspended`
- Produces: `POST /api/admin/hospitals/:id/approval`

- [ ] **Step 1: Write failing hospital approval tests**

Cover these exact cases:

```js
test('hospital registration returns 202 without an operational token');
test('pending hospital login is denied with HOSPITAL_APPROVAL_PENDING');
test('pending hospital cannot read donor directory');
test('donor cannot approve a hospital');
test('admin approval activates only the selected hospital');
test('approved hospital can access its own console');
test('suspension invalidates existing HTTP and socket sessions');
```

- [ ] **Step 2: Run the identity tests and verify they fail**

Run: `node --test backend/tests/auth.identity.test.js`

Expected: FAIL because registration currently returns a token and hospital routes check only role.

- [ ] **Step 3: Add database states and constraints**

The migration must add:

```sql
ALTER TABLE users
  ADD COLUMN account_status varchar NOT NULL DEFAULT 'active',
  ADD CONSTRAINT users_account_status_check
    CHECK (account_status IN ('pending_onboarding', 'active', 'suspended', 'deleted'));

ALTER TABLE hospitals
  ADD COLUMN approval_status varchar NOT NULL DEFAULT 'pending',
  ADD COLUMN approved_by uuid REFERENCES users(id),
  ADD COLUMN approved_at timestamptz,
  ADD CONSTRAINT hospitals_approval_status_check
    CHECK (approval_status IN ('pending', 'approved', 'rejected', 'suspended'));
```

Backfill existing verified hospitals to `approved` only after an operator reviews the list. Do not infer approval from role alone.

- [ ] **Step 4: Enforce state centrally**

Add middleware contracts:

```js
export const requireActiveAccount = (req, res, next) => {};
export const requireApprovedHospital = async (req, res, next) => {};
```

Every hospital route must use `authenticate`, `requireActiveAccount`, `requireRole('hospital')`, and `requireApprovedHospital`.

- [ ] **Step 5: Change registration and login behavior**

- Hospital registration returns 202 with `{ status: 'pending_approval' }` and no JWT.
- Pending hospital password login returns 403 with machine code `HOSPITAL_APPROVAL_PENDING`.
- Suspended and deleted accounts never receive a token.
- Admin approval writes approver, timestamp, state transition audit, and increments the hospital user's `token_version`.

- [ ] **Step 6: Add pending and admin review UI**

The hospital registration success path navigates to `/hospital-pending`. The admin hospital tab displays approval state and requires a confirmation step before approve, reject, or suspend.

- [ ] **Step 7: Run phase tests**

Run:

```bash
node --test backend/tests/auth.identity.test.js backend/tests/access.matrix.test.js
npm --prefix frontend run test -- auth.flows.test.jsx
```

Expected: all hospital approval cases pass.

**Phase acceptance checks:**

- A self-registered hospital receives no operational token.
- Pending, rejected, and suspended hospitals receive no donor location or operational request access.
- Only an active admin can approve or suspend.
- Approval affects only the selected hospital and is audited.
- Old tokens stop working after suspension.

### Task 4: Replace silent Google provisioning with onboarding and explicit linking

**Files:**
- Create: `backend/src/auth/google.js`
- Modify: `backend/src/routes/auth.js`
- Modify: `backend/db/migrations/2026-07-16-security-remediation.sql`
- Modify: `backend/db/schema.sql`
- Modify: `frontend/src/screens/Login.jsx`
- Create: `frontend/src/screens/GoogleOnboarding.jsx`
- Create: `frontend/src/screens/AccountLink.jsx`
- Modify: `frontend/src/App.jsx`
- Modify: `frontend/src/hooks/useAuth.js`
- Test: `backend/tests/auth.identity.test.js`
- Test: `frontend/src/test/auth.flows.test.jsx`

**Interfaces:**
- Produces: `POST /api/auth/google` with `session`, `onboarding_required`, or `link_required`
- Produces: `POST /api/auth/google/onboarding`
- Produces: `POST /api/auth/google/link`
- Consumes: Google ID token with verified audience, issuer, subject, email, and `email_verified=true`

- [ ] **Step 1: Write failing Google decision tests**

```js
test('unverified Google email is denied');
test('new Google identity returns onboarding_required and no app token');
test('new Google identity is not inserted into users before onboarding');
test('onboarding requires phone, blood group, date of birth, city, state, and current consent version');
test('completed onboarding creates one active donor and returns a session');
test('existing google_sub donor receives a session');
test('email match without google_sub returns link_required and does not modify the account');
test('explicit link requires an active donor and recent password authentication');
test('hospital and admin accounts cannot be linked through donor Google flow');
test('case-normalized duplicate email cannot create a second identity');
```

- [ ] **Step 2: Run Google tests and verify they fail**

Run: `node --test --test-name-pattern="Google|link|onboarding" backend/tests/auth.identity.test.js`

Expected: FAIL because current code auto-creates and email-links.

- [ ] **Step 3: Normalize identity keys**

Add case-insensitive email uniqueness and normalized phone uniqueness. Use `citext` or a unique index on `lower(email)`:

```sql
CREATE UNIQUE INDEX users_email_lower_unique ON users (lower(email)) WHERE deleted_at IS NULL;
CREATE UNIQUE INDEX users_phone_unique_active ON users (phone) WHERE deleted_at IS NULL;
```

Reject migration if duplicate groups exist. Resolve duplicates through an approved identity review, not an automatic merge.

- [ ] **Step 4: Create a short-lived onboarding record**

Add `pending_google_registrations` with hashed one-time token, Google subject, normalized email, display name, consent version, expiry, and consumed timestamp. Do not store a usable Google ID token.

- [ ] **Step 5: Implement the decision contract**

Example response shapes:

```json
{"success":true,"data":{"flow":"onboarding_required","onboarding_token":"one-time-token"}}
{"success":false,"error":{"code":"ACCOUNT_LINK_REQUIRED","message":"Sign in to link this donor account."}}
{"success":true,"data":{"flow":"session","user":{"role":"donor"},"token":"redacted"}}
```

The actual token is returned to the client but must always be redacted in tests and logs.

- [ ] **Step 6: Implement explicit donor-only linking**

`POST /api/auth/google/link` requires:

- an active donor session
- a password reauthentication performed in the current request or a server-issued recent-auth proof
- a verified Google email exactly matching normalized account email
- no existing Google subject on either account
- an audit event before returning success

Admin and hospital roles return 403 `PRIVILEGED_GOOGLE_LINK_DENIED`.

- [ ] **Step 7: Build distinct frontend flows**

- New Google identity opens `/google-onboarding`.
- Existing Google subject enters the donor home.
- Email match opens `/account-link` and asks the user to sign in and explicitly confirm.
- The onboarding form cannot submit until required profile and consent fields pass client validation.
- The backend remains authoritative for all checks.

- [ ] **Step 8: Run backend and frontend flow tests**

Run:

```bash
node --test backend/tests/auth.identity.test.js
npm --prefix frontend run test -- auth.flows.test.jsx
```

Expected: all new-user, existing-user, linking, privileged denial, and duplicate cases pass.

### Task 5: Make logout revoke the server token

**Files:**
- Modify: `backend/src/utils/compliance.js`
- Modify: `backend/src/routes/auth.js`
- Modify: `frontend/src/hooks/useAuth.js`
- Modify: `frontend/src/screens/DonorProfile.jsx`
- Modify: `frontend/src/screens/AdminDashboard.jsx`
- Modify: `frontend/src/hooks/useSocket.js`
- Test: `backend/tests/auth.identity.test.js`
- Test: `frontend/src/test/auth.flows.test.jsx`

**Interfaces:**
- Produces: `async logout(): Promise<void>`
- Produces: fail-closed `blacklistToken(jti, userId, expiresAt)`

- [ ] **Step 1: Add failing revocation tests**

Test password and Google sessions:

```js
test('logout revokes the current token before returning success');
test('blacklist write failure returns 503 and does not claim logout success');
test('revoked token is denied by auth/me');
test('revoked token is denied by Socket.IO handshake');
```

- [ ] **Step 2: Change blacklist helpers to surface failure**

`blacklistToken` must throw on insert failure. `isTokenBlacklisted` must fail closed for protected operations when the revocation store is unavailable.

- [ ] **Step 3: Await server logout before local cleanup**

Frontend contract:

```js
const logout = async () => {
  try {
    await api.post('/auth/logout');
  } finally {
    localStorage.removeItem('token');
    setUser(null);
  }
};
```

The socket disconnects immediately after local state is cleared.

- [ ] **Step 4: Run logout tests**

Run:

```bash
node --test --test-name-pattern="logout|revoked" backend/tests/auth.identity.test.js
npm --prefix frontend run test -- auth.flows.test.jsx
```

Expected: HTTP and Socket.IO deny the revoked token.

---

## Phase 2: RBAC, Record Access Control, Row-Level Controls, and Transactional Integrity

### Task 6: Define and enforce the role and resource matrix

**Files:**
- Create: `docs/security/access-matrix.md`
- Create: `backend/src/auth/policy.js`
- Modify: `backend/src/routes/admin.js`
- Modify: `backend/src/routes/donor.js`
- Modify: `backend/src/routes/hospital.js`
- Test: `backend/tests/access.matrix.test.js`
- Test: `backend/tests/access.idor.test.js`

**Interfaces:**
- Produces: `authorize({ actor, action, resource }): AuthorizationDecision`
- Produces: `loadOwnedHospital(userId)`
- Produces: `requireResource(decision)`

- [ ] **Step 1: Write the approved matrix**

The matrix must encode these minimum decisions:

- Anonymous: public auth and health only.
- Donor: own profile, own responses, own donations, own credits, own notifications, eligible open requests.
- Hospital: only its hospital profile, requests, request responses, donations, and approved donor discovery.
- Admin: approved platform administration actions, with every sensitive read and mutation audited.
- Pending or suspended identities: no operational resources.
- Cross-role access: denied unless a named admin action explicitly allows it.

- [ ] **Step 2: Write failing route matrix tests**

For every protected route, test anonymous, donor, hospital, and admin. Assert exact status classes:

- 401 for no or invalid session
- 403 for valid role or account state denial
- 404 for cross-tenant record lookup where existence should be hidden
- 2xx only for the documented actor and condition

- [ ] **Step 3: Write two-hospital IDOR tests**

Hospital A must receive 404 and no data when it attempts to:

- read Hospital B request
- update Hospital B request
- search Hospital B reference code
- verify Hospital B donation by `request_id + donor_id`
- verify Hospital B donation by reference code
- read Hospital B donor responses

Hospital B must receive the symmetric denials for Hospital A.

- [ ] **Step 4: Write donor-to-donor isolation tests**

Donor A must not read or mutate Donor B:

- profile
- response
- arrival
- donation history
- credits
- notification
- export
- push subscription

Use guessed UUIDs and known fixture UUIDs. Both must be denied.

- [ ] **Step 5: Implement policy helpers and replace ad hoc checks**

Routes may load resources, but authorization decisions must be expressed through `policy.js`. SQL ownership predicates remain required even when policy checks pass.

- [ ] **Step 6: Run the matrix and IDOR suites**

Run:

```bash
node --test backend/tests/access.matrix.test.js backend/tests/access.idor.test.js
```

Expected: all cross-role and cross-resource cases are denied, and every allowed case is explicit.

### Task 7: Introduce a least-privileged runtime role and RLS containment

**Files:**
- Modify: `backend/db/migrations/2026-07-16-security-remediation.sql`
- Modify: `backend/db/schema.sql`
- Modify: `backend/src/db.js`
- Create: `backend/src/db/authorizedTransaction.js`
- Test: `backend/tests/rls.integration.test.js`
- Modify during approved execution: Neon runtime credential and Railway `DATABASE_URL`

**Interfaces:**
- Produces: migration owner role used only by migrations
- Produces: `raktasetu_app` runtime role with no owner, superuser, createdb, createrole, replication, or bypassrls capability
- Produces: `withAuthorizationContext(context, callback)`

- [ ] **Step 1: Write direct RLS tests using the runtime role**

The suite must set actor context and attempt direct SQL reads and writes. It must prove:

- Donor A cannot select Donor B owner rows.
- Hospital A cannot select or update Hospital B requests.
- Hospital A cannot insert a donation for Hospital B request.
- Admin access succeeds only with `app.role=admin`.
- Missing actor context returns zero tenant rows or an authorization error.

- [ ] **Step 2: Add the authorized transaction helper**

Required signature:

```js
export async function withAuthorizationContext(
  { userId, role, hospitalId = null },
  work
) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query("SELECT set_config('app.user_id', $1, true)", [userId]);
    await client.query("SELECT set_config('app.role', $1, true)", [role]);
    await client.query("SELECT set_config('app.hospital_id', $1, true)", [hospitalId || '']);
    const result = await work(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
```

- [ ] **Step 3: Add RLS policies**

Enable and force RLS on tenant-bearing tables:

- `users`
- `hospitals`
- `blood_requests`
- `donor_responses`
- `donations`
- `credits`
- `family_members`
- `notifications`
- `push_subscriptions`
- `token_blacklist`
- `audit_logs`

Policies must use transaction-local actor settings and ownership joins. Migration and retention jobs use a separate owner credential, never the runtime pool.

- [ ] **Step 4: Revoke broad privileges**

Revoke public schema creation and all table privileges from `PUBLIC`. Grant the runtime role only required table and sequence operations.

- [ ] **Step 5: Move route queries into authorization context**

Every authenticated route and authenticated socket resource lookup must use the context helper. Anonymous auth routes use narrowly scoped functions that do not expose tenant tables.

- [ ] **Step 6: Run migration and RLS tests on a disposable database**

Run:

```bash
npm --prefix backend run db:test:migrate
node --test backend/tests/rls.integration.test.js backend/tests/access.idor.test.js
```

Expected: migration applies once, reapplies safely where documented, runtime role has `rolbypassrls=false`, and all RLS tests pass.

**Phase acceptance checks:**

- Runtime connections never use `neondb_owner`.
- RLS is enabled and forced for every tenant-bearing table.
- Application ownership checks and RLS both deny the two-hospital and donor-to-donor cases.
- A deliberately weakened application query still cannot return another tenant's row.

### Task 8: Make donation verification owner-scoped, state-constrained, transactional, and idempotent

**Files:**
- Create: `backend/src/services/donationService.js`
- Create: `backend/src/db/authorizedTransaction.js`
- Modify: `backend/src/routes/hospital.js`
- Modify: `backend/db/migrations/2026-07-16-security-remediation.sql`
- Modify: `backend/db/schema.sql`
- Test: `backend/tests/donation.transaction.test.js`

**Interfaces:**
- Produces: `completeDonation({ actor, requestId, donorId, units }): Promise<DonationResult>`
- Produces: one donation and one credit record per request and donor response

- [ ] **Step 1: Add uniqueness and state constraints**

```sql
ALTER TABLE donor_responses
  ADD CONSTRAINT donor_responses_request_donor_unique UNIQUE (request_id, donor_id);

ALTER TABLE donations
  ADD CONSTRAINT donations_request_donor_unique UNIQUE (request_id, donor_id);

ALTER TABLE credits
  ADD CONSTRAINT credits_related_donation_unique UNIQUE (related_donation_id);
```

Add checks for valid response states, positive units, valid blood groups, request status, and credit types.

- [ ] **Step 2: Write failing transaction tests**

Required cases:

```js
test('Hospital A cannot complete Hospital B response');
test('only an arrived response can be completed');
test('first completion creates one donation and one credit');
test('replay returns 409 and creates no additional records');
test('concurrent completion creates exactly one donation');
test('credit insert failure rolls back response, donation, donor dates, and notification');
test('request and donor blood group are derived from locked records, not request body');
```

- [ ] **Step 3: Implement the transaction with row locks**

Within one authorization-context transaction:

1. Load the actor's approved hospital.
2. Lock the request by `id` and `hospital_id`.
3. Lock the donor response by `request_id`, `donor_id`, and `status='arrived'`.
4. Reject an existing donation with 409.
5. Insert donation.
6. Insert one related credit.
7. Update response to completed.
8. Update donor eligibility dates.
9. Insert notification.
10. Insert required audit event.
11. Commit.

- [ ] **Step 4: Ignore client-supplied derived values**

Remove `blood_group`, `credits_earned`, `hospital_id`, `verified_by`, and eligibility dates from accepted request input. Derive them on the server.

- [ ] **Step 5: Run transaction and IDOR suites**

Run:

```bash
node --test backend/tests/donation.transaction.test.js backend/tests/access.idor.test.js
```

Expected: all ownership, state, replay, concurrency, and rollback tests pass.

---

## Phase 3: WebSocket, Push Ownership, and Revocation

### Task 9: Give Socket.IO HTTP-equivalent authentication and authorization

**Files:**
- Create: `backend/src/auth/session.js`
- Create: `backend/src/realtime/socketAuthorization.js`
- Create: `backend/src/realtime/publisher.js`
- Modify: `backend/src/server.js`
- Modify: `backend/src/middleware/auth.js`
- Modify: `backend/src/routes/donor.js`
- Modify: `backend/src/routes/hospital.js`
- Modify: `frontend/src/hooks/useSocket.js`
- Test: `backend/tests/socket.authorization.test.js`

**Interfaces:**
- Produces: `resolveSession(token)` shared by HTTP and Socket.IO
- Produces: `publishToUser(userId, event, payload)`
- Produces: `publishToHospital(hospitalId, event, payload)`

- [ ] **Step 1: Write failing socket authorization tests**

Required cases:

- anonymous connection denied
- query-string token denied
- revoked token denied
- expired token denied
- deleted or suspended user denied
- pending hospital denied
- donor cannot emit hospital event
- hospital cannot emit donor event
- Hospital A cannot subscribe to or trigger Hospital B resource event
- Donor A cannot trigger Donor B response or arrival event
- role changed after token issuance is enforced from current database state
- logout disconnects the active socket

- [ ] **Step 2: Reuse the current database session resolver**

`resolveSession` verifies algorithm, issuer, audience, expiry, JTI revocation, token version, current role, account state, and hospital approval.

- [ ] **Step 3: Remove query-string tokens**

Accept the JWT only from `socket.handshake.auth.token`. Never log it.

- [ ] **Step 4: Remove client-authoritative mutation events**

Delete or disable direct state-changing handlers for:

- `donor:go-on-call`
- `donor:go-off-call`
- `hospital:new-request`
- `donor:respond`
- `donor:arrived`
- `hospital:verify`

HTTP services perform the authorized transaction, then `publisher.js` emits a derived event after commit.

- [ ] **Step 5: Use multi-socket rooms**

Join `user:{userId}` and, for approved hospitals, `hospital:{hospitalId}`. Do not store only one socket per user.

- [ ] **Step 6: Enforce expiry and revocation during connection lifetime**

Schedule disconnect at JWT expiry. Disconnect matching user rooms on logout, suspension, role change, token-version change, and account deletion.

- [ ] **Step 7: Run socket tests**

Run:

```bash
node --test backend/tests/socket.authorization.test.js
```

Expected: every cross-role, cross-resource, stale-session, and query-token case is denied.

### Task 10: Protect push subscription ownership and verify delivery

**Files:**
- Modify: `backend/src/routes/push.js`
- Modify: `backend/db/migrations/2026-07-16-security-remediation.sql`
- Modify: `backend/db/schema.sql`
- Modify: `frontend/src/lib/notifications.js`
- Modify: `frontend/src/screens/DonorProfile.jsx`
- Modify: `frontend/public/push-handler.js`
- Test: `backend/tests/push.ownership.test.js`
- Test: `frontend/e2e/remediation.spec.js`

**Interfaces:**
- Produces: `GET /api/push/status`
- Produces: owner-safe `POST /api/push/subscribe`
- Produces: `DELETE /api/push/subscriptions/:id`
- Produces: same-origin notification navigation

- [ ] **Step 1: Write failing push ownership tests**

Required cases:

```js
test('endpoint owned by Donor A cannot be reassigned by Donor B');
test('Donor B cannot delete Donor A subscription');
test('invalid endpoint scheme or oversized keys are rejected');
test('expired provider endpoint is deleted only for its owner');
test('push test returns counts without returning endpoint values');
```

- [ ] **Step 2: Prevent endpoint transfer**

On endpoint conflict:

- same owner updates keys and timestamp
- different owner returns 409 `SUBSCRIPTION_OWNED_BY_ANOTHER_ACCOUNT`
- no query returns endpoint values to unrelated users

- [ ] **Step 3: Validate subscription shape**

Accept HTTPS endpoints only, cap endpoint and key lengths, reject unknown body fields, and redact provider error details from API responses.

- [ ] **Step 4: Add unsubscribe and device state**

The frontend calls browser `subscription.unsubscribe()` and the owner-scoped backend DELETE endpoint. The UI displays `unsupported`, `permission_required`, `subscribed`, `denied`, or `server_unconfigured`.

- [ ] **Step 5: Constrain notification clicks**

Resolve notification URLs against `self.location.origin`. If origin differs or route is not allowlisted, open `/#/home`.

- [ ] **Step 6: Resolve the VAPID contradiction**

In staging:

1. `GET /api/push/vapid-public-key` returns 200 and a syntactically valid public key.
2. Subscribe one dedicated test browser.
3. Send one server test push.
4. Confirm foreground, background, and click navigation behavior.
5. Unsubscribe in browser and backend.
6. Verify the endpoint is absent.

If step 1 returns 503 or delivery fails, record the exact stage and sanitized provider status. Do not infer the cause from UI copy.

- [ ] **Step 7: Run push tests**

Run:

```bash
node --test backend/tests/push.ownership.test.js
npm --prefix frontend run test:e2e -- --grep "push"
```

Expected: ownership tests pass, one staged delivery succeeds, and cleanup verifies no retained test subscription.

**Phase acceptance checks:**

- WebSocket role and record decisions match HTTP.
- Revoked, expired, suspended, deleted, and pending sessions cannot connect or remain connected.
- No state mutation trusts a client event payload.
- A push endpoint cannot move between accounts.
- End-to-end staged delivery and complete cleanup pass.

---

## Phase 4: Map and Responsive Desktop and Mobile UI

### Task 11: Render the donor request map with complete states

**Files:**
- Create: `frontend/src/components/RequestMap.jsx`
- Modify: `frontend/src/screens/DonorRequests.jsx`
- Modify: `frontend/src/index.css`
- Test: `frontend/src/test/requests.map.test.jsx`
- Test: `frontend/e2e/remediation.spec.js`

**Interfaces:**
- Consumes: `requests`, `userLocation`, `loading`, `error`
- Produces: accessible list/map toggle and map state

- [ ] **Step 1: Confirm source and deployment parity**

Record the current deployed asset hash and verify it was built from the reviewed commit. If it differs, reproduce against a staging build from the current checkout before finalizing root cause.

- [ ] **Step 2: Write failing map component tests**

Required cases:

```jsx
it('mounts RequestMap only when map view is selected');
it('renders request markers for valid coordinates');
it('renders an empty map with a no-nearby-requests overlay');
it('shows a location-required state when donor coordinates are missing');
it('shows a retry action when request or tile loading fails');
it('keeps the list available when geolocation is denied');
```

- [ ] **Step 3: Implement the map branch**

`DonorRequests` must branch on `view`:

```jsx
{view === 'map' ? (
  <RequestMap requests={requests} userLocation={userLocation} />
) : (
  <RequestList requests={requests} />
)}
```

Use the installed `react-leaflet` and `leaflet` packages. Import Leaflet CSS through the frontend entry or map component and ensure the container has an explicit responsive height.

- [ ] **Step 4: Add accessible map behavior**

- Toggle uses `aria-pressed`.
- Map has an accessible name.
- Marker details are available in a keyboard-reachable adjacent list.
- Empty, loading, tile error, location missing, and geolocation denied are distinct.
- No API key is introduced if OpenStreetMap tiles remain the approved provider.

- [ ] **Step 5: Run component and browser tests**

Run:

```bash
npm --prefix frontend run test -- requests.map.test.jsx
npm --prefix frontend run test:e2e -- --grep "map"
```

Expected: map mounts at every required viewport, markers and empty state pass, and list fallback remains usable.

**Map acceptance checks:**

- Map container appears after selecting Map.
- Leaflet and CSS load without console or CSP errors.
- Container has non-zero width and height.
- Tiles load at the approved origin.
- Request markers match fixture coordinates.
- Empty data shows a map-specific empty state.
- Missing location and denied geolocation have useful fallbacks.
- List view remains functional without map support.

### Task 12: Verify and repair responsive layout, focus, reduced motion, and touch targets

**Files:**
- Modify only after reproduction: `frontend/src/index.css`
- Modify only after reproduction: `frontend/src/public.css`
- Modify: affected frontend screen or component files identified by box measurements
- Test: `frontend/src/test/responsive.accessibility.test.jsx`
- Test: `frontend/e2e/remediation.spec.js`

**Interfaces:**
- Produces: no horizontal overflow at required widths
- Produces: visible focus and reduced-motion behavior

- [ ] **Step 1: Capture exact layout evidence before changing CSS**

At 360x800 and 390x844, record:

```js
({
  innerWidth: window.innerWidth,
  rootWidth: document.documentElement.getBoundingClientRect().width,
  bodyWidth: document.body.getBoundingClientRect().width,
  appWidth: document.getElementById('root').getBoundingClientRect().width,
  scrollWidth: document.documentElement.scrollWidth
})
```

Also record bounding boxes for `.public-page`, `.public-nav`, `.public-hero__inner`, the auth form wrapper, and authenticated app wrapper.

- [ ] **Step 2: Reproduce on physical devices**

Test one current iOS Safari device and one current Android Chrome device at default text scaling and increased text scaling. If physical devices do not reproduce the narrow-column issue, classify the browser automation result as tool-specific and do not add speculative width overrides.

- [ ] **Step 3: Write failing viewport assertions for confirmed causes**

For each route, assert `scrollWidth <= innerWidth + 1`, required controls remain visible, and tap targets are at least 44 by 44 CSS pixels.

- [ ] **Step 4: Apply the smallest cause-specific fix**

Do not add global `max-width: 100vw` or overflow clipping until the overflowing element is identified. Fix the exact grid, fixed element, transformed canvas, or width calculation that exceeds its parent.

- [ ] **Step 5: Strengthen focus and reduced motion**

- Every keyboard-focusable control has a visible `:focus-visible` indicator on light and dark backgrounds.
- Google-rendered control and custom toggles retain visible surrounding focus context.
- Three.js and pulse animation stop or become static under `prefers-reduced-motion: reduce`.
- Color is not the only active-state indicator.

- [ ] **Step 6: Run the full viewport matrix**

Required viewport and route coverage:

- 360x800: landing, donor login, hospital login, Google onboarding, donor home, requests list, requests map, profile
- 390x844: same routes
- 768x1024: same routes plus hospital console
- 1366x768: public pages, donor pages, hospital console, admin console
- 1440x900: public pages, donor pages, hospital console, admin console

Also test 800x360 and 844x390 landscape for fixed navigation and dialogs.

- [ ] **Step 7: Run automated and physical checks**

Run:

```bash
npm --prefix frontend run test -- responsive.accessibility.test.jsx
npm --prefix frontend run test:e2e -- --grep "viewport|focus|motion"
```

Expected: no horizontal overflow, all critical controls are reachable, focus is visible, motion is reduced, and physical-device notes are attached.

**Phase acceptance checks:**

- Required viewport matrix passes.
- 360 and 390 widths use the available viewport without unintended right whitespace.
- No horizontal overflow is hidden as a substitute for fixing it.
- Map, bottom navigation, forms, modals, and sticky controls remain usable.
- Physical iOS and Android checks pass or a device-specific issue is documented with a release decision.

---

## Phase 5: Validation, Pagination, Performance, CI, and Compliance Operations

### Task 13: Add strict schemas and bounded pagination

**Files:**
- Create: `backend/src/validation/schemas.js`
- Modify: `backend/src/routes/auth.js`
- Modify: `backend/src/routes/admin.js`
- Modify: `backend/src/routes/donor.js`
- Modify: `backend/src/routes/hospital.js`
- Modify: `backend/src/routes/push.js`
- Modify: `backend/package.json`
- Modify: `backend/package-lock.json`
- Test: `backend/tests/validation.pagination.test.js`

**Interfaces:**
- Produces: `validate(schema)` middleware
- Produces: cursor response `{ items, next_cursor, has_more }`
- Produces: default page size 25 and maximum page size 100

- [ ] **Step 1: Install one maintained schema validator**

Run: `npm --prefix backend install zod`

Expected: manifest and lockfile update with the current compatible version.

- [ ] **Step 2: Define strict schemas**

Schemas must reject unknown keys and enforce:

- normalized email and phone length
- name, city, state, notes, title, and body limits
- valid blood group and role enumerations
- latitude from -90 through 90
- longitude from -180 through 180
- radius and units bounds
- valid UUID route parameters
- boolean types without string coercion
- HTTPS push endpoint and bounded key sizes
- current consent policy version
- server-side adult age rule

- [ ] **Step 3: Write type-confusion and boundary tests**

Include arrays instead of objects, nested operator-like objects, oversized strings, unknown fields, invalid dates, `NaN`-like strings, negative pagination, excessive limit, invalid UUID, and boundary-valid values.

- [ ] **Step 4: Add keyset pagination**

Paginate:

- admin users
- admin requests
- admin audit logs
- hospital requests
- hospital donors
- donor history
- donor credits
- notifications

Use stable `(created_at, id)` cursors. Never interpolate sort columns from request input without a fixed allowlist.

- [ ] **Step 5: Bound geospatial and export work**

- Move distance filtering into SQL where supported, or apply a hard candidate limit before Node distance calculations.
- Cap hospital radius at the approved product maximum.
- Batch notification inserts.
- Stream or chunk account export so each database query has a bounded page. The export must not silently omit records.

- [ ] **Step 6: Run validation and pagination tests**

Run:

```bash
node --test backend/tests/validation.pagination.test.js
```

Expected: malformed input receives 400, oversized input receives 413 where appropriate, and pagination returns stable non-overlapping pages.

### Task 14: Expand audit coverage and implement approved retention operations

**Files:**
- Modify: `backend/src/utils/compliance.js`
- Create: `backend/src/jobs/retention.js`
- Create: `docs/security/data-retention.md`
- Modify: `backend/src/routes/auth.js`
- Modify: `backend/src/routes/admin.js`
- Modify: `backend/src/services/donationService.js`
- Test: `backend/tests/retention.audit.test.js`

**Interfaces:**
- Produces: named mandatory audit actions
- Produces: `runRetentionBatch({ now, limit, dryRun })`

- [ ] **Step 1: Obtain approved retention rules**

The document must name the accountable owner, legal basis, retention period, deletion or anonymization action, exception, and evidence for:

- user profile
- hospital profile
- blood request
- donor response
- donation
- credit
- notification
- push subscription
- token blacklist
- consent record
- audit log
- pending Google registration

Engineering must not invent legal periods. Until approval exists, retention jobs run in dry-run mode only.

- [ ] **Step 2: Define required audit events**

At minimum:

- login success and failure category without credentials
- logout and session revocation
- Google onboarding and linking
- hospital approval, rejection, suspension
- admin sensitive list and record access
- request create and status transition
- donor response and arrival
- donation completion and replay denial
- export and deletion
- push subscribe, unsubscribe, and test send
- retention dry run and execution

- [ ] **Step 3: Make critical audit writes transactional**

Hospital approval, account linking, donation completion, account deletion, and retention execution must not succeed if their required audit record cannot be written.

- [ ] **Step 4: Implement bounded retention batches**

The job accepts `dryRun=true` by default and a maximum batch size. It logs counts and record classes, never PII. Production execution requires an approved change record.

- [ ] **Step 5: Add account deletion and consent tests**

Verify:

- deletion revokes all sessions
- push subscriptions are removed
- direct identifiers are anonymized or deleted according to the approved rule
- retained clinical or financial records preserve referential integrity
- consent withdrawal changes processing behavior according to approved product and legal rules
- export remains owner-scoped

- [ ] **Step 6: Run retention and audit tests**

Run:

```bash
node --test backend/tests/retention.audit.test.js
```

Expected: dry run is non-mutating, approved execution is bounded, and critical actions have one redacted audit event.

### Task 15: Make security regression, frontend tests, and bounded performance blocking in CI

**Files:**
- Modify: `backend/package.json`
- Modify: `backend/package-lock.json`
- Modify: `frontend/package.json`
- Modify: `frontend/package-lock.json`
- Modify: `.github/workflows/backend-ci.yml`
- Modify: `.github/workflows/frontend-deploy.yml`
- Create: `backend/scripts/bounded-performance.js`
- Create: `backend/scripts/cleanup-test-data.js`

**Interfaces:**
- Produces: deterministic `npm test`, `npm run test:security`, `npm run test:rls`, and `npm run test:bounded-performance`
- Produces: deterministic frontend unit and staged end-to-end commands

- [ ] **Step 1: Standardize the backend runner**

Use Node's built-in test runner for existing ESM tests:

```json
{
  "scripts": {
    "test": "node --test tests/*.test.js",
    "test:security": "node --test tests/auth.identity.test.js tests/access.matrix.test.js tests/access.idor.test.js tests/donation.transaction.test.js tests/socket.authorization.test.js tests/push.ownership.test.js",
    "test:rls": "node --test tests/rls.integration.test.js",
    "test:bounded-performance": "node scripts/bounded-performance.js"
  }
}
```

Convert `backend/tests/health.test.js` to ESM and remove graceful skips. A missing app must fail.

- [ ] **Step 2: Install and configure frontend tests**

Run:

```bash
npm --prefix frontend install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add deterministic `test`, `test:e2e`, and accessibility scripts using the selected browser runner. Keep browser dependencies pinned through the lockfile.

- [ ] **Step 3: Make CI fail on lint and tests**

Remove `|| echo` from lint. Backend CI must run:

1. clean install
2. lint
3. unit and integration tests
4. migration on disposable PostgreSQL
5. RLS direct tests
6. security suite
7. bounded performance smoke
8. secret scan

Frontend CI must run:

1. clean install
2. lint
3. component tests
4. build
5. viewport and map browser smoke on a local build

- [ ] **Step 4: Define bounded performance thresholds**

On the fixed staging dataset:

- list endpoints return no more than requested page size
- p95 API latency does not regress more than 20 percent from the checked-in staging baseline
- no request executes more than the route's documented query budget
- notification fan-out uses bounded batches
- the script exits before any configured fixture or concurrency cap is exceeded

Do not publish production capacity claims from these tests.

- [ ] **Step 5: Verify cleanup**

The CI job must run cleanup in an `always()` step and fail the evidence job if test-owned records remain.

- [ ] **Step 6: Run the complete local gate**

Run:

```bash
npm --prefix backend test
npm --prefix backend run test:security
npm --prefix backend run test:rls
npm --prefix backend run test:bounded-performance
npm --prefix frontend test
npm --prefix frontend run build
npm --prefix frontend run test:e2e
```

Expected: all commands exit 0, no runner is missing, no suite skips because setup is absent, and cleanup reports zero retained fixtures.

**Phase acceptance checks:**

- Every request body, parameter, and query has a strict schema.
- List endpoints are paginated and bounded.
- Bounded performance tests run only on local or staging fixtures.
- Security suites are blocking in CI.
- Audit and retention controls have approved operational documentation.
- GDPR and HIPAA readiness wording is clearly described as non-certification.

---

## Phase-Level Verification Matrix

### Identity and role tests

- Anonymous cannot access donor, hospital, admin, export, push mutation, or socket resources.
- Donor cannot access hospital or admin resources.
- Pending hospital cannot access operational hospital resources.
- Approved Hospital A cannot access Hospital B resources.
- Admin cannot silently become donor or hospital through Google linking.
- Suspended and deleted accounts cannot use old HTTP or socket sessions.

### Record isolation tests

- Two-hospital request read, update, search, response, and verification attempts are denied.
- Donor A cannot read or mutate Donor B response, arrival, history, credit, export, notification, or push subscription.
- Direct SQL through the runtime role preserves the same boundaries.

### Google flow tests

- New verified Google identity receives onboarding requirement and no app session.
- New unverified Google email is denied.
- Completed onboarding creates one donor only after required profile and consent.
- Existing Google-subject donor signs in normally.
- Existing email without Google subject receives link-required response and no mutation.
- Explicit link requires recent authentication and donor role.
- Admin and hospital linking are denied.

### Transaction tests

- Only the owning approved hospital can complete an arrived response.
- Replay and concurrent replay create one donation and one credit.
- Any intermediate failure rolls back all state.

### Realtime and push tests

- Cross-role socket events are denied.
- Cross-hospital and donor-to-donor socket resource attempts are denied.
- Revoked, expired, pending, suspended, and deleted sessions cannot connect.
- Push endpoint ownership cannot transfer.
- Staged push delivery, click routing, unsubscribe, and cleanup pass.

### Map and viewport tests

- Map loading, populated, empty, missing-location, denied-geolocation, tile-error, and retry states pass.
- 360x800, 390x844, 768x1024, 1366x768, and 1440x900 pass without horizontal overflow.
- Landscape mobile, keyboard focus, reduced motion, touch targets, and physical iOS and Android checks pass.

---

## Go or No-Go Release Checklist

### Mandatory no-go conditions

- [ ] Any published or historical demo credential still works.
- [ ] Any historical secret class lacks rotation and invalidation evidence.
- [ ] Production runtime still uses an owner or bypass-RLS database role.
- [ ] A pending hospital can reach any operational route or socket.
- [ ] Google creates an app-enabled donor before onboarding.
- [ ] Email-only Google linking can modify an existing account.
- [ ] Privileged accounts can link through donor Google flow.
- [ ] Two-hospital or donor-to-donor isolation tests fail.
- [ ] Donation verification is cross-tenant, replayable, or non-transactional.
- [ ] Revoked or suspended sessions can use WebSocket.
- [ ] Push subscription ownership can transfer.
- [ ] Blocking security CI is unavailable or red.

### Workflow-specific no-go conditions

- [ ] Keep donation verification disabled until Phase 2 passes.
- [ ] Keep realtime mutation and push disabled until Phase 3 passes.
- [ ] Do not claim broad mobile readiness until Phase 4 passes on physical iOS and Android.
- [ ] Do not claim sustained operational readiness until Phase 5 passes.

### Required release evidence

- [ ] Sanitized credential rotation record.
- [ ] Hospital pending and approval test output.
- [ ] Google new-user and existing-user flow output.
- [ ] Full role and resource matrix output.
- [ ] Two-hospital IDOR and donor isolation output.
- [ ] RLS metadata and direct runtime-role test output.
- [ ] Donation replay, concurrency, and rollback output.
- [ ] WebSocket cross-role and revocation output.
- [ ] Push public-key, staged delivery, unsubscribe, and cleanup output.
- [ ] Map state and viewport matrix screenshots or traces.
- [ ] CI run with no skipped security gates.
- [ ] Retention and audit owner approvals.
- [ ] Legal review acknowledgement that readiness materials are not certification.

## Decision Recommendation

**Current decision: block release.**

Phase 0 containment and Phase 1 identity controls are the minimum approval gates. Passing them is necessary, but a full operational release also requires Phase 2 for sensitive hospital and donation workflows and Phase 3 for realtime and push. Map and responsive work follows the security gates and is required before broad mobile launch.

No application fix, deployment change, secret rotation, commit, push, or deploy was performed while producing this plan.

## Approval Handoff

Request explicit approval before implementation. The safest first authorization is:

> Approve Phase 0 only. Implement containment code and prepare the credential-rotation runbook, then stop for review before changing live secrets or deployment configuration.
