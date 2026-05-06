import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { getAllDemos } from "@/lib/demos";
import { SectionHeading } from "@/components/section-heading";
import { Monogram } from "@/components/monogram";
import { Badge } from "@/components/badge";
import { Gate } from "@/components/gate";
import { CepielLink } from "@/components/cepiel-link";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);
  const demos = getAllDemos().slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative -mx-6 -mt-12 px-6 pb-12 pt-16 sm:pt-20">
        {/* Decorative background — sits behind everything in the hero. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 dot-grid mask-fade opacity-70" />
        </div>

        <div className="max-w-prose">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge dot>Now: building CEPiEL</Badge>
            <Badge>Inha University</Badge>
            <Badge>Chemical Engineering · AI</Badge>
          </div>

          {/* TODO: replace this with your own bio when ready. */}
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
            Sean Hwang.
          </h1>
          <p className="mt-5 text-lg text-foreground/80">
            I'm a professor of chemical engineering at{" "}
            <span className="text-foreground">Inha University</span> and the CEO
            of <CepielLink className="link-accent" />. I work on digital twins
            and AI for chemical processes — the kind
            that have to actually run a real plant, not just look good in a
            paper.
          </p>
          <p className="mt-3 text-lg text-foreground/80">
            This site is where I write about that work, and post the occasional
            interactive demo.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/insights"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Read the writing
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center rounded-md border border-subtle px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Try a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Two homes — the gate between Inha lab and CEPiEL company */}
      <section>
        <SectionHeading index="01" title="Two homes" />
        <p className="mb-5 max-w-prose text-sm text-muted">
          This site sits between my two day-to-day homes — the lab at Inha and
          the company. Pick a side; both doors are open.
        </p>
        <Gate />
      </section>

      {/* Recent writing */}
      <section>
        <SectionHeading
          index="02"
          title="Recent writing"
          href="/insights"
          hrefLabel="All posts"
        />
        <div>
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      {/* Demos preview */}
      <section>
        <SectionHeading
          index="03"
          title="Demos"
          href="/demos"
          hrefLabel="All demos"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {demos.map((d) => (
            <Link
              key={d.slug}
              href={`/demos/${d.slug}`}
              className="card-hover group block rounded-lg border border-subtle p-5 hover:border-accent"
            >
              <h3 className="font-medium tracking-tight group-hover:text-accent">
                {d.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{d.summary}</p>
              <p className="mt-3 flex flex-wrap gap-1 text-xs text-muted">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-subtle px-1.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Now / About teaser */}
      <section>
        <SectionHeading index="04" title="Now" href="/about" hrefLabel="More about me" />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <Monogram letters="SH" size={88} />
          <div className="max-w-prose space-y-3 text-foreground/80">
            <p>
              Running the CEPiEL Lab at Inha University on hybrid physics–ML
              digital twins for industrial chemical processes.
            </p>
            <p>
              Building <CepielLink className="link-accent" />, a deeptech
              company commercializing the lab's work into operations software
              for chemical plants.
            </p>
            <p>Writing here, slowly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
