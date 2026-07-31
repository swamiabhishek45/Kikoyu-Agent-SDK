[**Kikoyu Core API Reference**](../../../../../../README.md)

***

[Kikoyu Core API Reference](../../../../../../README.md) / [z](../../../README.md) / [objectUtil](../README.md) / addQuestionMarks

# Type Alias: addQuestionMarks\<T, _O\>

> **addQuestionMarks**\<`T`, `_O`\> = `{ [K in requiredKeys<T>]: T[K] }` & `{ [K in optionalKeys<T>]?: T[K] }` & `{ [k in keyof T]?: unknown }`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/util.d.cts:37

## Type Parameters

### T

`T` *extends* `object`

### _O

`_O` = `any`
