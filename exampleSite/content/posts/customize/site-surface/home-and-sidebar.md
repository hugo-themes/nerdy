---
title: Home and Sidebar Sections
date: 2026-06-11
subject: Customize
topic: Site Surface
weight: 1
tags:
  - data
  - homepage
summary: Configure the data-driven home page, profile card, stats, tags, projects, and activity sections.
---

The home page is data-driven. The list of main sections lives in `data/home/sections.yaml`:

```yaml
items:
  - featured-projects
  - recent-posts
  - activity-logs
```

Each item points to a file under `data/home/`. Its `type` selects a partial from `layouts/_partials/home/sections/`.

```yaml
id: recent-posts
type: recent-posts
title: Recent Docs
section: docs
```

The sidebar uses `data/sidebar.yaml`. Built-in sidebar section types include `stats` and `tags`.

To add a custom section, add the data entry and provide a matching partial in your site. Section types may contain lowercase letters, numbers, hyphens, and underscores.
