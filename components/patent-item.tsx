import { ExternalLink } from "lucide-react";
import type { Patent } from "@/lib/patents";

export function PatentItem({ patent }: { patent: Patent }) {
  const Wrapper = patent.url ? "a" : "div";
  return (
    <Wrapper
      {...(patent.url
        ? { href: patent.url, target: "_blank", rel: "noreferrer" }
        : {})}
      className="group block border-b border-subtle py-5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-medium tracking-tight group-hover:text-accent">
          {patent.title}
        </h3>
        {patent.url && (
          <ExternalLink
            size={14}
            className="shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
          />
        )}
      </div>
      <p className="mt-1 text-sm text-muted">
        {patent.inventors.join(", ")}
      </p>
      <p className="mt-1 text-sm text-muted">
        <span className="font-mono text-xs">
          {patent.country} · {patent.number}
        </span>
        {" · "}
        <span
          className={
            patent.status === "Granted"
              ? "text-accent"
              : "text-muted"
          }
        >
          {patent.status}
        </span>
        {" · "}
        {patent.year}
      </p>
    </Wrapper>
  );
}
