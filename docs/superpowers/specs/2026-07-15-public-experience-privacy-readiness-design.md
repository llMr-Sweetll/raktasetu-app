# RaktaSetu Public Experience and Privacy Readiness Design

**Date:** 2026-07-15
**Status:** Approved for implementation by the supplied end-to-end brief

## Purpose

RaktaSetu needs a credible public presence that helps a potential donor understand the service, trust its boundaries, and act. The same experience must give hospitals a discreet path into their console and give every visitor clear access to privacy, terms, data rights, and security readiness information.

This work does not establish legal compliance. It implements technical controls and draft policy content designed to support organizational review.

## Design Direction

### Recommended approach

Use a responsive editorial landing page around the existing Living Bridge scene. Keep the scene as one concentrated signature moment in the hero, then move into a calm porcelain reading surface with strong typography, restrained rules, and purposeful oxblood accents.

Alternatives considered:

1. Keep the current full-screen dark experience throughout. This preserves atmosphere but makes long content harder to scan and does not use desktop space well.
2. Replace the animation with a conventional healthcare photograph. This improves immediate familiarity but loses RaktaSetu's own visual identity and introduces licensing and authenticity concerns.
3. Use the Living Bridge only in the hero and pair it with an editorial light content system. This is the selected approach because it keeps the memorable brand asset while improving readability, hierarchy, and responsive behavior.

### Token system

- Oxblood: `#7A1626`, primary brand and active controls
- Arterial: `#C8102E`, urgent emphasis only
- Ink: `#17151A`, primary text
- Porcelain: `#F5F3F0`, main reading surface
- Paper: `#FFFCF8`, elevated light surface
- Leaf: `#0F6B4A`, confirmed and protective states
- Night: `#0A0506`, hero and auth atmosphere
- Display face: Anek Latin
- Body face: Public Sans
- Utility treatment: Public Sans uppercase labels with restrained tracking

### Signature

The hero visualizes a live route between donor and hospital nodes. The animation must pause while hidden, reduce particle density on smaller screens, and become a still composition when reduced motion is requested.

## Public Information Architecture

### Landing page

- Sticky responsive header with brand, desktop section navigation, donor sign-in, and mobile disclosure navigation
- Hero with clear donor-first promise, specific supporting copy, primary donor action, and secondary explanation action
- Trust strip that describes actual behavior without claiming universal verification or guaranteed outcomes
- Mission and vision section with readable line lengths
- Three-step donor journey
- Safety and responsibility section that explains hospital verification, minimum necessary sharing, and emergency limitations
- Final donor call to action
- Discreet hospital access in the footer and supporting navigation

### Public policy routes

HashRouter remains in place to avoid auth and native wrapper regressions. Public pages are available at:

- `/#/privacy`
- `/#/terms`
- `/#/data-rights`
- `/#/security-readiness`

Hash routes have indexing limitations because fragments are not sent to the server. The root page is the primary indexable URL. Policy routes remain human-accessible and are included in navigation, while the sitemap lists only the canonical root URL. A future migration to BrowserRouter or static prerendered policy pages should happen only with route-level server fallback and regression testing.

## Content Principles

- Write from the donor's point of view.
- Prefer specific statements over slogans.
- Do not promise that a donor will be matched or that a request will be fulfilled.
- Do not describe the service as medical advice or emergency dispatch.
- Do not use the em dash character in public copy or newly written policy documentation.
- Do not state GDPR compliance, HIPAA compliance, certification, audit completion, legal verification, or guaranteed security.
- Use "readiness", "technical controls", and "designed to support" where accurate.

## Privacy and Data Rights

The Privacy Policy will document actual collection and use, including account identifiers, blood group, location, activity records, authentication data, push subscription data, audit records, and the essential browser token stored in local storage.

The application does not currently use advertising or analytics cookies. Therefore it will not show a cookie consent banner. It will show a concise storage notice explaining that an essential sign-in token is stored locally and that Google Identity Services loads only on the donor sign-in page when configured.

The data rights page will:

- explain access, correction, deletion, objection, restriction, portability, and consent withdrawal requests where applicable
- provide authenticated JSON export through a new API endpoint
- provide authenticated account deletion through the existing anonymization endpoint
- explain that some records may need to be retained where law or safety obligations require it
- provide a privacy contact workflow without presenting unverified staff titles or organizational addresses

Consent records will include the policy version and source for new registrations and Google account creation. Existing boolean consent fields remain supported.

## Security and HIPAA Readiness

The public readiness page will separate:

### Implemented technical controls

- TLS through the production platform
- password hashing
- role-based API authorization
- token invalidation on logout and account deletion
- audit logging for selected sensitive actions
- input limits and rate limits
- security headers and a production Content Security Policy
- explicit registration consent records
- account export and deletion tools

### Not established by this code

- HIPAA covered entity or business associate status
- signed Business Associate Agreements
- GDPR controller or processor determinations
- lawful basis and records of processing approval
- Data Protection Impact Assessment
- approved retention schedule
- breach notification and incident response procedures
- subprocessor inventory and transfer mechanism review
- workforce training, access reviews, and sanctions
- legal approval of policies or notices

The page is a readiness statement, not a HIPAA Notice of Privacy Practices.

## Backend Changes

- Enable Helmet CSP with directives required for same-origin assets, Google Identity Services, Google Fonts, data images, WebSocket connections, and inline style attributes used by the current React implementation.
- Set Referrer Policy, Permissions Policy, HSTS in production, frame protection, and no-sniff defaults.
- Add `GET /api/auth/export` for an authenticated, scoped JSON export.
- Add consent policy version and source columns through idempotent startup migrations.
- Record policy version and source during registration and new Google account creation.
- Keep response payloads free of password hashes, Google subject identifiers, push encryption secrets, and token blacklist data.

## SEO

- Add a useful title, meta description, canonical URL, robots directives, Open Graph metadata, Twitter metadata, theme and application metadata, and accurate Organization and WebSite JSON-LD.
- Add visible, meaningful landing copy to the initial HTML as a `noscript` fallback. This does not replace prerendering.
- Add `robots.txt` and a root-only `sitemap.xml`.
- Keep HashRouter and document that search engines may not reliably index fragment policy routes or client-rendered content.
- Add route-aware document titles and descriptions for public pages.

## Responsive and Accessible Behavior

- 360x800 and 390x844: one-column flow, compact hero, disclosure navigation, full-width actions
- 768x1024: two-column content where it improves comprehension, larger hero type, balanced padding
- 1366x768: split hero composition, horizontal navigation, content visible below the fold without oversized empty space
- 1440x900 and wider: capped reading widths, generous side gutters, no uncontrolled line length
- All interactive targets are at least 44px.
- Keyboard focus is visible.
- Semantic header, nav, main, section, and footer landmarks are used.
- Reduced motion renders the bridge once and disables decorative transitions.
- Horizontal overflow must not occur at supported viewport widths.

## Verification

- Build frontend and run available frontend and backend checks.
- Verify no em dash characters in public frontend strings and the new specification, plan, and policy content.
- Verify security headers, robots, sitemap, manifest, health endpoint, and root metadata after deployment.
- Verify donor and hospital login variants remain reachable and Google remains donor-only.
- Verify role enforcement with donor credentials against a hospital API and hospital credentials against a donor API.
- Verify public route navigation and authenticated export behavior.

## Known Limitations

- This Vite SPA is not server rendered. Search engines that do not execute JavaScript will receive metadata and the `noscript` summary, not the full landing page.
- HashRouter policy pages are not reliable standalone index targets.
- The supplied contact domain must be operationally monitored. Code cannot verify mailbox ownership.
- Legal and organizational requirements listed above remain blockers to any compliance claim.
