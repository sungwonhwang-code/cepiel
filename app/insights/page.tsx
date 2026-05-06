import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes on digital twins, AI, and chemical engineering.",
};

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-prose">
      <PageHeader
        eyebrow="Insights"
        title="Notes from the lab"
        description="On digital twins, AI, and chemical engineering — written for builders, not reviewers."
      />
      <div className="border-t border-subtle">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}
