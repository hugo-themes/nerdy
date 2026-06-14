---
title: "Middleware Without Magic"
date: 2026-05-21
subject: Go
topic: Web Server
series: Building Production Go Web Servers
weight: 2
tags:
  - go
  - middleware
  - web
summary: Compose logging, request IDs, and recovery without hiding control flow.
---

Middleware is just a function that accepts and returns an `http.Handler`.

## The Shape

```go
type Middleware func(http.Handler) http.Handler

func Chain(h http.Handler, m ...Middleware) http.Handler {
    for i := len(m) - 1; i >= 0; i-- {
        h = m[i](h)
    }
    return h
}
```

This keeps dependencies explicit while preserving standard-library compatibility.

## Request IDs

Generate an ID at the edge, store it in context, and write it to every log line produced during the request.

## Recovery

Panic recovery should be the last safety net, not an error handling strategy. Log the panic, return a generic `500`, and keep sensitive details out of the response.
