[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunResult

# Interface: RunResult

Defined in: packages/core/src/types.ts:96

## Properties

### agent

> **agent**: [`Agent`](../classes/Agent.md)

Defined in: packages/core/src/types.ts:104

Reference to the Agent instance that was executed.

***

### messages

> **messages**: [`ModelMessage`](ModelMessage.md)[]

Defined in: packages/core/src/types.ts:101

The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run.

***

### text

> **text**: `string`

Defined in: packages/core/src/types.ts:98

The final text response produced by the agent.
