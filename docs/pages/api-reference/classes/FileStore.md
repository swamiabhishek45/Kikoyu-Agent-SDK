[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / FileStore

# Class: FileStore

## Implements

- [`MemoryStore`](../interfaces/MemoryStore.md)

## Constructors

### new FileStore()

> **new FileStore**(`options`): [`FileStore`](FileStore.md)

#### Parameters

##### options

[`FileStoreOptions`](../interfaces/FileStoreOptions.md) = `{}`

#### Returns

[`FileStore`](FileStore.md)

#### Defined in

[memory.ts:38](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/memory.ts#L38)

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

[memory.ts:68](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/memory.ts#L68)

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

[memory.ts:50](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/memory.ts#L50)

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

[memory.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/memory.ts#L63)
