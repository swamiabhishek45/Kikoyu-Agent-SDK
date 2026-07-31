[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / mergeTypes

# Type Alias: mergeTypes\<A, B\>

> **mergeTypes**\<`A`, `B`\> = \{ \[k in keyof A \| keyof B\]: k extends keyof B ? B\[k\] : k extends keyof A ? A\[k\] : never \}

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:504

## Type Parameters

### A

`A`

### B

`B`
