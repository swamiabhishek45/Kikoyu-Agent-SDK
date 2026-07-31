[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / OutputTypeOfTuple

# Type Alias: OutputTypeOfTuple\<T\>

> **OutputTypeOfTuple**\<`T`\> = [`AssertArray`](AssertArray.md)\<`{ [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never }`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:640

## Type Parameters

### T

`T` *extends* [`ZodTupleItems`](ZodTupleItems.md) \| \[\]
