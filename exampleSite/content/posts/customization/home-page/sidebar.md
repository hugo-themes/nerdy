---
title: Sidebar
date: 2026-06-11
subject: Customization
topic: Home Page
weight: 1
tags:
  - sidebar
  - data
summary: Configure the home page profile card, links, stats, and tags.
---

The home page sidebar is controlled by `data/sidebar.yaml`.

If the file has a `profile`, Nerdy shows the profile card. If it has `sections`, Nerdy shows the cards below the profile.

## Example

```yaml
profile:
  name: "Mr. Gopher"
  title: Backend Developer
  avatar: "images/gopher.png"
  description: Building scalable systems and clean APIs.
  status:
    label: Status
    value: Open to Senior Roles
    preference_label: Pref
    preference: 100% Remote / Async
  links:
    - icon: github
      label: github.com/gopher
      url: https://github.com/gopher
    - icon: mail
      label: hello@gopher.dev
      url: mailto:hello@gopher.dev

sections:
  - id: profile-stats
    type: stats
    title: Profile Stats
    items:
      - label: Experience
        value: 5+ yrs
        accent: emerald
      - label: Focus
        value: Scalable Backends
        accent: cyan

  - id: core-stack
    type: tags
    title: Core Stack
    items:
      - Go
      - Docker
      - PostgreSQL
```

## Profile fields

- `name`: main profile name.
- `title`: short role or tagline below the name.
- `avatar`: image path. Use a site asset path or an external URL.
- `description`: short introduction.
- `status`: small status box below the description.
- `links`: social, email, or profile links.

## Sidebar sections

Nerdy includes two sidebar section types:

- `stats`: label/value rows with optional accents.
- `tags`: compact chips for skills, tools, or interests.

To add another section type, create a matching partial in your site at `layouts/_partials/home/sidebar/<type>.html`.
