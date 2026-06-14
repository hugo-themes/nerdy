---
title: Create a Topic
date: 2026-06-12
subject: Content Model
topic: Organizing Content
series: Build a Knowledge Base
weight: 2
tags:
  - topic
  - guide
summary: Add a second-level section so readers can filter a subject into focused topic groups.
---

A topic lives inside a subject and becomes a clickable item in the workspace explorer.

```txt
content/posts/go/testing/_index.md
content/posts/go/testing/table-driven-tests.md
```

The topic index only needs a title and optional weight:

```yaml
---
title: Testing
weight: 30
---
```

Pages inside the topic can include matching metadata for clearer cards:

```yaml
subject: Go
topic: Testing
```
