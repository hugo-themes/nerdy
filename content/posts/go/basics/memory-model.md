---
title: "Go Basics: Pointers, Values, and Escape Analysis"
date: 2026-06-09
subject: Go
topic: Basics
tags:
  - go
  - basics
  - performance
summary: A practical primer on how Go moves values around and when allocations escape to the heap.
---

Go feels small on purpose, but the rules around values, pointers, and allocation shape almost every production service you write.

## Values First

Most Go APIs are easiest to reason about when values are copied deliberately. A copied struct gives the caller a stable snapshot and avoids hidden mutation across goroutines.

```go
type Config struct {
    Timeout time.Duration
    Retries int
}

func NewClient(cfg Config) *Client {
    return &Client{cfg: cfg}
}
```

The compiler is good at making small copies cheap, so prefer clarity first.

## When Pointers Help

Pointers are useful for shared ownership, optional mutation, or avoiding large copies. They are not automatically faster.

Use a pointer when the function needs to mutate the value, when the zero value is meaningful, or when the object is too large to copy repeatedly.

## Escape Analysis

Escape analysis decides whether a value can live on the stack or must move to the heap.

```bash
go build -gcflags='-m=2' ./...
```

The output is noisy, but it is a great way to confirm suspicious allocations before optimizing.

## Rule of Thumb

Start with value semantics, measure when performance matters, and let API ownership guide the pointer decision.
