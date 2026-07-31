[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodCatchDef

# Interface: ZodCatchDef\<T\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:856

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

### catchValue

> **catchValue**: (`ctx`) => `T`\[`"_input"`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:858

#### Parameters

##### ctx

###### error

[`ZodError`](../classes/ZodError.md)

###### input

`unknown`

#### Returns

`T`\[`"_input"`\]

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

### innerType

> **innerType**: `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:857

***

### typeName

> **typeName**: [`ZodCatch`](../enumerations/ZodFirstPartyTypeKind.md#zodcatch)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:862
