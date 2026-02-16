import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { CTA } from "@/components/landing/cta";

export default function Home() {
  return (
    <main
      data-testid="landing-root"
      className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <aside className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <nav className="pointer-events-auto rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] p-2 shadow-[var(--shadow-soft)] backdrop-blur">
          <ul className="space-y-2">
            <li>
              <a
                href="#top"
                aria-label="К началу"
                className="block h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
              >
                <span className="sr-only">Главная</span>
              </a>
            </li>
            <li>
              <a
                href="#features"
                aria-label="К возможностям"
                className="block h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]"
              >
                <span className="sr-only">Возможности</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                aria-label="К отзывам"
                className="block h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]"
              >
                <span className="sr-only">Отзывы</span>
              </a>
            </li>
            <li>
              <a
                href="#cta"
                aria-label="К действию"
                className="block h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]"
              >
                <span className="sr-only">Призыв к действию</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_80%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,var(--color-border),transparent)] opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-accent-2),transparent_88%),transparent)]" />
      <div id="top" className="relative mx-auto max-w-[1180px] px-5 py-8 md:px-8 md:py-12">
        <div className="reveal-in">
          <Hero />
        </div>
        <div className="reveal-in reveal-delay-1">
          <Features />
        </div>
        <div className="reveal-in reveal-delay-2">
          <Testimonials />
        </div>
        <div className="reveal-in reveal-delay-2">
          <CTA />
        </div>
        <Footer />
      </div>
    </main>
  );
}
