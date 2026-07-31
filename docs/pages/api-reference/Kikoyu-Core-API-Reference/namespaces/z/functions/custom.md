[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / custom

# Function: custom()

> **custom**\<`T`\>(`check?`, `_params?`, `fatal?`): [`ZodType`](../classes/ZodType.md)\<`T`, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:917

## Type Parameters

### T

`T`

## Parameters

### check?

(`data`) => `any`

### \_params?

`string` \| `CustomParams` \| ((`input`) => `CustomParams`)

### fatal?

`boolean`

**Deprecated**

Pass `fatal` into the params object instead:

```ts
z.string().custom((val) => val.length > 5, { fatal: false })
```

## Returns

[`ZodType`](../classes/ZodType.md)\<`T`, [`ZodTypeDef`](../interfaces/ZodTypeDef.md), `T`\>
