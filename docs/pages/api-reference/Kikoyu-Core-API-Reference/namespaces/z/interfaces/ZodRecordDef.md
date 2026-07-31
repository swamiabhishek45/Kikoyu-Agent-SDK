[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodRecordDef

# Interface: ZodRecordDef\<Key, Value\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:660

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

### Key

`Key` *extends* [`KeySchema`](../type-aliases/KeySchema.md) = [`ZodString`](../classes/ZodString.md)

### Value

`Value` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Properties

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

### keyType

> **keyType**: `Key`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:662

***

### typeName

> **typeName**: [`ZodRecord`](../enumerations/ZodFirstPartyTypeKind.md#zodrecord)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:663

***

### valueType

> **valueType**: `Value`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:661
