[**Kikoyu Core API Reference**](../../../../../../README.md)

***

[Kikoyu Core API Reference](../../../../../../README.md) / [z](../../../README.md) / [objectUtil](../README.md) / extendShape

# Type Alias: extendShape\<A, B\>

> **extendShape**\<`A`, `B`\> = keyof `A` & keyof `B` *extends* `never` ? `A` & `B` : `{ [K in keyof A as K extends keyof B ? never : K]: A[K] }` & `{ [K in keyof B]: B[K] }`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/util.d.cts:55

## Type Parameters

### A

`A` *extends* `object`

### B

`B` *extends* `object`
