---
title: Subjects, Topics, and Series
date: 2026-06-13
subject: Content Model
topic: Organizing Content
weight: 1
tags:
  - content
  - structure
summary: Understand the folder-based model that powers Nerdy's workspace explorer and series navigation.
---

Nerdy does not model subjects, topics, or series as Hugo taxonomies. They are mostly folder structure.

```txt
content/docs/
  subject/
    topic/
      page.md
      series-name/
        _index.md
        01-part-one.md
```

## Subject

A subject is a first-level section under the publishing section. In this documentation, `Start`, `Content Model`, `Customize`, and `Reference` are subjects.

Subjects appear as folders in the workspace explorer.

## Topic

A topic is a second-level section under a subject. Selecting a topic filters the index to only that topic's pages.

## Series

A series is an optional section inside a topic. Its `_index.md` provides the series title, weight, and optional status label. Pages inside that folder appear in series navigation ordered by `weight`.

## Reuse the workspace layout

The built-in workspace layout lives under `layouts/posts/`, but it can power another section too. This documentation does that by setting `type: posts` on `content/docs/_index.md` and cascading the same type to regular pages:

```yaml
---
title: Documentation
type: posts
cascade:
  - type: posts
    target:
      kind: page
---
```

## Ordering

Use `weight` on subjects, topics, series, and pages. Lower weights appear first.
