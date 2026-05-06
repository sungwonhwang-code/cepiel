import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllDemos } from "@/lib/demos";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Demos",
  description: "Interactive explainers and small experiments.",
};

export default function DemosPage() {
  const demos = getAllDemos();
  return (
    <div className="max-w-wide">
      <PageHeader
        eyebrow="Demos"
        title="Interactive explainers"
        description="Small experiments — most are companion pieces to research or blog posts."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {demos.map((d) => (
          <Link
            key={d.slug}
            href={`/demos/${d.slug}`}
            className="card-hover group block rounded-lg border border-subtle p-6 hover:border-accent"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-medium tracking-tight group-hover:text-accent">
                {d.title}
              </h3>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <p className="mt-1 text-sm text-muted">{d.summary}</p>
            <p className="mt-3 flex flex-wrap gap-1 text-xs text-muted">
              {d.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-subtle px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
