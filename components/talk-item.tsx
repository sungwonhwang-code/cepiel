import { ExternalLink, MapPin, Calendar } from "lucide-react";
import type { Talk } from "@/lib/talks";

function formatTalkDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function TalkItem({ talk }: { talk: Talk }) {
  const Wrapper = talk.url ? "a" : "div";
  return (
    <Wrapper
      {...(talk.url
        ? { href: talk.url, target: "_blank", rel: "noreferrer" }
        : {})}
      className="group block border-b border-subtle py-5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <span className="rounded-full border border-subtle px-2 py-0.5 text-xs uppercase tracking-wider text-muted">
            {talk.type}
          </span>
          <h3 className="font-medium tracking-tight group-hover:text-accent">
            {talk.title}
          </h3>
        </div>
        {talk.url && (
          <ExternalLink
            size={14}
            className="shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
          />
        )}
      </div>
      <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
        <span className="inline-flex items-center gap-1">
          <Calendar size={12} /> {formatTalkDate(talk.date)}
        </span>
        <span>{talk.event}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={12} /> {talk.location}
        </span>
      </p>
    </Wrapper>
  );
}
