"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render a placeholder until mounted.
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="h-8 w-8 rounded-md border border-subtle"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-subtle transition-colors hover:bg-subtle"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
