---
title: Front Matter
date: 2026-06-13
subject: Content Model
topic: Organizing Content
weight: 2
tags:
  - front-matter
  - reference
summary: The small set of page fields Nerdy uses for labels, ordering, summaries, and series navigation.
---

Nerdy can infer a lot from folders, but front matter keeps cards, breadcrumbs, and ordering clear.

A typical post looks like this:

```yaml
---
title: ServeMux Foundations
date: 2026-05-20
subject: Go
topic: Web Server
weight: 1
tags:
  - go
  - web
summary: A practical guide to Go's standard HTTP request router.
---
```

## Common fields

- `title`: page, subject, topic, or series title.
- `date`: used by recent cards and post tables.
- `summary`: short text shown on cards and lists.
- `weight`: controls manual ordering. Lower numbers appear first.
- `subject`: label used in breadcrumbs and cards.
- `topic`: label used in breadcrumbs and topic chips.
- `series`: shows the series relationship on pages that belong to a series.
- `tags`: small chips on cards and post tables.
- `description`: optional text for section index pages.

Use `series` only for posts inside a series folder. Regular posts can skip it.

Taxonomy pages are disabled in the example site, so `tags` are display labels rather than separate tag pages.
