[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Session

# Class: Session

Defined in: [packages/core/src/session.ts:9](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L9)

## Constructors

### Constructor

> **new Session**(`sessionIdOrOptions`, `store?`): `Session`

Defined in: [packages/core/src/session.ts:13](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L13)

#### Parameters

##### sessionIdOrOptions

`string` \| [`SessionOptions`](../interfaces/SessionOptions.md)

##### store?

[`MemoryStore`](../interfaces/MemoryStore.md)

#### Returns

`Session`

## Properties

### sessionId

> `readonly` **sessionId**: `string`

Defined in: [packages/core/src/session.ts:10](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L10)

***

### store

> `readonly` **store**: [`MemoryStore`](../interfaces/MemoryStore.md)

Defined in: [packages/core/src/session.ts:11](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L11)

## Methods

### appendMessages()

> **appendMessages**(`newMessages`): `Promise`\<`void`\>

Defined in: [packages/core/src/session.ts:41](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L41)

#### Parameters

##### newMessages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

#### Returns

`Promise`\<`void`\>

***

### clear()

> **clear**(): `Promise`\<`void`\>

Defined in: [packages/core/src/session.ts:46](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L46)

#### Returns

`Promise`\<`void`\>

***

### getMessages()

> **getMessages**(): `Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>

Defined in: [packages/core/src/session.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/session.ts#L36)

#### Returns

`Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>
