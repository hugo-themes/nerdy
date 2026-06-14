---
title: "System Design Notes: API Gateway Tradeoffs"
date: 2026-03-28
subject: System Design
topic: API Gateway
weight: 1
tags:
  - architecture
  - system-design
summary: Where API gateways help, where they hurt, and what to keep out of them.
---

An API gateway centralizes cross-cutting concerns, but centralization is never free.

## What Belongs at the Edge

Authentication, coarse authorization, request shaping, rate limits, and routing are natural gateway responsibilities.

## What Does Not Belong

Business rules should stay with the owning service. A gateway full of domain logic becomes a distributed monolith with better branding.

## Failure Modes

The gateway is often on the critical path for every request. Keep it boring, observable, and horizontally scalable.
