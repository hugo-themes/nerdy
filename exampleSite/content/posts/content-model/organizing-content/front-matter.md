---
title: Front Matter
date: 2026-06-13
subject: Content Model
topic: Organizing Content
weight: 2
tags:
  - front-matter
  - reference
summary: The page fields Nerdy reads for breadcrumbs, topic chips, ordering, summaries, tags, and series navigation.
---

Nerdy can infer subject, topic, and series from folders. Add explicit front matter when you want card labels and breadcrumbs to stay clear.

```yaml
---
title: ServeMux Foundations
date: 2026-05-20
subject: Go
topic: Web Server
series: Building Production Go Web Servers
weight: 1
tags:
  - go
  - web
summary: The first step in a four-part series on production-minded Go HTTP servers.
---
```

## Common fields

- `title`: page, subject, topic, or series title
- `description`: section heading text for index pages
- `date`: used by recent cards and post tables
- `weight`: controls manual ordering
- `subject`: breadcrumb and fallback grouping label
- `topic`: breadcrumb and recent-card chip
- `series`: connects a page to a named series
- `tags`: small chips on cards and post tables
- `summary`: concise card text

Taxonomy pages are disabled in the example site, so `tags` are display metadata rather than browsable tag pages.
