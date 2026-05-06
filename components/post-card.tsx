import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group flex flex-col border-b border-subtle py-5 transition-colors"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight group-hover:text-accent">
          <span className="bg-gradient-to-r from-accent to-accent bg-[length:0%_1px] bg-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            {post.title}
          </span>
          <ArrowUpRight
            size={14}
            className="ml-1 inline-block -translate-y-2 -translate-x-1 text-muted opacity-0 transition-all group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
          />
        </h3>
        <time className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
          {formatDate(post.date)}
        </time>
      </div>
      {post.summary && (
        <p className="mt-1 text-muted">{post.summary}</p>
      )}
      {post.tags && post.tags.length > 0 && (
        <ul className="mt-2 flex flex-wrap gap-1.5 text-xs text-muted">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-subtle px-2 py-0.5"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}
