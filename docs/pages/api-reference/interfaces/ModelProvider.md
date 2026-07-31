[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ModelProvider

# Interface: ModelProvider

Defined in: [packages/core/src/types.ts:61](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/types.ts#L61)

## Properties

### name

> `readonly` **name**: `string`

Defined in: [packages/core/src/types.ts:62](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/types.ts#L62)

## Methods

### complete()

> **complete**(`messages`, `options?`): `Promise`\<[`ModelResponse`](ModelResponse.md)\>

Defined in: [packages/core/src/types.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/types.ts#L63)

#### Parameters

##### messages

[`ModelMessage`](ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](ModelRequestOptions.md)

#### Returns

`Promise`\<[`ModelResponse`](ModelResponse.md)\>

***

### streamComplete()?

> `optional` **streamComplete**(`messages`, `options?`): `AsyncIterable`\<[`ModelStreamChunk`](ModelStreamChunk.md)\>

Defined in: [packages/core/src/types.ts:67](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/types.ts#L67)

#### Parameters

##### messages

[`ModelMessage`](ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](ModelRequestOptions.md)

#### Returns

`AsyncIterable`\<[`ModelStreamChunk`](ModelStreamChunk.md)\>
