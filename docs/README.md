# Documentation index

## Start here

| Doc | Audience |
|-----|----------|
| [../README.md](../README.md) | Run locally, live URL, feature overview |
| [../CONTRIBUTING.md](../CONTRIBUTING.md) | PR workflow, checks, secrets hygiene |
| [ops/ci-cd.md](./ops/ci-cd.md) | GitHub Actions + Railway deploy |
| [operational-readiness.md](./operational-readiness.md) | Release gates, invites, retention, incidents |
| [security/security-controls.md](./security/security-controls.md) | Security control inventory (not a compliance certificate) |
| [../CHANGELOG.md](../CHANGELOG.md) | Release history |

## Layout

```
docs/
  README.md                 ← this index
  operational-readiness.md  ← ops runbooks
  ops/ci-cd.md              ← CI/CD and branch protection
  security/                 ← security controls
  superpowers/
    specs/                  ← design specs (historical + active)
    plans/                  ← implementation plans
```

- **specs/** — product/design decisions and acceptance criteria  
- **plans/** — step-by-step implementation notes  
- **ops/** + **operational-readiness** — how production is run today  
- **security/** — controls and threat-oriented notes; no false compliance claims

Root-level historical reports (`STRESS_TEST_REPORT.md`, `red-team-input-fuzzing-report.md`, `plan.md`, `DEPLOYMENT_PLAN.md`) are archival; prefer this tree and the changelog for current truth.
