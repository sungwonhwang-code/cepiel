import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, ExternalLink, MapPin, Calendar } from "lucide-react";
import type { Talk } from "@/lib/talks";

function formatTalkDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const wrapperClass = "group block border-b border-subtle py-5";

function TalkWrapper({ url, children }: { url?: string; children: ReactNode }) {
  if (!url) return <div className={wrapperClass}>{children}</div>;
  if (url.startsWith("/")) {
    return (
      <Link href={url} className={wrapperClass}>
        {children}
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" className={wrapperClass}>
      {children}
    </a>
  );
}

export function TalkItem({ talk }: { talk: Talk }) {
  const Icon = talk.url?.startsWith("/") ? ArrowUpRight : ExternalLink;
  return (
    <TalkWrapper url={talk.url}>
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
          <Icon
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
        {talk.location && (
          <span className="inline-flex items-center gap-1">
            <MapPin size={12} /> {talk.location}
          </span>
        )}
      </p>
    </TalkWrapper>
  );
}
