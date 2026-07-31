[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / InputTypeOfTuple

# Type Alias: InputTypeOfTuple\<T\>

> **InputTypeOfTuple**\<`T`\> = [`AssertArray`](AssertArray.md)\<`{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never }`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:644

## Type Parameters

### T

`T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| \[\]
