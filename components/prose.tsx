import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-prose">
      {children}
    </article>
  );
}
