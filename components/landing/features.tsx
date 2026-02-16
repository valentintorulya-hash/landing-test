import { Card } from "@/components/ui/card";

type FeatureTone = "ocean" | "mint" | "violet" | "amber";

type Feature = {
  eyebrow: string;
  title: string;
  description: string;
  size: string;
  tone: FeatureTone;
  detail: string[];
  signal: number[];
  cadence: string;
};

const features: Feature[] = [
  {
    eyebrow: "Coordination",
    title: "Live Risk Radar",
    description:
      "Detect scope creep and delivery risks before they block launch week.",
    size: "md:col-span-4",
    tone: "ocean",
    detail: ["Auto-prioritized blockers", "Dependency impact map", "Owner-level drilldown"],
    signal: [42, 60, 76, 88, 92],
    cadence: "Updated 2 min ago",
  },
  {
    eyebrow: "Planning",
    title: "Sprint Drafts in 10s",
    description:
      "Convert goals into prioritized tasks with clear owners and timelines.",
    size: "md:col-span-2",
    tone: "mint",
    detail: ["Context-aware templates"],
    signal: [36, 54, 68, 81, 90],
    cadence: "Updated 5 min ago",
  },
  {
    eyebrow: "Reporting",
    title: "Auto Stakeholder Briefs",
    description:
      "Generate concise updates from tickets, docs, and standup notes.",
    size: "md:col-span-2",
    tone: "violet",
    detail: ["Weekly narrative snapshots"],
    signal: [28, 40, 61, 74, 86],
    cadence: "Updated 9 min ago",
  },
  {
    eyebrow: "Delivery",
    title: "Dependency Heatmap",
    description:
      "Visualize blockers across engineering, design, and go-to-market.",
    size: "md:col-span-4",
    tone: "amber",
    detail: ["Release-critical path", "Cross-functional conflict alerts"],
    signal: [34, 47, 58, 66, 79],
    cadence: "Updated 3 min ago",
  },
];

const toneByFeature: Record<FeatureTone, string> = {
  ocean:
    "bg-[radial-gradient(circle_at_84%_12%,color-mix(in_oklab,var(--color-accent-2),transparent_72%),transparent_40%),linear-gradient(155deg,color-mix(in_oklab,var(--color-surface),transparent_6%),color-mix(in_oklab,var(--color-surface-2),transparent_4%))]",
  mint:
    "bg-[radial-gradient(circle_at_90%_8%,color-mix(in_oklab,var(--color-accent),transparent_70%),transparent_45%),linear-gradient(155deg,color-mix(in_oklab,var(--color-surface),transparent_8%),color-mix(in_oklab,var(--color-surface-2),transparent_5%))]",
  violet:
    "bg-[radial-gradient(circle_at_88%_15%,color-mix(in_oklab,var(--color-accent-2),transparent_68%),transparent_42%),linear-gradient(155deg,color-mix(in_oklab,var(--color-surface),transparent_6%),color-mix(in_oklab,var(--color-surface-3),transparent_10%))]",
  amber:
    "bg-[radial-gradient(circle_at_86%_12%,color-mix(in_oklab,var(--color-warning),transparent_75%),transparent_42%),linear-gradient(155deg,color-mix(in_oklab,var(--color-surface),transparent_4%),color-mix(in_oklab,var(--color-surface-2),transparent_8%))]",
};

const rails = ["Product", "Engineering", "Operations"];

export function Features() {
  return (
    <section id="features" data-testid="features-section" className="reveal-in reveal-delay-1 mt-20">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-text-muted)]">
          Feature architecture
        </p>
        <h2 className="text-3xl font-semibold text-[var(--color-text)] md:text-5xl">
          Built for cross-functional shipping velocity.
        </h2>
        <p className="mt-4 text-pretty text-[var(--color-text-muted)]">
          Every block is designed to reduce decision latency, not just look good
          in screenshots.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {rails.map((rail, railIndex) => (
            <span
              key={rail}
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${railIndex === 0 ? "bg-[var(--color-accent)]" : railIndex === 1 ? "bg-[var(--color-accent-2)]" : "bg-[var(--color-warning)]"}`}
              />
              {rail}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            data-testid="feature-card"
            className={`${feature.size} min-h-52 overflow-hidden border-[color-mix(in_oklab,var(--color-border),transparent_10%)] ${toneByFeature[feature.tone]}`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent-soft),transparent)] opacity-75" />
            <div className="relative z-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                {feature.eyebrow}
              </p>
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-text)] md:text-2xl">
                  {feature.title}
                </h3>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_8%)] text-xs font-semibold text-[var(--color-accent-soft)]">
                  0{index + 1}
                </span>
              </div>
              <p className="text-base leading-7 text-[var(--color-text-muted)]">
                {feature.description}
              </p>
              <p className="mt-4 inline-flex rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
                {feature.cadence}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-text-muted)]">
                {feature.detail.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6" aria-hidden="true">
                <div className="flex items-end gap-1.5">
                  {feature.signal.map((value, valueIndex) => (
                    <span
                      key={`${feature.title}-${valueIndex}`}
                      style={{ height: `${value / 2}%` }}
                      className="w-4 rounded-sm bg-[linear-gradient(to_top,var(--color-accent),var(--color-accent-2))] opacity-80"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[var(--color-accent-2)]/16 blur-2xl" />
          </Card>
        ))}
      </div>
    </section>
  );
}
