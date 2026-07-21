# Contributing

## Repo

- Canonical remote: `https://github.com/Chandrashekhar-Hegde/raktasetu-app.git`
- Default branch: `main`
- Live MVP: https://raktasetu-production.up.railway.app/ (cutover target: https://raktasetu.in/ — [docs/ops/domain-cutover.md](./docs/ops/domain-cutover.md))

## Before you push

```bash
npm --prefix backend ci && npm --prefix backend run lint && npm --prefix backend test
npm --prefix frontend ci && npm --prefix frontend run lint && npm --prefix frontend test && npm --prefix frontend run build
```

For UI/route changes, also run Playwright from `frontend/` (`npx playwright install --with-deps chromium webkit && npm run test:e2e`).

## Pull requests

1. Prefer a focused branch and PR over large mixed commits.
2. Use the PR template; link any relevant `docs/superpowers/` plan or issue.
3. Do not commit `.env`, tokens, or owner database URLs.
4. Do not put `MIGRATION_DATABASE_URL` on the Railway **app** service (boot refuses).
5. Update `CHANGELOG.md` for user-visible or ops-visible changes.

## Secrets

| Where | What |
|-------|------|
| GitHub Actions | `MIGRATION_DATABASE_URL` (migrate job). Optional `RAILWAY_TOKEN` for CLI deploy. |
| Railway `raktasetu` | App runtime (`DATABASE_URL` RLS role, JWT, VAPID, Google, …) — never migration owner URL. |
| Railway `raktasetu-retention` | `RETENTION_DATABASE_URL` only (+ `NODE_ENV`). |

See [docs/ops/ci-cd.md](./docs/ops/ci-cd.md).

## Deploy

Pushing to `main` deploys the app via the Railway GitHub App. Actions run migrations. Optional CLI deploy needs a Project Token secret (dashboard-created; see CI/CD doc).

## Invite cohort

Follow [docs/operational-readiness.md](./docs/operational-readiness.md) — invite-only readiness support, not a compliance certification.
