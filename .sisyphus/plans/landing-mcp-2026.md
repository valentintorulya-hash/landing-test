# MCP-Integrated 2026 Landing (Next.js 15)

## TL;DR

> **Quick Summary**: Build a single-page AI-project SaaS landing in Next.js 15 + TypeScript with a dark-first 2026 visual style (spotlight hero, bento features, interactive testimonials, stateful CTA), then verify with Playwright and Lighthouse CI.
>
> **Deliverables**:
> - Next.js App Router landing implementation with required sections
> - Reusable UI primitives based on shadcn-style components
> - Motion layer with reduced-motion fallback
> - Playwright E2E suite with screenshot evidence
> - Lighthouse CI config with score assertions
>
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 5 waves
> **Critical Path**: Task 1 -> Task 2 -> Task 3 -> Task 6 -> Task 9 -> Task 10

---

## Context

### Original Request
Implement a one-page landing for an AI project management SaaS placeholder, with mandatory MCP-supported research and modern UI patterns for 2026.

### Interview Summary
**Key Discussions**:
- Stack selected: `Next.js 15 + TypeScript + Tailwind`.
- Test approach selected: `tests-after`.
- Form persistence defaulted to `mock success` (no backend persistence unless explicitly requested).

**Research Findings**:
- Local repository has no existing frontend/test stack; conventions must be explicitly created.
- Trend research repeatedly confirms product-led hero, bento feature organization, subtle purposeful motion, and dark-mode readability concerns.
- External references confirm viable patterns for bento layouts, direction-aware interactions, and Playwright/Lighthouse verification.

### Metis Review
**Identified Gaps (addressed in this plan)**:
- Scope creep risk (extra sections/pages) -> explicit exclusion guardrails added.
- Motion vs performance tension -> effect budgets + reduced-motion criteria added.
- Hover interaction on touch devices -> mandatory fallback criteria added.
- Accessibility risk under neon/glass styling -> contrast/focus acceptance criteria added.
- Test flakiness risk -> deterministic selectors and explicit wait/assert strategy added.

---

## Work Objectives

### Core Objective
Deliver a production-ready single-page marketing landing that matches the requested 2026 visual language while remaining accessible, responsive, and testable by fully agent-executable checks.

### Concrete Deliverables
- `app/page.tsx` landing composition with Hero, Features, Testimonials, CTA sections
- `components/landing/*` reusable section components
- `components/ui/*` base UI primitives for button/input/card/toast usage
- `app/globals.css` and optional `styles/animations.css` tokenized theming/motion rules
- `tests/landing.spec.ts` Playwright E2E coverage
- `playwright.config.ts` responsive projects and evidence output
- `lighthouserc.json` Lighthouse CI assertions

### Definition of Done
- [x] Required sections render and are navigable on mobile and desktop
- [x] CTA form validates and submits mock flow with visible success feedback
- [x] Hover interactions gracefully degrade on touch devices
- [x] Playwright tests pass on configured viewports
- [x] Lighthouse CI thresholds meet target gates

### Must Have
- Dark-first visual system with readable neon accents
- Dark/light mode switcher exposed in UI
- Spotlight-style hero treatment
- Bento features grid with 3-4 cards
- Direction-aware testimonial interaction + touch fallback
- Stateful CTA button with loading/success states
- Sticky CTA behavior on mobile viewport
- Touch targets >= 44px for primary interactive controls
- Deterministic `data-testid` hooks for key interactive nodes

### Must NOT Have (Guardrails)
- No extra pages/routes (pricing/blog/docs/dashboard)
- No backend persistence/auth unless explicitly requested later
- No dependency sprawl for purely decorative effects
- No manual-human verification steps in acceptance criteria
- No inaccessible color combinations below WCAG contrast goals

---

## Verification Strategy (MANDATORY)

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> Every acceptance criterion must be executable by agents via command/tool. No "user manually checks" steps.

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: YES (tests-after)
- **Frameworks**: `@playwright/test` + `@lhci/cli`

### Agent-Executed QA Scenarios (MANDATORY)
Each task below includes concrete scenarios with:
- exact tools
- exact selectors/commands
- expected outcomes
- failure indicators
- evidence artifacts path

---

## Execution Strategy

### Parallel Execution Waves

Wave 1 (Start Immediately):
- Task 1: Project scaffold and tooling baseline
- Task 2: Design tokens, theme system, and global style architecture (after Task 1 scaffold in same wave)

Wave 2 (After Wave 1):
- Task 3: Hero section with spotlight and primary navigation CTA
- Task 4: Features bento grid section
- Task 6: CTA form + stateful button + validation + toast

Wave 3 (After Wave 2):
- Task 5: Testimonials direction-aware hover + touch fallback
- Task 7: Motion polish + reduced-motion support + animation debug protocol

Wave 4 (After Wave 3):
- Task 8: SEO/performance hardening
- Task 9: Playwright test suite + screenshot evidence

Wave 5 (Final):
- Task 10: Lighthouse CI assertions + final gate run

Critical Path: `1 -> 2 -> 3 -> 6 -> 9 -> 10`
Estimated Parallel Speedup: ~35-45% vs pure sequential execution.

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|----------------------|
| 1 | None | 2,3,4,6,8,9,10 | None |
| 2 | 1 | 3,4,5,6,7 | None |
| 3 | 1,2 | 7,9 | 4,6 |
| 4 | 1,2 | 9 | 3,6 |
| 5 | 2,4 | 9 | 7 |
| 6 | 1,2 | 9 | 3,4 |
| 7 | 3,5 | 9 | None |
| 8 | 1,2 | 10 | 9 |
| 9 | 3,4,5,6,7 | 10 | 8 |
| 10 | 8,9 | None | None |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|--------------------|
| 1 | 1 -> 2 | `task(category="quick", load_skills=["frontend-ui-ux"], run_in_background=false)` |
| 2 | 3,4,6 | `task(category="visual-engineering", load_skills=["frontend-ui-ux"], run_in_background=false)` |
| 3 | 5,7 | `task(category="visual-engineering", load_skills=["frontend-ui-ux", "playwright"], run_in_background=false)` |
| 4 | 8,9 | `task(category="unspecified-high", load_skills=["playwright"], run_in_background=false)` |
| 5 | 10 | `task(category="quick", load_skills=["playwright"], run_in_background=false)` |

---

## TODOs

- [x] 1. Initialize Next.js 15 + TypeScript + Tailwind baseline

  **What to do**:
  - Bootstrap App Router project structure in current repo root.
  - Install and configure core deps: Next.js, TypeScript, Tailwind, Playwright, Lighthouse CI, Motion (`motion` package).
  - Establish initial folders: `app/`, `components/landing/`, `components/ui/`, `styles/`, `tests/`, `.sisyphus/evidence/`.
  - Configure Playwright `webServer` so E2E runs can start/stop app automatically (no manual dev-server precondition).
  - Add deterministic `data-testid` conventions doc in markdown for QA selectors.

  **Must NOT do**:
  - Do not add extra routes/pages beyond landing.
  - Do not add unrelated libraries.

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: deterministic scaffold setup with low conceptual ambiguity.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: ensures initial project shape supports downstream visual system.
  - **Skills Evaluated but Omitted**:
    - `playwright`: deferred to testing tasks.

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (sequential entry task)
  - **Blocks**: 2,3,4,6,8,9,10
  - **Blocked By**: None

  **References**:
  - `/vercel/next.js/v15.1.8` (Context7) - App Router project conventions and production checklist.
  - `https://github.com/themesberg/tailwind-landing-page` - baseline Tailwind landing structure ideas.
  - `https://github.com/magicuidesign/magicui` - component naming/composition references.

  **Acceptance Criteria**:
  - [x] `npm run build` exits `0`.
  - [x] `npm run dev` starts without runtime errors.
  - [x] Folder skeleton exists: `app`, `components/landing`, `components/ui`, `styles`, `tests`, `.sisyphus/evidence`.
  - [x] `playwright.config.ts` includes `webServer` command so tests are self-contained.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Build pipeline boots cleanly
    Tool: Bash
    Preconditions: dependencies installed
    Steps:
      1. Run: npm run build
      2. Assert: exit code = 0
      3. Capture output to .sisyphus/evidence/task-1-build.txt
    Expected Result: production build succeeds
    Failure Indicators: non-zero exit, module resolution errors
    Evidence: .sisyphus/evidence/task-1-build.txt

  Scenario: Dev server serves root route
    Tool: Playwright
    Preconditions: Playwright `webServer` is configured to boot app automatically
    Steps:
      1. Navigate to http://localhost:3000
      2. Wait for document readyState complete
      3. Assert: page has [data-testid="landing-root"]
      4. Screenshot: .sisyphus/evidence/task-1-root.png
    Expected Result: base route responds and root node is present
    Failure Indicators: 404/500, missing root test id
    Evidence: .sisyphus/evidence/task-1-root.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `chore(setup): scaffold nextjs landing baseline`
  - Files: app/*, components/*, styles/*, tests/*, config files
  - Pre-commit: `npm run build`

- [x] 2. Implement design tokens, dark-first theme, and typography system

  **What to do**:
  - Define CSS variables for color, spacing, radius, shadow, and motion timing.
  - Implement dark-default theme and optional light toggle support.
  - Apply typography scale (large display headline, minimum readable body size).
  - Add glassmorphism tokens that preserve contrast.

  **Must NOT do**:
  - Do not hardcode repeated colors across components.
  - Do not use unreadable neon-on-neon combinations.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: core visual system decisions affect all sections.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: token design + readability balancing.
  - **Skills Evaluated but Omitted**:
    - `playwright`: validation occurs in later QA tasks.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1
  - **Blocks**: 3,4,5,6,7,8
  - **Blocked By**: 1

  **References**:
  - `/websites/tailwindcss` (Context7) - dark variant and color-scheme usage.
  - `https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples` - modern dark/neon direction constraints.
  - `https://www.involve.me/blog/landing-page-design-trends` - readability and conversion-oriented hierarchy cues.

  **Acceptance Criteria**:
  - [x] `app/globals.css` exposes reusable token variables.
  - [x] Default render uses dark theme.
  - [x] Theme toggle updates visual state without layout shift.
  - [x] Body text computed size is >= 18px on desktop.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Dark mode is default and readable
    Tool: Playwright
    Preconditions: app started by Playwright `webServer` or agent-managed command (no manual startup)
    Steps:
      1. Navigate to /
      2. Evaluate computed style of body background and text color
      3. Assert: contrast-friendly pair (not identical/near-identical values)
      4. Screenshot: .sisyphus/evidence/task-2-dark-default.png
    Expected Result: dark theme active by default, readable text
    Failure Indicators: light background default, low-contrast text
    Evidence: .sisyphus/evidence/task-2-dark-default.png

  Scenario: Theme toggle changes mode deterministically
    Tool: Playwright
    Preconditions: [data-testid="theme-toggle"] exists
    Steps:
      1. Click [data-testid="theme-toggle"]
      2. Assert html[data-theme="light"] (or equivalent class)
      3. Click toggle again
      4. Assert html[data-theme="dark"]
      5. Screenshot: .sisyphus/evidence/task-2-theme-toggle.png
    Expected Result: toggle cycles themes without errors
    Failure Indicators: no attribute/class change, visual corruption
    Evidence: .sisyphus/evidence/task-2-theme-toggle.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(theme): add dark-first tokens and theming`
  - Files: `app/globals.css`, `styles/*`, optional theme toggle component
  - Pre-commit: `npm run build`

- [x] 3. Build Hero section with spotlight effect and primary CTA

  **What to do**:
  - Implement hero with headline/subheadline/value framing for AI project management.
  - Add spotlight background treatment and purposeful entrance motion.
  - Add primary CTA and secondary proof element.

  **Must NOT do**:
  - Do not add carousel/video bloat unless required.
  - Do not use blocking animations that delay first content render.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: hero quality drives first impression and conversion.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: balances typography, composition, and visual hierarchy.
  - **Skills Evaluated but Omitted**:
    - `playwright`: only for verification, not implementation.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with 4,6)
  - **Blocks**: 7,9
  - **Blocked By**: 1,2

  **References**:
  - `https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples` - story-led hero principles.
  - `/websites/motion_dev_react` (Context7) - `useInView` / `whileInView` animation patterns.
  - `/vercel/next.js/v15.1.8` (Context7) - metadata and app route practices.

  **Acceptance Criteria**:
  - [x] Hero section has `data-testid="hero-section"` and visible `h1`.
  - [x] Primary CTA exists and is keyboard focusable.
  - [x] Spotlight layer does not reduce text readability.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Hero loads with visible value proposition
    Tool: Playwright
    Preconditions: app started by Playwright `webServer` or agent-managed command (no manual startup)
    Steps:
      1. Navigate to /
      2. Assert [data-testid="hero-section"] visible
      3. Assert h1 contains AI-project-management value phrase
      4. Assert [data-testid="hero-cta"] visible and enabled
      5. Screenshot: .sisyphus/evidence/task-3-hero.png
    Expected Result: hero communicates offer immediately
    Failure Indicators: missing headline/CTA, occluded text
    Evidence: .sisyphus/evidence/task-3-hero.png

  Scenario: Hero CTA remains accessible via keyboard
    Tool: Playwright
    Preconditions: page loaded at /
    Steps:
      1. Press Tab until [data-testid="hero-cta"] focused
      2. Assert visible focus ring exists
      3. Press Enter
      4. Assert navigation/scroll to CTA target section occurs
      5. Screenshot: .sisyphus/evidence/task-3-hero-keyboard.png
    Expected Result: full keyboard activation works
    Failure Indicators: no focus state, Enter does nothing
    Evidence: .sisyphus/evidence/task-3-hero-keyboard.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(hero): add spotlight hero and primary cta`
  - Files: `components/landing/Hero.tsx`, `app/page.tsx`, style files
  - Pre-commit: `npm run build`

- [x] 4. Build Features section using Bento grid pattern

  **What to do**:
  - Create 3-4 feature cards in asymmetrical bento layout.
  - Ensure responsive reshuffle behavior across mobile/tablet/desktop.
  - Add iconography and concise feature copy.

  **Must NOT do**:
  - Do not overcrowd cards with long text blocks.
  - Do not break card order semantics for screen readers.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: grid composition and responsive behavior are design-critical.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: information hierarchy in modular tiles.
  - **Skills Evaluated but Omitted**:
    - `playwright`: deferred to test tasks.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: 5,9
  - **Blocked By**: 1,2

  **References**:
  - `https://github.com/magicuidesign/magicui/blob/main/apps/www/registry/magicui/bento-grid.tsx` - bento component API and card composition style.
  - `https://github.com/MODSetter/SurfSense/blob/main/surfsense_web/components/homepage/features-bento-grid.tsx` - mapping data -> bento items.
  - `https://landdding.com/blog/blog-bento-grid-design-guide` - spacing and readability guardrails.

  **Acceptance Criteria**:
  - [x] `data-testid="features-section"` exists with 3-4 cards.
  - [x] No horizontal overflow at 375px viewport.
  - [x] Card headings remain readable and not clipped.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Bento features render and remain scannable
    Tool: Playwright
    Preconditions: section implemented
    Steps:
      1. Navigate to /
      2. Scroll to [data-testid="features-section"]
      3. Assert count of [data-testid="feature-card"] in [3,4]
      4. Screenshot: .sisyphus/evidence/task-4-bento-desktop.png
    Expected Result: cards visible and structurally consistent
    Failure Indicators: wrong count, collapsed cards
    Evidence: .sisyphus/evidence/task-4-bento-desktop.png

  Scenario: Mobile layout has no horizontal scroll
    Tool: Playwright
    Preconditions: viewport 375x812
    Steps:
      1. Set viewport 375x812
      2. Navigate to /
      3. Evaluate: document.documentElement.scrollWidth <= innerWidth
      4. Screenshot: .sisyphus/evidence/task-4-bento-mobile.png
    Expected Result: no x-overflow on small screens
    Failure Indicators: scrollWidth greater than viewport width
    Evidence: .sisyphus/evidence/task-4-bento-mobile.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(features): implement responsive bento grid`
  - Files: `components/landing/Features.tsx`, related styles
  - Pre-commit: `npm run build`

- [x] 5. Build Testimonials with direction-aware hover and touch fallback

  **What to do**:
  - Implement testimonial cards with direction-aware hover animation on pointer devices.
  - Add touch/mobile fallback interaction that does not rely on hover.
  - Preserve keyboard accessibility and readable quote text.

  **Must NOT do**:
  - Do not require hover-only access to testimonial content.
  - Do not animate with layout-janking properties.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: interaction model differs by input modality.
  - **Skills**: `frontend-ui-ux`, `playwright`
    - `frontend-ui-ux`: interaction choreography and fallback design.
    - `playwright`: robust hover/touch verification during implementation.
  - **Skills Evaluated but Omitted**:
    - `dev-browser`: Playwright already covers this scope.

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3
  - **Blocks**: 9
  - **Blocked By**: 2,4

  **References**:
  - `https://github.com/0x1Luffy/New-Portfolio/blob/main/components/ui/direction-aware-hover.tsx` - direction-aware hover implementation pattern.
  - `https://github.com/Learn-with-Sumit/rnext-batch-1-solutions/blob/main/Assignment%2010%20-%20LWS%20Kart/src/components/ui/image-hover.tsx` - framer-motion direction logic example.
  - `/websites/motion_dev_react` (Context7) - viewport/gesture patterns and reduced-motion options.

  **Acceptance Criteria**:
  - [x] `data-testid="testimonials-section"` renders at least 3 cards.
  - [x] Hover animation works on desktop pointer.
  - [x] Non-hover fallback works on mobile/touch.
  - [x] Card text remains keyboard reachable.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Direction-aware hover activates on desktop
    Tool: Playwright
    Preconditions: desktop viewport 1280x800
    Steps:
      1. Navigate to /
      2. Scroll to [data-testid="testimonials-section"]
      3. Hover [data-testid="testimonial-card-0"] from top then from left (via mouse move path)
      4. Assert overlay class changes with entry direction marker
      5. Screenshot: .sisyphus/evidence/task-5-hover-desktop.png
    Expected Result: direction-aware effect responds to entry vector
    Failure Indicators: static overlay, no direction state
    Evidence: .sisyphus/evidence/task-5-hover-desktop.png

  Scenario: Touch fallback exposes testimonial without hover
    Tool: Playwright
    Preconditions: mobile viewport 375x812
    Steps:
      1. Set viewport 375x812
      2. Navigate to /
      3. Tap [data-testid="testimonial-card-0"]
      4. Assert quote/details become visible
      5. Screenshot: .sisyphus/evidence/task-5-touch-fallback.png
    Expected Result: user can access content on touch devices
    Failure Indicators: tap no-op, hidden content
    Evidence: .sisyphus/evidence/task-5-touch-fallback.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(testimonials): add direction-aware cards with touch fallback`
  - Files: `components/landing/Testimonials.tsx`, motion helpers
  - Pre-commit: `npm run build`

- [x] 6. Implement CTA form with validation, stateful button, and toast feedback

  **What to do**:
  - Add email capture form with client-side validation.
  - Implement stateful CTA button: idle -> loading -> success.
  - Show success toast and inline status message.
  - Add sticky mobile CTA affordance for small screens.
  - Keep submission mock-only (no backend persistence).

  **Must NOT do**:
  - Do not submit duplicate requests on rapid clicks.
  - Do not hide validation errors behind animation delays.

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: combines validation logic, async state, and UI feedback.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: high-quality form UX and state handling.
  - **Skills Evaluated but Omitted**:
    - `playwright`: kept for dedicated verification tasks.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2
  - **Blocks**: 9
  - **Blocked By**: 1,2

  **References**:
  - `aceternity_list_components` + `shadcn_list_components` results - available primitives (`button`, `input`, `card`, `sonner`, `form`).
  - `/microsoft/playwright` (Context7) - stable form interaction assertion examples.
  - `https://www.saashero.net/uncategorized/high-converting-landing-page-examples/` - CTA clarity and friction minimization patterns.

  **Acceptance Criteria**:
  - [x] CTA form has `name="email"` input and submit button with loading state.
  - [x] Invalid email blocks submit and shows explicit error text.
  - [x] Valid email triggers mock async flow and success toast.
  - [x] Repeated click during loading does not create multiple submissions.
  - [x] Sticky mobile CTA appears at small viewport and remains tappable.
  - [x] Primary CTA tap target is >= 44px height.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Valid email submission shows success state
    Tool: Playwright
    Preconditions: page loaded, CTA section present
    Steps:
      1. Fill [name="email"] with "test@example.com"
      2. Click [data-testid="cta-submit"]
      3. Assert button text changes to loading state
      4. Wait for success state
      5. Assert .success-message visible and toast visible
      6. Screenshot: .sisyphus/evidence/task-6-valid-submit.png
    Expected Result: smooth state transition ending in success
    Failure Indicators: no loading state, missing success feedback
    Evidence: .sisyphus/evidence/task-6-valid-submit.png

  Scenario: Invalid email shows validation and prevents submit
    Tool: Playwright
    Preconditions: CTA form rendered
    Steps:
      1. Fill [name="email"] with "invalid-email"
      2. Click [data-testid="cta-submit"]
      3. Assert validation message visible (contains "valid email")
      4. Assert no success toast appears within 2s
      5. Screenshot: .sisyphus/evidence/task-6-invalid-email.png
    Expected Result: request blocked, clear error shown
    Failure Indicators: submit proceeds, no validation message
    Evidence: .sisyphus/evidence/task-6-invalid-email.png

  Scenario: Sticky mobile CTA remains visible and touch-friendly
    Tool: Playwright
    Preconditions: viewport 375x812
    Steps:
      1. Set viewport 375x812 and navigate to /
      2. Scroll page downward 60%
      3. Assert [data-testid="mobile-sticky-cta"] is visible
      4. Evaluate element bounding box height >= 44
      5. Screenshot: .sisyphus/evidence/task-6-sticky-mobile-cta.png
    Expected Result: sticky CTA remains accessible on mobile
    Failure Indicators: CTA hidden/offscreen or too small for touch
    Evidence: .sisyphus/evidence/task-6-sticky-mobile-cta.png
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(cta): add validated form and stateful submission`
  - Files: `components/landing/CTA.tsx`, form/ui helpers
  - Pre-commit: `npm run build`

- [x] 7. Add micro-interactions and reduced-motion-safe animation layer

  **What to do**:
  - Add meaningful scroll reveal/stagger effects for sections.
  - Use Motion for React patterns (`useInView`/`whileInView`, `useReducedMotion`) for accessibility.
  - Cap animation intensity and avoid layout thrash.
  - Use sequential-thinking workflow to debug any complex animation conflict.

  **Must NOT do**:
  - Do not animate expensive layout properties repeatedly.
  - Do not ignore `prefers-reduced-motion`.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: complex interaction/performance balancing.
  - **Skills**: `frontend-ui-ux`, `playwright`
    - `frontend-ui-ux`: motion design constraints.
    - `playwright`: animation timing verification.
  - **Skills Evaluated but Omitted**:
    - `dev-browser`: redundant with Playwright skill.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Task 5)
  - **Blocks**: 9
  - **Blocked By**: 3,5

  **References**:
  - `/websites/motion_dev_react` (Context7) - `useInView`/`whileInView` and `useReducedMotion` patterns.
  - `https://www.b12.io/resource-center/website-design/web-design-guide-bento-grids-and-kinetic-typography/` - restrained kinetic typography guidance.
  - `sequential-thinking_sequentialthinking` tool - stepwise debug process for animation regressions.

  **Acceptance Criteria**:
  - [x] Section reveals execute once and remain smooth.
  - [x] Reduced-motion mode removes/transforms heavy animations.
  - [x] No animation introduces measurable layout shifts in key sections.
  - [x] Sequential-thinking debug note produced for animation risk triage (`.sisyphus/evidence/task-7-animation-debug.md`).

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Scroll reveal sequence works at standard motion
    Tool: Playwright
    Preconditions: desktop viewport
    Steps:
      1. Navigate to /
      2. Scroll through hero -> features -> testimonials -> cta
      3. Assert each section gains "revealed" state class once
      4. Screenshot: .sisyphus/evidence/task-7-scroll-reveal.png
    Expected Result: staged reveals without jitter
    Failure Indicators: repeated re-trigger, flicker, missing reveal
    Evidence: .sisyphus/evidence/task-7-scroll-reveal.png

  Scenario: Reduced-motion preference disables heavy transitions
    Tool: Playwright
    Preconditions: emulate reduced motion media feature
    Steps:
      1. Launch context with reducedMotion = "reduce"
      2. Navigate to /
      3. Assert animated elements use simplified/no transform transitions
      4. Screenshot: .sisyphus/evidence/task-7-reduced-motion.png
    Expected Result: accessible low-motion behavior
    Failure Indicators: full motion still active under reduced preference
    Evidence: .sisyphus/evidence/task-7-reduced-motion.png

  Scenario: Complex animation issue is debugged step-by-step
    Tool: sequential-thinking + Markdown evidence
    Preconditions: at least one animation transition reviewed for jitter/overdraw risk
    Steps:
      1. Run sequential-thinking with explicit hypothesis -> verification steps for one animation flow
      2. Record chosen fix and rejected alternatives
      3. Save decision log to .sisyphus/evidence/task-7-animation-debug.md
    Expected Result: traceable debugging rationale exists
    Failure Indicators: animation changes made with no recorded reasoning
    Evidence: .sisyphus/evidence/task-7-animation-debug.md
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `feat(motion): add scroll interactions with reduced-motion fallback`
  - Files: section components, animation utilities
  - Pre-commit: `npm run build`

- [x] 8. Implement SEO, semantic structure, and performance optimizations

  **What to do**:
  - Configure Next.js metadata (`title`, `description`, OG basics).
  - Ensure semantic heading structure and landmark usage.
  - Use optimized font/image strategy and avoid render-blocking assets.
  - Add explicit alt text and accessible labels.

  **Must NOT do**:
  - Do not leave duplicate/missing meta basics.
  - Do not ship non-optimized decorative assets.

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: deterministic hardening tasks with clear criteria.
  - **Skills**: `frontend-ui-ux`
    - `frontend-ui-ux`: balances semantic correctness and visual constraints.
  - **Skills Evaluated but Omitted**:
    - `playwright`: verification occurs in Task 9/10.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4 (with Task 9)
  - **Blocks**: 10
  - **Blocked By**: 1,2

  **References**:
  - `/vercel/next.js/v15.1.8` (Context7) - metadata and production checklist guidance.
  - `https://webflow.com/blog/saas-website-design-examples` - content hierarchy and social proof flow cues.
  - `https://www.involve.me/blog/landing-page-design-trends` - mobile-first and load-speed conversion implications.

  **Acceptance Criteria**:
  - [x] Metadata present in page source (`title`, `description`).
  - [x] Semantic structure has one primary `h1` and logical section headings.
  - [x] All non-decorative images include `alt` text.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Metadata and headings are valid
    Tool: Playwright
    Preconditions: page available
    Steps:
      1. Navigate to /
      2. Assert document.title is non-empty and product-specific
      3. Assert meta[name="description"] exists and non-empty
      4. Assert exactly one h1 exists
      5. Screenshot: .sisyphus/evidence/task-8-seo-headings.png
    Expected Result: SEO and semantic baseline valid
    Failure Indicators: missing meta, multiple h1, empty title
    Evidence: .sisyphus/evidence/task-8-seo-headings.png

  Scenario: Image accessibility baseline
    Tool: Playwright
    Preconditions: any images rendered
    Steps:
      1. Evaluate all img elements
      2. Assert each non-decorative image has non-empty alt
      3. Save evaluation output to .sisyphus/evidence/task-8-img-alt.json
    Expected Result: no missing alt on meaningful images
    Failure Indicators: empty/missing alt on content images
    Evidence: .sisyphus/evidence/task-8-img-alt.json
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `chore(seo): add metadata and semantic hardening`
  - Files: `app/layout.tsx`, relevant components
  - Pre-commit: `npm run build`

- [x] 9. Create Playwright E2E suite with responsive and interaction coverage

  **What to do**:
  - Add Playwright config with projects for mobile and desktop viewports.
  - Ensure Playwright `webServer` starts app automatically for all CI/local runs.
  - Implement `tests/landing.spec.ts` to verify all required sections and interactions.
  - Capture screenshots for key scenarios into `.sisyphus/evidence/`.
  - Cover dark/light toggle, form flows, and animation availability.

  **Must NOT do**:
  - Do not use brittle selectors tied to visual text only.
  - Do not rely on static timeouts when stable state assertions exist.

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: multi-viewport, multi-flow QA orchestration.
  - **Skills**: `playwright`
    - `playwright`: direct fit for browser E2E and evidence capture.
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: implementation complete; this is test authoring.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 4
  - **Blocks**: 10
  - **Blocked By**: 3,4,5,6,7

  **References**:
  - `/microsoft/playwright` (Context7) - viewport projects and `toHaveScreenshot` patterns.
  - User-provided starter spec skeleton for `tests/landing.spec.js`.
  - Metis directive: deterministic `data-testid` usage to reduce flakiness.

  **Acceptance Criteria**:
  - [x] `playwright.config.ts` includes projects for `375`, `768`, `1280`, `1920` equivalent coverage.
  - [x] `playwright.config.ts` includes `webServer` configuration (no manual app boot required).
  - [x] Test suite validates hero/features/testimonials/cta presence.
  - [x] Test suite validates form success and invalid-email path.
  - [x] Screenshot evidence generated for each major viewport class.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Core landing flows pass on desktop
    Tool: Bash + Playwright
    Preconditions: app lifecycle managed by Playwright `webServer`
    Steps:
      1. Run: npx playwright test tests/landing.spec.ts --project=chromium
      2. Assert: all tests pass
      3. Collect screenshots to .sisyphus/evidence/task-9-desktop/*
    Expected Result: desktop flows green
    Failure Indicators: failing assertions in hero/form/theme interactions
    Evidence: .sisyphus/evidence/task-9-desktop/

  Scenario: Mobile and tablet responsive flows pass
    Tool: Bash + Playwright
    Preconditions: mobile/tablet projects configured
    Steps:
      1. Run: npx playwright test tests/landing.spec.ts --project="Mobile Chrome"
      2. Run: npx playwright test tests/landing.spec.ts --grep "responsive"
      3. Assert: no overflow and interactions remain usable
      4. Collect screenshots to .sisyphus/evidence/task-9-mobile/*
    Expected Result: touch-friendly responsive UX verified
    Failure Indicators: overflow, tap failures, inaccessible targets
    Evidence: .sisyphus/evidence/task-9-mobile/
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `test(e2e): add responsive playwright coverage for landing`
  - Files: `playwright.config.ts`, `tests/landing.spec.ts`
  - Pre-commit: `npx playwright test`

- [x] 10. Add Lighthouse CI thresholds and run final quality gate

  **What to do**:
  - Create `lighthouserc.json` with category assertions.
  - Configure collect/start command for production mode (`npm run build && npm run start -- -p 3000`).
  - Set `collect.url` to landing root only (`http://localhost:3000/`).
  - Set upload target to filesystem under `.sisyphus/evidence/lhci`.
  - Enforce thresholds:
    - Performance > 0.90
    - Accessibility > 0.95
    - SEO > 0.95
  - Save report artifacts and failing audit details if any.

  **Must NOT do**:
  - Do not score on dev build only.
  - Do not ignore failing accessibility audits.

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: config-driven final gate task.
  - **Skills**: `playwright`
    - `playwright`: complements final browser verification workflow.
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: no additional UI implementation here.

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 5
  - **Blocks**: None (final)
  - **Blocked By**: 8,9

  **References**:
  - `https://web.dev/articles/lighthouse-ci` - official Lighthouse CI workflow and assertions.
  - `https://github.com/GoogleChrome/lighthouse-ci` - command/config syntax reference.
  - Metis risk note: verify visual effects do not destroy performance budget.

  **Acceptance Criteria**:
  - [x] `npx lhci autorun --config=./lighthouserc.json` executes successfully.
  - [x] Category assertions pass at configured minimums.
  - [x] `lighthouserc.json` includes production `startServerCommand`, root `url`, and filesystem upload target.
  - [x] Reports saved for audit and regression tracking.

  **Agent-Executed QA Scenarios**:
  ```text
  Scenario: Lighthouse gate passes with required scores
    Tool: Bash
    Preconditions: production build available and app served by LHCI config
    Steps:
      1. Run: npx lhci autorun --config=./lighthouserc.json
      2. Assert: exit code = 0
      3. Parse output for category scores
      4. Save output to .sisyphus/evidence/task-10-lhci.txt
    Expected Result: thresholds satisfied
    Failure Indicators: non-zero exit, category below minimum
    Evidence: .sisyphus/evidence/task-10-lhci.txt

  Scenario: Failing threshold is actionable
    Tool: Bash
    Preconditions: run with stricter temporary threshold for dry negative check
    Steps:
      1. Execute LHCI with temporary high min score (e.g., performance 0.99)
      2. Assert command returns non-zero and lists failing assertion
      3. Save output to .sisyphus/evidence/task-10-lhci-negative.txt
    Expected Result: failure mode clearly reported
    Failure Indicators: silent pass on failing criteria
    Evidence: .sisyphus/evidence/task-10-lhci-negative.txt
  ```

  **Commit**: OPTIONAL (only if user explicitly requested and repo is git-initialized)
  - Message: `chore(quality): enforce lighthouse ci thresholds`
  - Files: `lighthouserc.json`, optional CI workflow config
  - Pre-commit: `npx lhci autorun --config=./lighthouserc.json`

---

## Commit Strategy (Conditional)

> Apply only if repository is git-initialized **and** user explicitly asks for commits.

| After Task | Message | Files | Verification |
|-----------|---------|-------|--------------|
| 1 | `chore(setup): scaffold nextjs landing baseline` | scaffold + configs | `npm run build` |
| 2 | `feat(theme): add dark-first tokens and theming` | globals/styles/theme toggle | `npm run build` |
| 3-4 | `feat(landing): implement hero and bento features` | section components | `npm run build` |
| 5-7 | `feat(interactions): testimonials and motion behaviors` | testimonial + motion files | `npm run build` |
| 6 | `feat(cta): add validated form and stateful submission` | CTA/form files | `npm run build` |
| 8 | `chore(seo): add metadata and semantic hardening` | layout + semantics | `npm run build` |
| 9 | `test(e2e): add responsive playwright coverage` | playwright config + specs | `npx playwright test` |
| 10 | `chore(quality): enforce lighthouse ci thresholds` | lhci config/workflow | `npx lhci autorun` |

---

## Success Criteria

### Verification Commands
```bash
npm run build
# Expected: exit code 0

npx playwright test
# Expected: all tests pass across configured projects

npx lhci autorun --config=./lighthouserc.json
# Expected: performance > 0.90, accessibility > 0.95, seo > 0.95
```

### Final Checklist
- [x] Required sections shipped (Hero, Features, Testimonials, CTA)
- [x] Dark-first visual language implemented with readable neon/glass accents
- [x] Reduced-motion and touch fallbacks validated
- [x] Playwright suite passing with evidence artifacts
- [x] Lighthouse CI thresholds passing
- [x] No scope creep features added
