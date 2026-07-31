[**Kikoyu Core API Reference**](../../../../../../README.md)

***

[Kikoyu Core API Reference](../../../../../../README.md) / [z](../../../README.md) / [objectUtil](../README.md) / noNeverKeys

# Type Alias: noNeverKeys\<T\>

> **noNeverKeys**\<`T`\> = `{ [k in keyof T]: [T[k]] extends [never] ? never : k }`\[keyof `T`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/util.d.cts:48

## Type Parameters

### T

`T`
