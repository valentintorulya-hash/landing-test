import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-border)] bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--color-surface),transparent_50%))] py-12 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row relative z-10">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
          </span>
          Pulseboard AI
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[var(--color-text-muted)]">
          {["Конфиденциальность", "Условия", "Безопасность", "Контакты"].map((item) => (
            <Link
              key={item}
              href="/"
              className="group relative transition-colors hover:text-[var(--color-text)]"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <p className="text-xs text-[var(--color-text-muted)]/60">
          © 2026 Pulseboard Inc. Создано для скорости.
        </p>
      </div>
    </footer>
  );
}
