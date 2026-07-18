# Credential rotation runbook

Operational procedure for rotating RaktaSetu production secrets. **Never commit secret values** to git, chat, or this file.

## Roles and where URLs live

| Secret | Role / purpose | Location |
| --- | --- | --- |
| `DATABASE_URL` | Neon login `raktasetu_app` (app then `SET ROLE raktasetu_rls`) | Railway service `raktasetu` only |
| `RETENTION_DATABASE_URL` | Neon owner / maintenance (`neondb_owner`) | Railway cron `raktasetu-retention` only |
| `MIGRATION_DATABASE_URL` | Neon owner (migrations) | GitHub Actions secret only — **never** on the app service |
| `JWT_SECRET` | Access-token signing | Railway service `raktasetu` |

Production boot refuses if `MIGRATION_DATABASE_URL` is present on the app process.

## 2026-07-18 KLE pilot rotation (evidence)

| Item | Result |
| --- | --- |
| Date (UTC) | 2026-07-18 |
| `JWT_SECRET` | Rotated on Railway `raktasetu` (new value length 64). Redeploy + migration bumps `token_version` and revokes active refresh tokens. |
| Historical git `.env` keys | `PORT`, `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN` only — **no** VAPID or Google client IDs in that blob |
| Historical Neon `neondb_owner` password (from commit `8c0c3027`) | Initially still valid (`HISTORICAL_NEON_CONNECT=SUCCESS`). After Neon role reset: **`FAILED` / `28P01`**. |
| Neon `neondb_owner` | Password reset via Neon API/CLI; Railway `RETENTION_DATABASE_URL` and GitHub `MIGRATION_DATABASE_URL` updated (secret list timestamp `2026-07-18T13:18:58Z`). |
| Neon `raktasetu_app` | Password reset via Neon API; Railway `DATABASE_URL` updated. App service user remains `raktasetu_app` (not owner). |
| App service has owner URL? | Confirmed absent (`MIGRATION_DATABASE_URL` not on `raktasetu`). |
| VAPID / Google client IDs | Not present in leaked historical `.env`; no rotation required for this incident. |

### Optional follow-up (needs explicit approval)

Git history still contains the old `backend/.env` blob (`8c0c3027` … `d5f9c5f1`). Purging with BFG or `git filter-repo` requires a **force-push** to `main`. Do **not** purge unless an operator explicitly approves history rewrite.

## Standard JWT rotation

1. Generate: `openssl rand -base64 48`
2. Set on Railway app: `railway variables --service raktasetu --set JWT_SECRET=...` (coordinate with a deploy).
3. Invalidate sessions: bump `users.token_version` and revoke open `refresh_tokens` (access tokens are opaque JWTs; refresh tokens are hashed and do **not** die from JWT rotation alone).
4. Verify: old access token → `401`; login issues a new session.

## Standard Neon password rotation

1. Prefer Neon Console / API `reset_password` for each role on the production branch (keeps Neon’s stored password in sync).
2. Update **in this order**:
   - App: Railway `DATABASE_URL` → `raktasetu_app` only
   - Retention: Railway `RETENTION_DATABASE_URL` → owner/maintenance only
   - CI: `gh secret set MIGRATION_DATABASE_URL` ← owner URL via stdin
3. Prove historical / previous passwords fail (`28P01`) without logging the secret.
4. Smoke: `/api/health` green; migration job can connect; retention cron can connect.
5. Never put the owner URL on the app service.

## If a rotation script fails mid-flight

1. Probe app vs owner connectivity without printing passwords.
2. Recover owner via `neonctl connection-string` / Neon `reset_password` API using operator neonctl auth.
3. Re-apply Railway + GitHub URL updates before declaring complete.
