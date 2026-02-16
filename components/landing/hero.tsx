"use client";

import { ThemeToggle } from "./theme-toggle";

const lanes = [
  { name: "Уверенность в роадмапе", score: "92%", tone: "good" },
  { name: "Зависимости команд", score: "14 открыто", tone: "warn" },
  { name: "Готовность к запуску", score: "По плану", tone: "good" },
];

const integrations = ["Jira", "Linear", "Notion", "Slack"];
const modes = ["План", "Синхрон", "Релиз"];
const syncStates = [
  { label: "Синхронизация данных", value: "27с назад" },
  { label: "Следующий дайджест", value: "через 3м" },
];

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="reveal-in relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-20 md:pt-32"
    >
      <div className="absolute inset-0 -z-10 opacity-30 blur-3xl" aria-hidden="true">
        <div className="animate-blob animation-delay-0 absolute -left-4 top-0 h-72 w-72 rounded-full bg-[var(--color-accent)] opacity-40 mix-blend-screen filter md:h-96 md:w-96" />
        <div className="animate-blob animation-delay-2000 absolute -right-4 top-0 h-72 w-72 rounded-full bg-[var(--color-accent-2)] opacity-40 mix-blend-screen filter md:h-96 md:w-96" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-[var(--color-surface-3)] opacity-40 mix-blend-screen filter md:h-96 md:w-96" />
      </div>
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-2))] shadow-[var(--shadow-glow)]">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-[var(--color-text)]">
            Pulseboard AI
          </span>
        </div>
        <ThemeToggle />
      </header>

      <nav className="relative z-10 mt-4 flex flex-wrap gap-2 md:hidden">
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#features"
        >
          Функции
        </a>
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#testimonials"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#testimonials")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Истории
        </a>
        <a
          className="inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold uppercase tracking-[0.09em] text-[var(--color-text-muted)]"
          href="#cta"
        >
          Цены
        </a>
      </nav>

      <div className="relative z-10 mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] shadow-[var(--shadow-glow)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
            Операционная система v2.0
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-[var(--color-text)] md:text-6xl lg:text-7xl">
            Синхронизируйте продукт <br />
            <span className="animate-text-shimmer text-transparent bg-clip-text bg-[linear-gradient(110deg,var(--color-accent),45%,var(--color-text),55%,var(--color-accent-2))]">
              со скоростью мысли.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--color-text-muted)] md:text-xl">
            Интеллектуальный слой исполнения, который превращает хаос Jira в четкие релизы. Никаких статусных встреч — только шиппинг.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              data-testid="hero-cta"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-glow)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
            >
              Начать пилот
            </a>
            <a
              href="#features"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-6 text-sm font-semibold text-[var(--color-text)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-surface-3)]"
            >
              Изучить возможности
            </a>
          </div>

          <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
            <span className="uppercase tracking-[0.1em]">Режимы</span>
            {modes.map((mode) => (
              <span
                key={mode}
                className="rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-2),transparent_14%)] px-2.5 py-1 font-semibold text-[var(--color-text)]"
              >
                {mode}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-strong)] bg-[linear-gradient(160deg,var(--color-surface-2),var(--color-surface-3))] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Командный центр Pulseboard
              </p>
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Онлайн
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {lanes.map((lane) => (
                <div
                  key={lane.name}
                  className="flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_8%)] px-4 py-3 backdrop-blur-sm"
                >
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {lane.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      lane.tone === "good"
                        ? "bg-[color-mix(in_oklab,var(--color-accent),transparent_85%)] text-[var(--color-accent)]"
                        : "bg-[color-mix(in_oklab,var(--color-warning),transparent_85%)] text-[var(--color-warning)]"
                    }`}
                  >
                    {lane.score}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[linear-gradient(160deg,color-mix(in_oklab,var(--color-surface),transparent_10%),color-mix(in_oklab,var(--color-surface-2),transparent_12%))] px-4 py-3 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)]">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Активные интеграции
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
        </div>
      </div>
    </section>
  );
}
