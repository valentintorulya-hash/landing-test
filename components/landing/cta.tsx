"use client";

import { type FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubmitState = "idle" | "loading" | "success";

const proofPoints = [
  { label: "Median onboarding", value: "4m 12s" },
  { label: "Pilot to rollout", value: "11 days" },
  { label: "Avg. PM time saved", value: "8h / week" },
];

const verticals = ["Fintech", "Health", "SaaS", "E-commerce"];

export function CTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [toast, setToast] = useState("");

  const buttonLabel = useMemo(() => {
    if (submitState === "loading") return "Sending...";
    if (submitState === "success") return "Pilot unlocked";
    return "Request invite";
  }, [submitState]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState === "loading") return;

    const valid = /^\S+@\S+\.\S+$/.test(email);
    if (!valid) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitState("loading");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitState("success");
    setToast("Success: we sent your pilot access details.");

    window.setTimeout(() => {
      setSubmitState("idle");
      setToast("");
    }, 2400);
  };

  return (
    <>
      <section
        id="cta"
        data-testid="cta-section"
        className="reveal-in relative mt-20 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[radial-gradient(circle_at_88%_16%,var(--color-spotlight-2),transparent_40%),radial-gradient(circle_at_4%_75%,var(--color-spotlight),transparent_45%),linear-gradient(160deg,var(--color-surface-2),var(--color-surface-3))] p-6 md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(circle_at_center,black_38%,transparent_82%)]" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-text-muted)]">
              Conversion block
            </p>
            <h2 className="text-3xl font-semibold text-[var(--color-text)] md:text-5xl">
              Launch your first AI planning cycle this week.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-lg leading-8 text-[var(--color-text-muted)]">
              No setup meeting required. Add your workspace email and unlock a
              guided sandbox in under five minutes.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                Used by teams in
              </span>
              {verticals.map((vertical) => (
                <span
                  key={vertical}
                  className="inline-flex min-h-8 items-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 text-xs font-semibold text-[var(--color-text-muted)]"
                >
                  {vertical}
                </span>
              ))}
            </div>

            <ul className="mt-8 space-y-3 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                Roadmap migration from Jira, Linear, and Notion
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                AI-powered sprint plan generated from your existing backlog
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                No credit card, cancel anytime
              </li>
            </ul>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-3 py-2"
                >
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {point.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">
                    {point.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_14%)] p-5 shadow-[var(--shadow-card)] md:p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              SOC2-ready workflows
            </div>
            <p className="mb-4 text-sm text-[var(--color-text-muted)]">
              Get onboarding access
            </p>
            <form onSubmit={onSubmit} className="grid gap-3">
              <Input
                name="email"
                type="text"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                aria-invalid={Boolean(error)}
                data-testid="cta-email"
              />
              <Button
                data-testid="cta-submit"
                type="submit"
                disabled={submitState === "loading"}
                className="min-h-11"
              >
                {buttonLabel}
              </Button>
            </form>

            {error ? (
              <p className="mt-2 text-sm font-medium text-[var(--color-danger)]">
                {error}
              </p>
            ) : null}

            {submitState === "success" ? (
              <p className="success-message mt-3 text-sm font-semibold text-[var(--color-accent)]">
                Pilot request received. Check your inbox.
              </p>
            ) : null}

            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
              We only use your email for pilot setup instructions.
            </p>

            <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface-2),transparent_10%)] px-3 py-2 text-xs text-[var(--color-text-muted)]">
              Setup includes a 14-day guided pilot with checklist templates and
              migration support.
            </div>
          </div>
        </div>
      </section>

      <div
        data-testid="mobile-sticky-cta"
        className="fixed inset-x-4 bottom-4 z-50 rounded-full border border-[var(--color-border-strong)] bg-[linear-gradient(120deg,color-mix(in_oklab,var(--color-surface),transparent_8%),color-mix(in_oklab,var(--color-surface-2),transparent_6%))] p-2 shadow-[var(--shadow-soft)] backdrop-blur md:hidden"
      >
        <a
          href="#cta"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--color-accent-soft),var(--color-accent))] px-4 text-sm font-semibold text-[var(--color-ink)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-ink)]" />
          Unlock guided sandbox
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {toast ? (
        <output
          aria-live="polite"
          className="fixed right-4 top-4 z-50 rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_8%)] px-4 py-2 text-sm text-[var(--color-text)] shadow-[var(--shadow-soft)]"
        >
          {toast}
        </output>
      ) : null}
    </>
  );
}
