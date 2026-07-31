# @kikoyu/core

> An Agent SDK for building AI agent workflows with type-safe tools, memory, execution loops, handoffs, guardrails, and streaming capabilities.

## Installation

```bash
npm install @kikoyu/core zod
# or
pnpm add @kikoyu/core zod
```

## Quick Start

```typescript
import { Agent, OpenAIProvider, Runner, createTool, z } from '@kikoyu/core';

// 1. Define a tool
const weatherTool = createTool({
  name: 'get_weather',
  description: 'Get weather for a city',
  parameters: z.object({ location: z.string() }),
  execute: async ({ location }) => ({ location, temp: '22°C', condition: 'Sunny' }),
});

// 2. Build an agent
const agent = Agent.builder()
  .setName('Travel Assistant')
  .setInstructions('Help users with travel and weather questions.')
  .setModel(new OpenAIProvider({ apiKey: process.env.OPENAI_API_KEY }))
  .addTool(weatherTool)
  .build();

// 3. Run agent loop
const runner = new Runner();
const result = await runner.run(agent, 'What is the weather in Tokyo?');

console.log(result.text);
```

## Features

- **Agent & AgentBuilder**: Immutable configuration primitives with fluent chaining.
- **Runner Loop**: Multi-turn execution loop handling function calling and tool execution.
- **RunContext**: Thread typed session context (`{ userId, orgId }`) into tool execution isolated from model prompt trace.
- **Input & Output Guardrails**: Zero-latency concurrent input guardrail checks and output verification.
- **Agent Handoffs**: One-directional delegation transfer from router agents to specialist agents.
- **Session & MemoryStore**: Persistent multi-turn conversation memory.
- **Streaming Async Generator**: `Runner.stream()` yielding real-time text deltas and tool lifecycle events.

## License

MIT © Kikoyu Team
