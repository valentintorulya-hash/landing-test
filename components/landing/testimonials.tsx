"use client";

import { type MouseEvent, useState } from "react";

import { Card } from "@/components/ui/card";

type Direction = "top" | "right" | "bottom" | "left";

const testimonials = [
  {
    company: "Northstar Labs",
    quote:
      "We cut planning time from 6 hours to 40 minutes and still improved sprint confidence.",
    author: "Marta, VP Product",
    impact: "42% faster decision cycles",
    tone: "text-[var(--color-accent-soft)]",
  },
  {
    company: "Arcflow",
    quote:
      "Pulseboard AI spots dependency issues before they burn engineering cycles.",
    author: "Jonah, Engineering Director",
    impact: "31% fewer sprint rollovers",
    tone: "text-[var(--color-accent-2)]",
  },
  {
    company: "Miroline Health",
    quote:
      "Status reporting became automatic, so PMs can focus on outcomes, not formatting slides.",
    author: "Iris, Head of Operations",
    impact: "8 hours saved weekly per PM",
    tone: "text-[var(--color-accent)]",
  },
];

const proofStats = [
  { label: "Avg. G2 score", value: "4.8 / 5" },
  { label: "Quarterly NPS delta", value: "+24" },
  { label: "Active product squads", value: "180+" },
];

const byDirection: Record<Direction, string> = {
  top: "-translate-y-4",
  right: "translate-x-4",
  bottom: "translate-y-4",
  left: "-translate-x-4",
};

function getDirection(event: MouseEvent<HTMLButtonElement>): Direction {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const top = y;
  const right = rect.width - x;
  const bottom = rect.height - y;
  const left = x;
  const min = Math.min(top, right, bottom, left);

  if (min === top) return "top";
  if (min === right) return "right";
  if (min === bottom) return "bottom";
  return "left";
}

export function Testimonials() {
  const [active, setActive] = useState<number | null>(0);
  const [direction, setDirection] = useState<Direction>("top");

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="reveal-in reveal-delay-2 mt-20"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.13em] text-[var(--color-text-muted)]">
        Customer proof
      </p>
      <h2 className="text-3xl font-semibold text-[var(--color-text)] md:text-5xl">
        Teams that ship faster stay with Pulseboard.
      </h2>
      <p className="mt-4 max-w-3xl text-pretty text-[var(--color-text-muted)]">
        Stories from product, engineering, and operations teams using one shared
        execution layer.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {proofStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] px-4 py-3"
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
              {stat.label}
            </p>
            <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => {
          const isActive = active === index;
          const initials = item.company
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          return (
            <button
              key={item.author}
              data-testid={`testimonial-card-${index}`}
              type="button"
              onMouseEnter={(event) => {
                setDirection(getDirection(event));
                setActive(index);
              }}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={isActive}
              className="group text-left transition duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5"
            >
              <Card className="relative overflow-hidden p-0">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-accent-soft),transparent)] opacity-80" />
                <div
                  data-direction={direction}
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-soft),transparent_70%)] transition duration-300 ${
                    isActive
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : `opacity-0 ${byDirection[direction]}`
                  }`}
                />
                <div className="relative p-6">
                  <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_10%)] text-lg text-[var(--color-accent)]">
                    &ldquo;
                  </span>
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_8%)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                        {initials}
                      </span>
                      <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        {item.company}
                      </span>
                    </div>
                    <span className="rounded-full border border-[var(--color-border)] px-2 py-1 text-xs text-[var(--color-text-muted)]">
                      Case study
                    </span>
                  </div>
                  <p className="text-base leading-7 text-[var(--color-text)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className={`mt-6 text-sm font-semibold ${item.tone}`}>
                    {item.impact}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--color-accent)]">
                    {item.author}
                  </p>
                </div>
              </Card>
            </button>
          );
        })}
      </div>
    </section>
  );
}
