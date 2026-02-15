## Animation Debug Note

- Hypothesis: Section reveal classes could introduce repeated animation on reflow.
- Check: Verified reveals are CSS keyframe based and run once per mount (`.reveal-in`).
- Reduced motion check: `prefers-reduced-motion: reduce` disables reveal animations.
- Decision: Keep CSS-only reveal approach for low overhead and accessibility.
- Rejected alternative: JavaScript scroll listener orchestration due complexity and runtime cost.
