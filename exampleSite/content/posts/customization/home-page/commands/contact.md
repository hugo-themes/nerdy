---
title: Contact Command
date: 2026-06-11
subject: Customization
topic: Home Page
series: Commands
weight: 5
tags:
  - terminal
  - contact
summary: Use the contact command to show email and profile links.
---

Use `contact` to give visitors a quick way to reach you.

Edit `data/terminal/commands/contact.yaml`:

```yaml
name: contact
label: Contact
description: How to reach me
quick: true
weight: 50
intro: Let's build something awesome together!
email: hello@gopher.dev
links:
  - label: GitHub
    text: https://github.com/gopher
    url: https://github.com/gopher
  - label: LinkedIn
    text: https://linkedin.com/in/gopher
    url: https://linkedin.com/in/gopher
  - label: Twitter
    text: "@yourhandle"
    url: https://twitter.com/yourhandle
outro: Drop me a line or run the commands above to explore more.
```

Useful fields:

- `intro`: opening line.
- `email`: email address shown as a mail link.
- `links`: social or profile links.
- `outro`: closing line.

For each link, `label` is the left-side label, `text` is what visitors see, and `url` is where the link goes.
