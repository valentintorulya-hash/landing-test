"use client";

import { useState } from "react";
import type { MouseEvent } from "react";

import { Card } from "@/components/ui/card";

type Direction = "top" | "right" | "bottom" | "left";

const testimonials = [
  {
    quote:
      "We cut planning time from 6 hours to 40 minutes and still improved sprint confidence.",
    author: "Marta, VP Product",
  },
  {
    quote:
      "Pulseboard AI spots dependency issues before they burn engineering cycles.",
    author: "Jonah, Engineering Director",
  },
  {
    quote:
      "Status reporting became automatic, so PMs can focus on outcomes, not formatting slides.",
    author: "Iris, Head of Operations",
  },
];

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
    <section data-testid="testimonials-section" className="reveal-in reveal-delay-2 mt-20">
      <h2 className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
        Teams that ship faster stay with Pulseboard.
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {testimonials.map((item, index) => {
          const isActive = active === index;
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
              className="group text-left"
            >
              <Card className="relative overflow-hidden p-0">
                <div
                  data-direction={direction}
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-soft),transparent_70%)] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
                />
                <div className="relative p-6">
                  <p className="text-base leading-7 text-[var(--color-text)]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[var(--color-accent)]">
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
