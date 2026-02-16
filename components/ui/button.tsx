import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const byVariant: Record<ButtonVariant, string> = {
  primary:
    "border border-[color-mix(in_oklab,var(--color-accent),black_20%)] bg-[linear-gradient(120deg,var(--color-accent-soft),var(--color-accent))] text-[var(--color-ink)] shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:saturate-110",
  ghost:
    "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-2)] hover:-translate-y-0.5",
  outline:
    "border border-[var(--color-border-strong)] bg-[color-mix(in_oklab,var(--color-surface),transparent_12%)] text-[var(--color-text)] hover:-translate-y-0.5 hover:bg-[var(--color-surface-3)]",
};

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-[var(--radius-md)] px-5 text-sm font-semibold transition duration-200 ease-out before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/35 before:opacity-60 before:content-[''] active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-60 ${byVariant[variant]} ${className}`}
      {...props}
    />
  );
}
