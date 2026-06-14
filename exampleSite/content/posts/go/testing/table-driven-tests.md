---
title: "Testing Go Handlers with Table-Driven Tests"
date: 2026-06-01
subject: Go
topic: Testing
weight: 1
tags:
  - go
  - testing
summary: A compact pattern for testing HTTP handlers with standard-library tools.
---

The standard library gives you most of what you need for HTTP tests: `httptest`, `testing`, and a clear table of inputs.

## Build a Small Test Harness

```go
func TestHealthHandler(t *testing.T) {
    tests := []struct {
        name string
        path string
        want int
    }{
        {name: "ok", path: "/healthz", want: http.StatusOK},
        {name: "missing", path: "/missing", want: http.StatusNotFound},
    }

    mux := http.NewServeMux()
    mux.HandleFunc("GET /healthz", healthHandler)

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            req := httptest.NewRequest(http.MethodGet, tt.path, nil)
            rec := httptest.NewRecorder()
            mux.ServeHTTP(rec, req)

            if rec.Code != tt.want {
                t.Fatalf("status = %d, want %d", rec.Code, tt.want)
            }
        })
    }
}
```

## Keep Assertions Focused

Test status codes, response contracts, and important headers. Avoid asserting every byte unless the exact output is part of the contract.

## Add Failure Cases Early

Handlers usually fail in boring ways: invalid JSON, missing IDs, invalid methods, and dependency timeouts. Put those in the table before the happy path gets too comfortable.
