---
title: Quick Start
date: 2026-06-14
subject: Start
topic: Setup
weight: 1
tags:
  - install
  - hugo
summary: Install Nerdy, run the example site, and copy the minimal configuration into your own Hugo site.
---

Nerdy is a Hugo theme for personal sites, technical blogs, and portfolio-style home pages.

## Requirements

- Hugo `0.162.1` or newer
- Node.js and npm for Tailwind CSS and JavaScript dependencies

## Run this example site

From the repository root:

```sh
npm install
npm run server
```

The example site lives in `exampleSite/` and imports the local theme checkout through Hugo Modules.

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
