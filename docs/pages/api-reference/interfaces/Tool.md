[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Tool

# Interface: Tool\<TSchema, TResult, TContext\>

Defined in: packages/core/src/types.ts:74

## Type Parameters

### TSchema

`TSchema` *extends* [`ZodTypeAny`](../Kikoyu-Core-API-Reference/namespaces/z/type-aliases/ZodTypeAny.md) = `any`

### TResult

`TResult` = `any`

### TContext

`TContext` = `any`

## Properties

### description

> **description**: `string`

Defined in: packages/core/src/types.ts:76

***

### execute

> **execute**: (`args`, `context`) => `TResult` \| `Promise`\<`TResult`\>

Defined in: packages/core/src/types.ts:79

#### Parameters

##### args

`any`

##### context

[`RunContext`](../classes/RunContext.md)\<`TContext`\>

#### Returns

`TResult` \| `Promise`\<`TResult`\>

***

### handoffTarget?

> `optional` **handoffTarget?**: [`Agent`](../classes/Agent.md)

Defined in: packages/core/src/types.ts:78

***

### name

> **name**: `string`

Defined in: packages/core/src/types.ts:75

***

### parameters

> **parameters**: [`ZodTypeAny`](../Kikoyu-Core-API-Reference/namespaces/z/type-aliases/ZodTypeAny.md)

Defined in: packages/core/src/types.ts:77
