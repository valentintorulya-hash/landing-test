import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main
      data-testid="landing-root"
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </div>
    </main>
  );
}
