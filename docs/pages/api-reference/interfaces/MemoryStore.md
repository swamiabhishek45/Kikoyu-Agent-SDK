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

[memory.ts:4](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L4)

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

[memory.ts:2](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L2)

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

[memory.ts:3](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/memory.ts#L3)
