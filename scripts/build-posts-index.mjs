// Builds content/insights-index.json from MDX frontmatter.
// The deployed Worker has no access to content/ on disk, so post metadata
// must be bundled as JSON rather than read with fs at request time.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const dir = path.join(process.cwd(), "content", "insights");
const out = path.join(process.cwd(), "content", "insights-index.json");

const posts = fs
  .readdirSync(dir)
  .filter((f) => /\.mdx?$/.test(f))
  .map((f) => {
    const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
    return {
      slug: f.replace(/\.mdx?$/, ""),
      title: data.title,
      date,
      ...(data.summary ? { summary: data.summary } : {}),
      ...(data.tags ? { tags: data.tags } : {}),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(out, JSON.stringify(posts, null, 2) + "\n");
console.log(`insights-index.json: ${posts.length} posts`);
