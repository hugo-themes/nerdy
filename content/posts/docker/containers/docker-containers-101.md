---
title: "Docker Containers 101: Images, Layers, and Runtime Boundaries"
date: 2026-04-18
subject: Docker
topic: Containers
tags:
  - docker
  - containers
summary: A quick mental model for how images become running containers.
---

Docker is easier to reason about when you separate build-time artifacts from runtime processes.

## Images Are Recipes

An image is an immutable filesystem plus metadata. Each Dockerfile instruction usually creates a layer.

## Containers Are Processes

A container is a process with isolated namespaces, resource controls, and a mounted image filesystem.

## Keep Images Small

Use multi-stage builds, copy only runtime assets, and avoid installing debugging tools in production images unless you deliberately need them.
