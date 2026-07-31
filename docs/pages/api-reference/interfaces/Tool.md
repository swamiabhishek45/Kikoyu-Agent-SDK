[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Tool

# Interface: Tool\<TSchema, TResult, TContext\>

## Type Parameters

• **TSchema** *extends* `z.ZodTypeAny` = `any`

• **TResult** = `any`

• **TContext** = `any`

## Properties

### description

> **description**: `string`

#### Defined in

[types.ts:76](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L76)

***

### execute()

> **execute**: (`args`, `context`) => `TResult` \| `Promise`\<`TResult`\>

#### Parameters

##### args

`any`

##### context

[`RunContext`](../classes/RunContext.md)\<`TContext`\>

#### Returns

`TResult` \| `Promise`\<`TResult`\>

#### Defined in

[types.ts:80](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L80)

***

### handoffTarget?

> `optional` **handoffTarget**: [`Agent`](../classes/Agent.md)

#### Defined in

[types.ts:78](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L78)

***

### name

> **name**: `string`

#### Defined in

[types.ts:75](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L75)

***

### parameters

> **parameters**: `ZodTypeAny`

#### Defined in

[types.ts:77](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L77)

***

### requiresApproval?

> `optional` **requiresApproval**: `boolean` \| (`args`) => `boolean`

#### Defined in

[types.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L79)
