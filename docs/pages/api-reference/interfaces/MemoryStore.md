[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / MemoryStore

# Interface: MemoryStore

Defined in: [packages/core/src/memory.ts:1](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L1)

## Methods

### append()

> **append**\<`T`\>(`key`, `item`): `void` \| `Promise`\<`void`\>

Defined in: [packages/core/src/memory.ts:4](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L4)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

##### item

`T`

#### Returns

`void` \| `Promise`\<`void`\>

***

### get()

> **get**\<`T`\>(`key`): `T` \| `Promise`\<`T` \| `undefined`\> \| `undefined`

Defined in: [packages/core/src/memory.ts:2](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L2)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

#### Returns

`T` \| `Promise`\<`T` \| `undefined`\> \| `undefined`

***

### set()

> **set**\<`T`\>(`key`, `value`): `void` \| `Promise`\<`void`\>

Defined in: [packages/core/src/memory.ts:3](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/memory.ts#L3)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### key

`string`

##### value

`T`

#### Returns

`void` \| `Promise`\<`void`\>
