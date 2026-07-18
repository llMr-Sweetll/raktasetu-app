# UI Contrast, Readability, and Surgical Cleanup Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix unreadable white form text on light auth and profile forms under OS dark mode, then apply a small set of contrast and dead-code cleanups so every interactive surface stays readable and consistent.

**Architecture:** Keep the existing dual-shell model (dark marketing/auth shells + light donor porcelain shells + dark hospital console). Make color-scheme and form-control colors explicit per shell so Chromium cannot invent white text on white inputs. Prefer shared CSS tokens and one light-input style over per-screen one-offs. Do not redesign the product or migrate off HashRouter in this pass.

**Tech Stack:** React 18, Vite, HashRouter, inline styles + `index.css` / `public.css`, theme tokens in `frontend/src/theme.js`.

## Global Constraints

- Do **not** implement any UI/CSS/dead-code fixes until this plan is explicitly approved by the user.
- No product redesign, no HashRouter-to-BrowserRouter migration in this pass unless a later task is explicitly approved.
- Preserve brand colors (oxblood/arterial/porcelain/ink) from `frontend/src/theme.js`.
- Surgical cleanup only: delete unused deps/code that this hunt proved unused; no rewrite.
- No secrets in commits; no force-push; no Neon production/main branch changes.
- No em dashes in commit messages or user-facing copy introduced by this work.
- Verify on live or local with OS `prefers-color-scheme: dark` and `light`.

## Status already completed (ops)

| Item | Result |
|------|--------|
| Neon safety branch `mvp-pre-role-switch-2026-07-16` | **Deleted** from project `cool-firefly-17917748` (branch id `br-summer-lab-attply27`). Confirmed non-primary before delete. |
| Neon `main` / primary | **Intact** (`br-delicate-silence-atb3dook`, primary + default). Post-delete project lists only `main`. |

Optional follow-up (docs only, not a code fix): remove stale "keep safety branch" notes in `CHANGELOG.md` and `docs/security/security-controls.md` after approval.

---

## Investigation summary (read-only)

### Confirmed P0: white / unreadable input text

**Reproduction (live):**

1. OS or browser color scheme set to **dark** (`prefers-color-scheme: dark`).
2. Open `https://raktasetu-production.up.railway.app/#/register` (HashRouter; path-only `/register` does not route).
3. Type into Full name (or any light input).

**Evidence (CDP on live, 2026-07-18):**

- `prefersDark: true`
- App root color remains ink: `rgb(23, 21, 26)` on porcelain `rgb(248, 241, 239)`
- Register inputs: `background: rgb(255, 255, 255)`, `color: rgb(255, 255, 255)`, `webkitTextFillColor: rgb(255, 255, 255)`, `inlineColor: null`
- After typing `WhiteTextBug`, computed color stayed white (`contrastBug: true`)
- No author stylesheet rule sets input `color: #fff` on Register; inheritance from `#root` ink is ignored for these form controls

**Root cause chain:**

1. `frontend/index.html` declares `<meta name="color-scheme" content="light dark" />`, so the document participates in both schemes.
2. Light forms force light/white field backgrounds (`T.card` / `#fff`) but often omit an explicit text `color`.
3. Under OS dark preference, Chromium paints native form-control text as white while author CSS keeps the white background.
4. Result: typed text, caret, and date-field glyphs become white-on-white.

**Why Login looked "fine" but still related:**

- `Login.jsx` sets explicit `color: '#F2E8E6'` on dark translucent fields, so typed text is readable.
- Login placeholders still compute to browser default `rgb(117, 117, 117)` on near-black, which is low contrast (P1).

**Dark auth-flow screens (Google onboarding, account link, hospital pending):**

- Use `.auth-flow__card input { background: #110b0c; color: #fff; }` in `frontend/src/index.css`.
- These are intended dark shells and are not the white-on-white failure mode.
- Still unify placeholder colors and load fonts consistently (P2).

### Same pattern, other light inputs

| Surface | File | Gap |
|---------|------|-----|
| Create account / hospital register | `frontend/src/screens/Register.jsx` | `inputStyle` sets `background: T.card`, no `color` |
| Profile DOB | `frontend/src/screens/DonorProfile.jsx` | date input has border only; no `color` / `background` / `color-scheme` |
| Data rights delete confirm | `frontend/src/screens/DataRights.jsx` | `background: '#fff'`, no `color` |
| Any future light form | various | risk while meta is `light dark` and inputs omit `color` |

### Prioritized findings

#### P0 (ship-blocking readability)

| ID | Finding | Severity | Evidence |
|----|---------|----------|----------|
| P0-1 | Light-shell form text white/unreadable under dark OS preference | Critical | Live `#/register` CDP: white text on white bg; typed value invisible |
| P0-2 | Same class of bug on profile DOB and data-rights delete input | Critical | Same missing `color` + light bg pattern in source |

#### P1 (high, user-facing)

| ID | Finding | Severity | Evidence |
|----|---------|----------|----------|
| P1-1 | Login (and other dark) placeholders too dim | High | CDP placeholder `rgb(117,117,117)` on dark field |
| P1-2 | Register field labels use `T.faint` (`#9A938C`) on porcelain | High | Screenshot + token values; likely WCAG fail for small caps labels |
| P1-3 | On-the-way "QR" is a Lucide icon, not a scannable code; `_qrData` unused | High | `DonorOnTheWay.jsx` sets `_qrData` then renders `<QrCode />` icon; `qrcode.react` never imported |
| P1-4 | Path URLs `/login`, `/register` show landing until hash route used | High | Live navigate to `/register` stayed on Landing; working URL is `/#/register` |
| P1-5 | Landing hero disclaimer / footer muted on night bg | Medium-High | `public.css` uses `#9f918c`, `#82756f` on night surfaces |

#### P2 (consistency / maintainability)

| ID | Finding | Severity | Evidence |
|----|---------|----------|----------|
| P2-1 | `.auth-flow__card h1` uses Libre Baskerville but font not loaded | Low | `index.css` vs `index.html` Google Fonts link (Anek + Public Sans only) |
| P2-2 | Triple token sources drift | Low | `theme.js`, `index.css :root`, `public.css :root` |
| P2-3 | BottomNav fixed bar lacks `safe-area-inset-bottom` | Medium | `BottomNav.jsx` fixed; screens pad `90px` only |
| P2-4 | Console subtitle `#5C6270` on dark console | Medium | `Console.jsx` line with "Blood bank console" |
| P2-5 | `qrcode.react` dependency unused | Low | package.json present; no src import |
| P2-6 | Capacitor packages unused in `frontend/src` | Low | only `capacitor.config.json`; keep unless user wants dep trim |
| P2-7 | Per-screen `body`/`display` font string repetition | Low | duplicated in most screens |
| P2-8 | Console "reach" estimate is fake math | Low | `ConsoleNewRequest.jsx` approximates from constants |

### Explicit non-goals until separately approved

- Migrating HashRouter to BrowserRouter / Railway rewrite changes
- Full design-system extraction or Tailwind migration
- Removing Capacitor scaffolding (mobile path may still be intentional)
- Replacing Three.js landing scene
- Backend / API changes
- Neon schema or role changes

---

## File map (planned edits after approval)

| File | Responsibility |
|------|----------------|
| `frontend/index.html` | Color-scheme meta strategy |
| `frontend/src/index.css` | Global form-control defaults, light/dark shell helpers, placeholders, auth-flow font fix |
| `frontend/src/theme.js` | Optional shared light-input style tokens if kept tiny |
| `frontend/src/screens/Register.jsx` | Explicit ink color + color-scheme on inputs/textarea |
| `frontend/src/screens/Login.jsx` | Placeholder / autofill contrast on dark fields |
| `frontend/src/screens/DonorProfile.jsx` | DOB input light-field colors |
| `frontend/src/screens/DataRights.jsx` | Delete confirmation input colors |
| `frontend/src/screens/GoogleOnboarding.jsx` | Placeholder contrast via shared auth-flow CSS (no visual redesign) |
| `frontend/src/screens/AccountLink.jsx` | Covered by auth-flow CSS |
| `frontend/src/screens/DonorOnTheWay.jsx` | Real QR via `qrcode.react` or honest non-QR copy |
| `frontend/src/components/BottomNav.jsx` | Safe-area padding |
| `frontend/src/screens/Console.jsx` | Subtitle contrast |
| `frontend/src/public.css` | Landing muted text contrast tweaks |
| `frontend/package.json` | Remove `qrcode.react` only if Task 4 chooses icon+copy instead of real QR |
| `CHANGELOG.md` | User-facing note after ship |
| `docs/security/security-controls.md` | Drop deleted Neon branch note |

---

### Task 1: Global color-scheme and form-control baseline

**Files:**
- Modify: `frontend/index.html`
- Modify: `frontend/src/index.css`
- Test: manual CDP / DevTools on `#/register` and `#/login` with dark + light OS preference

**Interfaces:**
- Produces: CSS classes or element rules that light shells can rely on:
  - `html` / shell `color-scheme` behavior documented in CSS comments
  - `.rs-field` (or equivalent) for light inputs: ink text, white/porcelain bg, muted placeholder
  - Dark auth-flow placeholder color rules under `.auth-flow__card`

**Acceptance criteria:**
- With OS dark preference, light inputs show dark readable text on light backgrounds.
- With OS light preference, no regression (ink on white still holds).
- Dark auth-flow inputs remain light text on dark field backgrounds.

- [ ] **Step 1: Choose and document the color-scheme strategy (recommended)**

Recommended approach (smallest blast radius):

1. Keep marketing/login/console free to be dark visually.
2. Set light form surfaces to `color-scheme: light` so native controls match light fields.
3. Always set explicit `color` + `background` on author-styled inputs (never rely on UA).

In `frontend/index.html`, prefer tightening meta to light-primary only if product decision allows:

```html
<meta name="color-scheme" content="light" />
```

If dark chrome (browser UI) must stay dual-aware, keep `light dark` but still force light scheme on light shells in CSS:

```css
.app-shell,
.public-page,
.rs-light-shell {
  color-scheme: light;
}

.auth-flow,
.app-shell--console-dark {
  color-scheme: dark;
}
```

Do not leave light inputs without an explicit `color`.

- [ ] **Step 2: Add shared light-field and placeholder rules in `index.css`**

```css
/* Light interactive fields: never inherit Chromium dark-form white text */
.rs-field,
.rs-light-shell input:not([type='checkbox']):not([type='radio']),
.rs-light-shell textarea,
.rs-light-shell select {
  color-scheme: light;
  color: var(--rs-ink, #17151A);
  background: var(--rs-white, #FFFFFF);
  caret-color: var(--rs-ink, #17151A);
}

.rs-field::placeholder,
.rs-light-shell input::placeholder,
.rs-light-shell textarea::placeholder {
  color: #6F6963;
  opacity: 1;
}

.auth-flow__card input::placeholder,
.auth-flow__card textarea::placeholder {
  color: #A89B96;
  opacity: 1;
}
```

- [ ] **Step 3: Fix auth-flow heading font to loaded family**

Replace Libre Baskerville with Anek Latin (already loaded):

```css
.auth-flow__card h1 {
  font-family: 'Anek Latin', 'Segoe UI', system-ui, sans-serif;
}
```

- [ ] **Step 4: Manual verify**

Run in browser DevTools console on `#/register` after implementation:

```js
const el = document.querySelector('input[aria-label="Full name"]');
el.value = 'ContrastOK';
getComputedStyle(el).color; // expect rgb(23, 21, 26) or close ink
getComputedStyle(el).backgroundColor; // expect white / near-white
```

Expected: typed text clearly visible.

- [ ] **Step 5: Commit**

```bash
git add frontend/index.html frontend/src/index.css
git commit -m "$(cat <<'EOF'
fix: make light form controls readable under dark OS preference

EOF
)"
```

---

### Task 2: Wire light auth and account forms to the baseline

**Files:**
- Modify: `frontend/src/screens/Register.jsx`
- Modify: `frontend/src/screens/DonorProfile.jsx`
- Modify: `frontend/src/screens/DataRights.jsx`
- Modify: `frontend/src/screens/Login.jsx` (placeholder / explicit field colors only)
- Modify: `frontend/src/App.jsx` only if a light-shell class must wrap non-dark public routes

**Interfaces:**
- Consumes: `.rs-field` / `.rs-light-shell` from Task 1
- Produces: Register `inputStyle` includes `color: T.ink` (and optional `colorScheme: 'light'`)

**Acceptance criteria:**
- `#/register` and `#/register?role=hospital`: typed text, date value, and textarea text are ink on white.
- Profile DOB field readable before/after typing.
- Data-rights `DELETE` confirmation field readable.
- `#/login` typed text remains light-on-dark; placeholders meet stronger contrast than `#757575`.

- [ ] **Step 1: Update Register `inputStyle`**

```js
const inputStyle = {
  width: '100%',
  padding: '14px 14px',
  borderRadius: 12,
  border: `1px solid ${T.line}`,
  fontFamily: body,
  fontSize: 16,
  background: T.card,
  color: T.ink,
  colorScheme: 'light',
  caretColor: T.ink,
  minHeight: 48,
};
```

Also add `className="rs-light-shell"` (or wrap root div) on the Register page container.

Bump label color from `T.faint` to `T.mut` for uppercase labels (P1-2).

- [ ] **Step 2: Fix DonorProfile DOB input**

```jsx
<input
  aria-label="Date of birth"
  type="date"
  value={dateOfBirth}
  onChange={(event) => setDateOfBirth(event.target.value)}
  style={{
    flex: 1,
    minHeight: 42,
    borderRadius: 10,
    border: `1px solid ${T.line}`,
    padding: '0 10px',
    background: T.card,
    color: T.ink,
    colorScheme: 'light',
    fontFamily: body,
    fontSize: 16,
  }}
/>
```

- [ ] **Step 3: Fix DataRights delete input**

Add `color: '#17151A'`, `colorScheme: 'light'`, and `caretColor: '#17151A'` beside existing white background.

- [ ] **Step 4: Login placeholder contrast**

Keep dark field colors; add a class (for example `rs-dark-field`) or inline-safe CSS:

```css
.rs-dark-field::placeholder {
  color: #A89B96;
  opacity: 1;
}
```

Apply `className="rs-dark-field"` to Login inputs (or style via a parent class on the login form).

- [ ] **Step 5: Verify matrix subset**

| Route | Dark OS | Light OS |
|-------|---------|----------|
| `#/register` | ink on white | ink on white |
| `#/register?role=hospital` | ink on white | ink on white |
| `#/login` | light text on dark field | light text on dark field |
| `#/privacy` data-rights delete (signed in) | ink on white | ink on white |

- [ ] **Step 6: Commit**

```bash
git add frontend/src/screens/Register.jsx frontend/src/screens/DonorProfile.jsx frontend/src/screens/DataRights.jsx frontend/src/screens/Login.jsx frontend/src/App.jsx frontend/src/index.css
git commit -m "$(cat <<'EOF'
fix: set explicit ink colors on light account forms

EOF
)"
```

---

### Task 3: Dark-shell contrast polish (login, landing, console)

**Files:**
- Modify: `frontend/src/public.css`
- Modify: `frontend/src/screens/Console.jsx`
- Modify: `frontend/src/index.css` (auth-flow placeholders if not done in Task 1)

**Acceptance criteria:**
- Landing hero disclaimer readable (target contrast roughly AA for body-sized text on night bg).
- Console "Blood bank console" subtitle uses `T.consoleMut` or lighter than `#5C6270`.
- Auth-flow placeholders visible on `#110b0c` fields.

- [ ] **Step 1: Bump landing muted night-text tokens**

In `public.css`, raise night-muted text from `#9f918c` / `#82756f` toward existing `--rs-light-muted` (`#c2b5af`) for disclaimer/footer lines on night backgrounds only. Do not lighten muted text that sits on porcelain sections.

- [ ] **Step 2: Console subtitle**

```jsx
<p style={{ fontFamily: body, fontSize: 10.5, color: T.consoleMut, margin: 0 }}>Blood bank console</p>
```

- [ ] **Step 3: Spot-check landing + console in browser at 390 and 1280 widths**

- [ ] **Step 4: Commit**

```bash
git add frontend/src/public.css frontend/src/screens/Console.jsx frontend/src/index.css
git commit -m "$(cat <<'EOF'
fix: improve muted text contrast on dark shells

EOF
)"
```

---

### Task 4: On-the-way QR honesty (surgical)

**Files:**
- Modify: `frontend/src/screens/DonorOnTheWay.jsx`
- Optionally keep dependency: `qrcode.react` (already installed)

**Acceptance criteria:**
- Either a real QR encoding the verification payload is shown, or copy no longer claims staff will scan a code that is only an icon.
- `_qrData` unused-state pattern removed.

**Recommended approach:** render real QR with `qrcode.react` using the existing payload string.

- [ ] **Step 1: Implement real QR**

```jsx
import { QRCodeSVG } from 'qrcode.react';

// replace icon box contents:
<QRCodeSVG value={qrData || `RS-DONOR-${requestId}`} size={64} bgColor="#FFFFFF" fgColor="#17151A" />
```

Rename `_qrData` to `qrData` and keep the setter.

- [ ] **Step 2: Manual check**

Open an on-the-way screen (or unit-render) and confirm SVG QR is present and non-empty `value`.

- [ ] **Step 3: Commit**

```bash
git add frontend/src/screens/DonorOnTheWay.jsx
git commit -m "$(cat <<'EOF'
fix: render a real verification QR on the on-the-way screen

EOF
)"
```

---

### Task 5: BottomNav safe area

**Files:**
- Modify: `frontend/src/components/BottomNav.jsx`

**Acceptance criteria:**
- On notched iOS Safari / Android gesture nav, nav labels are not clipped.
- Existing `90px` page padding still clears the taller bar (increase padding if measured overlap).

- [ ] **Step 1: Add safe-area padding**

```jsx
paddingBottom: 'env(safe-area-inset-bottom)',
```

on the fixed BottomNav container (in addition to existing vertical padding).

- [ ] **Step 2: If bar grows, bump donor screen bottom padding from `90px` to `calc(90px + env(safe-area-inset-bottom))` on screens that already use `18px 18px 90px`.**

- [ ] **Step 3: Commit**

```bash
git add frontend/src/components/BottomNav.jsx frontend/src/screens/Donor*.jsx
git commit -m "$(cat <<'EOF'
fix: keep bottom navigation clear of device safe areas

EOF
)"
```

---

### Task 6: Dead-code and docs hygiene (surgical)

**Files:**
- Modify: `CHANGELOG.md`
- Modify: `docs/security/security-controls.md`
- Modify: `frontend/package.json` / lockfile only if Task 4 chose not to use `qrcode.react`
- Do **not** remove Capacitor packages in this pass (mobile scaffolding).

**Acceptance criteria:**
- Docs no longer instruct operators to keep deleted Neon branch `mvp-pre-role-switch-2026-07-16`.
- No unused `qrcode.react` if QR task abandoned; if QR shipped, dependency stays.
- No drive-by refactors.

- [ ] **Step 1: Update security + changelog notes about Neon branch deletion (already done in Neon console).**

- [ ] **Step 2: Run frontend tests/lint**

```bash
npm --prefix frontend test
npm --prefix frontend run lint
```

Expected: pass, or only pre-existing failures unrelated to these files.

- [ ] **Step 3: Commit**

```bash
git add CHANGELOG.md docs/security/security-controls.md frontend/package.json frontend/package-lock.json
git commit -m "$(cat <<'EOF'
docs: record Neon safety branch removal and UI contrast fixes

EOF
)"
```

---

## Test / verification matrix

| Surface | Roles | Viewports | Dark OS | Light OS |
|---------|-------|-----------|---------|----------|
| Landing `#/` | anon | 390, 768, 1280 | muted night text readable | porcelain sections unchanged |
| Login `#/login`, `#/login?role=hospital` | anon | 390, 1280 | typed + placeholder readable | typed + placeholder readable |
| Register `#/register`, hospital query | anon | 390, 1280 | **P0 ink-on-white** | ink-on-white |
| Google onboarding `#/google-onboarding` | google mid-flow | 390 | light-on-dark fields | light-on-dark fields |
| Account link `#/account-link` | google mid-flow | 390 | light-on-dark fields | light-on-dark fields |
| Hospital pending `#/hospital-pending` | hospital | 390 | card text readable | card text readable |
| Privacy / terms / data-rights / security | anon + authed | 390, 1280 | delete field readable when shown | same |
| Donor home / requests / credits / profile / history | donor | 390 | profile DOB readable; BottomNav clear | same |
| On the way | donor | 390 | real QR or honest copy | same |
| Console / new request / verify | hospital | 768, 1280 | subtitle + inputs readable | same |
| Admin | admin | 1280 | existing dark console readable | same |

**Automated additions (lightweight):**

- Extend `frontend/src/test/auth-flows.test.jsx` (or add a small style assertion test) to render Register and assert the full-name input style includes a dark color / not `#fff` for `color` when provided via inline style.
- No full Playwright suite required for approval of this plan; Playwright smoke optional after implementation.

---

## Dead-code cleanup scope (surgical)

**In scope:**

- Use or remove `qrcode.react` + `_qrData` dead state (Task 4)
- Remove Libre Baskerville reference (Task 1)
- Docs references to deleted Neon branch (Task 6)

**Out of scope:**

- Capacitor package removal
- Extracting all inline styles into CSS modules
- Deduplicating every `body`/`display` constant across screens
- Replacing approximate hospital reach math with a backend endpoint
- Three.js / PWA / Leaflet refactors

---

## Self-review checklist (plan author)

1. Spec coverage: P0 white-text, related light inputs, dark placeholder contrast, QR honesty, safe-area, docs/Neon note, verification matrix all map to tasks.
2. Placeholder scan: no TBD implementation steps; concrete files and code included.
3. Explicit gate: implementation waits for user approval.

---

## Do not fix until approved

**STOP.** This document is investigation + plan only. No UI, CSS, or dead-code implementation should start until the user replies with approval (and any preferred options below).

**Approval questions (answer when ready):**

1. Approve Tasks 1-6 as written?
2. Color-scheme meta: prefer `content="light"` globally, or keep `light dark` and force `color-scheme: light` only on light shells?
3. On-the-way QR: real `qrcode.react` QR (recommended) or change copy and remove the fake scan claim?

After approval, execution options:

1. **Subagent-Driven (recommended)** - fresh subagent per task, review between tasks
2. **Inline Execution** - execute tasks in-session with checkpoints
