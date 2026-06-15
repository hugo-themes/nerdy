---
title: Skills Command
date: 2026-06-11
subject: Customization
topic: Home Page
series: Commands
weight: 2
tags:
  - terminal
  - skills
summary: Use the skills command to show your technical stack by category.
---

Use `skills` to show tools, languages, frameworks, or areas of expertise.

Edit `data/terminal/commands/skills.yaml`:

```yaml
name: skills
label: Skills
description: My technical stack
quick: true
weight: 20
categories:
  - key: core_languages
    items:
      - JavaScript
      - TypeScript
      - Python
  - key: backend
    items:
      - Node.js
      - Express
      - REST APIs
  - key: devops_tools
    items:
      - Git
      - Docker
      - AWS
```

Each item in `categories` has:

- `key`: category name shown in the terminal output.
- `items`: skills listed under that category.

Keep category names short so the output stays easy to scan.
