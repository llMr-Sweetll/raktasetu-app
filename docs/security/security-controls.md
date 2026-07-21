# RaktaSetu security controls

This document records implemented controls and known boundaries. It is not a claim of GDPR, HIPAA, or other regulatory certification.

## Identity and sessions

- Donor and hospital registration collect user-supplied contact data; no synthetic phone numbers are generated.
- Hospital accounts remain operationally blocked until an administrator records an approval decision.
- Google identity tokens are verified for audience, issuer, subject, and verified email.
- Google never auto-links by email. Existing donors must confirm their password; hospital and admin accounts cannot use the Google flow.
- New Google donors receive a 15-minute, one-time onboarding token and must provide donor profile fields and explicit consent.
- Access tokens use a fixed issuer, audience, algorithm allowlist, `jti`, token version, and 30-minute default lifetime.
- Opaque refresh tokens rotate on use. Logout blacklists the access-token `jti`, revokes the refresh token (httpOnly cookie on web; body on Capacitor native), and disconnects that user's sockets.
- Web SPA: access token is memory-only; refresh token is an `httpOnly; Secure; SameSite=Strict` cookie scoped to `/api/auth`. Capacitor native keeps localStorage for both.
- Revocation checks fail closed.

## Authorization and data isolation

- API middleware re-resolves the current account and hospital approval state on every authenticated request.
- Role and owner checks return not-found for cross-owner records where appropriate.
- PostgreSQL Row-Level Security is enabled and forced for identity, hospital, request, response, donation, credit, notification, push, token, and audit tables.
- The runtime role has no superuser, role-creation, database-creation, replication, or RLS-bypass capability.
- Request context is set transaction-locally (`app.user_id`, `app.role`, and `app.hospital_id`).
- Donation completion locks the hospital, request, donor response, and donor; accepts only `arrived` responses; rejects replay; derives blood group server-side; and writes donation, credit, status, eligibility, notification, and audit records in one transaction.

## Input, transport, and browser controls

- Mutation payloads use strict Zod schemas with bounded strings, enums, numeric ranges, UUIDs, and HTTPS-only push endpoints.
- JSON request bodies are limited to 10 KB.
- API and authentication rate limits are separate from static assets.
- Global API limiter (~400 req / 15 min) keys by authenticated user id (`Bearer` JWT `sub`) when present, otherwise by client IP — so shared CGNAT / carrier NATs do not starve distinct signed-in users. The `/api/auth/` limiter stays tighter (~30 / 15 min) and IP-keyed so credential stuffing is not amortized across accounts.
- Password policy for registration / password-change schemas is Zod min 12 with upper, lower, digit, and special character (legacy unused `validatePassword` helper removed).
- Socket.IO accepts tokens only in the private auth payload, joins identity-scoped rooms, disconnects at token expiry, and exposes no mutation implementation.
- Push endpoints cannot transfer between users. Expired subscriptions are removed only within the authenticated owner scope.
- Helmet, HSTS in production, explicit CORS origins, permissions policy, no-store API responses, and restrictive content policies are enabled.

## Operational boundary

The MVP records whether a contact has been verified. It does not claim SMS ownership verification, hospital accreditation, clinical eligibility, emergency dispatch, or regulatory certification. Administrators must verify hospital documentation through the documented manual process before approval.

## Production operations (post-MVP)

- Admin bootstrap uses `backend/scripts/bootstrap-admin.js` with `ALLOW_ADMIN_BOOTSTRAP=1`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` (min 16 chars) against `MIGRATION_DATABASE_URL`. Do not keep bootstrap passwords in Railway service variables after the first successful login.
- Hospital matching and donation verify use `SECURITY DEFINER` helpers (`hospital_visible_on_call_donors`, `hospital_donor_blood_group`, `hospital_record_donor_donation`) so `raktasetu_rls` never needs full-row `users` SELECT for donors. Push broadcast uses `deliverable_push_subscriptions` / `delete_gone_push_subscription` under the same least-privilege model.
- The production app process refuses to start when `MIGRATION_DATABASE_URL` is present. Keep the owner URL on CI/operator workstations and the retention cron service only.
- Runtime database role is `raktasetu_rls` (`DB_RUNTIME_ROLE`); RLS is forced and that role has `rolbypassrls = false`.
- Push reports configured via `/api/push/status` when VAPID env vars are present. Treat historically exposed VAPID material as rotate-when-convenient; rotation requires donors to re-subscribe.
- GitHub Actions deploy (`.github/workflows/railway-deploy.yml`) requires repository secrets `RAILWAY_TOKEN` and `MIGRATION_DATABASE_URL`. The Railway CLI cannot mint a project token non-interactively; create a token in the Railway dashboard (Account/Project → Tokens), then:

```bash
gh secret set RAILWAY_TOKEN
gh secret set MIGRATION_DATABASE_URL
```

- Neon production project for the KLE pilot is `raktasetu-ap-southeast-1` (`delicate-shape-76707101`, region `aws-ap-southeast-1` / Singapore). Mumbai was not available on the plan. Pre-cutover safety branch on the former US project: `pre-ap-southeast-cutover-2026-07-18`. Runtime login remains `raktasetu_app` with `SET ROLE raktasetu_rls`; owner URL stays off the app service.

## Account deletion and retention (DPDP readiness support)

- Authenticated `POST /api/auth/delete-account` with `{ confirm: "DELETE" }` soft-deactivates the account immediately (`account_status=deactivated`, `deleted_at=NOW()`, `is_on_call=false`), bumps `token_version`, revokes refresh tokens, and blacklists the current access-token `jti`. Password accounts must re-confirm the current password; Google-only onboarded donors (opaque password, `consent_source=google_onboarding`) do not.
- Deletion is blocked with **409** while the donor has an `active` redemption or an accepted/arrived (uncompleted) blood-request response.
- Soft-deleted accounts remain restorable for **30 days** via `POST /api/auth/restore-account` (email/phone + password). After the window, restore returns **410**. Login/Google against a within-window deactivated account returns **403** `ACCOUNT_RESTORABLE`.
- The retention job (`backend/src/jobs/retention.js`) anonymizes deactivated accounts older than 30 days in place: nulls/overwrites name, email, phone, `aadhaar_hash`, latitude/longitude, `date_of_birth`, and sex; removes push subscriptions and `family_members`; sets `account_status=deleted`. **Donation rows, credits ledger entries, and audit_logs keep the anonymized user id** for blood-bank traceability. This is a technical retention decision, not a claim of DPDP certification.
- Matching helpers (`hospital_visible_on_call_donors` and related) already require `account_status='active'` and `deleted_at IS NULL`, so deactivated donors vanish from hospital matching immediately.

## Open hardening (not blocking current MVP)

Phase 2/3 remediation items that remain for sustained general availability (not claimed complete here): broader staged IDOR/concurrency evidence for hospital mutation and donation paths, authenticated Socket.IO cross-role emission tests, device-level push delivery proof, retention job operational schedule, and physical mobile viewport sign-off. Keep donation verification, realtime mutation, and general push scoped to the controls already enforced server-side; do not market them as fully Phase 3-certified.
