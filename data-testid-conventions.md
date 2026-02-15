# data-testid conventions

Goal: keep E2E selectors stable and deterministic.

## General rules

- Prefer `data-testid` over text/DOM-structure selectors.
- Keep IDs stable (avoid marketing copy, order-based IDs, or dynamic values).

## Naming

- Sections: `section-*` (example: `section-hero`)
- Controls: `control-*` (example: `control-theme-toggle`)
- Repeated items: `item-<name>-<index>` (example: `item-testimonial-0`)

## Required baseline IDs

- Root node: `data-testid="landing-root"`
