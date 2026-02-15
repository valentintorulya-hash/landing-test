# Decisions

- 2026-02-16: Set Playwright default port to `3100` to avoid collisions with local services on `3000`.
- 2026-02-16: Use Chromium-based tablet project at `768x1024` for deterministic local execution without WebKit install dependency.
- 2026-02-16: Keep CTA email validation in app logic using `type="text"` + regex to avoid native browser validation bypassing test flow.
- 2026-02-16: Treat plan as complete only after build, E2E, and LHCI evidence files are written under `.sisyphus/evidence`.
