import type { Metadata } from "next";
import { getPapersByYear } from "@/lib/research";
import {
  getPatentsByYear,
  getPatentCounts,
} from "@/lib/patents";
import { PaperItem } from "@/components/paper-item";
import { PatentItem } from "@/components/patent-item";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Research",
  description: "Selected publications and patents.",
};

export default function ResearchPage() {
  const papersByYear = getPapersByYear();
  const paperYears = Array.from(papersByYear.keys()).sort((a, b) => b - a);

  const patentsByYear = getPatentsByYear();
  const patentYears = Array.from(patentsByYear.keys()).sort((a, b) => b - a);
  const counts = getPatentCounts();

  return (
    <div className="max-w-prose space-y-20">
      {/* Publications */}
      <div>
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
              {" "}and at{" "}
              <a
                href="https://cepi.inha.ac.kr"
                target="_blank"
                rel="noreferrer"
                className="link-accent"
              >
                cepi.inha.ac.kr
              </a>
              .
            </>
          }
        />
        <div className="space-y-12">
          {paperYears.map((year) => (
            <section key={year}>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted">
                  {String(paperYears.indexOf(year) + 1).padStart(2, "0")}
                </span>
                <h2 className="text-sm font-medium uppercase tracking-widest">
                  {year}
                </h2>
              </div>
              <div className="border-t border-subtle">
                {papersByYear.get(year)!.map((p) => (
                  <PaperItem key={p.id} paper={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div>
        <PageHeader
          eyebrow="Research"
          title="Patents"
          description={
            <>
              {counts.total} patents — {counts.granted} granted,{" "}
              {counts.filed} filed (Korean Intellectual Property Office).
            </>
          }
        />
        <div className="space-y-12">
          {patentYears.map((year) => (
            <section key={year}>
              <div className="mb-2 flex items-baseline gap-3">
                <span className="font-mono text-xs text-muted">
                  {String(patentYears.indexOf(year) + 1).padStart(2, "0")}
                </span>
                <h2 className="text-sm font-medium uppercase tracking-widest">
                  {year}
                </h2>
              </div>
              <div className="border-t border-subtle">
                {patentsByYear.get(year)!.map((p) => (
                  <PatentItem key={p.id} patent={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
