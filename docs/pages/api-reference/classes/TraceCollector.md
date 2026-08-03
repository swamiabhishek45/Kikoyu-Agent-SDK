[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / TraceCollector

# Class: TraceCollector

## Constructors

### new TraceCollector()

> **new TraceCollector**(`agentName`, `runId`?): [`TraceCollector`](TraceCollector.md)

#### Parameters

##### agentName

`string`

##### runId?

`string`

#### Returns

[`TraceCollector`](TraceCollector.md)

#### Defined in

<<<<<<< HEAD
[tracing.ts:14](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tracing.ts#L14)
=======
[tracing.ts:14](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/tracing.ts#L14)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Methods

### addStep()

> **addStep**(`type`, `details`, `durationMs`): [`StepTrace`](../interfaces/StepTrace.md)

#### Parameters

##### type

`"model_call"` | `"tool_call"` | `"guardrail"` | `"handoff"` | `"retry"` | `"structured_output_repair"`

##### details

`Record`\<`string`, `unknown`\>

##### durationMs

`number`

#### Returns

[`StepTrace`](../interfaces/StepTrace.md)

#### Defined in

<<<<<<< HEAD
[tracing.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tracing.ts#L24)
=======
[tracing.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/tracing.ts#L24)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### exportTrace()

> **exportTrace**(`finalStatus`, `error`?): [`RunTrace`](../interfaces/RunTrace.md)

#### Parameters

##### finalStatus

`"completed"` | `"failed"` | `"max_iterations_reached"` | `"guardrail_tripped"`

##### error?

`string`

#### Returns

[`RunTrace`](../interfaces/RunTrace.md)

#### Defined in

<<<<<<< HEAD
[tracing.ts:51](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tracing.ts#L51)
=======
[tracing.ts:51](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/tracing.ts#L51)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### getRunId()

> **getRunId**(): `string`

#### Returns

`string`

#### Defined in

<<<<<<< HEAD
[tracing.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tracing.ts#L20)
=======
[tracing.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/tracing.ts#L20)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### recordTokenUsage()

> **recordTokenUsage**(`usage`?): `void`

#### Parameters

##### usage?

[`TokenUsage`](../interfaces/TokenUsage.md)

#### Returns

`void`

#### Defined in

<<<<<<< HEAD
[tracing.ts:40](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tracing.ts#L40)
=======
[tracing.ts:40](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/tracing.ts#L40)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
