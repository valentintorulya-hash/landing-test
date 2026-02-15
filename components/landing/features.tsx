import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Live Risk Radar",
    description:
      "Detect scope creep and delivery risks before they block launch week.",
    size: "md:col-span-2",
  },
  {
    title: "Sprint Drafts in 10s",
    description:
      "Convert goals into prioritized tasks with clear owners and timelines.",
    size: "",
  },
  {
    title: "Auto Stakeholder Briefs",
    description:
      "Generate concise updates from tickets, docs, and standup notes.",
    size: "",
  },
  {
    title: "Dependency Heatmap",
    description:
      "Visualize blockers across engineering, design, and go-to-market.",
    size: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section data-testid="features-section" className="reveal-in reveal-delay-1 mt-20">
      <div className="mb-8">
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          Built for cross-functional shipping velocity.
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <Card
            key={feature.title}
            data-testid="feature-card"
            className={`${feature.size} min-h-44 bg-[linear-gradient(140deg,var(--color-surface),var(--color-surface-2))]`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">
              0{index + 1}
            </p>
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              {feature.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
