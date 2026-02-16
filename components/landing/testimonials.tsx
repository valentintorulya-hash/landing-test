"use client";

import { type MouseEvent, useState } from "react";

import { Card } from "@/components/ui/card";

type Direction = "top" | "right" | "bottom" | "left";

const testimonials = [
  {
    company: "Northstar Labs",
    quote:
      "Мы сократили время планирования с 6 часов до 40 минут и улучшили уверенность в спринтах.",
    author: "Марта, VP Product",
    impact: "42% быстрее циклы решений",
    tone: "text-[var(--color-accent-soft)]",
  },
  {
    company: "Vertex Flow",
    quote:
      "Pulseboard AI находит проблемы с зависимостями до того, как они сожгут часы разработки.",
    author: "Джона, Engineering Director",
    impact: "31% меньше переносов спринтов",
    tone: "text-[var(--color-accent-2)]",
  },
  {
    company: "Echo Systems",
    quote:
      "Отчетность стала автоматической, поэтому PM могут сосредоточиться на результатах, а не слайдах.",
    author: "Айрис, Head of Operations",
    impact: "8 часов экономии в неделю",
    tone: "text-[var(--color-accent)]",
  },
];

const proofStats = [
  { label: "Ср. оценка G2", value: "4.8 / 5" },
  { label: "Квартальный NPS", value: "+24" },
  { label: "Активных команд", value: "180+" },
];

const byDirection = {
  top: "-translate-y-full",
  right: "translate-x-full",
  bottom: "translate-y-full",
  left: "-translate-x-full",
};

export function Testimonials() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState<Direction>("top");

  const getDirection = (event: MouseEvent<HTMLButtonElement>): Direction => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const angle = Math.atan2(y, x) * (180 / Math.PI);
    const quadrant = Math.round((angle + 180) / 90 + 3) % 4;
    return ["top", "right", "bottom", "left"][quadrant] as Direction;
  };

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-24 md:py-32"
    >
      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
        Доверие команд, которые <br />
        <span className="text-[var(--color-accent)]">строят будущее.</span>
      </h2>
      <p className="mt-4 max-w-3xl text-pretty text-[var(--color-text-muted)]">
        Истории от продуктовых, инженерных и операционных команд, использующих единый слой исполнения.
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
                      Кейс-стади
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
