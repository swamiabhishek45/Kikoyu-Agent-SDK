[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodObjectDef

# Interface: ZodObjectDef\<T, UnknownKeys, Catchall\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:498

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

### T

`T` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md) = [`ZodRawShape`](../type-aliases/ZodRawShape.md)

### UnknownKeys

`UnknownKeys` *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) = [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md)

### Catchall

`Catchall` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

### catchall

> **catchall**: `Catchall`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:501

***

### description?

> `optional` **description?**: `string`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:24

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`description`](ZodTypeDef.md#description)

***

### errorMap?

> `optional` **errorMap?**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:23

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`errorMap`](ZodTypeDef.md#errormap)

***

### shape

> **shape**: () => `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:500

#### Returns

`T`

***

### typeName

> **typeName**: [`ZodObject`](../enumerations/ZodFirstPartyTypeKind.md#zodobject)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:499

***

### unknownKeys

> **unknownKeys**: `UnknownKeys`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:502
