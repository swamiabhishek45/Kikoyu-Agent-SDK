[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Session

# Class: Session

## Constructors

### new Session()

> **new Session**(`sessionIdOrOptions`, `store`?): [`Session`](Session.md)

#### Parameters

##### sessionIdOrOptions

`string` | [`SessionOptions`](../interfaces/SessionOptions.md)

##### store?

[`MemoryStore`](../interfaces/MemoryStore.md)

#### Returns

[`Session`](Session.md)

#### Defined in

[session.ts:13](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L13)

## Properties

### sessionId

> `readonly` **sessionId**: `string`

#### Defined in

[session.ts:10](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L10)

***

### store

> `readonly` **store**: [`MemoryStore`](../interfaces/MemoryStore.md)

#### Defined in

[session.ts:11](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L11)

## Methods

### appendMessages()

> **appendMessages**(`newMessages`): `Promise`\<`void`\>

#### Parameters

##### newMessages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

#### Returns

`Promise`\<`void`\>

#### Defined in

[session.ts:41](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L41)

***

### clear()

> **clear**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[session.ts:46](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L46)

***

### getMessages()

> **getMessages**(): `Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>

#### Returns

`Promise`\<[`ModelMessage`](../interfaces/ModelMessage.md)[]\>

#### Defined in

[session.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/session.ts#L36)
