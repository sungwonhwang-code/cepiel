import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "insights");

export type PostFrontmatter = {
  title: string;
  date: string;
  summary?: string;
  tags?: string[];
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPostMeta(slug: string): PostMeta | null {
  const candidates = [
    path.join(POSTS_DIR, `${slug}.mdx`),
    path.join(POSTS_DIR, `${slug}.md`),
  ];
  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title,
    date: typeof fm.date === "string" ? fm.date : new Date(fm.date).toISOString(),
    summary: fm.summary,
    tags: fm.tags,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(dateString: string): string {
  const d = new Date(dateString);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
