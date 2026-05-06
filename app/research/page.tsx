import type { Metadata } from "next";
import { getPapersByYear } from "@/lib/research";
import { PaperItem } from "@/components/paper-item";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Research",
  description: "Selected publications.",
};

export default function ResearchPage() {
  const byYear = getPapersByYear();
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);

  return (
    <div className="max-w-prose">
      <PageHeader
        eyebrow="Research"
        title="Selected publications"
        description={
          <>
            A more complete list lives on{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noreferrer"
              className="link-accent"
            >
              Google Scholar
            </a>
            .
          </>
        }
      />
      <div className="space-y-12">
        {years.map((year) => (
          <section key={year}>
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted">
                {String(years.indexOf(year) + 1).padStart(2, "0")}
              </span>
              <h2 className="text-sm font-medium uppercase tracking-widest">
                {year}
              </h2>
            </div>
            <div className="border-t border-subtle">
              {byYear.get(year)!.map((p) => (
                <PaperItem key={p.id} paper={p} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
