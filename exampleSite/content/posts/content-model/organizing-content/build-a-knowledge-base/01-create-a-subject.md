---
title: Create a Subject
date: 2026-06-12
subject: Content Model
topic: Organizing Content
series: Build a Knowledge Base
weight: 1
tags:
  - subject
  - guide
summary: Start a new high-level area by adding a first-level section with an index file.
---

A subject is the top-level grouping shown in the workspace explorer.

Create a folder and an `_index.md` file:

```txt
content/posts/go/_index.md
```

Use the index file for the display title and order:

```yaml
---
title: Go
weight: 10
---
```

Keep subjects broad. Good subjects are areas like `Go`, `Kubernetes`, `System Design`, or `Reference`.
