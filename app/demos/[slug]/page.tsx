import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DEMOS, getDemo } from "@/lib/demos";
import { DigitalTwinSandbox } from "@/components/demos/DigitalTwinSandbox";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return DEMOS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  return { title: demo.title, description: demo.summary };
}

// Map slug → component. Add new entries here when you add a demo.
const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  "digital-twin-sandbox": DigitalTwinSandbox,
};

export default async function DemoPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();

  const DemoComponent = DEMO_COMPONENTS[slug];

  return (
    <div className="max-w-wide">
      <Link
        href="/demos"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
      >
        <ArrowLeft size={14} /> All demos
      </Link>
      <header className="mb-8 max-w-prose">
        <h1 className="text-3xl font-medium tracking-tight">{demo.title}</h1>
        <p className="mt-2 text-muted">{demo.summary}</p>
      </header>
      <div className="rounded-lg border border-subtle p-6">
        {DemoComponent ? (
          <DemoComponent />
        ) : (
          <p className="text-muted">
            (This demo doesn't have a component registered yet.)
          </p>
        )}
      </div>
    </div>
  );
}
