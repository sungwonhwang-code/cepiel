import type { ReactNode } from "react";

type Props = {
  eyebrow: string; // small label above the title
  title: string;
  description?: ReactNode;
};

/**
 * Consistent page header used across /insights, /research, /talks, etc.
 *
 *   ── INSIGHTS ──────────
 *   Notes from the lab
 *   On digital twins, AI, and chemical engineering.
 */
export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="relative mb-12 max-w-prose">
      <div
        aria-hidden
        className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-accent"
      >
        <span className="h-px w-8 bg-accent" />
        {eyebrow}
      </div>
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-foreground/80">{description}</p>
      )}
    </header>
  );
}
