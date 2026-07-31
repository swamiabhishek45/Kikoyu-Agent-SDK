[**Kikoyu Core API Reference**](../../../../../../README.md)

***

[Kikoyu Core API Reference](../../../../../../README.md) / [z](../../../README.md) / [objectUtil](../README.md) / MergeShapes

# Type Alias: MergeShapes\<U, V\>

> **MergeShapes**\<`U`, `V`\> = keyof `U` & keyof `V` *extends* `never` ? `U` & `V` : `{ [k in Exclude<keyof U, keyof V>]: U[k] }` & `V`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/util.d.cts:28

## Type Parameters

### U

`U`

### V

`V`
