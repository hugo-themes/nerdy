---
title: Experience Command
date: 2026-06-11
subject: Customization
topic: Home Page
series: Commands
weight: 3
tags:
  - terminal
  - experience
summary: Use the experience command to list roles, companies, dates, and highlights.
---

Use `experience` to show a short work history.

Edit `data/terminal/commands/experience.yaml`:

```yaml
name: experience
label: Experience
description: Professional work history
quick: true
weight: 30
roles:
  - title: Senior Software Engineer
    company: Tech Innovators Inc.
    period: Jan 2022 - Present
    highlights:
      - Led a migration from a monolith to microservices.
      - Mentored junior developers and improved CI/CD practices.
  - title: Full-Stack Developer
    company: Creative Solutions Agency
    period: Mar 2019 - Dec 2021
    highlights:
      - Built custom React applications for client projects.
      - Designed PostgreSQL databases for high-traffic systems.
```

Each role supports:

- `title`: role name.
- `company`: company or organization.
- `period`: date range.
- `highlights`: short bullet points.

Two or three highlights per role is usually enough.
