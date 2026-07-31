[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / InMemoryStore

# Class: InMemoryStore

Defined in: [packages/core/src/memory.ts:7](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L7)

## Implements

- [`MemoryStore`](../interfaces/MemoryStore.md)

## Constructors

### Constructor

> **new InMemoryStore**(): `InMemoryStore`

#### Returns

`InMemoryStore`

## Methods

### append()

> **append**\<`T`\>(`key`, `item`): `void`

Defined in: [packages/core/src/memory.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L19)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

##### item

`T`

#### Returns

`void`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`append`](../interfaces/MemoryStore.md#append)

***

### get()

> **get**\<`T`\>(`key`): `T` \| `undefined`

Defined in: [packages/core/src/memory.ts:10](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L10)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

#### Returns

`T` \| `undefined`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`get`](../interfaces/MemoryStore.md#get)

***

### set()

> **set**\<`T`\>(`key`, `value`): `void`

Defined in: [packages/core/src/memory.ts:15](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L15)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`set`](../interfaces/MemoryStore.md#set)
