[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / GuardrailFunction

# Type Alias: GuardrailFunction\<TContext\>

> **GuardrailFunction**\<`TContext`\> = (`target`, `context`) => `Promise`\<[`GuardrailResult`](../interfaces/GuardrailResult.md)\> \| [`GuardrailResult`](../interfaces/GuardrailResult.md)

Defined in: [packages/core/src/guardrail.ts:12](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/guardrail.ts#L12)

## Type Parameters

### TContext

`TContext` = `any`

## Parameters

### target

`string`

### context

[`RunContext`](../classes/RunContext.md)\<`TContext`\>

## Returns

`Promise`\<[`GuardrailResult`](../interfaces/GuardrailResult.md)\> \| [`GuardrailResult`](../interfaces/GuardrailResult.md)
