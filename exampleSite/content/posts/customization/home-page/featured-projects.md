---
title: Featured Projects Section
date: 2026-06-21
subject: Customization
topic: Home Page
weight: 3
tags:
  - homepage
  - projects
  - data
summary: Configure the featured projects section on the home page.
---

The featured projects section is a home page content section that shows project cards below the terminal.

It is enabled from `data/home/sections.yaml` and configured from `data/home/featured-projects.yaml`.

## Enable the section

Add the section data file name to `data/home/sections.yaml` without the `.yaml` extension:

```yaml
items:
  - featured-projects
  - recent-posts
  - activity-logs
```

The order of `items` controls the order of sections on the home page. To show only featured projects, keep only that entry:

```yaml
items:
  - featured-projects
```

## Basic configuration

Create or edit `data/home/featured-projects.yaml`:

```yaml
id: featured-projects
type: projects
icon: code
title: Featured Projects
items:
  - title: CLI Task Manager
    role: Creator & maintainer
    description: A terminal app for tasks, time tracking, and reports.
    type: Personal
    accent: cyan
    links:
      - label: Code
        url: https://github.com/gopher/cli-task
        icon: github
```

Useful section fields:

- `id`: HTML anchor used on the rendered section.
- `type`: must be `projects` for the built-in featured project cards.
- `icon`: icon beside the section title. It must match an SVG file in `assets/icons/`.
- `title`: heading text for the section.
- `items`: list of project cards.

## Project fields

Each project card supports:

- `title`: project name.
- `role`: optional project role. It will be shown as subtitle below the project title.
- `description`: short summary. Keep it concise because cards clamp long text.
- `type`: optional category label such as `Work`, `Open Source`, or `Personal`.
- `label`: fallback category label if `type` is omitted.
- `accent`: card color. Built-in accents are `cyan`, `purple`, `emerald`, and `amber`.
- `stars`: optional star count shown with a star icon.
- `links`: optional list of links with `label`, `url`, and `icon`.

## Full example

```yaml
id: featured-projects
type: projects
icon: repository
title: Selected Work
items:
  - title: Nexus API Gateway
    role: Technical lead
    description: A high-performance API gateway with dynamic routing, rate limiting, and observability hooks.
    accent: purple
    type: Work
    stars: 2.4k
    links:
      - label: Code
        url: https://github.com/gopher/nexus-api-gateway
        icon: github
      - label: Live Demo
        url: https://demo.example.com/nexus-api-gateway
        icon: external

  - title: NetOps CLI
    role: Creator & maintainer
    description: A terminal-based toolkit for diagnosing network latency and container connectivity.
    accent: emerald
    type: Open Source
    stars: 890
    links:
      - label: Code
        url: https://github.com/gopher/netops-cli
        icon: github
      - label: Docs
        url: https://docs.example.com/netops-cli
        icon: document
```

Link icons use the same icon system as the rest of the theme. Use any SVG available in `assets/icons/`, or add a matching SVG to your site's `assets/icons/` directory.
