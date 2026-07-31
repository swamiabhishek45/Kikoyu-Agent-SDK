[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunContext

# Class: RunContext\<T\>

Defined in: [packages/core/src/run-context.ts:1](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/4ad4dab0d00601c98265981469a8a361aa7cb07a/packages/core/src/run-context.ts#L1)

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Constructors

### Constructor

> **new RunContext**\<`T`\>(`value`): `RunContext`\<`T`\>

Defined in: [packages/core/src/run-context.ts:4](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/4ad4dab0d00601c98265981469a8a361aa7cb07a/packages/core/src/run-context.ts#L4)

#### Parameters

##### value

`T`

#### Returns

`RunContext`\<`T`\>

## Properties

### value

> `readonly` **value**: `T`

Defined in: [packages/core/src/run-context.ts:2](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/4ad4dab0d00601c98265981469a8a361aa7cb07a/packages/core/src/run-context.ts#L2)

## Methods

### get()

> **get**\<`K`\>(`key`): `T`\[`K`\]

Defined in: [packages/core/src/run-context.ts:8](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/4ad4dab0d00601c98265981469a8a361aa7cb07a/packages/core/src/run-context.ts#L8)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`T`\[`K`\]

***

### from()

> `static` **from**\<`T`\>(`context?`): `RunContext`\<`T`\>

Defined in: [packages/core/src/run-context.ts:12](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/4ad4dab0d00601c98265981469a8a361aa7cb07a/packages/core/src/run-context.ts#L12)

#### Type Parameters

##### T

`T` = `Record`\<`string`, `unknown`\>

#### Parameters

##### context?

`T` \| `RunContext`\<`T`\>

#### Returns

`RunContext`\<`T`\>
