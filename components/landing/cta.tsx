"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubmitState = "idle" | "loading" | "success";

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
        className="reveal-in mt-20 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-surface),var(--color-surface-2))] p-6 md:p-10"
      >
        <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
          Launch your first AI planning cycle this week.
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          No setup meeting required. Add your workspace email and receive a
          guided sandbox in under five minutes.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-3 md:grid-cols-[1fr_auto]">
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
          <p className="mt-2 text-sm font-medium text-[var(--color-danger)]">{error}</p>
        ) : null}

        {submitState === "success" ? (
          <p className="success-message mt-3 text-sm font-semibold text-[var(--color-accent)]">
            Pilot request received. Check your inbox.
          </p>
        ) : null}
      </section>

      <div
        data-testid="mobile-sticky-cta"
        className="fixed inset-x-4 bottom-4 z-50 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-soft)] md:hidden"
      >
        <a
          href="#cta"
          className="flex min-h-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-accent)] px-4 text-sm font-semibold text-[var(--color-ink)]"
        >
          Jump to invite form
        </a>
      </div>

      {toast ? (
        <output
          aria-live="polite"
          className="fixed right-4 top-4 z-50 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)] shadow-[var(--shadow-soft)]"
        >
          {toast}
        </output>
      ) : null}
    </>
  );
}
