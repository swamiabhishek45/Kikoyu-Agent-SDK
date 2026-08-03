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

<<<<<<< HEAD
[types.ts:133](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L133)
=======
[types.ts:133](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L133)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### messages

> **messages**: [`ModelMessage`](ModelMessage.md)[]

The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run.

#### Defined in

<<<<<<< HEAD
[types.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L130)
=======
[types.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L130)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### structuredOutput?

> `optional` **structuredOutput**: `TStructured`

Optional structured output parsed according to responseSchema

#### Defined in

<<<<<<< HEAD
[types.ts:136](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L136)
=======
[types.ts:136](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L136)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### text

> **text**: `string`

The final text response produced by the agent.

#### Defined in

<<<<<<< HEAD
[types.ts:127](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L127)
=======
[types.ts:127](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L127)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### trace?

> `optional` **trace**: [`RunTrace`](RunTrace.md)

Detailed execution trace for this run

#### Defined in

<<<<<<< HEAD
[types.ts:139](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L139)
=======
[types.ts:139](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L139)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
