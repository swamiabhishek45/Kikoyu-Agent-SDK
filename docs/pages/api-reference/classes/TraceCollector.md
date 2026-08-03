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

[tracing.ts:14](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/tracing.ts#L14)

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

[tracing.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/tracing.ts#L24)

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

[tracing.ts:51](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/tracing.ts#L51)

***

### getRunId()

> **getRunId**(): `string`

#### Returns

`string`

#### Defined in

[tracing.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/tracing.ts#L20)

***

### recordTokenUsage()

> **recordTokenUsage**(`usage`?): `void`

#### Parameters

##### usage?

[`TokenUsage`](../interfaces/TokenUsage.md)

#### Returns

`void`

#### Defined in

[tracing.ts:40](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/tracing.ts#L40)
