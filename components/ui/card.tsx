import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`relative rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[linear-gradient(165deg,var(--color-surface),var(--color-surface-2))] p-6 shadow-[var(--shadow-card)] backdrop-blur transition duration-300 before:pointer-events-none before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:border before:border-white/5 before:content-[''] hover:border-[var(--color-border-strong)] ${className}`}
      {...props}
    />
  );
}
