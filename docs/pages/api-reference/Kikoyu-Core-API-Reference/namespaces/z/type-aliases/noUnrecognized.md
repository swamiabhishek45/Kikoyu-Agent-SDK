[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / noUnrecognized

# Type Alias: noUnrecognized\<Obj, Shape\>

> **noUnrecognized**\<`Obj`, `Shape`\> = `{ [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never }`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:526

## Type Parameters

### Obj

`Obj` *extends* `object`

### Shape

`Shape` *extends* `object`
