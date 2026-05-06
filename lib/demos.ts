export type DemoMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
};

// Manually maintained registry. Add a new entry when you create a demo
// component under components/demos and a route at app/demos/[slug]/page.tsx
// (or the inline page below).
export const DEMOS: DemoMeta[] = [
  {
    slug: "digital-twin-sandbox",
    title: "Digital twin sandbox",
    summary:
      "A toy CSTR with adjustable feed temperature and reaction rate. Watch the steady state move.",
    tags: ["digital-twin", "interactive"],
  },
];

export function getAllDemos(): DemoMeta[] {
  return DEMOS;
}

export function getDemo(slug: string): DemoMeta | undefined {
  return DEMOS.find((d) => d.slug === slug);
}
