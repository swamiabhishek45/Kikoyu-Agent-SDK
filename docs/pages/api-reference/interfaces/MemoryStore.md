[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / MemoryStore

# Interface: MemoryStore

## Methods

### append()

> **append**\<`T`\>(`key`, `item`): `void` \| `Promise`\<`void`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### item

`T`

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[memory.ts:7](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L7)

***

### get()

> **get**\<`T`\>(`key`): `undefined` \| `T` \| `Promise`\<`undefined` \| `T`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `T` \| `Promise`\<`undefined` \| `T`\>

#### Defined in

[memory.ts:5](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L5)

***

### set()

> **set**\<`T`\>(`key`, `value`): `void` \| `Promise`\<`void`\>

#### Type Parameters

• **T** = `unknown`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[memory.ts:6](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/memory.ts#L6)
