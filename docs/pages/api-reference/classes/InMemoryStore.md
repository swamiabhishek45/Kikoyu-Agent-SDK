[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / InMemoryStore

# Class: InMemoryStore

## Implements

- [`MemoryStore`](../interfaces/MemoryStore.md)

## Constructors

### new InMemoryStore()

> **new InMemoryStore**(): [`InMemoryStore`](InMemoryStore.md)

#### Returns

[`InMemoryStore`](InMemoryStore.md)

## Methods

### append()

> **append**\<`T`\>(`key`, `item`): `void`

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### item

`T`

#### Returns

`void`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`append`](../interfaces/MemoryStore.md#append)

#### Defined in

[memory.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L19)

***

### get()

> **get**\<`T`\>(`key`): `undefined` \| `T`

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `T`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`get`](../interfaces/MemoryStore.md#get)

#### Defined in

[memory.ts:10](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L10)

***

### set()

> **set**\<`T`\>(`key`, `value`): `void`

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void`

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`set`](../interfaces/MemoryStore.md#set)

#### Defined in

[memory.ts:15](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L15)
