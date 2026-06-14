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
- Optional site-level CSS can be added at `assets/css/custom.css`. It loads after the main theme stylesheet and is processed/fingerprinted in production.
- Home page sections are configured by `data/home/sections.yaml` in the example site. A section data file with `type: recent_posts` or `type: recent-posts` maps to `layouts/_partials/home/sections/recent-posts.html`; custom types can be added by providing a matching partial from your site.
- Sidebar profile and sections are configured by `data/sidebar.yaml` in the example site. Sidebar section types map to `layouts/_partials/home/sidebar/<type>.html` with underscores normalized to hyphens.
- Terminal content is configured by `data/terminal/config.yaml` and `data/terminal/commands/*.yaml` in the example site.

Section types are restricted to lowercase letters, numbers, hyphens, and underscores. Unknown section types fail the build with the expected partial path so configuration mistakes are visible during validation.

### Color and background overrides

The supported CSS customization contract is the token set defined on `:root` and `.dark` in `assets/css/main.css`:

- `--background`, `--foreground`, `--muted`, `--muted-foreground`
- `--primary`, `--primary-foreground`, `--border`
- `--card`, `--card-foreground`
- `--surface`, `--surface-muted`, `--surface-elevated`
- `--accent-cyan`, `--accent-purple`, `--accent-emerald`, `--accent-amber`

To customize without editing the theme, create `assets/css/custom.css` in your site and override only the tokens you need:

```css
:root {
  --accent-cyan: oklch(0.55 0.14 230);
  --surface: oklch(0.97 0.01 250);
}

.dark {
  --accent-cyan: oklch(0.86 0.13 210);
  --surface: oklch(0.16 0.04 265);
}
```

## Partial structure

- `components/` contains shared UI building blocks, icons, theme controls, accent helpers, and empty states.
- `site/` contains document chrome and asset loading partials.
- `home/`, `posts/`, and `terminal/` contain feature-specific sections, cards, and command output templates.

Shared card, chip, surface, hover, and accent styles live in `assets/css/main.css` as `nerdy-*` component classes.
The theme toggle is mounted once from `site/theme-toggle-float.html` for a consistent location across pages.
