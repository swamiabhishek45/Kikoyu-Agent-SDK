[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / GuardrailFunction

# Type Alias: GuardrailFunction\<TContext\>

> **GuardrailFunction**\<`TContext`\> = (`target`, `context`) => `Promise`\<[`GuardrailResult`](../interfaces/GuardrailResult.md)\> \| [`GuardrailResult`](../interfaces/GuardrailResult.md)

Defined in: packages/core/src/guardrail.ts:12

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
