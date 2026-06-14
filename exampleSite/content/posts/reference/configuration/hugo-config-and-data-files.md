---
title: Hugo Config and Data Files
date: 2026-06-10
subject: Reference
topic: Configuration
weight: 1
tags:
  - config
  - data
summary: A compact reference for the configuration files most users copy from the example site.
---

Start with the example site's `hugo.yaml` and keep only the parts your site needs.

## Hugo config

The example site uses Hugo Modules, build stats, safe Goldmark defaults, and disabled taxonomy pages:

```yaml
disableKinds:
  - taxonomy
  - term

markup:
  goldmark:
    renderer:
      unsafe: false

build:
  buildStats:
    enable: true

module:
  imports:
    - path: github.com/hugo-themes/nerdy
```

## Data files

Copy and edit these files when you want the matching feature:

- `data/sidebar.yaml` for the profile sidebar
- `data/home/sections.yaml` for home section order
- `data/home/*.yaml` for projects, recent content, and activity cards
- `data/terminal/config.yaml` for the terminal prompt
- `data/terminal/commands/*.yaml` for terminal command content

Theme templates live at the repository root. Demo content and demo data live under `exampleSite/` so a new site does not inherit them automatically.
