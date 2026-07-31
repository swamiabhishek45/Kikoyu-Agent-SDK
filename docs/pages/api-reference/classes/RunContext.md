[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunContext

# Class: RunContext\<T\>

## Type Parameters

• **T** = `Record`\<`string`, `unknown`\>

## Constructors

### new RunContext()

> **new RunContext**\<`T`\>(`value`): [`RunContext`](RunContext.md)\<`T`\>

#### Parameters

##### value

`T`

#### Returns

[`RunContext`](RunContext.md)\<`T`\>

#### Defined in

[run-context.ts:4](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/run-context.ts#L4)

## Properties

### value

> `readonly` **value**: `T`

#### Defined in

[run-context.ts:2](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/run-context.ts#L2)

## Methods

### get()

> **get**\<`K`\>(`key`): `T`\[`K`\]

#### Type Parameters

• **K** *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`T`\[`K`\]

#### Defined in

[run-context.ts:8](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/run-context.ts#L8)

***

### from()

> `static` **from**\<`T`\>(`context`?): [`RunContext`](RunContext.md)\<`T`\>

#### Type Parameters

• **T** = `Record`\<`string`, `unknown`\>

#### Parameters

##### context?

`T` | [`RunContext`](RunContext.md)\<`T`\>

#### Returns

[`RunContext`](RunContext.md)\<`T`\>

#### Defined in

[run-context.ts:12](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/run-context.ts#L12)
