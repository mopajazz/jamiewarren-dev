# mopajazz.com

Personal portfolio — Astro static site, deployed on Vercel.

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Deploy
Push to GitHub → import in Vercel. Framework preset: Astro. No config needed.
Point mopajazz.com at the Vercel project when ready.

## Where things live
- `src/content/work/*.md` — case studies. **To add one: drop in a markdown
  file with frontmatter (title, summary, order, tools, link, featured).
  That's the whole job.** No layout code, no HTML.
- `src/content/lab/*.md` — Lab entries. Frontmatter only; body optional.
- `src/content/config.ts` — the schemas. Add a field here (e.g. `year`),
  and every entry can use it.
- `src/styles/global.css` — all design tokens in `:root`. One place.
- `src/layouts/Base.astro` — nav, footer, fonts.
- `src/pages/` — one file per route. `work/[...slug].astro` builds every
  case study page from the collection automatically.

## Open items
- Component library preview link (Lab entry + ACA-122 study)
- MKT-120 sample module Vercel link (case study artifact row)
- Deploy prompt-engineering + ACC-121 Rise exports, add links to Lab entries
