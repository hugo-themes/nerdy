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

Add the theme as a Hugo module import:

```yaml
module:
  imports:
    - path: github.com/hugo-themes/nerdy
```

Enable Hugo build stats so Tailwind can discover classes emitted by templates:

```yaml
build:
  buildStats:
    enable: true
```

Then copy only the data files and content structure you want from `exampleSite/`.

If you copy from `exampleSite/hugo.yaml`, do not copy the `module.replacements` line. That line is only for this repository so the demo site can point at the local theme checkout.

Your site also needs the npm dependencies used by Nerdy's asset pipeline. Use this repository's `package.json` as the reference set for Tailwind and Alpine.js. Add Portless too only if you want the same stable local HTTPS workflow.

Next, read the content organization and customization guides for the parts of the site you want to change.
