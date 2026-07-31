[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Tool

# Interface: Tool\<TSchema, TResult, TContext\>

Defined in: [packages/core/src/types.ts:74](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L74)

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

Defined in: [packages/core/src/types.ts:76](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L76)

***

### execute

> **execute**: (`args`, `context`) => `TResult` \| `Promise`\<`TResult`\>

Defined in: [packages/core/src/types.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L79)

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

Defined in: [packages/core/src/types.ts:78](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L78)

***

### name

> **name**: `string`

Defined in: [packages/core/src/types.ts:75](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L75)

***

### parameters

> **parameters**: [`ZodTypeAny`](../Kikoyu-Core-API-Reference/namespaces/z/type-aliases/ZodTypeAny.md)

Defined in: [packages/core/src/types.ts:77](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/types.ts#L77)
