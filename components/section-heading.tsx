import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  index: string; // e.g. "01"
  title: string;
  href?: string; // optional "see all" link
  hrefLabel?: string;
  children?: ReactNode;
};

/**
 * Editorial-style section heading:
 *
 *   01 — Recent writing                          All posts →
 *   ────────────────────────────────────────────────────────
 */
export function SectionHeading({
  index,
  title,
  href,
  hrefLabel = "See all",
}: Props) {
  return (
    <header className="mb-5 flex items-baseline justify-between gap-4 border-b border-subtle pb-3">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="text-sm font-medium uppercase tracking-widest">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
        >
          {hrefLabel} <ArrowRight size={14} />
        </Link>
      )}
    </header>
  );
}
