---
title: Quick Start
date: 2026-06-14
subject: Start
topic: Setup
weight: 1
tags:
  - install
  - hugo
summary: Run the demo site and add Nerdy to your own Hugo site.
---

Nerdy is a Hugo theme for personal portfolios, blogs, and documentation-style posts.

## Requirements

- Hugo `0.162.1` or newer
- Node.js and npm for Tailwind CSS and JavaScript dependencies
- Go if you import Nerdy as a Hugo Module

## Try the demo site

From the repository root:

```sh
npm install
npm run server
```

Then open <http://localhost:1313>.

The demo and documentation site lives in `exampleSite/`. It imports the local theme checkout through Hugo Modules.

## Build the demo site

```sh
npm run build
```

The generated site is written to `exampleSite/public/`.

Use the npm scripts instead of calling `hugo` directly. They prepare Hugo build stats before Tailwind compiles the final stylesheet.

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

Your site also needs the npm dependencies used by Nerdy's asset pipeline. Use this repository's `package.json` as the reference.

Next, read the content organization and customization guides for the parts of the site you want to change.
