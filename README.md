# Kikoyu Agent SDK (Monorepo)

> High-performance, type-safe AI Agent SDK for Node.js and TypeScript. Built for modular tool calling, zero-latency guardrails, agent handoffs, multi-turn session memory, and real-time event streaming.

---

## 📦 Monorepo Architecture

This repository is managed as a `pnpm` workspace with `Turborepo`:

| Package | Path | Description |
| :--- | :--- | :--- |
| **`@kikoyu/core`** | [`packages/core`](./packages/core) | Core SDK library (`Agent`, `AgentBuilder`, `Runner`, `Tool`, `RunContext`, `Guardrail`, `Handoff`, `Session`, `KikoyuProvider`) |
| **`@kikoyu/api`** | [`packages/api`](./packages/api) | Next.js App Router HTTP API exposing `/api/agents/run` & `/api/agents/stream` (SSE) with API Key Auth |
| **`@kikoyu/docs`** | [`docs`](./docs) | Vercel-inspired documentation site & auto-generated TypeDoc API Reference |
| **`@kikoyu/examples`** | [`examples`](./examples) | Standalone usage scripts covering all SDK primitives |

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js**: v18.0.0 or higher
- **pnpm**: v9.0.0 or higher (`npm i -g pnpm`)

### 2. Installation & Setup

Clone the repository and install workspace dependencies:

```bash
git clone https://github.com/swamiabhishek45/Kikoyu-Agent-SDK.git
cd Kikoyu-Agent-SDK

# Install all dependencies across workspace packages
pnpm install
```

---

## 🛠️ Environment Configuration

Create a `.env` file in the workspace root or inside `examples/` / `packages/api/`:

```env
# Kikoyu / OpenAI API Key for completion model execution
KIKOYU_API_KEY=kikoyu_sec_your_api_key_here
OPENAI_API_KEY=sk-proj-your-openai-api-key-here

# Secret API key for authenticating HTTP requests to @kikoyu/api server
API_KEY=kikoyu-secret-key
```

---

## 🏃 Workspace Commands

All workspace commands are managed via `pnpm` and `turbo`:

### **Build Monorepo**
```bash
pnpm build
```
Builds dual ESM/CJS packages, type declarations (`.d.ts`), Next.js API server, and Nextra documentation site.

### **Run Test Suite**
```bash
pnpm test
```
Executes all 22 Vitest unit and integration tests across `@kikoyu/core` and `@kikoyu/api`.

### **Typecheck & Lint**
```bash
pnpm lint
```
Runs `tsc --noEmit` type compilation verification across all 4 monorepo packages.

---

## 🧪 Running Example Scripts

Execute standalone example scripts in `examples/src/`:

```bash
# Basic single agent text completion
pnpm --filter @kikoyu/examples example:openai

# Tool execution with Zod parameters
pnpm --filter @kikoyu/examples example:tool

# Isolated session context flow (RunContext)
pnpm --filter @kikoyu/examples example:context

# Concurrent input & output safety guardrails
pnpm --filter @kikoyu/examples example:guardrail

# Multi-agent handoff delegation
pnpm --filter @kikoyu/examples example:handoff

# Persistent multi-turn session memory
pnpm --filter @kikoyu/examples example:session

# Real-time token & tool event streaming
pnpm --filter @kikoyu/examples example:stream
```

---

## 🌐 Running HTTP API Server (`packages/api`)

Launch the Next.js App Router API server locally:

```bash
pnpm --filter @kikoyu/api dev
```
- Server starts at `http://localhost:3000`.
- **Endpoints**:
  - `POST /api/agents/run` — Executes an agent run and returns JSON `RunResult`.
  - `POST /api/agents/stream` — Streams events over Server-Sent Events (`text/event-stream`).
  - `POST /api/agents/register` — Registers an agent configuration by `agentId`.

---

## 📚 Running Documentation Site (`docs`)

Launch the Nextra documentation site locally:

```bash
pnpm --filter @kikoyu/docs dev
```
- Opens at `http://localhost:3000`.
- Features an interactive Vercel-inspired landing page, quickstart guides, concept documentation, worked examples, and TypeDoc API references.

---

## 🚢 Publishing to npm & CI/CD Pipeline

The monorepo includes automated GitHub Actions CI/CD in `.github/workflows/ci.yml`.

### Manual Package Verification
```bash
# Generate npm tarball package inside packages/core
pnpm --filter @kikoyu/core pack
```

### Automated Release Workflow
When code is pushed to `main` with a release tag (e.g., `v0.1.0`), GitHub Actions automatically runs tests, builds packages, and publishes `@kikoyu/core` to npm:

```bash
git tag v0.1.0
git push origin v0.1.0
```

---

## 📄 License

[MIT](LICENSE) © Kikoyu Team
