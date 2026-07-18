# User-Ready Today Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make RaktaSetu safe enough for a closed, invite-only cohort of real donors and hospitals without claiming DPDP/HIPAA certification.

**Architecture:** Keep Railway (API + SPA) + Neon Postgres + HashRouter. Fix the hospital↔donor RLS read model with a narrow visibility path, align QR/`ref_code`, wire Web Push (and optional socket) on request create, harden ops (secrets, retention cron, CI), then polish invite UX. Do not widen RLS to full donor PII.

**Tech Stack:** React 18, Vite, Express 4, Socket.IO 4, PostgreSQL/Neon RLS, Web Push (VAPID), Railway, GitHub Actions.

## Global Constraints

- **Do not implement until this plan is explicitly approved** by the user in chat.
- No em dashes in new docs or public copy.
- Do not claim DPDP, HIPAA, GDPR, or other compliance certification.
- Prefer invite-only MVP safety over enterprise perfection.
- Never print secret values in logs, commits, PRs, or chat.
- Do not load-test or run destructive security tests against production.
- Migrations are source of truth; do not treat `backend/db/schema.sql` as complete.
- Keep HashRouter for this plan; BrowserRouter/Capacitor deep links are P2.
- Security failures stay fail-closed; do not weaken denial behavior for UX.

## File and responsibility map

| Area | Primary files |
|------|----------------|
| RLS donor visibility | New migration under `backend/db/migrations/`; possibly `backend/src/db/` helper |
| Hospital create/verify | `backend/src/routes/hospital.js`, `backend/src/services/donationService.js` |
| Push delivery | `backend/src/routes/push.js` or new `backend/src/services/pushDelivery.js`; call from hospital create |
| Socket optional | `backend/src/realtime/publisher.js`, `frontend/src/hooks/useSocket.js`, donor home/alert |
| QR contract | `frontend/src/screens/DonorOnTheWay.jsx`, `frontend/src/screens/ConsoleVerify.jsx` |
| Auth UX | `frontend/src/screens/Login.jsx`, `frontend/src/App.jsx`, `frontend/src/hooks/useAuth.js` |
| Console honesty | `frontend/src/screens/ConsoleNewRequest.jsx` |
| Ops / CI | Railway variables, `.github/workflows/railway-deploy.yml`, `frontend` Playwright workflow |
| Retention | `backend/src/jobs/retention.js`, new Railway cron service |
| Docs | `docs/security/security-controls.md`, `docs/operational-readiness.md`, `CHANGELOG.md` |

## Spec coverage map

| Audit requirement | Tasks |
|-------------------|-------|
| Hospital RLS donor read model | P0 Tasks 1–3 |
| QR / ref_code | P0 Task 4 |
| Push or honest delivery | P0 Task 5 (push) + P1 Task 8 (copy/socket) |
| Ops: migration URL, GH secrets, CI | P0 Tasks 6–7 |
| Retention schedule | P1 Task 9 |
| Pending hospital / Google link UX | P1 Tasks 10–11 |
| Console reach honesty | P1 Task 12 |
| JWT TTL / TLS hygiene | P1 Tasks 13–14 |
| Invite runbook | P0 Task 15 |
| P2 hardening | Tasks 16–20 |

---

# Must-have today (P0)

### Task 1: Prove the RLS breakage with a failing test

**Files:**
- Create or extend: `backend/tests/rls-hospital-donor-visibility.test.js` (follow existing backend test patterns)
- Reference: `backend/db/migrations/2026-07-16-security-remediation.sql` (`users_isolation`)
- Reference: `backend/src/routes/hospital.js` (donor SELECT)

**Interfaces:**
- Consumes: `TEST_DATABASE_URL` with migrations applied; `SET ROLE raktasetu_rls`
- Produces: failing assertion that hospital context cannot currently SELECT an on-call donor row needed for matching

- [ ] **Step 1: Write the failing test**

Under hospital authorization context (`app.role=hospital`, `app.hospital_id=<approved>`), assert that selecting `id, blood_group, latitude, longitude` for an on-call donor either returns zero rows today (current bug) **or** document the intended post-fix behavior and assert the desired visibility after Task 2. Prefer: test the **desired** contract (hospital can see minimal on-call donor fields) so Task 2 makes it pass.

```js
// Desired contract sketch
// with hospital context + SET ROLE raktasetu_rls:
// SELECT id, blood_group FROM users WHERE id = $donorId
// → exactly one row with blood_group only fields needed
// SELECT email, phone, name FROM users WHERE id = $donorId
// → still denied or nullled by view/function (choose one approach in Task 2)
```

- [ ] **Step 2: Run test and confirm it fails before the migration**

Run: `npm --prefix backend test -- --grep 'hospital donor visibility'`  
Expected: FAIL under current `users_isolation`.

- [ ] **Step 3: Commit only the failing test** (after approval to implement)

```bash
git add backend/tests/rls-hospital-donor-visibility.test.js
git commit -m "test: assert hospital can read minimal on-call donor fields under RLS"
```

---

### Task 2: Add narrow hospital donor visibility (migration)

**Files:**
- Create: `backend/db/migrations/2026-07-18-hospital-donor-visibility.sql`
- Modify: hospital create and donors list to use the safe path if a function/view is introduced
- Do not broaden `users_isolation` to `app_role() = 'hospital'` with full row access

**Recommended approach (pick one and stick to it):**

**A (preferred):** `SECURITY DEFINER` function owned by a privileged migration role, `REVOKE` from public, `GRANT EXECUTE` to `raktasetu_rls`:

```sql
CREATE OR REPLACE FUNCTION hospital_visible_on_call_donors(p_blood_groups text[])
RETURNS TABLE (
  id uuid,
  blood_group text,
  latitude double precision,
  longitude double precision
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT u.id, u.blood_group, u.latitude, u.longitude
  FROM users u
  WHERE u.role = 'donor'
    AND u.account_status = 'active'
    AND u.is_on_call = true
    AND u.deleted_at IS NULL
    AND u.blood_group = ANY (p_blood_groups)
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;
```

Also add a single-donor blood group reader for donation completion:

```sql
CREATE OR REPLACE FUNCTION hospital_donor_blood_group(p_donor_id uuid)
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT u.blood_group
  FROM users u
  WHERE u.id = p_donor_id
    AND u.role = 'donor'
    AND u.account_status = 'active'
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;
```

**B (alternative):** additional permissive RLS policy limited to columns is not possible in Postgres RLS (row not column). Use a view with `security_barrier` + grants instead of full table SELECT.

- [ ] **Step 1: Write migration with GRANT/REVOKE and comments linking to audit**
- [ ] **Step 2: Apply on disposable `TEST_DATABASE_URL` only first**
- [ ] **Step 3: Re-run Task 1 tests → PASS**
- [ ] **Step 4: Commit migration**

```bash
git add backend/db/migrations/2026-07-18-hospital-donor-visibility.sql
git commit -m "fix: allow hospitals minimal on-call donor visibility under RLS"
```

**Acceptance:** Under `raktasetu_rls` + hospital context, matching SELECT via the safe function returns on-call donors; hospital still cannot read arbitrary user emails/phones via `SELECT * FROM users`.

---

### Task 3: Switch hospital create-request and donation verify to the safe path

**Files:**
- Modify: `backend/src/routes/hospital.js` (create request donor discovery; `/donors` if present)
- Modify: `backend/src/services/donationService.js` (blood group read)
- Modify: response shape — stop returning full `nearby_donors` PII to the client; return `donors_notified` count only

- [ ] **Step 1: Replace**

```sql
SELECT id, name, blood_group, latitude, longitude FROM users WHERE ...
```

with the Task 2 function (or view). Drop `name` from matching response.

- [ ] **Step 2: In `donationService.js`, replace**

```sql
SELECT blood_group FROM users WHERE id=$1 ...
```

with `SELECT hospital_donor_blood_group($1)`.

- [ ] **Step 3: Change create-request JSON to**

```json
{ "success": true, "data": { "request": {}, "donors_notified": 0 } }
```

No `nearby_donors` array.

- [ ] **Step 4: Add/adjust API tests for create-request + verify under RLS role**
- [ ] **Step 5: Commit**

```bash
git commit -m "fix: use hospital-safe donor reads for match and verify"
```

**Verification:**

1. Approved hospital creates request with an on-call compatible donor in radius → `donors_notified >= 1`
2. Donor accepts and arrives → hospital verify with `ref_code` succeeds
3. Second verify → replay rejected
4. Hospital `SELECT email FROM users` under RLS still fails / empty

---

### Task 4: Align donor QR with hospital `ref_code`

**Files:**
- Modify: `frontend/src/screens/DonorOnTheWay.jsx`
- Verify: `frontend/src/screens/ConsoleVerify.jsx` and `backend/src/routes/hospital.js` lookup `WHERE br.ref_code = $1`

**Current bug:** QR encodes `RS-DONOR-${request.id}`; hospital searches `ref_code`.

- [ ] **Step 1: Set QR value to `request.ref_code`** (required string). If missing, show error state, do not invent `RS-DONOR-*`.
- [ ] **Step 2: Keep human-readable ref text equal to the QR payload**
- [ ] **Step 3: Add a frontend unit/component test or Playwright step that the QR value equals `ref_code`**
- [ ] **Step 4: Commit**

```bash
git commit -m "fix: encode blood request ref_code in donor verification QR"
```

**Acceptance:** Scanning the on-the-way QR into console verify resolves the same request as typing the shown ref.

---

### Task 5: Send Web Push when a blood request notifies donors

**Files:**
- Create: `backend/src/services/pushDelivery.js` (send to user subscriptions; delete gone endpoints)
- Modify: `backend/src/routes/hospital.js` after notification insert
- Reuse: VAPID config from `backend/src/routes/push.js` (extract shared configure helper if needed)
- Optional same task: `publishToUser(donorId, 'blood_request', payload)` from `backend/src/realtime/publisher.js`

- [ ] **Step 1: Implement `sendPushToUser(userId, payload)`**
  - Load `push_subscriptions` for user
  - `webpush.sendNotification`
  - On 404/410, delete that subscription row (owner-scoped)
  - No-op if VAPID unset (log once)

- [ ] **Step 2: After each notification insert on create-request, call `sendPushToUser`**
- [ ] **Step 3: Payload must deep-link to `/#/alert/<requestId>` (hash route)**
- [ ] **Step 4: Unit-test delivery helper with mocked web-push**
- [ ] **Step 5: Commit**

```bash
git commit -m "feat: send web push when hospitals broadcast blood requests"
```

**Acceptance:** Donor with push enabled receives a notification for a new matching request without calling `/api/push/test`. If push fails, DB notification still exists.

**Invite fallback if push slips:** do not claim realtime; tell invitees to keep the app open / refresh Requests. Still ship Task 5 for true user-ready.

---

### Task 6: Ops hygiene for database credentials

**Files / systems:** Railway dashboard or `railway variables`; no app code required unless startup guard added.

- [ ] **Step 1: Remove `MIGRATION_DATABASE_URL` from the Railway app service** (keep only for CI secret + operator workstation)
- [ ] **Step 2: Confirm app still has `DATABASE_URL` as `raktasetu_app` and `DB_RUNTIME_ROLE=raktasetu_rls`**
- [ ] **Step 3: Confirm app does not have `ALLOW_ADMIN_BOOTSTRAP`**
- [ ] **Step 4: Document in `docs/operational-readiness.md` that owner URL must never return to the web service**
- [ ] **Step 5: Optional harden:** refuse boot in production if `MIGRATION_DATABASE_URL` is set in process env

**Acceptance:** `railway variables` name list on the web service shows no `MIGRATION_DATABASE_URL`; health still green.

---

### Task 7: Restore GitHub → Railway deploy secrets and green CI

**Files:**
- `.github/workflows/railway-deploy.yml` (already correct shape)
- Frontend workflow that runs Playwright (add `npx playwright install --with-deps` or browser subset)

- [ ] **Step 1: Create Railway token in dashboard; set repo secrets**

```bash
gh secret set RAILWAY_TOKEN
gh secret set MIGRATION_DATABASE_URL
```

(Paste values interactively; do not echo.)

- [ ] **Step 2: Fix Frontend Build Check Playwright install step**
- [ ] **Step 3: Re-run workflows on main; confirm Deploy succeeds**
- [ ] **Step 4: Record in ops doc that CLI `railway up` is fallback only**

**Acceptance:** Latest `Deploy to Railway` and frontend checks are green; migrate step sees non-empty secret.

---

### Task 8: Invite operator runbook (document only)

**Files:**
- Modify: `docs/operational-readiness.md` (add "First cohort invite" section)
- Optional: short `docs/superpowers/plans/2026-07-18-invite-runbook.md` only if the section grows large

**Outline to write:**

1. Confirm P0 Tasks 1–7 done and health green
2. Bootstrap/rotate admin if needed (`bootstrap-admin.js`); change password; remove bootstrap env
3. Invite 1–2 hospitals: register → verify license offline → admin approve
4. Invite 5–20 donors: register or Google → complete profile → enable push → go on-call near hospital
5. Dry-run: hospital creates non-critical test request → donor receives push → accept → arrive → verify via QR/`ref_code` → credits
6. Tell invitees: closed beta; not emergency dispatch; no SMS OTP; data may be processed on US Neon + SEA Railway
7. Privacy mailbox `privacy@raktasetu.org` monitored; security `security@raktasetu.org`
8. Rollback: redeploy last good commit; do not restore DB unless accepting write loss

- [ ] **Step 1: Write the section**
- [ ] **Step 2: Commit docs**

**Acceptance:** A new operator can follow the runbook without reading the audit.

---

# Same-day P1 polish

### Task 9: Schedule retention

- Add Railway cron service or scheduled job: `npm --prefix backend run retention`
- Set `RETENTION_DATABASE_URL` only on that cron service (owner or maintenance role)
- Verify one successful run in logs
- Update `docs/operational-readiness.md`

### Task 10: Pending hospital login redirect

- Modify `frontend/src/screens/Login.jsx`: on `HOSPITAL_APPROVAL_PENDING`, navigate to `/hospital-pending`
- Keep API 403 as source of truth

### Task 11: Harden Google account-link vs authed redirect

- Modify `frontend/src/App.jsx` / `useAuth.js` so `/account-link` can complete linking without racing `user` redirect
- Recommended: defer `login()` until link succeeds, or allow `/account-link` when `linkingInProgress`

### Task 12: Honest console reach copy

- Modify `frontend/src/screens/ConsoleNewRequest.jsx` to show API `donors_notified`
- Remove fabricated `50 * groups * factor`

### Task 13: Align access token TTL

- Prefer `JWT_EXPIRES_IN=30m` with refresh tokens
- Update `backend/.env.example` and README deploy sample away from `7d`
- Set Railway value accordingly (no secret printing)

### Task 14: DB TLS verification

- Modify `backend/src/db.js` to use proper CA verification for Neon when ready
- Test against staging first; do not break prod blindly

### Task 15: Wire donor socket listener (optional same-day)

- Use `frontend/src/hooks/useSocket.js` on donor home/requests
- Listen for `blood_request` and navigate or badge refresh
- Only after publisher is called in Task 5

---

# Later P2 hardening

### Task 16: Neon restore window and backups

- Increase Neon history retention beyond 6 hours if plan allows
- Document restore drill on a branch

### Task 17: Normalize API error shapes

- Donor/hospital routes return `{ success, error: { code, message } }` consistently

### Task 18: Global `Cache-Control: no-store` on `/api/*`

### Task 19: a11y + Kannada honesty

- BottomNav `aria-label` / `aria-current`
- Remove or implement Kannada translations; do not claim language support without strings

### Task 20: Capacitor / BrowserRouter readiness

- Deep-link intent filters; Cap App listeners; server fallback for path routes
- Only when native packaging is an actual release goal

### Task 21: Compliance program (org, not code)

- Appoint grievance contact with SLA
- Subprocessor list (Railway, Neon, Google Identity, Web Push)
- Cross-border note for Indian principals
- Incident response drill
- Counsel review of Privacy/Terms before open registration

---

## Staged verification (after P0)

Run against staging or disposable Neon branch with `DB_RUNTIME_ROLE=raktasetu_rls`:

```bash
npm --prefix backend ci && npm --prefix backend test
npm --prefix frontend ci && npm --prefix frontend test && npm --prefix frontend run build
# Playwright after browsers installed
npm --prefix frontend exec playwright install
npm --prefix frontend run test:e2e
```

Production smoke (non-destructive):

```bash
curl -sS https://raktasetu-production.up.railway.app/api/health
curl -sS https://raktasetu-production.up.railway.app/api/push/status
```

Authenticated E2E (invite accounts only): register donor → on-call → hospital request → push → accept → arrive → QR verify → credits → export → logout revocation.

---

## Do not implement until approved

This plan is documentation only until the user explicitly says to implement (for example: "approve P0" or "implement the user-ready plan").

**Suggested approval options:**

1. Approve **P0 only** (Tasks 1–8) for closed invites
2. Approve **P0 + same-day P1**
3. Request changes to approach (especially Task 2 RLS design A vs B)

---

## Self-review

- Spec coverage: P0 gates from audit map to Tasks 1–8; P1/P2 mapped
- No TBD placeholders for required P0 work
- QR, push, RLS, ops, runbook each have acceptance criteria
- Compliance tasks stay org-scoped and non-certifying
