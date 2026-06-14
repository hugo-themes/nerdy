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

The current built-in home/sidebar section types are intentionally data-driven. A later release-readiness step will document guarded custom section partials; for now, customize by changing data or overriding existing partials.
