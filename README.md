# Kikoyu Agent SDK

> High-performance, type-safe AI Agent SDK for Node.js and TypeScript. Built for modular tool calling, zero-latency guardrails, autonomous agent handoffs, multi-turn session memory, and real-time event streaming.

[![npm version](https://img.shields.io/npm/v/@kikoyu/core.svg?style=flat-square)](https://www.npmjs.com/package/@kikoyu/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg?style=flat-square)](https://www.typescriptlang.org/)

---

## Tags & Keywords

`ai` • `agent` • `agent-sdk` • `kikoyu` • `openai` • `llm` • `tools` • `zod` • `handoffs` • `orchestration` • `multi-agent` • `streaming` • `typescript`

---

## Quickstart (`@kikoyu/core`)

### 1. Installation

Install `@kikoyu/core` and `zod` using **pnpm** or **npm**:

```bash
# pnpm
pnpm add @kikoyu/core zod

# npm
npm install @kikoyu/core zod
```

### 2. Environment Configuration

Create a `.env` file containing your API key:

```env
KIKOYU_API_KEY=kikoyu_sec_your_api_key_here
# or
OPENAI_API_KEY=sk-proj-your-openai-api-key-here
```

### 3. Build & Run Your First Agent (`index.ts`)

```typescript
import dotenv from 'dotenv';
dotenv.config();

import { Agent, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!;

  // 1. Build immutable Agent using fluent Agent.builder()
  const agent = Agent.builder()
    .setApiKey(apiKey)
    .setName('Assistant')
    .setInstructions('You are a helpful AI assistant that responds in concise sentences.')
    .build();

  // 2. Instantiate execution engine
  const runner = new Runner();

  console.log('Running agent...');
  const result = await runner.run(agent, 'Hello! Introduce yourself in one sentence.');

  console.log('Agent Output:', result.text);
}

main().catch(console.error);
```

---

## Key Features & Examples

### 1. Type-Safe Zod Tools

Define custom backend tools with Zod schema validation and automatic JSON schema resolution:

```typescript
import { Agent, createTool, Runner, z } from '@kikoyu/core';

// Define custom tool
const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Lookup current weather conditions for a city.',
  parameters: z.object({
    location: z.string().describe('City name, e.g. Tokyo, Paris'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius').optional(),
  }),
  execute: async ({ location, unit }) => {
    return { location, temperature: unit === 'fahrenheit' ? '72°F' : '22°C', condition: 'Sunny' };
  },
});

// Build agent with registered tools
const agent = Agent.builder()
  .setApiKey(process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!)
  .setName('Weather Concierge')
  .setInstructions('Always check weather conditions using get_weather tool before answering.')
  .addTool(getWeatherTool)
  .build();

const runner = new Runner();
const result = await runner.run(agent, 'What is the current weather in Tokyo?');
console.log(result.text);
```

### 2. Autonomous Multi-Agent Handoffs

Decompose complex tasks into specialized domain agents and transfer control automatically:

```typescript
import { Agent, createHandoff, Runner } from '@kikoyu/core';

const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!;

// 1. Define Domain Specialist Agent
const codeSpecialist = Agent.builder()
  .setApiKey(apiKey)
  .setName('Code Specialist')
  .setInstructions('You are an expert TypeScript developer. Provide clean code solutions.')
  .build();

// 2. Define Triage Router Agent with Handoff
const triageRouter = Agent.builder()
  .setApiKey(apiKey)
  .setName('Triage Router')
  .setInstructions('Analyze input and hand off coding questions to Code Specialist.')
  .withHandoffs(
    createHandoff(codeSpecialist, {
      description: 'Hand off technical programming and TypeScript questions.',
    })
  )
  .build();

// 3. Execute multi-agent orchestration
const runner = new Runner();
const result = await runner.run(triageRouter, 'Write a binary search function in TypeScript.');

console.log('Active Final Agent:', result.agent.name); // Code Specialist
console.log('Result:', result.text);
```

### 3. Real-Time Event Streaming

`runner.stream()` yields real-time lifecycle events (tokens, tool execution, handoffs):

```typescript
import { Agent, Runner } from '@kikoyu/core';

const agent = Agent.builder()
  .setApiKey(process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!)
  .setName('Streaming Assistant')
  .setInstructions('Respond in streaming tokens.')
  .build();

const runner = new Runner();

for await (const event of runner.stream(agent, 'Write a short poem about coding')) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta);
  } else if (event.type === 'tool_call_started') {
    console.log(`Tool starting: ${event.toolCall.name}`);
  }
}
```

---

## Monorepo Architecture

This repository is managed as a `pnpm` workspace with `Turborepo`:

| Package | Path | Description |
| :--- | :--- | :--- |
| **`@kikoyu/core`** | [`packages/core`](./packages/core) | Core SDK library (`Agent`, `Runner`, `createTool`, `createHandoff`, `Session`, `Guardrail`) |
| **`@kikoyu/api`** | [`packages/api`](./packages/api) | Next.js App Router HTTP API exposing `/api/agents/run` & `/api/agents/stream` |
| **`@kikoyu/docs`** | [`docs`](./docs) | Vercel-inspired documentation site & auto-generated TypeDoc API Reference |
| **`@kikoyu/examples`** | [`examples`](./examples) | Standalone usage scripts covering all SDK primitives |

---

## Workspace Commands

All workspace commands are managed via `pnpm` and `turbo`:

### Build Monorepo
```bash
pnpm build
```

### Run Test Suite
```bash
pnpm test
```

### Typecheck & Lint
```bash
pnpm lint
```

### Run Documentation Site (`docs`)
```bash
pnpm --filter @kikoyu/docs dev
```
Starts local documentation server at `http://localhost:3000`.

---

## License

[MIT](LICENSE) © Kikoyu Team
