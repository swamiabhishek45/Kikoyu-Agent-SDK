[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunResult

# Interface: RunResult

Defined in: [packages/core/src/types.ts:96](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L96)

## Properties

### agent

> **agent**: [`Agent`](../classes/Agent.md)

Defined in: [packages/core/src/types.ts:104](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L104)

Reference to the Agent instance that was executed.

***

### messages

> **messages**: [`ModelMessage`](ModelMessage.md)[]

Defined in: [packages/core/src/types.ts:101](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L101)

The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run.

***

### text

> **text**: `string`

Defined in: [packages/core/src/types.ts:98](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L98)

The final text response produced by the agent.
