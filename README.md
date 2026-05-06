# Sean Hwang — Personal Site

Personal website of Sungwon (Sean) Hwang. Built with Next.js 15 (App Router),
TypeScript, Tailwind CSS, and MDX.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev         # dev server
npm run build       # production build
npm run start       # serve production build
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

## Project layout

```
app/                  # Next.js App Router pages
  page.tsx            # Home
  about/              # /about
  insights/           # /insights and /insights/[slug] (MDX blog)
  research/           # /research
  talks/              # /talks
  demos/              # /demos and /demos/[slug]
  contact/            # /contact
components/
  nav.tsx, footer.tsx, theme-toggle.tsx, theme-provider.tsx
  prose.tsx, mdx-components.tsx
  post-card.tsx, paper-item.tsx, talk-item.tsx
  demos/              # interactive demo components
content/
  insights/*.mdx      # blog posts
  research.json       # papers
  talks.json          # talks
lib/
  posts.ts            # MDX post loader
  research.ts, talks.ts, demos.ts
public/               # static assets
```

## Adding content

### A new blog post

1. Create `content/insights/<slug>.mdx`:

   ```mdx
   ---
   title: "Post title"
   date: 2026-05-06
   summary: "One-line summary."
   tags: ["digital-twin"]
   ---

   Body in Markdown / MDX.
   ```

2. That's it — it shows up automatically in `/insights` and `/insights/<slug>`.

### A new paper

Edit `content/research.json` and add an entry:

```json
{
  "id": "2026-new-paper",
  "title": "Paper title",
  "authors": ["S. Hwang", "..."],
  "venue": "Journal",
  "year": 2026,
  "doi": "10.xxxx/...",
  "url": "https://doi.org/...",
  "tags": ["..."],
  "summary": "Optional one-line summary."
}
```

### A new talk

Edit `content/talks.json`:

```json
{
  "id": "2026-some-event",
  "title": "Talk title",
  "event": "Event name",
  "location": "City, Country",
  "date": "2026-09-15",
  "type": "Keynote",
  "url": "https://..."
}
```

### A new interactive demo

1. Create the component, e.g. `components/demos/MyDemo.tsx` (must be
   `"use client"` if it uses state).
2. Register it in `lib/demos.ts` (metadata) and in
   `app/demos/[slug]/page.tsx` (the `DEMO_COMPONENTS` map).

## Theming

- Light/dark mode via `next-themes` + Tailwind's `dark:` variant.
- Accent color is `#FA4E40` (CEPiEL brand). Defined in `tailwind.config.ts`
  as `accent` and as the CSS variable `--accent` in `app/globals.css`.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import it on [vercel.com](https://vercel.com). No environment variables
   are required for the default build.
3. Set the production domain when ready.

## Roadmap

- [ ] Korean toggle (i18n)
- [ ] RSS feed at `/feed.xml`
- [ ] Open Graph image generation
- [ ] Tag pages on `/insights`
