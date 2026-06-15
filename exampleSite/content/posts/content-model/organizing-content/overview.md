---
title: Organize Posts
date: 2026-06-13
subject: Content Model
topic: Organizing Content
weight: 1
tags:
  - content
  - structure
summary: Use folders to group posts into subjects, topics, and optional series.
---

Nerdy uses folders to organize posts. You do not need custom Hugo taxonomies for subjects, topics, or series.

Think of the structure like this:

- **Subject**: a broad area, like `Go` or `Kubernetes`
- **Topic**: a focused group inside a subject, like `Testing`
- **Series**: an optional ordered set of posts inside a topic

```txt
content/posts/
  go/                         # subject
    _index.md
    testing/                  # topic
      _index.md
      table-driven-tests.md   # regular post
      testing-in-go/          # optional series
        _index.md
        01-part-one.md
```

## Subject

A subject is a first-level folder under `content/posts/`.

Create an `_index.md` file for its title and order:

```yaml
---
title: Go
weight: 10
---
```

## Topic

A topic is a second-level folder inside a subject. Topics appear in the workspace explorer and let readers filter posts.

```txt
content/posts/go/testing/_index.md
content/posts/go/testing/table-driven-tests.md
```

## Series

A series is optional. Use it only when posts should be read in order.

```txt
content/posts/go/testing/testing-in-go/_index.md
content/posts/go/testing/testing-in-go/01-basics.md
content/posts/go/testing/testing-in-go/02-table-tests.md
```

The series `_index.md` provides the title, order, and optional status label:

```yaml
---
title: Testing in Go
status: Active Series
weight: 10
---
```

## Ordering

Use `weight` on subjects, topics, series, and pages. Lower weights appear first.

If a post is not part of a series, put it directly inside a topic folder.
