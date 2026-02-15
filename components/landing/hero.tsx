import { ThemeToggle } from "./theme-toggle";

export function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="reveal-in relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[radial-gradient(circle_at_20%_20%,var(--color-spotlight),transparent_50%),radial-gradient(circle_at_80%_0%,var(--color-spotlight-2),transparent_40%),var(--color-surface)] px-6 py-14 md:px-10"
    >
      <div className="pointer-events-none absolute -left-20 top-12 h-56 w-56 rounded-full bg-[var(--color-accent)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-[var(--color-accent-soft)]/20 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Pulseboard AI
        </span>
        <ThemeToggle />
      </header>

      <div className="relative z-10 mt-8 max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
          AI project management for shipping teams
        </p>
        <h1 className="font-[var(--font-heading)] text-4xl font-bold leading-tight text-[var(--color-text)] md:text-6xl">
          Ship the right roadmap without Slack chaos.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl">
          Pulseboard AI turns scattered updates into clear priorities,
          auto-generates sprint plans, and keeps every team synced from kickoff
          to launch.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#cta"
            data-testid="hero-cta"
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-glow)] transition duration-200 hover:bg-[var(--color-accent-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            Start free pilot
          </a>
          <span className="rounded-full border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-text-muted)]">
            Trusted by 180+ product squads
          </span>
        </div>
      </div>
    </section>
  );
}
