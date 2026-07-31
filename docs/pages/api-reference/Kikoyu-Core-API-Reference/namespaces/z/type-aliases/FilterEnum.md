[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / FilterEnum

# Type Alias: FilterEnum\<Values, ToExclude\>

> **FilterEnum**\<`Values`, `ToExclude`\> = `Values` *extends* \[\] ? \[\] : `Values` *extends* \[infer Head, `...(infer Rest)`\] ? `Head` *extends* `ToExclude` ? `FilterEnum`\<`Rest`, `ToExclude`\> : \[`Head`, `...FilterEnum<Rest, ToExclude>`\] : `never`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:758

## Type Parameters

### Values

`Values`

### ToExclude

`ToExclude`
