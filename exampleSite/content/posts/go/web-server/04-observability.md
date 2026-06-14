---
title: "Logs, Metrics, and Traces"
date: 2026-05-23
subject: Go
topic: Web Server
series: Building Production Go Web Servers
weight: 4
tags:
  - go
  - observability
  - web
summary: Add just enough observability to debug production without drowning in signals.
---

Observability starts with asking what you need to know during an incident.

## Structured Logs

Log fields, not prose. A request log should include method, path, status, duration, and request ID.

```go
slog.Info("request completed",
    "method", r.Method,
    "path", r.URL.Path,
    "status", status,
    "duration_ms", elapsed.Milliseconds(),
)
```

## Metrics

Track request rate, latency, error rate, and dependency health. These four signals answer most first-response questions.

## Traces

Distributed tracing is most valuable when a request crosses service boundaries. Keep span names stable and tags low-cardinality.
