# RaktaSetu CI/CD Guide

> **Version:** 1.0.0  
> **Last Updated:** 2026-07-08  
> **Repository:** `llMr-Sweetll/raktasetu-app`

---

## Table of Contents

1. [Overview](#overview)
2. [Pipeline Architecture](#pipeline-architecture)
3. [Backend CI (`backend-ci.yml`)](#backend-ci)
4. [Frontend CI/CD (`frontend-deploy.yml`)](#frontend-cicd)
5. [Required GitHub Secrets](#required-github-secrets)
6. [Manual Deployment](#manual-deployment)
7. [Troubleshooting](#troubleshooting)
8. [Health Check Endpoint](#health-check-endpoint)
9. [Testing](#testing)

---

## Overview

RaktaSetu uses **GitHub Actions** for continuous integration and continuous deployment (CI/CD). The setup consists of two independent workflows:

| Workflow | File | Purpose |
|----------|------|---------|
| **Backend CI** | `.github/workflows/backend-ci.yml` | Lint, test, and health-check the Node.js/Express API |
| **Frontend CI/CD** | `.github/workflows/frontend-deploy.yml` | Lint, test, build, and deploy the React/Vite app to GitHub Pages |

Both workflows trigger automatically on pushes and pull requests to the `main` branch, but only when files in their respective directories change.

---

## Pipeline Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      GitHub Repository                        │
│              llMr-Sweetll/raktasetu-app                       │
└─────────────────────────────────────────────────────────────┘
                              │
          ┌───────────────────┴───────────────────┐
          │                                       │
   Push/PR to main                        Push/PR to main
   affecting backend/**                   affecting frontend/**
          │                                       │
          ▼                                       ▼
┌─────────────────────┐                 ┌─────────────────────┐
│   Backend CI        │                 │   Frontend CI/CD    │
│   (backend-ci.yml)  │                 │ (frontend-deploy.yml│
└─────────────────────┘                 └─────────────────────┘
          │                                       │
    ┌─────┴─────┐                           ┌─────┴─────┐
    │           │                           │           │
    ▼           ▼                           ▼           ▼
┌───────┐  ┌────────┐                 ┌───────┐  ┌────────┐
│ Lint  │  │  Test  │                 │ Lint  │  │  Test  │
│(ESLint)│  │(Jest)  │                 │(ESLint)│  │(Vitest)│
└───────┘  └────────┘                 └───────┘  └────────┘
    │           │                           │           │
    └─────┬─────┘                           └─────┬─────┘
          │                                       │
          ▼                                       ▼
   ┌────────────┐                          ┌──────────┐
   │Health Check│                          │  Build   │
   │(/api/health│                          │ (Vite)   │
   └────────────┘                          └──────────┘
                                                  │
                                                  ▼
                                          ┌──────────────┐
                                          │Deploy to     │
                                          │GitHub Pages  │
                                          └──────────────┘
```

---

## Backend CI

**File:** `.github/workflows/backend-ci.yml`

### Triggers

```yaml
on:
  push:
    branches: [main]
    paths:
      - 'backend/**'
      - '.github/workflows/backend-ci.yml'
  pull_request:
    branches: [main]
    paths:
      - 'backend/**'
      - '.github/workflows/backend-ci.yml'
```

### Jobs

| Job | Description | Node Version |
|-----|-------------|--------------|
| `lint` | Runs ESLint on `backend/src/` | 20 |
| `test` | Runs Jest with coverage reporting | 20 |
| `health-check` | Starts the server and verifies `/api/health` | 20 |

### Key Features

- **Path filtering:** Only runs when backend files change
- **Graceful secret fallback:** If `NEON_DATABASE_URL` or `JWT_SECRET` are not configured, the workflow uses safe placeholder values so tests don't fail catastrophically
- **Coverage upload:** On successful `main` branch pushes, coverage is uploaded to Codecov (optional)
- **Server lifecycle management:** The health-check job starts the server in the background, polls it, then cleanly shuts it down

### Running Locally

```bash
cd backend
npm ci
npm run lint
npm test
```

---

## Frontend CI/CD

**File:** `.github/workflows/frontend-deploy.yml`

### Triggers

```yaml
on:
  push:
    branches: [main]
    paths:
      - 'frontend/**'
      - '.github/workflows/frontend-deploy.yml'
  pull_request:
    branches: [main]
    paths:
      - 'frontend/**'
      - '.github/workflows/frontend-deploy.yml'
```

### Jobs

| Job | Description | Node Version |
|-----|-------------|--------------|
| `lint` | Runs ESLint on `frontend/src/` | 20 |
| `test` | Runs Vitest | 20 |
| `build` | Builds the Vite app with `base: '/raktasetu-app/'` | 20 |
| `deploy` | Deploys `frontend/dist` to GitHub Pages | 20 |

### GitHub Pages Configuration

The frontend is deployed with the base path `/raktasetu-app/` (matching the repository name). This is configured in:

- `frontend/vite.config.js` → `base: '/raktasetu-app/'`
- The workflow sets `VITE_BASE: '/raktasetu-app/'` during build

### Required Repository Settings

1. Go to **Settings → Pages** in your GitHub repository
2. Set **Source** to "GitHub Actions"
3. Ensure the `deploy` job has the required permissions:
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

### Running Locally

```bash
cd frontend
npm ci
npm run lint
npm test
npm run build
```

---

## Required GitHub Secrets

Navigate to **Settings → Secrets and variables → Actions** and add the following secrets:

| Secret Name | Required For | Description |
|-------------|--------------|-------------|
| `NEON_DATABASE_URL` | Backend CI / Runtime | PostgreSQL connection string from Neon (e.g., `postgresql://user:pass@host.neon.tech/db?sslmode=require`) |
| `JWT_SECRET` | Backend CI / Runtime | Secret key for JWT token signing (min 32 characters) |
| `CODECOV_TOKEN` | Backend CI (optional) | Token for uploading coverage reports to Codecov |

### Setting Up Secrets

1. Open your repository on GitHub
2. Go to **Settings → Secrets and variables → Actions**
3. Click **New repository secret**
4. Add each secret name and value

> **Security Note:** Never commit secrets to the repository. The `.env` files are already in `.gitignore`.

### Example `.env` for Local Development

Create `backend/.env` (already ignored by git):

```env
PORT=3001
NEON_DATABASE_URL=postgresql://user:password@your-db.neon.tech/raktasetu?sslmode=require
JWT_SECRET=your-super-secret-jwt-key-min-32-chars-long
```

---

## Manual Deployment

### Frontend (GitHub Pages)

The frontend deploys automatically on every push to `main` that changes `frontend/**` files. To deploy manually:

1. **Via GitHub Actions:**
   - Go to **Actions → Frontend CI / Deploy to GitHub Pages**
   - Click **Run workflow** → Select `main` branch → **Run workflow**

2. **Via Local Build + Push:**
   ```bash
   cd frontend
   npm ci
   npm run build
   # The dist/ folder is uploaded as an artifact by the workflow
   ```

### Backend

The backend CI does not auto-deploy to a hosting provider. To deploy manually:

1. **Fly.io** (if configured):
   ```bash
   cd backend
   fly deploy
   ```

2. **Render** (if configured):
   - Push to `main` — Render auto-deploys if connected

3. **Manual server start:**
   ```bash
   cd backend
   npm ci
   npm start
   ```

---

## Troubleshooting

### Backend CI Issues

#### ❌ "ESLint not found"

**Cause:** ESLint is not installed as a dev dependency.

**Fix:**
```bash
cd backend
npm install --save-dev eslint jest supertest
```

#### ❌ "Cannot connect to database" in tests

**Cause:** `NEON_DATABASE_URL` secret is not set.

**Fix:**
- The workflow falls back to a placeholder DB URL, so tests that don't require a real DB should pass
- For full integration tests, add the `NEON_DATABASE_URL` secret in GitHub settings

#### ❌ Health check times out

**Cause:** Server failed to start (missing env vars or port conflict).

**Fix:**
- Check the workflow logs for server startup errors
- Ensure `JWT_SECRET` is set (or the fallback is acceptable)
- The health-check job waits up to 30 seconds for the server

#### ❌ "app is not exported from server.js"

**Cause:** The test file tries to import `app` but it's not exported.

**Fix:** `server.js` now exports `app` at the bottom:
```js
export { app };
```

### Frontend CI Issues

#### ❌ "Build failed: base path not found"

**Cause:** `vite.config.js` doesn't have the correct `base` path.

**Fix:** Ensure `frontend/vite.config.js` contains:
```js
export default defineConfig({
  base: '/raktasetu-app/',
  // ...
});
```

#### ❌ "Deploy to GitHub Pages failed"

**Cause:** Missing permissions or Pages source not set to "GitHub Actions".

**Fix:**
1. Go to **Settings → Pages**
2. Set **Source** to "GitHub Actions"
3. Ensure the workflow has these permissions:
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

#### ❌ "Vitest not found"

**Cause:** Vitest is not installed as a dev dependency.

**Fix:**
```bash
cd frontend
npm install --save-dev vitest eslint
```

### General Issues

#### ❌ Workflow not triggering

**Cause:** The `paths` filter excludes your changes.

**Fix:** Ensure your changes are in `backend/**` or `frontend/**` (or the workflow file itself).

#### ❌ "Permission denied" during deployment

**Cause:** The `GITHUB_TOKEN` doesn't have enough permissions.

**Fix:** Add explicit permissions to the workflow:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

## Health Check Endpoint

The backend exposes a health check endpoint for monitoring and CI validation:

### `GET /api/health`

**Response:**
```json
{
  "success": true,
  "data": {
    "status": "healthy",
    "version": "1.0.3",
    "timestamp": "2026-07-08T17:13:32.123Z"
  }
}
```

### Legacy Endpoint

`GET /health` is also available for backward compatibility:
```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2026-07-08T17:13:32.123Z"
  }
}
```

---

## Testing

### Backend Tests

**Framework:** Jest + Supertest

**Location:** `backend/tests/health.test.js`

**Run tests:**
```bash
cd backend
npm test
```

**Coverage report:** Generated in `backend/coverage/`

### Frontend Tests

**Framework:** Vitest

**Run tests:**
```bash
cd frontend
npm test
```

### Adding New Tests

#### Backend

Create a new file in `backend/tests/`:

```js
const request = require('supertest');

describe('GET /api/some-endpoint', () => {
  let app;

  beforeAll(async () => {
    const mod = await import('../src/server.js');
    app = mod.app;
  });

  it('should return expected data', async () => {
    const res = await request(app)
      .get('/api/some-endpoint')
      .expect(200);

    expect(res.body).toHaveProperty('success', true);
  });
});
```

#### Frontend

Create a new file in `frontend/src/` with `.test.js` or `.spec.js` extension:

```js
import { describe, it, expect } from 'vitest';

describe('MyComponent', () => {
  it('should render correctly', () => {
    expect(true).toBe(true);
  });
});
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `cd backend && npm run lint` | Lint backend code |
| `cd backend && npm test` | Run backend tests with coverage |
| `cd backend && npm start` | Start backend server |
| `cd frontend && npm run lint` | Lint frontend code |
| `cd frontend && npm test` | Run frontend tests |
| `cd frontend && npm run build` | Build frontend for production |

---

## Support

For issues or questions:
1. Check the [Troubleshooting](#troubleshooting) section above
2. Review the workflow logs in **Actions** tab on GitHub
3. Open an issue in the repository with the workflow run link

---

*This guide is maintained as part of the RaktaSetu project. Last updated: 2026-07-08*
