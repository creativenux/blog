# Toheeb Olayemi — Personal Website

A personal website `creativenux.com` built with [Astro](https://astro.build), TypeScript, and Tailwind CSS. 100% created with Cursor (writings and content are written by me).

## Features

- **Homepage** — Short intro and recent writings
- **Writings index** — Chronological list of all writings
- **Individual writings** — Markdown and MDX with syntax highlighting (Shiki), reading time, and clean typography
- **About page** — Bio and contact
- **Topics** — Browse writings by topic (`/topics`, `/topics/[topic]`)
- **RSS** — `/rss.xml`
- **Sitemap** — `/sitemap-index.xml`
- **Dark/light mode** — Follows `prefers-color-scheme`, no toggle

## Tech Stack

- Astro (latest)
- TypeScript
- Tailwind CSS v4
- MDX for rich writings
- Content Collections
- No external UI libraries

## Project Structure

```
/
├── public/
├── src/
│   ├── content/
│   │   ├── config.ts       # Content collection schema
│   │   └── writings/       # .md and .mdx writings
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── BaseHead.astro  # Meta, SEO, OG
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   ├── lib/
│   │   └── writings.ts     # getSortedPosts, getAllTopics, getPostsByTopicSlug, etc.
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── writings/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── topics/
│   │   │   ├── index.astro
│   │   │   └── [topic].astro
│   │   ├── rss.xml.ts
│   │   └── robots.txt.ts
│   ├── styles/
│   │   └── global.css
│   └── consts.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Setup

```bash
bun install
```

## Commands

| Command       | Action                            |
| :------------ | :-------------------------------- |
| `bun dev`     | Dev server at `http://localhost:4321` |
| `bun build`   | Production build to `./dist/`     |
| `bun preview` | Preview the production build      |

## Writing

Add `.md` or `.mdx` files to `src/content/writings/`. Frontmatter:

```yaml
---
title: "Writing Title"
date: 2024-01-25
description: "Optional short description"
topics: ["optional", "topics"]
---

Content in **Markdown** or MDX.
```

Slug is taken from the filename. Writings are sorted by `date` (newest first).

## Configuration

- **Site URL** — Set `site` in `astro.config.mjs` and `SITE_URL` in `src/consts.ts` (keep them in sync for sitemap and RSS).
- **Site title / description** — Edit `src/consts.ts`.
- **Header/Footer** — Update `src/components/Header.astro` and `Footer.astro` (social links).
