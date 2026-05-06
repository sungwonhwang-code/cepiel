import type { Metadata } from "next";
import { Monogram } from "@/components/monogram";
import { Badge } from "@/components/badge";
import { CepielLink } from "@/components/cepiel-link";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description: "About Sungwon (Sean) Hwang.",
};

const facts = [
  { label: "Title", value: "Professor, Chemical Engineering" },
  { label: "Affiliation", value: "Inha University" },
  { label: "Company", value: "CEPiEL — Founder & CEO" },
  { label: "Location", value: "Incheon, South Korea" },
  { label: "Email", value: "sungwonhwang@gmail.com" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <header className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-end">
        <Monogram letters="SH" size={120} />
        <div>
          <div className="mb-3 flex flex-wrap gap-2">
            <Badge dot>Currently teaching & building</Badge>
          </div>
          <h1 className="text-4xl font-medium tracking-tight">About</h1>
          <p className="mt-2 max-w-prose text-foreground/80">
            {/* TODO: customize this paragraph. */}
            Sungwon (Sean) Hwang is a professor of chemical engineering at Inha
            University and the founder/CEO of CEPiEL. He works at the
            intersection of digital twins, AI, and process systems engineering.
          </p>
        </div>
      </header>

      {/* Facts strip */}
      <section className="grid gap-x-8 gap-y-3 border-y border-subtle py-6 sm:grid-cols-2 md:grid-cols-3">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              {f.label}
            </span>
            <span className="mt-0.5">{f.value}</span>
          </div>
        ))}
      </section>

      {/* Sections */}
      <div className="grid gap-12 sm:grid-cols-[180px_1fr]">
        <Section index="01" title="Now">
          <ul className="space-y-3 text-foreground/80">
            <li>
              Leading the CEPiEL Lab at Inha University on hybrid physics–ML
              digital twins for industrial chemical processes.
            </li>
            <li>
              Building <CepielLink className="link-accent" /> — a deeptech
              company commercializing the lab's work into operations software
              for chemical plants.
            </li>
            <li>Writing on this site, slowly.</li>
          </ul>
        </Section>

        <Section index="02" title="Background">
          <ul className="space-y-3 text-foreground/80">
            <li>Ph.D., Chemical Engineering — {/* TODO: institution */}</li>
            <li>M.S. / B.S., Chemical Engineering — {/* TODO: institution */}</li>
            <li>
              Industry experience in {/* TODO: companies */} before joining
              academia.
            </li>
          </ul>
        </Section>

        <Section index="03" title="Interests">
          <p className="text-foreground/80">
            Digital twins, hybrid first-principles + ML modeling, anomaly
            detection, process optimization, LLM agents in engineering
            workflows, and the gap between research papers and what works in
            production.
          </p>
        </Section>

        <Section index="04" title="Selected affiliations">
          <ul className="flex flex-wrap gap-2">
            <Badge href={site.cepiel.url || undefined}>CEPiEL</Badge>
            <Badge>Inha University</Badge>
            <Badge>KIChE</Badge>
            <Badge>AIChE</Badge>
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex items-baseline gap-3 sm:flex-col sm:items-start sm:gap-1">
        <span className="font-mono text-xs text-muted">{index}</span>
        <h2 className="text-sm font-medium uppercase tracking-widest">
          {title}
        </h2>
      </div>
      <div className="max-w-prose">{children}</div>
    </>
  );
}
