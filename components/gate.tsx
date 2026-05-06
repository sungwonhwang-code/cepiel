import { ArrowUpRight } from "lucide-react";
import { site, hasLink } from "@/lib/config";

type Portal = {
  kind: string; // small uppercase eyebrow, e.g. "Lab"
  title: string;
  host: string; // bare hostname, shown in mono
  href: string;
  blurb: string;
  glyph: string; // 1–4 chars rendered in serif inside the tile
};

const left: Portal = {
  kind: "Lab",
  title: site.inhaLab.label,
  host: site.inhaLab.host,
  href: site.inhaLab.url,
  blurb:
    "Research group on hybrid physics–ML digital twins, students, and teaching.",
  glyph: "L",
};

const right: Portal = {
  kind: "Company",
  title: site.cepiel.label,
  host: site.cepiel.host,
  href: site.cepiel.url,
  blurb:
    "Deeptech company turning the lab's work into operations software for chemical plants.",
  glyph: "C",
};

/**
 * Gate — a diptych on the homepage that links Sean's two homes:
 * the Inha lab on one side and the CEPiEL company on the other,
 * with this site sitting as the hub in the middle.
 *
 * If a portal's href is empty, the card renders as a non-clickable
 * placeholder with a "Soon" badge — useful while the external sites
 * are still being built.
 */
export function Gate() {
  return (
    <div className="grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
      <PortalCard portal={left} />
      <Bridge />
      <PortalCard portal={right} />
    </div>
  );
}

function PortalCard({ portal }: { portal: Portal }) {
  const cardClassName =
    "card-hover group relative block overflow-hidden rounded-lg border border-subtle p-5";
  const linkable = hasLink(portal.href);

  const inner = (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid mask-fade opacity-40"
      />

      <div className="relative flex items-start gap-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-subtle bg-subtle">
          <span className="absolute inset-0 dot-grid mask-fade opacity-50" />
          <span className="relative font-serif text-lg">{portal.glyph}</span>
          <span className="absolute right-1 top-1 h-1 w-1 rounded-full bg-accent" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              {portal.kind}
            </span>
            {linkable ? (
              <ArrowUpRight
                size={14}
                className="text-muted transition-colors group-hover:text-accent"
                aria-hidden
              />
            ) : (
              <span className="rounded-full border border-subtle bg-subtle px-1.5 py-0.5 text-[9px] uppercase tracking-widest text-muted">
                Soon
              </span>
            )}
          </div>
          <h3
            className={`mt-0.5 font-medium tracking-tight ${
              linkable ? "group-hover:text-accent" : ""
            }`}
          >
            {portal.title}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-muted">{portal.host}</p>
          <p className="mt-2 text-sm text-foreground/75">{portal.blurb}</p>
        </div>
      </div>
    </>
  );

  if (linkable) {
    return (
      <a
        href={portal.href}
        target="_blank"
        rel="noreferrer"
        className={`${cardClassName} hover:border-accent`}
      >
        {inner}
      </a>
    );
  }
  return <div className={`${cardClassName} cursor-default`}>{inner}</div>;
}

/**
 * The visual hinge between the two panels — a thin vertical rule on
 * desktop with a tiny "SH" hub indicating "this site is the bridge."
 * On mobile it collapses to a horizontal version.
 */
function Bridge() {
  return (
    <div
      aria-hidden
      className="relative flex items-center justify-center sm:w-10"
    >
      <span className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[rgb(var(--border))] sm:left-1/2 sm:right-auto sm:top-0 sm:bottom-0 sm:h-auto sm:w-px sm:-translate-x-1/2" />
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-subtle bg-background">
        <span className="font-serif text-[11px] tracking-tight text-muted">
          SH
        </span>
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
    </div>
  );
}
