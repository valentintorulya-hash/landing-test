import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`min-h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] px-4 text-[var(--color-text)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.05)] outline-none transition duration-200 placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/40 ${className}`}
      {...props}
    />
  );
}
