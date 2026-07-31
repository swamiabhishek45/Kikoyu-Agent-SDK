[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / parseAndValidateStructuredOutput

# Function: parseAndValidateStructuredOutput()

> **parseAndValidateStructuredOutput**\<`T`\>(`text`, `schema`): `Promise`\<\{`data`: `T`;`success`: `true`; \} \| \{`error`: `string`;`success`: `false`; \}\>

## Type Parameters

• **T** = `unknown`

## Parameters

### text

`string`

### schema

`ZodTypeAny`

## Returns

`Promise`\<\{`data`: `T`;`success`: `true`; \} \| \{`error`: `string`;`success`: `false`; \}\>

## Defined in

[structured-output.ts:17](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/structured-output.ts#L17)
