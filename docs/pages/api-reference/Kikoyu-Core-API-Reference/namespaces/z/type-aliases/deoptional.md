[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / deoptional

# Type Alias: deoptional\<T\>

> **deoptional**\<`T`\> = `T` *extends* [`ZodOptional`](../classes/ZodOptional.md)\<infer U\> ? `deoptional`\<`U`\> : `T` *extends* [`ZodNullable`](../classes/ZodNullable.md)\<infer U\> ? [`ZodNullable`](../classes/ZodNullable.md)\<`deoptional`\<`U`\>\> : `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:524

## Type Parameters

### T

`T` *extends* [`ZodTypeAny`](ZodTypeAny.md)
