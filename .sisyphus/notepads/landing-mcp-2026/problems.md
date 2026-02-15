# Problems

- 2026-02-16: Early runs hit intermittent `.next/routes-manifest.json` missing errors during dev startup.
  - Resolution: re-run clean build and execute tests through Playwright-managed `webServer` lifecycle.
- 2026-02-16: CTA invalid-email test failed due to native input type validation behavior.
  - Resolution: switched to app-controlled validation path and re-verified across all viewports.
- 2026-02-16: Tablet project initially targeted a WebKit profile unavailable locally.
  - Resolution: switched tablet project to Chromium while preserving viewport coverage requirements.
