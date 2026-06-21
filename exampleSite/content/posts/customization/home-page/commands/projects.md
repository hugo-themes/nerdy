---
title: Projects Command
date: 2026-06-11
subject: Customization
topic: Home Page
series: Commands
weight: 4
tags:
  - terminal
  - projects
summary: Use the projects command to showcase portfolio projects and links.
---

Use `projects` to highlight selected work from your portfolio.

Edit `data/terminal/commands/projects.yaml`:

```yaml
name: projects
label: Projects
description: View my portfolio projects
quick: true
weight: 40
items:
  - name: E-Commerce Platform API
    type: Work
    tech:
      - Go
      - PostgreSQL
      - Docker
    description: A REST API with authentication, payments, and caching.
    url: https://github.com/gopher/ecommerce-api
  - name: CLI Task Manager
    type: Personal
    tech:
      - Go
      - SQLite
    description: A terminal app for tasks, time tracking, and reports.
    url: https://github.com/gopher/cli-task
```

Each project supports:

- `name`: project title.
- `type`: optional project category such as `Work` or `Personal`.
- `tech`: short list of technologies.
- `description`: one-line project summary.
- `url`: link to code, demo, case study, or docs.

Use a small number of strong projects so the terminal output stays readable.
