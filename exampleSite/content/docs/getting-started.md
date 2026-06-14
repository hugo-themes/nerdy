---
title: Getting Started
---

Nerdy is a Hugo theme for personal sites, blogs, and portfolios. It uses Tailwind CSS through Hugo Pipes, so local development needs both Hugo and the npm dependencies installed.

## Run the example site

From the repository root:

```sh
npm install
npm run server
```

The server command runs Hugo with `exampleSite/` as the source. The example site imports the local theme checkout through Hugo Modules, so changes to `layouts/`, `assets/`, and other theme files are reflected while developing.

If you use mise, the equivalent command is:

```sh
mise run server
```

## Build and validate

Build the example site with:

```sh
npm run build
```

For release validation, treat Hugo warnings as errors and build to a temporary destination:

```sh
PATH="$(pwd)/node_modules/.bin:$PATH" hugo --source exampleSite --panicOnWarning --minify --gc --destination "/tmp/nerdy-public" --cleanDestinationDir
```

After building, spot-check the generated home page, posts index, post detail, docs page, terminal interactions, theme toggle, sidebar, table of contents, and code-copy behavior in both light and dark modes.

## Security defaults

The example site disables Goldmark raw HTML rendering by default. Prefer Markdown, data files, or template partial overrides for custom content. If your own site enables `markup.goldmark.renderer.unsafe`, only do so for trusted authors and document that choice for contributors.

Nerdy keeps the remaining trusted HTML paths narrow: theme-owned SVG icons, theme-generated posts breadcrumb attributes, and terminal output that comes from hidden Hugo-rendered command templates. Terminal text typed by visitors is escaped with Alpine `x-text`.

## Project layout

- `exampleSite/content/` contains demo pages and posts.
- `exampleSite/data/` contains demo home, sidebar, and terminal data.
- `exampleSite/hugo.yaml` contains the demo site's Hugo configuration and local module import.
- `layouts/` contains reusable theme templates and partials.
- `assets/css/main.css` contains the Tailwind entrypoint, CSS variables, and reusable `nerdy-*` component classes.
- `assets/js/` contains theme JavaScript built through Hugo Pipes.

## Customization entry points

Use normal Hugo overrides from your site when you need to customize the theme:

- Override templates or partials by adding matching files under your site's `layouts/` directory.
- Copy and adapt the example data files under your site's `data/` directory to configure the home page, sidebar, and terminal content.
- Override colors and backgrounds by targeting the CSS variables defined in `assets/css/main.css`.

## Colors and custom CSS

Create `assets/css/custom.css` in your site to load custom styles after Nerdy's main stylesheet. The custom file is processed through Hugo Pipes and fingerprinted in production, matching the theme asset pipeline.

Prefer overriding the stable CSS tokens instead of editing theme CSS directly:

```css
:root {
  --background: oklch(0.985 0.006 255);
  --foreground: oklch(0.21 0.035 260);
  --surface: oklch(0.965 0.012 255);
  --accent-cyan: oklch(0.47 0.105 224);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --surface: oklch(0.155 0.045 265.08);
  --accent-cyan: oklch(0.865 0.127 207.078);
}
```

Supported tokens include `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--primary`, `--primary-foreground`, `--border`, `--card`, `--card-foreground`, `--surface`, `--surface-muted`, `--surface-elevated`, `--accent-cyan`, `--accent-purple`, `--accent-emerald`, and `--accent-amber`.

## Home and sidebar sections

Home sections are listed in `data/home/sections.yaml`. Each item points to a data file under `data/home/`; that file's `type` selects the partial under `layouts/_partials/home/sections/`. For example, `type: recent_posts` and `type: recent-posts` both render `layouts/_partials/home/sections/recent-posts.html`.

Sidebar sections in `data/sidebar.yaml` work the same way: `type: stats` renders `layouts/_partials/home/sidebar/stats.html`.

To add a custom section from your site, add the data entry and provide the matching partial in your site's `layouts/_partials/` directory. Section types may contain lowercase letters, numbers, hyphens, and underscores; underscores are normalized to hyphens. Unknown or invalid section types fail the build with the expected partial path.
