# Operational readiness

## Release gates

1. `npm --prefix backend ci && npm --prefix backend run lint && npm --prefix backend test`
2. Apply migrations with the owner-only `MIGRATION_DATABASE_URL`; never expose it to the application process.
3. Run RLS and bounded-performance checks against a disposable `TEST_DATABASE_URL`.
4. `npm --prefix frontend ci && npm --prefix frontend run lint && npm --prefix frontend test && npm --prefix frontend run build`
5. Run Playwright mobile and desktop smoke tests against staging.
6. Verify required production variable names are present without printing values.
7. Deploy once, inspect deployment logs, then verify health, auth red paths, role boundaries, logout revocation, map rendering, and responsive routes.

## Database roles and migrations

- `MIGRATION_DATABASE_URL`: database owner; CI migration step and operator workstation only.
- `DATABASE_URL`: Neon login role `raktasetu_app` (not `neondb_owner`). The API immediately `SET ROLE raktasetu_rls` (NOLOGIN, `rolbypassrls=false`) because Neon-managed login roles retain `BYPASSRLS`.
- `DB_RUNTIME_ROLE`: defaults to `raktasetu_rls` when `NODE_ENV=production`.
- `RETENTION_DATABASE_URL`: owner or dedicated maintenance role used only by the scheduled retention service.
- Migrations are checksum-tracked in `schema_migrations`. Never edit an applied migration.
- Take a provider backup or restore point before production schema changes. Test restoration in a non-production branch before relying on it.

## Admin bootstrap (no public demo admin)

Production must not ship documented demo admin passwords. To create or rotate an operator admin:

```bash
ALLOW_ADMIN_BOOTSTRAP=1 \
ADMIN_EMAIL='ops@example.org' \
ADMIN_PASSWORD='<strong-secret-min-16>' \
MIGRATION_DATABASE_URL='...' \
node backend/scripts/bootstrap-admin.js
```

Change the password on first login. Do not commit the password or put it in README.

## Hospital approval

1. Compare the submitted license number and hospital contact details with the appropriate official registry or direct institution contact.
2. Record the reason and evidence reference outside the public application logs.
3. Approve, reject, or suspend through the admin API/UI. The transition increments token version and disconnects active sockets.
4. Re-review when ownership or license details materially change.

## Retention

Run `npm --prefix backend run retention` daily in a separate Railway cron service with `RETENTION_DATABASE_URL`.

- Expired Google onboarding records: one day after expiry.
- Expired/revoked refresh tokens: seven/thirty days.
- Expired token blacklist entries: one day after expiry.
- Notifications: 365 days.
- Audit events: seven years unless `legal_hold=true`.

Retention is implemented as bounded 1,000-row batches under an advisory lock. These are project defaults, not a legal determination; the organization must validate periods with counsel and policy owners.

## Incident response

1. Contain: suspend affected accounts, increment token versions, revoke refresh-token families, and block compromised infrastructure credentials.
2. Preserve: set `legal_hold=true` for relevant audit rows and preserve provider logs/backups.
3. Investigate: determine affected identities, records, time window, and access path without copying secrets or unnecessary personal data into tickets.
4. Recover: rotate only confirmed or plausibly exposed secrets, deploy the fix, and verify revoked sessions cannot reconnect.
5. Notify: follow applicable contractual and legal requirements. Do not make unsupported breach or compliance claims.
6. Review: document root cause, detection gaps, corrective controls, and owner/due date.

## Rollback

- Application rollback: redeploy the last known-good commit only if its schema expectations remain compatible.
- Database rollback: prefer a forward corrective migration. Restore from backup only after explicitly accepting loss of writes since the restore point.
- Never force-push or rewrite release history.
