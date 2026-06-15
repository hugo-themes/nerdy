---
title: Create a Series
date: 2026-06-12
subject: Content Model
topic: Organizing Content
series: Build a Knowledge Base
weight: 3
tags:
  - series
  - guide
summary: Group ordered posts inside a topic and let Nerdy render the series card and navigation automatically.
---

A series is a folder inside a topic. Use one when a group of posts should be read in order.

```txt
content/posts/go/web-server/building-production-go-web-servers/_index.md
content/posts/go/web-server/building-production-go-web-servers/01-serve-mux.md
content/posts/go/web-server/building-production-go-web-servers/02-middleware.md
```

The series index supplies the card title, order, and optional status chip:

```yaml
---
title: Building Production Go Web Servers
status: Active Series
weight: 10
---
```

Each part should have a `weight`. Add `series` in page front matter when you want the relationship to stay visible on cards and breadcrumbs.
