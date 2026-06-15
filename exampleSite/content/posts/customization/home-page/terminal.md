---
title: Terminal
date: 2026-06-11
subject: Customization
topic: Home Page
weight: 2
tags:
  - terminal
  - data
summary: Configure the interactive terminal prompt, quick commands, and available command list.
---

The home page terminal lets visitors explore your profile by typing commands. It also shows quick command buttons for the commands you mark as quick.

The terminal is configured with data files under `data/terminal/`.

## Terminal config

Use `data/terminal/config.yaml` for the prompt, window title, startup command, and built-in command descriptions.

```yaml
user: guest
host: portfolio
directory: "~"
window_title: "guest@portfolio:~"
auto_command: about
builtins:
  - name: clear
    description: Clear terminal output
  - name: whoami
    description: Print current user
  - name: date
    description: Display current system date
  - name: echo
    description: Print text back to the terminal
  - name: sudo
    description: Try elevated privileges
```

- `user`, `host`, and `directory` build the terminal prompt.
- `window_title` appears in the terminal title bar.
- `auto_command` runs automatically after the terminal starts. If it is omitted, Nerdy runs `help`.
- `builtins` controls the descriptions shown by `help` for built-in commands.

## Available commands

Nerdy includes these built-in commands without extra data files:

- `help`: list available commands.
- `clear`: clear terminal output.
- `whoami`: print the configured user.
- `date`: print the current date.
- `echo`: print text back to the terminal.
- `sudo`: show a playful permission message.

The example site also includes these data-driven commands:

- `about`
- `skills`
- `experience`
- `projects`
- `contact`

Each data-driven command has a file in `data/terminal/commands/`.

## Shared command fields

Most command files start with the same fields:

```yaml
name: about
label: About
description: Information about me
quick: true
weight: 10
```

- `name`: command typed in the terminal.
- `label`: label shown in quick buttons and help output.
- `description`: short help text.
- `quick`: show the command in the quick command bar.
- `weight`: order in the quick command bar.

Read the command guides in this series for the data fields used by each built-in command.
