# CI/CD

Canonical remote: `https://github.com/Chandrashekhar-Hegde/raktasetu-app.git`  
Live: https://raktasetu-production.up.railway.app/

## Pipelines

| Workflow | File | When | Purpose |
|----------|------|------|---------|
| Backend CI | `.github/workflows/backend-ci.yml` | `backend/**` | Lint, unit/security tests, syntax, `/api/health` smoke |
| Frontend CI | `.github/workflows/frontend-ci.yml` | `frontend/**` | Lint, Vitest, Vite build, Playwright (Chromium + WebKit) |
| Migrate and Deploy | `.github/workflows/railway-deploy.yml` | app paths on `main` | Apply owner migrations; optional CLI deploy |

GitHub Pages and Cloudflare tunnel hosting are **retired**. The SPA is served by Express from `frontend/dist` on Railway.

## Production deploy path (default)

1. Push to `main` on the canonical GitHub remote.
2. Railway GitHub App auto-builds and deploys service **`raktasetu`** (project `raktasetu`).
3. GitHub Actions applies migrations using repository secret **`MIGRATION_DATABASE_URL`** only.
4. Cron service **`raktasetu-retention`** runs `npm --prefix backend run retention` on schedule with **`RETENTION_DATABASE_URL`** (owner/maintenance URL on that service only).

### Secrets

| GitHub secret | Required | Used by | Notes |
|---------------|----------|---------|-------|
| `MIGRATION_DATABASE_URL` | Yes (migrate job) | Actions migrate step | Neon owner URL. **Never** set on the Railway app service — production boot exits if present. |
| `RAILWAY_TOKEN` | Optional | Actions `railway up` | Railway **Project Token** from dashboard → Project Settings → Tokens. Not creatable via CLI. |

No `DATABASE_URL` / `JWT_SECRET` GitHub secrets are required for CI. Runtime secrets live on Railway services.

### Optional Actions CLI deploy (path A)

When you want Actions to call `railway up` in addition to GitHub App auto-deploy:

```bash
# 1. Create a Project Token in the Railway dashboard (project raktasetu)
# 2. Set it without printing into the shell history of shared logs:
gh secret set RAILWAY_TOKEN
# paste token, Enter, Ctrl-D
```

Until `RAILWAY_TOKEN` is set, the deploy step **skips green** and prints setup hints. Migrations still run.

## Local checks

```bash
npm --prefix backend ci && npm --prefix backend run lint && npm --prefix backend test
npm --prefix frontend ci && npm --prefix frontend run lint && npm --prefix frontend test && npm --prefix frontend run build
cd frontend && npx playwright install --with-deps chromium webkit && npm run test:e2e
```

## Health

```bash
curl -sf https://raktasetu-production.up.railway.app/api/health
```

## Branch protection (recommended)

`main` is not protected via API from this workspace (org/plan permissions). In GitHub → Settings → Branches, protect `main` with:

- Require a pull request before merging (1 reviewer when a second person joins)
- Require status checks: **Backend CI**, **Frontend CI**, **Migrate and Deploy**
- Do not allow force pushes
- Optionally require conversation resolution

See also [CONTRIBUTING.md](../../CONTRIBUTING.md) and [operational-readiness.md](../operational-readiness.md).
