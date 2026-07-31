[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ParseContext

# Interface: ParseContext

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:17

## Properties

### common

> `readonly` **common**: `object`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:18

#### async

> `readonly` **async**: `boolean`

#### contextualErrorMap?

> `readonly` `optional` **contextualErrorMap?**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

#### issues

> `readonly` **issues**: [`ZodIssue`](../type-aliases/ZodIssue.md)[]

***

### data

> `readonly` **data**: `any`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:26

***

### parent

> `readonly` **parent**: `ParseContext` \| `null`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:25

***

### parsedType

> `readonly` **parsedType**: `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"` \| `"nan"` \| `"integer"` \| `"float"` \| `"date"` \| `"null"` \| `"array"` \| `"unknown"` \| `"promise"` \| `"void"` \| `"never"` \| `"map"` \| `"set"`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:27

***

### path

> `readonly` **path**: [`ParsePath`](../type-aliases/ParsePath.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:23

***

### schemaErrorMap?

> `readonly` `optional` **schemaErrorMap?**: [`ZodErrorMap`](../type-aliases/ZodErrorMap.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:24
