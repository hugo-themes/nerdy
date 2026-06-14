---
title: "Timeouts and Graceful Shutdown"
date: 2026-05-22
subject: Go
topic: Web Server
series: Building Production Go Web Servers
weight: 3
tags:
  - go
  - reliability
  - web
summary: Make server lifetime explicit with timeouts, cancellation, and shutdown hooks.
---

Production servers need boundaries. Without timeouts, slow clients and stuck dependencies can consume resources indefinitely.

## Configure the Server

```go
srv := &http.Server{
    Addr:              ":8080",
    Handler:           mux,
    ReadHeaderTimeout: 5 * time.Second,
    ReadTimeout:       10 * time.Second,
    WriteTimeout:      30 * time.Second,
    IdleTimeout:       60 * time.Second,
}
```

## Propagate Cancellation

Pass `r.Context()` into downstream calls so work stops when the client leaves or the server shuts down.

## Shutdown Flow

Listen for `SIGTERM`, stop accepting new traffic, allow in-flight requests to finish, then close background workers.
