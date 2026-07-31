[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / repairStructuredOutput

# Function: repairStructuredOutput()

> **repairStructuredOutput**\<`T`\>(`provider`, `history`, `invalidText`, `validationError`, `schema`, `maxRetries`): `Promise`\<[`StructuredOutputResult`](../interfaces/StructuredOutputResult.md)\<`T`\>\>

## Type Parameters

• **T** = `unknown`

## Parameters

### provider

[`ModelProvider`](../interfaces/ModelProvider.md)

### history

[`ModelMessage`](../interfaces/ModelMessage.md)[]

### invalidText

`string`

### validationError

`string`

### schema

`ZodTypeAny`

### maxRetries

`number` = `2`

## Returns

`Promise`\<[`StructuredOutputResult`](../interfaces/StructuredOutputResult.md)\<`T`\>\>

## Defined in

[structured-output.ts:51](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/structured-output.ts#L51)
