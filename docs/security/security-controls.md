# RaktaSetu security controls

This document records implemented controls and known boundaries. It is not a claim of GDPR, HIPAA, or other regulatory certification.

## Identity and sessions

- Donor and hospital registration collect user-supplied contact data; no synthetic phone numbers are generated.
- Hospital accounts remain operationally blocked until an administrator records an approval decision.
- Google identity tokens are verified for audience, issuer, subject, and verified email.
- Google never auto-links by email. Existing donors must confirm their password; hospital and admin accounts cannot use the Google flow.
- New Google donors receive a 15-minute, one-time onboarding token and must provide donor profile fields and explicit consent.
- Access tokens use a fixed issuer, audience, algorithm allowlist, `jti`, token version, and 30-minute default lifetime.
- Opaque refresh tokens rotate on use. Logout blacklists the access-token `jti`, revokes the supplied refresh token, and disconnects that user's sockets.
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
- Socket.IO accepts tokens only in the private auth payload, joins identity-scoped rooms, disconnects at token expiry, and exposes no mutation implementation.
- Push endpoints cannot transfer between users. Expired subscriptions are removed only within the authenticated owner scope.
- Helmet, HSTS in production, explicit CORS origins, permissions policy, no-store API responses, and restrictive content policies are enabled.

## Operational boundary

The MVP records whether a contact has been verified. It does not claim SMS ownership verification, hospital accreditation, clinical eligibility, emergency dispatch, or regulatory certification. Administrators must verify hospital documentation through the documented manual process before approval.

## Production operations (post-MVP)

- Admin bootstrap uses `backend/scripts/bootstrap-admin.js` with `ALLOW_ADMIN_BOOTSTRAP=1`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` (min 16 chars) against `MIGRATION_DATABASE_URL`. Do not keep bootstrap passwords in Railway service variables after the first successful login.
- Runtime database role is `raktasetu_rls` (`DB_RUNTIME_ROLE`); RLS is forced and that role has `rolbypassrls = false`.
- Push reports configured via `/api/push/status` when VAPID env vars are present. Treat historically exposed VAPID material as rotate-when-convenient; rotation requires donors to re-subscribe.
- GitHub Actions deploy (`.github/workflows/railway-deploy.yml`) requires repository secrets `RAILWAY_TOKEN` and `MIGRATION_DATABASE_URL`. The Railway CLI cannot mint a project token non-interactively; create a token in the Railway dashboard (Account/Project → Tokens), then:

```bash
gh secret set RAILWAY_TOKEN
gh secret set MIGRATION_DATABASE_URL
```

- The pre-cutover Neon safety branch `mvp-pre-role-switch-2026-07-16` was removed after cutover; production continues on the primary Neon `main` branch only.

## Open hardening (not blocking current MVP)

Phase 2/3 remediation items that remain for sustained general availability (not claimed complete here): broader staged IDOR/concurrency evidence for hospital mutation and donation paths, authenticated Socket.IO cross-role emission tests, device-level push delivery proof, retention job operational schedule, and physical mobile viewport sign-off. Keep donation verification, realtime mutation, and general push scoped to the controls already enforced server-side; do not market them as fully Phase 3-certified.
