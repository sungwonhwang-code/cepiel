import { ExternalLink } from "lucide-react";
import type { Paper } from "@/lib/research";

export function PaperItem({ paper }: { paper: Paper }) {
  const Wrapper = paper.url ? "a" : "div";
  return (
    <Wrapper
      {...(paper.url
        ? { href: paper.url, target: "_blank", rel: "noreferrer" }
        : {})}
      className="group block border-b border-subtle py-5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-medium tracking-tight group-hover:text-accent">
          {paper.title}
        </h3>
        {paper.url && (
          <ExternalLink
            size={14}
            className="shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-accent"
          />
        )}
      </div>
      <p className="mt-1 text-sm text-muted">
        {paper.authors.join(", ")}
      </p>
      <p className="mt-1 text-sm text-muted">
        <span className="italic">{paper.venue}</span> · {paper.year}
        {paper.doi && (
          <>
            {" · "}
            <span className="font-mono text-xs">{paper.doi}</span>
          </>
        )}
      </p>
      {paper.summary && (
        <p className="mt-2 text-sm">{paper.summary}</p>
      )}
      {paper.tags && paper.tags.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-1.5 text-xs text-muted">
          {paper.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-subtle px-2 py-0.5"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
}
