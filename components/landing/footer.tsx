export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[linear-gradient(180deg,transparent,color-mix(in_oklab,var(--color-surface),transparent_50%))] py-12">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[var(--color-text-muted)]">
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Pulseboard AI
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[var(--color-text-muted)]">
          <a href="/privacy" className="transition-colors hover:text-[var(--color-text)]">
            Конфиденциальность
          </a>
          <a href="/terms" className="transition-colors hover:text-[var(--color-text)]">
            Условия
          </a>
          <a href="/security" className="transition-colors hover:text-[var(--color-text)]">
            Безопасность
          </a>
          <a href="/contact" className="transition-colors hover:text-[var(--color-text)]">
            Контакты
          </a>
        </nav>
        <p className="text-xs text-[var(--color-text-muted)]/60">
          © 2026 Pulseboard Inc. Создано для скорости.
        </p>
      </div>
    </footer>
  );
}
