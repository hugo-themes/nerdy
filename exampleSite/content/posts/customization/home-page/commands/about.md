---
title: About Command
date: 2026-06-11
subject: Customization
topic: Home Page
series: Commands
weight: 1
tags:
  - terminal
  - about
summary: Use the about command to introduce yourself in the terminal.
---

Use `about` for a short introduction. It is a good default for `auto_command` because it immediately tells visitors who you are.

Edit `data/terminal/commands/about.yaml`:

```yaml
name: about
label: About
description: Information about me
quick: true
weight: 10
greeting: Hello, World!
person_name: "Mr. Gopher"
role: Backend Developer
summary: I specialize in writing clean, efficient, and robust code.
details:
  - I build scalable web applications and RESTful APIs.
  - I enjoy clean architecture, performance, and developer tools.
quote:
  text: First, solve the problem. Then, write the code.
  author: John Johnson
```

Useful fields:

- `greeting`: first highlighted phrase.
- `person_name`: your name.
- `role`: your role or title.
- `summary`: one-sentence overview.
- `details`: extra lines below the summary.
- `quote`: optional quote with `text` and `author`.
