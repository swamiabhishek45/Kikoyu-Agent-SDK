[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / RecordType

# Type Alias: RecordType\<K, V\>

> **RecordType**\<`K`, `V`\> = \[`string`\] *extends* \[`K`\] ? `Record`\<`K`, `V`\> : \[`number`\] *extends* \[`K`\] ? `Record`\<`K`, `V`\> : \[`symbol`\] *extends* \[`K`\] ? `Record`\<`K`, `V`\> : \[[`BRAND`](BRAND.md)\<`string` \| `number` \| `symbol`\>\] *extends* \[`K`\] ? `Record`\<`K`, `V`\> : `Partial`\<`Record`\<`K`, `V`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:666

## Type Parameters

### K

`K` *extends* `string` \| `number` \| `symbol`

### V

`V`
