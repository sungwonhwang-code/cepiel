import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostMeta, formatDate } from "@/lib/posts";
import { Prose } from "@/components/prose";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.summary,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  // Dynamic import of the MDX content.
  const { default: Post } = await import(`@/content/insights/${slug}.mdx`);

  return (
    <div className="max-w-prose">
      <Link
        href="/insights"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} /> All posts
      </Link>
      <header className="mb-10 border-b border-subtle pb-8">
        <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="h-px w-8 bg-accent" />
          Insight
        </div>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
          {meta.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
          <time className="font-mono uppercase tracking-wider">
            {formatDate(meta.date)}
          </time>
          {meta.tags && meta.tags.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {meta.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-subtle px-2 py-0.5 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>
      <Prose>
        <Post />
      </Prose>
    </div>
  );
}
