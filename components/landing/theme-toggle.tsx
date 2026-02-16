"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("landing-theme");
    const nextTheme: Theme = saved === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  const toggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("landing-theme", nextTheme);
  };

  return (
    <Button
      data-testid="theme-toggle"
      variant="outline"
      onClick={toggle}
      aria-label="Переключить тему"
      className="min-w-30 gap-2 rounded-full px-4"
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-[var(--color-accent)]"
      />
      <span className="text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        Тема
      </span>
      <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-xs font-semibold text-[var(--color-text)]">
        {theme === "dark" ? "Светлая" : "Тёмная"}
      </span>
    </Button>
  );
}
