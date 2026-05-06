import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  dot?: boolean;
};

/**
 * Inline pill — used for affiliations / status indicators.
 */
export function Badge({ children, href, dot }: Props) {
  const inner = (
    <>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
      )}
      {children}
    </>
  );

  const className =
    "inline-flex items-center gap-1.5 rounded-full border border-subtle bg-subtle px-2.5 py-1 text-xs font-medium text-muted transition-colors";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={`${className} hover:border-accent hover:text-accent`}
      >
        {inner}
      </a>
    );
  }
  return <span className={className}>{inner}</span>;
}
