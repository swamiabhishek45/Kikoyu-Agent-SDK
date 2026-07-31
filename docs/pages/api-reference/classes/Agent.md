[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Agent

# Class: Agent

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

### new Agent()

> **new Agent**(`config`): [`Agent`](Agent.md)

#### Parameters

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

#### Returns

[`Agent`](Agent.md)

#### Defined in

[agent.ts:54](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L54)

## Properties

### guardrails

> `readonly` **guardrails**: [`Guardrail`](../interfaces/Guardrail.md)\<`any`\>[]

List of input and output guardrails

#### Defined in

[agent.ts:39](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L39)

***

### handoffs

> `readonly` **handoffs**: [`Handoff`](../interfaces/Handoff.md)[]

List of registered handoffs to other agents

#### Defined in

[agent.ts:42](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L42)

***

### instructions

> `readonly` **instructions**: `string`

The system instructions describing the agent's persona and instructions

#### Defined in

[agent.ts:27](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L27)

***

### maxHandoffs?

> `readonly` `optional` **maxHandoffs**: `number`

Maximum allowed handoffs

#### Defined in

[agent.ts:49](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L49)

***

### maxRetries?

> `readonly` `optional` **maxRetries**: `number`

Maximum allowed model retries

#### Defined in

[agent.ts:52](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L52)

***

### model

> `readonly` **model**: [`ModelProvider`](../interfaces/ModelProvider.md)

The model provider driving the agent

#### Defined in

[agent.ts:30](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L30)

***

### name

> `readonly` **name**: `string`

The unique display name of the agent

#### Defined in

[agent.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L24)

***

### responseSchema?

> `readonly` `optional` **responseSchema**: `any`

Optional Zod response schema for structured output

#### Defined in

[agent.ts:46](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L46)

***

### toolRegistry

> `readonly` **toolRegistry**: [`ToolRegistry`](ToolRegistry.md)

ToolRegistry maintaining all tools and handoff tools

#### Defined in

[agent.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L36)

***

### tools

> `readonly` **tools**: [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

List of standard tools attached to the agent

#### Defined in

[agent.ts:33](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L33)

## Methods

### builder()

> `static` **builder**(): [`AgentBuilder`](AgentBuilder.md)

Creates a new fluent [AgentBuilder](AgentBuilder.md) instance.

#### Returns

[`AgentBuilder`](AgentBuilder.md)

A fresh AgentBuilder for method chaining.

#### Defined in

[agent.ts:92](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/agent.ts#L92)
