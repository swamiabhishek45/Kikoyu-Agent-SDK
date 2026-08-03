[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunResult

# Interface: RunResult\<TStructured\>

## Type Parameters

• **TStructured** = `unknown`

## Properties

### agent

> **agent**: [`Agent`](../classes/Agent.md)

Reference to the Agent instance that was executed.

#### Defined in

[types.ts:133](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L133)

***

### messages

> **messages**: [`ModelMessage`](ModelMessage.md)[]

The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run.

#### Defined in

[types.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L130)

***

### structuredOutput?

> `optional` **structuredOutput**: `TStructured`

Optional structured output parsed according to responseSchema

#### Defined in

[types.ts:136](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L136)

***

### text

> **text**: `string`

The final text response produced by the agent.

#### Defined in

[types.ts:127](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L127)

***

### trace?

> `optional` **trace**: [`RunTrace`](RunTrace.md)

Detailed execution trace for this run

#### Defined in

[types.ts:139](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L139)
