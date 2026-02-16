import { ThemeToggle } from "./theme-toggle";

const highlights = [
  { label: "Sprint Planning", value: "-62%" },
  { label: "Risk Visibility", value: "+4.7x" },
  { label: "Stakeholder Updates", value: "Realtime" },
];

const lanes = [
  { name: "Roadmap Confidence", score: "92%", tone: "good" },
  { name: "Cross-Team Dependencies", score: "14 open", tone: "warn" },
  { name: "Launch Readiness", score: "On track", tone: "good" },
];

const integrations = ["Jira", "Linear", "Notion", "Slack"];
const modes = ["Plan", "Align", "Ship"];
const syncStates = [
  { label: "Data sync", value: "27s ago" },
  { label: "Next digest", value: "in 3m" },
];

export function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="reveal-in relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[radial-gradient(circle_at_14%_12%,var(--color-spotlight),transparent_42%),radial-gradient(circle_at_88%_8%,var(--color-spotlight-2),transparent_42%),linear-gradient(160deg,var(--color-surface),var(--color-surface-2))] px-5 py-8 md:px-10 md:py-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--color-accent)]/18 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[var(--color-accent-2)]/20 blur-3xl" />

      <header className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_16%)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Pulseboard AI
        </div>
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
          <a className="hover:text-[var(--color-text)]" href="#features">
            Features
          </a>
          <a className="hover:text-[var(--color-text)]" href="#testimonials">
            Stories
          </a>
          <a className="hover:text-[var(--color-text)]" href="#cta">
            Pricing
          </a>
        </nav>
        <ThemeToggle />
      </header>

      <nav className="relative z-10 mt-4 flex flex-wrap gap-2 md:hidden">
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#features"
        >
          Features
        </a>
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#testimonials"
        >
          Stories
        </a>
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#cta"
        >
          Pricing
        </a>
      </nav>

      <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-2),transparent_10%)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-text-muted)]">
            Operating system for AI delivery teams
          </p>
          <h1 className="max-w-3xl text-balance font-[var(--font-heading)] text-4xl font-semibold leading-[1.03] text-[var(--color-text)] md:text-6xl">
            From backlog chaos to
            <span className="bg-[linear-gradient(120deg,var(--color-accent-soft),var(--color-accent-2))] bg-clip-text text-transparent">
              {" "}
              launch-ready sprints
            </span>
            , all in one command center.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--color-text-muted)] md:text-xl">
            Pulseboard AI translates strategy into execution, surfaces blockers
            before standup, and generates executive-ready updates without manual
            copy-paste.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              data-testid="hero-cta"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[color-mix(in_oklab,var(--color-accent),black_22%)] bg-[linear-gradient(120deg,var(--color-accent-soft),var(--color-accent))] px-6 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-glow)] transition duration-200 hover:-translate-y-0.5 hover:saturate-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
            >
              Start free pilot
            </a>
            <a
              href="#features"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-6 text-sm font-semibold text-[var(--color-text)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-surface-3)]"
            >
              Explore capabilities
            </a>
          </div>

          <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-[0.1em]">Modes</span>
            {modes.map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-2),transparent_14%)] px-2.5 py-1 font-semibold text-[var(--color-text)]"
              >
                {mode}
              </span>
            ))}
          </div>

          <dl className="mt-9 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-surface),transparent_10%),color-mix(in_oklab,var(--color-surface-2),transparent_12%))] px-4 py-3 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)]"
              >
                <dt className="text-xs uppercase tracking-[0.11em] text-[var(--color-text-muted)]">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-[var(--color-text)]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[linear-gradient(160deg,var(--color-surface-2),var(--color-surface-3))] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Pulseboard Command View
              </p>
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Live
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {lanes.map((lane) => (
                <div
                  key={lane.name}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-[var(--color-text-muted)]">
                      {lane.name}
                    </span>
                    <span
                      className={`text-sm font-semibold ${lane.tone === "warn" ? "text-[var(--color-warning)]" : "text-[var(--color-accent-soft)]"}`}
                    >
                      {lane.score}
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--color-bg)]">
                    <div
                      className={`h-full rounded-full ${lane.tone === "warn" ? "w-2/5 bg-[var(--color-warning)]" : "w-4/5 bg-[linear-gradient(90deg,var(--color-accent),var(--color-accent-2))]"}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] p-3">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Live integrations
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {integrations.map((integration) => (
                  <span
                    key={integration}
                    className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-2),transparent_14%)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {syncStates.map((state) => (
                <div
                  key={state.label}
                  className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-2"
                >
                  <p className="text-[10px] uppercase tracking-[0.11em] text-[var(--color-text-muted)]">
                    {state.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[var(--color-text)]">
                    {state.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_8%)] px-4 py-3 text-sm text-[var(--color-text-muted)] shadow-[var(--shadow-soft)] md:block">
            Trusted by 180+ product squads
          </div>
        </div>
      </div>
    </section>
  );
}
