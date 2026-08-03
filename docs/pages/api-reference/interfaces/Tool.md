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

<<<<<<< HEAD
[types.ts:76](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L76)
=======
[types.ts:76](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L76)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

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

<<<<<<< HEAD
[types.ts:80](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L80)
=======
[types.ts:80](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L80)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### handoffTarget?

> `optional` **handoffTarget**: [`Agent`](../classes/Agent.md)

#### Defined in

<<<<<<< HEAD
[types.ts:78](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L78)
=======
[types.ts:78](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L78)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### name

> **name**: `string`

#### Defined in

<<<<<<< HEAD
[types.ts:75](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L75)
=======
[types.ts:75](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L75)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### parameters

> **parameters**: `ZodTypeAny`

#### Defined in

<<<<<<< HEAD
[types.ts:77](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L77)
=======
[types.ts:77](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L77)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### requiresApproval?

> `optional` **requiresApproval**: `boolean` \| (`args`) => `boolean`

#### Defined in

<<<<<<< HEAD
[types.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L79)
=======
[types.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L79)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
