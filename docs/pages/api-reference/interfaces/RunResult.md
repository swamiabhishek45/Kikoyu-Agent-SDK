[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunResult

# Interface: RunResult

## Properties

### agent

> **agent**: [`Agent`](../classes/Agent.md)

Reference to the Agent instance that was executed.

#### Defined in

[types.ts:104](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/types.ts#L104)

***

### messages

> **messages**: [`ModelMessage`](ModelMessage.md)[]

The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run.

#### Defined in

[types.ts:101](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/types.ts#L101)

***

### text

> **text**: `string`

The final text response produced by the agent.

#### Defined in

[types.ts:98](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/types.ts#L98)
