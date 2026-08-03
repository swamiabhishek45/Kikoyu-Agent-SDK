# @kikoyu/core

> **Kikoyu Agent SDK**: High-performance, type-safe AI Agent SDK for Node.js and TypeScript.

[![npm version](https://img.shields.io/npm/v/@kikoyu/core.svg?style=flat-square)](https://www.npmjs.com/package/@kikoyu/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg?style=flat-square)](https://www.typescriptlang.org/)

**Kikoyu Agent SDK** provides a lightweight, production-grade foundation for building autonomous AI agents, tool-calling loops, multi-agent handoffs, parallel guardrails, multi-turn session memory, and real-time event streaming.

---

## Key Features

- **Fluent Builder Pattern**: Construct immutable, fully validated `Agent` instances using `Agent.builder()`.
- **Type-Safe Zod Tools**: Define custom tool functions with strict Zod schemas and automatic JSON Schema conversion.
- **Multi-Agent Handoffs**: Decompose complex agentic workflows into specialized domain agents with seamless control transfers.
- **Zero-Latency Concurrent Guardrails**: Execute prompt safety checks in parallel (`Promise.all`) with model completion requests.
- **Isolated RunContext**: Pass session-scoped metadata (`userId`, `orgId`) to tools without leaking context to LLM prompts.
- **Session Memory**: Retain multi-turn conversation turn history using `Session` and `MemoryStore`.
- **Async Generator Streaming**: Stream text deltas, tool calls, and handoff lifecycle events in real time.

---

## Tags & Keywords

`ai` • `agent` • `agent-sdk` • `kikoyu` • `openai` • `llm` • `tools` • `zod` • `handoffs` • `orchestration` • `multi-agent` • `streaming` • `typescript`

---

## Installation

Install `@kikoyu/core` and `zod` using **pnpm** or **npm**:

```bash
# pnpm
pnpm add @kikoyu/core zod

# npm
npm install @kikoyu/core zod
```

---

## Step-by-Step Quickstart Guide

### 1. Set Environment Variables

Configure your API key in a `.env` file or environment variables:

```env
KIKOYU_API_KEY=kikoyu_sec_your_api_key_here
# or
OPENAI_API_KEY=sk-proj-your-openai-api-key-here
```

---

### 2. Build & Run Your First Agent (`index.ts`)

```typescript
import dotenv from 'dotenv';
dotenv.config();

import { Agent, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!;

  // 1. Build immutable Agent using fluent Agent.builder()
  const agent = Agent.builder()
    .setName('Assistant')
    .setInstructions('You are a helpful AI assistant that responds in concise sentences.')
    .setApiKey(apiKey)
    .build();

  // 2. Instantiate execution engine
  const runner = new Runner();

  console.log('Running agent...');
  const result = await runner.run(agent, 'Hello! Introduce yourself in one sentence.');

  console.log('Agent Response:');
  console.log(result.text);
}

main().catch(console.error);
```

---

### 3. Adding Type-Safe Zod Tools

```typescript
import { Agent, createTool, Runner, z } from '@kikoyu/core';

// 1. Define custom tool with Zod schema parameter validation
const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Lookup current weather conditions for a city.',
  parameters: z.object({
    location: z.string().describe('City name, e.g. Tokyo, Paris'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius').optional(),
  }),
  execute: async ({ location, unit }) => {
    return {
      location,
      temperature: unit === 'fahrenheit' ? '72°F' : '22°C',
      condition: 'Sunny',
    };
  },
});

// 2. Build agent with registered tools
const agent = Agent.builder()
  .setName('Weather Concierge')
  .setInstructions('Always check weather conditions using get_weather tool before answering.')
  .setApiKey(process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!)
  .addTool(getWeatherTool)
  .build();

// 3. Execute agent loop
const runner = new Runner();
const result = await runner.run(agent, 'What is the current weather in Tokyo?');
console.log(result.text);
```

---

### 4. Defining Multi-Agent Handoffs

Decompose complex tasks into specialized domain agents and transfer control automatically:

```typescript
import { Agent, createHandoff, Runner } from '@kikoyu/core';

const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!;

// 1. Define Domain Specialist Agent
const codeSpecialist = Agent.builder()
  .setName('Code Specialist')
  .setInstructions('You are an expert TypeScript developer. Provide clean code solutions.')
  .setApiKey(apiKey)
  .build();

// 2. Define Triage Router Agent with Handoff
const triageRouter = Agent.builder()
  .setName('Triage Router')
  .setInstructions('Analyze input and hand off coding questions to Code Specialist.')
  .setApiKey(apiKey)
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

---

### 5. Multi-Turn Session Memory

Persist conversation turn history across multiple `Runner.run()` invocations using `Session` and `InMemoryStore`:

```typescript
import { Agent, InMemoryStore, Runner, Session } from '@kikoyu/core';

const memoryStore = new InMemoryStore();
const session = new Session({ sessionId: 'user_session_101', store: memoryStore });

const agent = Agent.builder()
  .setName('Memory Assistant')
  .setInstructions('Remember user details across turns.')
  .setApiKey(process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!)
  .build();

const runner = new Runner();

// Turn 1
await runner.run(agent, 'My favorite color is cerulean blue.', { session });

// Turn 2 (Remembers Turn 1)
const result = await runner.run(agent, 'What is my favorite color?', { session });
console.log(result.text); // "Your favorite color is cerulean blue."
```

---

### 6. Real-Time Event Streaming

`runner.stream()` yields real-time lifecycle events (tokens, tool execution, handoffs):

```typescript
import { Agent, Runner } from '@kikoyu/core';

const agent = Agent.builder()
  .setName('Streaming Assistant')
  .setInstructions('Respond in streaming tokens.')
  .setApiKey(process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY!)
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

## Documentation & Examples

For full API documentation, primitives, and guides, visit:
- **Documentation**: [https://github.com/swamiabhishek45/Kikoyu-Agent-SDK](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK)

---

## License

[MIT](LICENSE) © Kikoyu Team
