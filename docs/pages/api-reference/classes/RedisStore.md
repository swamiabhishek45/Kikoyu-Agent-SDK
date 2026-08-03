[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RedisStore

# Class: RedisStore

## Implements

- [`MemoryStore`](../interfaces/MemoryStore.md)

## Constructors

### new RedisStore()

> **new RedisStore**(`redisClient`, `prefix`): [`RedisStore`](RedisStore.md)

#### Parameters

##### redisClient

[`MinimalRedisClient`](../interfaces/MinimalRedisClient.md)

##### prefix

`string` = `'kikoyu:'`

#### Returns

[`RedisStore`](RedisStore.md)

#### Defined in

[memory.ts:83](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L83)

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

[memory.ts:99](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L99)

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

[memory.ts:85](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L85)

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

[memory.ts:95](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L95)
