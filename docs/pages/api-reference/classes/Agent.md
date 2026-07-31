[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Agent

# Class: Agent

Defined in: packages/core/src/agent.ts:22

Immutable configuration holder for an AI Agent.

All execution logic is driven by [Runner](Runner.md), while the Agent holds instructions,
attached tools, guardrails, and handoffs.

## Example

```typescript
const agent = new Agent({
  name: 'Assistant',
  instructions: 'You are a helpful AI assistant.',
  model: new OpenAIProvider(),
});
```

## Constructors

### Constructor

> **new Agent**(`config`): `Agent`

Defined in: packages/core/src/agent.ts:44

#### Parameters

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

#### Returns

`Agent`

## Properties

### guardrails

> `readonly` **guardrails**: [`Guardrail`](../interfaces/Guardrail.md)\<`any`\>[]

Defined in: packages/core/src/agent.ts:39

List of input and output guardrails

***

### handoffs

> `readonly` **handoffs**: [`Handoff`](../interfaces/Handoff.md)[]

Defined in: packages/core/src/agent.ts:42

List of registered handoffs to other agents

***

### instructions

> `readonly` **instructions**: `string`

Defined in: packages/core/src/agent.ts:27

The system instructions describing the agent's persona and instructions

***

### model

> `readonly` **model**: [`ModelProvider`](../interfaces/ModelProvider.md)

Defined in: packages/core/src/agent.ts:30

The model provider driving the agent

***

### name

> `readonly` **name**: `string`

Defined in: packages/core/src/agent.ts:24

The unique display name of the agent

***

### toolRegistry

> `readonly` **toolRegistry**: [`ToolRegistry`](ToolRegistry.md)

Defined in: packages/core/src/agent.ts:36

ToolRegistry maintaining all tools and handoff tools

***

### tools

> `readonly` **tools**: [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

Defined in: packages/core/src/agent.ts:33

List of standard tools attached to the agent

## Methods

### builder()

> `static` **builder**(): [`AgentBuilder`](AgentBuilder.md)

Defined in: packages/core/src/agent.ts:78

Creates a new fluent [AgentBuilder](AgentBuilder.md) instance.

#### Returns

[`AgentBuilder`](AgentBuilder.md)

A fresh AgentBuilder for method chaining.
