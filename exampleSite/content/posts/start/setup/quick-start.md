---
title: Quick Start
date: 2026-06-14
subject: Start
topic: Setup
weight: 1
tags:
  - install
  - hugo
summary: Run the Portless-powered demo site and add Nerdy to your own Hugo site.
---

Nerdy is a Hugo theme for personal portfolios, blogs, and documentation-style posts. The fastest way to understand it is to run the bundled demo site, then copy only the configuration and content pieces you need into your own Hugo project.

## Requirements

- Hugo `0.162.1` or newer
- Node.js 24 or newer and npm for Tailwind CSS, Portless, and JavaScript dependencies
- Go for Hugo Modules; the demo site and recommended install path both use them

## Try the demo site

Clone the theme repository, or use your existing checkout, then start the demo:

```sh
git clone https://github.com/hugo-themes/nerdy.git
cd nerdy
npm install
npm run server
```

Then open <https://nerdy.localhost>.

`npm run server` runs the demo through [Portless](https://portless.sh/) so the local URL stays stable. On first run, Portless may ask you to trust its local HTTPS certificate. If the browser still warns that the page is not secure, run:

```sh
npm run portless:trust
```

Restart the browser, then open <https://nerdy.localhost> again.

If you see a Portless 404 instead of the demo, stop the stale proxy with `npx portless proxy stop`, then run `npm run server` again.

If you prefer to bypass Portless and use Hugo's default local server URL, run:

```sh
npm run server:local
```

Then open <http://localhost:1313>.

The demo and documentation site lives in `exampleSite/`. It imports the local theme checkout through Hugo Modules.

## Build the demo site

```sh
npm run build
```

The generated site is written to `exampleSite/public/`.

Use the npm scripts instead of calling `hugo` directly. They add `node_modules/.bin` to `PATH` and prepare Hugo build stats before Tailwind compiles the final stylesheet.

## Use Nerdy in your site

Run these steps from your Hugo site's root directory, not from the Nerdy theme checkout.

If your site is not already a Hugo module, initialize one first:

```sh
hugo mod init github.com/you/your-site
```

Add the theme import and Tailwind build-stat wiring to `hugo.yaml`:

```yaml
build:
  buildStats:
    enable: true
  cachebusters:
    - source: 'assets/notwatching/hugo_stats\.json'
      target: css

module:
  imports:
    - path: github.com/hugo-themes/nerdy
  mounts:
    - source: assets
      target: assets
    - disableWatch: true
      source: hugo_stats.json
      target: assets/notwatching/hugo_stats.json
```

If your site already has `module.imports` or `module.mounts`, merge these entries instead of replacing your existing configuration. The `hugo_stats.json` mount gives Tailwind a stable file to scan without making Hugo watch its own generated build-stat file.

Create or update `package.json` with scripts for local development, production builds, and theme dependency refreshes:

```json
{
  "name": "your-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "hugo --renderToMemory && hugo --minify --gc --cleanDestinationDir",
    "server": "hugo --renderToMemory && hugo server --buildDrafts --watch",
    "dev": "npm run server",
    "theme:update": "hugo mod get github.com/hugo-themes/nerdy@latest && hugo mod tidy && hugo mod npm pack && npm install",
    "theme:update-to-main": "hugo mod get github.com/hugo-themes/nerdy@main && hugo mod tidy && hugo mod npm pack && npm install"
  }
}
```

Install the theme module and npm dependencies:

```sh
hugo mod get github.com/hugo-themes/nerdy@latest
hugo mod tidy
hugo mod npm pack
npm install
```

`hugo mod npm pack` reads Nerdy's `package.hugo.json`, creates `packages/hugoautogen/package.json`, and adds that generated package as an npm workspace. This keeps Tailwind, Alpine.js, and other theme asset dependencies in sync without copying them by hand.

Then copy only the data files, assets, and content structure you want from `exampleSite/`, such as `data/sidebar.yaml`, `data/home/`, `data/terminal/`, and `content/posts/`.

If you copy from `exampleSite/hugo.yaml`, do not copy the `module.replacements` line. That line is only for this repository so the demo site can point at the local theme checkout.

Start your site with:

```sh
npm run server
```

Run `npm run theme:update` whenever you want to pull the latest Nerdy release and refresh the generated npm workspace. If you want the newest commit from the `main` branch instead, run `npm run theme:update-to-main`.

Next, read the content organization and customization guides for the parts of the site you want to change.
