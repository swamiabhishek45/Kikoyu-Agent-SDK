# @kikoyu/api

Next.js App Router HTTP API for running and streaming Kikoyu agents.

## Authentication

Set `API_KEY` in the environment. In non-production, requests may use the development fallback `kikoyu-secret-key` when `API_KEY` is unset. **In production, `API_KEY` is required** or all requests return `401`.

Pass the key via `x-api-key` or `Authorization: Bearer <key>`.

## Agent registry

`POST /api/agents/register` stores agents in an **in-memory registry** scoped to the running Node process. Registrations are **lost on server restart** and are not shared across multiple instances. Use inline `agent` payloads or external persistence for production deployments.

## Session memory

When you pass `sessionId` on run/stream requests, conversation history is stored in a **shared in-memory `MemoryStore`** for that API process. History persists across requests with the same `sessionId` until the process restarts. For durable or multi-instance sessions, integrate `RedisStore` or `FileStore` from `@kikoyu/core` in a custom deployment.
