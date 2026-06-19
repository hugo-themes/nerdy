# AGENTS.md

## Commands

- Install deps: `npm install` (or `mise run build/server/server-local`, which depends on `install`).
- Dev server: `npm run server` runs the example site through Portless at `https://nerdy.localhost`.
- Direct Hugo server without Portless: `npm run server:local` serves `http://localhost:1313`.
- Production verification: `npm run build`; there are no separate lint/test scripts in `package.json`.
- Prefer npm scripts over raw `hugo` so `node_modules/.bin` is on `PATH` and `hugo_stats.json` exists before Tailwind compiles.
- Optional mise equivalents: `mise run server`, `mise run server-local`, `mise run build`; mise also prepends `./node_modules/.bin` to `PATH`.

## Repo shape

- Root files are the reusable Hugo theme; `exampleSite/` is the live demo and documentation site.
- `exampleSite/hugo.yaml` imports `github.com/hugo-themes/nerdy` with `module.replacements: github.com/hugo-themes/nerdy -> ../..`; keep this local-module wiring intact.
- Docs are authored as posts under `exampleSite/content/posts/`, using subject/topic/series folders; keep docs user-focused, not maintainer release checklists.
- The home page is data-driven from `exampleSite/data/home/*`, `exampleSite/data/sidebar.yaml`, and `exampleSite/data/terminal/*`.

## Theme wiring gotchas

- Tailwind sources include `hugo_stats.json`, `assets/js/**/*.js`, `layouts/**/*.html`, and `data/**/*.{yaml,yml}` from `assets/css/main.css`; changing generated class locations may require updating sources.
- `layouts/_partials/site/assets/css.html` processes both `css/main.css` and optional site `css/custom.css` through Hugo's `css.TailwindCSS`; production builds fingerprint assets.
- Home section `type` values map to `layouts/_partials/home/sections/<type>.html`; sidebar section types map to `layouts/_partials/home/sidebar/<type>.html`; invalid or missing types intentionally fail the Hugo build.
- Terminal command data under `data/terminal/commands/<name>.yaml` must have a matching partial `layouts/_partials/terminal/commands/<name>.html`.
- Post layouts infer subject/topic/series primarily from folder structure; front matter labels are for clearer cards/breadcrumbs.

## Generated files

- Do not commit generated output: `public/`, `resources/_gen/`, `.hugo_build.lock`, `hugo_stats.json`, or `node_modules/`.
- Cloudflare/Wrangler serves static assets from `exampleSite/public`; build it with `npm run build` first.
