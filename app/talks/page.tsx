import type { Metadata } from "next";
import { getAllTalks } from "@/lib/talks";
import { TalkItem } from "@/components/talk-item";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Talks",
  description: "Recent and upcoming talks.",
};

export default function TalksPage() {
  const talks = getAllTalks();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = talks.filter((t) => t.date >= today);
  const past = talks.filter((t) => t.date < today);

  return (
    <div className="max-w-prose">
      <PageHeader
        eyebrow="Talks"
        title="Recent and upcoming"
        description="Conference talks, invited lectures, and the occasional panel."
      />

      <div className="space-y-12">
        {upcoming.length > 0 && (
          <section>
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted">01</span>
              <h2 className="text-sm font-medium uppercase tracking-widest">
                Upcoming
              </h2>
            </div>
            <div className="border-t border-subtle">
              {upcoming.map((t) => (
                <TalkItem key={t.id} talk={t} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted">
                {upcoming.length > 0 ? "02" : "01"}
              </span>
              <h2 className="text-sm font-medium uppercase tracking-widest">
                Past
              </h2>
            </div>
            <div className="border-t border-subtle">
              {past.map((t) => (
                <TalkItem key={t.id} talk={t} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
