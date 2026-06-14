---
title: Run, Build, and Validate
date: 2026-06-14
subject: Start
topic: Setup
weight: 2
tags:
  - build
  - validation
summary: The small command set used to develop and release-check a Nerdy site.
---

Use the npm scripts when working from this theme repository:

```sh
npm run server
npm run build
```

The build script runs a lightweight Hugo pass first so `hugo_stats.json` exists before Tailwind compiles the final stylesheet.

## Release validation

Before publishing theme changes, build with warnings treated as errors:

```sh
PATH="$(pwd)/node_modules/.bin:$PATH" hugo --source exampleSite --panicOnWarning --minify --gc --destination "/tmp/nerdy-public" --cleanDestinationDir
```

After building, spot-check:

- home page terminal and data-driven sections
- docs workspace explorer
- topic filtering
- series navigation
- table of contents
- code blocks and copy behavior
- light and dark modes
