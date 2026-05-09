import type { Metadata } from "next";
import { Monogram } from "@/components/monogram";
import { Badge } from "@/components/badge";
import { CepielLink } from "@/components/cepiel-link";
import { site } from "@/lib/config";
import { getOngoingProjects, getUniquePartners } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: "About Sungwon (Sean) Hwang.",
};

const facts = [
  { label: "Title", value: "Professor, Chemical Engineering" },
  { label: "Affiliation", value: "Inha University · CEPI Lab Director" },
  { label: "Company", value: "CEPiEL — Co-founder & CEO" },
  { label: "Credential", value: "Chartered Engineer (UK), 2008" },
  { label: "Location", value: "Incheon, South Korea" },
  { label: "Email", value: "sungwonhwang@gmail.com" },
];

export default function AboutPage() {
  const ongoing = getOngoingProjects();
  const partners = getUniquePartners();

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
            Sungwon (Sean) Hwang is a professor of chemical engineering at Inha
            University, director of the CEPI Lab (Clean Energy Process
            Integration Lab.), and co-founder & CEO of{" "}
            <CepielLink className="link-accent" />. He spent ~17 years in
            industry — at GS E&amp;C, AspenTech UK, and UOP (a Honeywell
            company) in the UK and US — before joining academia in 2012, and
            now works at the intersection of digital twins, AI, and process
            systems engineering for chemical and energy operations.
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
              Directing the <strong>CEPI Lab</strong> at Inha University —
              hybrid first-principles + ML digital twins for chemical and
              energy processes (CCU, hydrogen liquefaction, SAF, RPB,
              batteries). 14 graduate researchers; 65+ SCI(E) papers; 14
              patents.
            </li>
            <li>
              Co-founder &amp; CEO of <CepielLink className="link-accent" /> —
              commercializing a decade of CEPI Lab IP as the{" "}
              <strong>CEPiDTS™</strong> industrial-AI digital-twin platform
              (CEPiPM™ / CEPiML™ / CEPiMS™). Korea HQ at Inha Dream Center;
              Germany office in Schwetzingen.
            </li>
            <li>
              Active industry programs with LG Chem, Lotte Chem, Hanwha Ocean,
              Hanwha Solutions, Samsung Heavy, GS E&amp;C, KOGAS, SK Nexilis,
              Doosan Enerbility, RIST.
            </li>
            <li>Writing on this site, slowly.</li>
          </ul>
        </Section>

        <Section index="02" title="Background">
          <ul className="space-y-3 text-foreground/80">
            <li>
              <strong>Ph.D.</strong>, Process Integration Centre — UMIST (now
              University of Manchester), UK, 2004. Supervisor: Prof. Robin
              Smith. Thesis on <em>Synthesis of Continuous Heterogeneous
              Catalytic Reactors</em>.
            </li>
            <li>
              <strong>M.Sc.</strong>, Process Integration Centre — UMIST, UK,
              2000.
            </li>
            <li>
              <strong>B.Sc.</strong>, Chemical Engineering — Inha University,
              Korea, 1995.
            </li>
            <li>
              ~17 years in industry before academia:{" "}
              <strong>GS E&amp;C</strong> (process engineer, plant division;
              NODCO Qatar / Thai Petrochemical / GS Caltex projects, 1995–99)
              → <strong>AspenTech UK</strong> (staff consultant, advanced
              process design, 2004–06) →{" "}
              <strong>UOP — A Honeywell Company</strong> (technology
              specialist, Guildford UK &amp; Des Plaines IL; hydroprocessing
              catalysts and project management for global refineries,
              2006–12).
            </li>
            <li>
              <strong>Chartered Engineer (CEng)</strong>, Engineering Council
              UK — 2008 to present.
            </li>
          </ul>
        </Section>

        <Section index="03" title="Interests">
          <p className="text-foreground/80">
            Digital twins for chemical and energy plants; hybrid
            first-principles + ML modeling (PINN, LSTM, AutoML, BO/GA);
            soft-sensing for unmeasurable high-temperature regions; carbon
            capture and utilization (CCU); hydrogen production and
            liquefaction; sustainable aviation fuel (SAF); LLM agents and
            ontologies for plant operations; and the gap between research
            papers and what actually runs in a control room.
          </p>
        </Section>

        <Section index="04" title="Selected affiliations">
          <ul className="flex flex-wrap gap-2">
            <Badge href={site.cepiel.url || undefined}>CEPiEL</Badge>
            <Badge href={site.inhaLab.url || undefined}>CEPI Lab</Badge>
            <Badge>Inha University</Badge>
            <Badge>IChemE (UK)</Badge>
            <Badge>Engineering Council UK — CEng</Badge>
            <Badge>KIChE</Badge>
            <Badge>KSIEC</Badge>
          </ul>
        </Section>

        <Section index="05" title="Ongoing projects">
          <ul className="space-y-3 text-foreground/80">
            {ongoing.map((p) => (
              <li key={p.id}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-medium">{p.title}</span>
                  <span className="font-mono text-xs text-muted">
                    {p.period}
                  </span>
                </div>
                <p className="text-sm text-muted">
                  {p.partner}
                  {" · "}
                  <span className="italic">{p.type}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            45+ completed industry-academia and government R&amp;D projects
            since 2012 — full list at{" "}
            <a
              href="https://cepi.inha.ac.kr"
              target="_blank"
              rel="noreferrer"
              className="link-accent"
            >
              cepi.inha.ac.kr
            </a>
            .
          </p>
        </Section>

        <Section index="06" title="Industry & funding partners">
          <ul className="flex flex-wrap gap-2">
            {partners.map((p) => (
              <Badge key={p}>{p}</Badge>
            ))}
          </ul>
        </Section>

        <Section index="07" title="Recognition">
          <p className="text-foreground/80">
            16 awards including the{" "}
            <strong>Daeju AI Award</strong> and the{" "}
            <strong>Daeju Industry-Academia Collaboration Award</strong>.
            Editor-in-Chief, Publication Committee, KIChE (2024–2025); Chair,
            Process Systems Sub-committee, KIChE (2023); Auditor, KSIEC
            (2026–2027).
          </p>
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
