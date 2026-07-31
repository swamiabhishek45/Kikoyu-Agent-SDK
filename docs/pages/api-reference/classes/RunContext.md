[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunContext

# Class: RunContext\<T\>

Defined in: packages/core/src/run-context.ts:1

## Type Parameters

### T

`T` = `Record`\<`string`, `unknown`\>

## Constructors

### Constructor

> **new RunContext**\<`T`\>(`value`): `RunContext`\<`T`\>

Defined in: packages/core/src/run-context.ts:4

#### Parameters

##### value

`T`

#### Returns

`RunContext`\<`T`\>

## Properties

### value

> `readonly` **value**: `T`

Defined in: packages/core/src/run-context.ts:2

## Methods

### get()

> **get**\<`K`\>(`key`): `T`\[`K`\]

Defined in: packages/core/src/run-context.ts:8

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

Defined in: packages/core/src/run-context.ts:12

#### Type Parameters

##### T

`T` = `Record`\<`string`, `unknown`\>

#### Parameters

##### context?

`T` \| `RunContext`\<`T`\>

#### Returns

`RunContext`\<`T`\>
