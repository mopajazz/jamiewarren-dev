# jamiewarren.dev

Personal portfolio — Astro static site, deployed on Vercel.

## Run locally
    npm install
    npm run dev        # http://localhost:4321

## Deploy
Push to GitHub → import in Vercel. Framework preset: Astro. No config needed.
Point jamiewarren.dev at the Vercel project when ready. The canonical domain is
set in `astro.config.mjs` (`site`) — canonical tags, Open Graph URLs, and the
sitemap all derive from it, so change it there if the domain ever moves.

## Where things live
- `src/content/work/*.md` — case studies. **To add one: drop in a markdown
  file with frontmatter (title, summary, order, tools, link, featured).
  That's the whole job.** No layout code, no HTML.
- `src/content/lab/*.md` — Lab entries. Frontmatter only; body optional.
- `public/h5p/` — H5P activities, played in-page by
  [h5p-standalone](https://github.com/tunapanda/h5p-standalone). **To add
  one:** rename the `.h5p` to `.zip` and unzip it. Move its `h5p.json` and
  `content/` into `public/h5p/<name>/`, and merge the library folders (all the
  others) into `public/h5p/libraries/`, which every activity shares. Then add a
  Lab entry with `h5p: "<name>"`. The page appears at `/lab/h5p/<entry-slug>/`.
  The player itself is copied from `node_modules` into `public/h5p-player/`
  (gitignored) by `scripts/copy-h5p-player.mjs` before each dev/build run.
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
