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

<<<<<<< HEAD
[agent.ts:54](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L54)
=======
[agent.ts:54](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L54)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Properties

### guardrails

> `readonly` **guardrails**: [`Guardrail`](../interfaces/Guardrail.md)\<`any`\>[]

List of input and output guardrails

#### Defined in

<<<<<<< HEAD
[agent.ts:39](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L39)
=======
[agent.ts:39](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L39)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### handoffs

> `readonly` **handoffs**: [`Handoff`](../interfaces/Handoff.md)[]

List of registered handoffs to other agents

#### Defined in

<<<<<<< HEAD
[agent.ts:42](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L42)
=======
[agent.ts:42](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L42)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### instructions

> `readonly` **instructions**: `string`

The system instructions describing the agent's persona and instructions

#### Defined in

<<<<<<< HEAD
[agent.ts:27](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L27)
=======
[agent.ts:27](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L27)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### maxHandoffs?

> `readonly` `optional` **maxHandoffs**: `number`

Maximum allowed handoffs

#### Defined in

<<<<<<< HEAD
[agent.ts:49](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L49)
=======
[agent.ts:49](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L49)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### maxRetries?

> `readonly` `optional` **maxRetries**: `number`

Maximum allowed model retries

#### Defined in

<<<<<<< HEAD
[agent.ts:52](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L52)
=======
[agent.ts:52](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L52)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### model

> `readonly` **model**: [`ModelProvider`](../interfaces/ModelProvider.md)

The model provider driving the agent

#### Defined in

<<<<<<< HEAD
[agent.ts:30](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L30)
=======
[agent.ts:30](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L30)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### name

> `readonly` **name**: `string`

The unique display name of the agent

#### Defined in

<<<<<<< HEAD
[agent.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L24)
=======
[agent.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L24)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### responseSchema?

> `readonly` `optional` **responseSchema**: `any`

Optional Zod response schema for structured output

#### Defined in

<<<<<<< HEAD
[agent.ts:46](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L46)
=======
[agent.ts:46](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L46)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### toolRegistry

> `readonly` **toolRegistry**: [`ToolRegistry`](ToolRegistry.md)

ToolRegistry maintaining all tools and handoff tools

#### Defined in

<<<<<<< HEAD
[agent.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L36)
=======
[agent.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L36)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### tools

> `readonly` **tools**: [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

List of standard tools attached to the agent

#### Defined in

<<<<<<< HEAD
[agent.ts:33](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L33)
=======
[agent.ts:33](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L33)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Methods

### builder()

> `static` **builder**(): [`AgentBuilder`](AgentBuilder.md)

Creates a new fluent [AgentBuilder](AgentBuilder.md) instance.

#### Returns

[`AgentBuilder`](AgentBuilder.md)

A fresh AgentBuilder for method chaining.

#### Defined in

<<<<<<< HEAD
[agent.ts:92](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/agent.ts#L92)
=======
[agent.ts:92](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/agent.ts#L92)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
