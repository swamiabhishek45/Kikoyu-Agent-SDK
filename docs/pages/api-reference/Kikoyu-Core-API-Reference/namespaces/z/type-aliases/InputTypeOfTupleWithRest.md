[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / InputTypeOfTupleWithRest

# Type Alias: InputTypeOfTupleWithRest\<T, Rest\>

> **InputTypeOfTupleWithRest**\<`T`, `Rest`\> = `Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) ? \[`...InputTypeOfTuple<T>`, `...Rest["_input"][]`\] : [`InputTypeOfTuple`](InputTypeOfTuple.md)\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:647

## Type Parameters

### T

`T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| \[\]

### Rest

`Rest` *extends* [`ZodTypeAny`](ZodTypeAny.md) \| `null` = `null`
