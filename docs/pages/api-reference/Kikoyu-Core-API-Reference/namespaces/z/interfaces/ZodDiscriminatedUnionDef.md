[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodDiscriminatedUnionDef

# Interface: ZodDiscriminatedUnionDef\<Discriminator, Options\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:605

## Extends

- [`ZodTypeDef`](ZodTypeDef.md)

## Type Parameters

### Discriminator

`Discriminator` *extends* `string`

### Options

`Options` *extends* readonly [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[] = [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`string`\>[]

## Properties

### description?

> `optional` **description?**: `string`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:24

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`description`](ZodTypeDef.md#description)

***

### discriminator

> **discriminator**: `Discriminator`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:606

***

### errorMap?

> `optional` **errorMap?**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:23

#### Inherited from

[`ZodTypeDef`](ZodTypeDef.md).[`errorMap`](ZodTypeDef.md#errormap)

***

### options

> **options**: `Options`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:607

***

### optionsMap

> **optionsMap**: `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:608

***

### typeName

> **typeName**: [`ZodDiscriminatedUnion`](../enumerations/ZodFirstPartyTypeKind.md#zoddiscriminatedunion)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:609
