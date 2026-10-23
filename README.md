# BlueWhale Energy Services Nigeria Limited — Corporate Website

Official website for BlueWhale Energy Services Nigeria Limited — integrated
oil & gas services: well intervention, drilling & completions, facilities
engineering, procurement and supply.

**Live site:** `https://<your-username>.github.io/<repo-name>/` (after following
[PUBLISHING.md](./PUBLISHING.md))

## Built with

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS 4 + shadcn/ui components
- Framer Motion animations
- Bun package manager

## Project structure

```
src/
  app/            Layout, metadata, home page, contact-form API
  components/
    site/         All page sections (hero, about, services, capabilities,
                  HSE, contact, footer) + shared data in data.ts
    ui/           shadcn/ui primitives
  lib/            helpers (db client, asset base-path helper)
public/
  images/         Site photography
prisma/           SQLite schema for contact submissions (server mode only)
.github/
  workflows/      Auto-build + deploy to GitHub Pages on every push
```

## Local development

```bash
bun install        # or: npm install
bun run dev        # http://localhost:3000
```

In server mode the contact form stores submissions in a local SQLite
database (`db/custom.db`, via Prisma). Inspect them with
`node scripts/check-submissions.js`.

## Production builds

| Mode | Command | Use case |
|------|---------|----------|
| Server | `bun run build` && `bun start` | Node host with working contact-form database |
| Static | `bun run build:static` | GitHub Pages / Netlify / any static host |

Static output is written to `out/`. On static hosting the contact form
cannot use the Node API route; it automatically falls back to either a
configured form service (`NEXT_PUBLIC_FORM_ENDPOINT`, e.g. Formspree) or
the visitor's email app.

## Editing content

Nearly all text, contact details, service copy and image paths live in
**`src/components/site/data.ts`**. Company metadata (title, SEO
description) is in **`src/app/layout.tsx`**. Theme colors are defined in
**`src/app/globals.css`**.

See [PUBLISHING.md](./PUBLISHING.md) for the full step-by-step guide to
publishing this site on GitHub Pages.
