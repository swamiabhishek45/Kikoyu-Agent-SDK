[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Mem0Store

# Class: Mem0Store

## Implements

- [`MemoryStore`](../interfaces/MemoryStore.md)

## Constructors

### new Mem0Store()

> **new Mem0Store**(`options`): [`Mem0Store`](Mem0Store.md)

#### Parameters

##### options

[`Mem0StoreOptions`](../interfaces/Mem0StoreOptions.md) = `{}`

#### Returns

[`Mem0Store`](Mem0Store.md)

#### Defined in

[memory.ts:122](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/memory.ts#L122)

## Methods

### append()

> **append**\<`T`\>(`key`, `item`): `Promise`\<`void`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### item

`T`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`append`](../interfaces/MemoryStore.md#append)

#### Defined in

[memory.ts:196](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/memory.ts#L196)

***

### get()

> **get**\<`T`\>(`key`): `Promise`\<`undefined` \| `T`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`get`](../interfaces/MemoryStore.md#get)

#### Defined in

[memory.ts:129](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/memory.ts#L129)

***

### set()

> **set**\<`T`\>(`key`, `value`): `Promise`\<`void`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`MemoryStore`](../interfaces/MemoryStore.md).[`set`](../interfaces/MemoryStore.md#set)

#### Defined in

[memory.ts:169](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/master/packages/core/src/memory.ts#L169)
