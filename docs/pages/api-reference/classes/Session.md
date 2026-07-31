[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Session

# Class: Session

Defined in: packages/core/src/session.ts:9

## Constructors

### Constructor

> **new Session**(`sessionIdOrOptions`, `store?`): `Session`

Defined in: packages/core/src/session.ts:13

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

Defined in: packages/core/src/session.ts:10

***

### store

> `readonly` **store**: [`MemoryStore`](../interfaces/MemoryStore.md)

Defined in: packages/core/src/session.ts:11

## Methods

### appendMessages()

> **appendMessages**(`newMessages`): `Promise`\<`void`\>

Defined in: packages/core/src/session.ts:41

#### Parameters

##### newMessages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

#### Returns

`Promise`\<`void`\>

***

### clear()

> **clear**(): `Promise`\<`void`\>

Defined in: packages/core/src/session.ts:46

#### Returns

`Promise`\<`void`\>

***

### getMessages()

> **getMessages**(): `Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>

Defined in: packages/core/src/session.ts:36

#### Returns

`Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>
