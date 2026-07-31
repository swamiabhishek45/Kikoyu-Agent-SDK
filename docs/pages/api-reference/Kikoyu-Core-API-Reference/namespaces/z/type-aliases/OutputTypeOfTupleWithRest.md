[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / OutputTypeOfTupleWithRest

# Type Alias: OutputTypeOfTupleWithRest\<T, Rest\>

> **OutputTypeOfTupleWithRest**\<`T`, `Rest`\> = `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) ? \[`...OutputTypeOfTuple<T>`, `...Rest["_output"][]`\] : [`OutputTypeOfTuple`](OutputTypeOfTuple.md)\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:643

## Type Parameters

### T

`T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| \[\]

### Rest

`Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` = `null`
