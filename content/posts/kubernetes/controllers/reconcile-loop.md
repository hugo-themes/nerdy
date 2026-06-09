---
title: "Kubernetes Controllers: The Reconcile Loop in Plain English"
date: 2026-04-10
subject: Kubernetes
topic: Controllers
tags:
  - kubernetes
  - controllers
summary: Controllers continuously compare desired state with actual state and close the gap.
---

Kubernetes is built around reconciliation: describe what you want, and controllers work to make reality match.

## Desired State

Objects like Deployments and Services are declarations. They say what should exist, not exactly which imperative steps to run.

## Actual State

The cluster constantly changes: pods crash, nodes disappear, and rollouts begin. Controllers watch these events and respond.

## Reconcile, Don't Script

A good controller can run the same reconcile function repeatedly and converge safely without depending on a perfect event history.
