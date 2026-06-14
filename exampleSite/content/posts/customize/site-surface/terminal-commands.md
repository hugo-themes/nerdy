---
title: Terminal Commands
date: 2026-06-11
subject: Customize
topic: Site Surface
weight: 2
tags:
  - terminal
  - data
summary: Customize the interactive terminal prompt, quick commands, and rendered command output.
---

The terminal prompt is configured in `data/terminal/config.yaml`:

```yaml
user: guest
host: portfolio
directory: "~"
window_title: "guest@portfolio:~"
auto_command: about
```

Command data lives in `data/terminal/commands/*.yaml`. For example, `about.yaml` feeds the built-in `terminal/commands/about.html` partial.

To add a custom command:

1. create `data/terminal/commands/my-command.yaml`
2. create `layouts/_partials/terminal/commands/my-command.html`
3. set `quick: true` if it should appear in the quick command bar

Terminal output is rendered from trusted Hugo templates. Visitor input is written with Alpine `x-text`.
