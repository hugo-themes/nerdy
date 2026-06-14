# Nerdy

A responsive Hugo theme for personal sites, blogs, and portfolios. Nerdy uses Hugo Pipes, Tailwind CSS, Alpine.js, and a small set of reusable `nerdy-*` component styles to provide a fast dark-mode-first publishing experience.

## Requirements

- Hugo `0.162.1` or newer
- Node.js and npm for Tailwind CSS and JavaScript dependencies
- Optional: [mise](https://mise.jdx.dev/) for the local development tasks in this repository

## Quick start

Use Nerdy as a normal Hugo theme or module in your site. The bundled demo lives in `exampleSite/`; the repository root contains reusable theme code only.

For local development against this checkout, run the example site:

```sh
npm install
npm run server
```

Build the example site:

```sh
npm run build
```

The npm scripts target `exampleSite/` and expect `node_modules/.bin` to be available so Hugo can find the Tailwind CSS CLI.

## Development

This project uses [mise](https://mise.jdx.dev/) to manage tool versions and run the example site tasks defined in `mise.toml`.

Install the configured tools:

```sh
mise install
```

Run the example site locally:

```sh
mise run server
```

Build the example site:

```sh
mise run build
```

The `server` and `build` tasks run the `exampleSite` and install npm dependencies automatically. They also add `node_modules/.bin` to `PATH` so Hugo can find the Tailwind CSS CLI.
The theme uses Hugo's Tailwind integration with build stats enabled so Tailwind can discover classes in Hugo templates.

Equivalent npm commands are available:

```sh
npm run server
npm run build
```

## Release validation

Before publishing changes, build the example site with warnings treated as errors:

```sh
PATH="$(pwd)/node_modules/.bin:$PATH" hugo --source exampleSite --panicOnWarning --minify --gc --destination "/tmp/nerdy-public" --cleanDestinationDir
```

Then manually spot-check the generated home page, posts index, post detail, docs page, terminal interactions, theme toggle, sidebar, table of contents, and code-copy behavior in light and dark modes.

Production stylesheet and JavaScript assets are built through Hugo Pipes and fingerprinted. Development builds intentionally favor simpler, watch-friendly asset URLs.

## Customization overview

- Site content and demo data live under `exampleSite/content/` and `exampleSite/data/`.
- Theme templates live under `layouts/` and can be overridden from a user's Hugo site using normal Hugo lookup order.
- Design tokens and reusable component classes live in `assets/css/main.css`, including colors, backgrounds, cards, chips, surfaces, and prose styling.
- Home page sections are configured by `data/home/sections.yaml` in the example site and currently render the built-in section types provided by the theme.
- Sidebar profile and sections are configured by `data/sidebar.yaml` in the example site.
- Terminal content is configured by `data/terminal/config.yaml` and `data/terminal/commands/*.yaml` in the example site.

Future work in this release-readiness pass will make custom home/sidebar section partials a documented extension point. Until then, prefer overriding existing partials or data files rather than editing theme internals directly.

## Partial structure

- `components/` contains shared UI building blocks, icons, theme controls, accent helpers, and empty states.
- `site/` contains document chrome and asset loading partials.
- `home/`, `posts/`, and `terminal/` contain feature-specific sections, cards, and command output templates.

Shared card, chip, surface, hover, and accent styles live in `assets/css/main.css` as `nerdy-*` component classes.
The theme toggle is mounted once from `site/theme-toggle-float.html` for a consistent location across pages.
