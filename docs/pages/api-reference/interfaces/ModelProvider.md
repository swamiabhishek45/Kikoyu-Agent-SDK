[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ModelProvider

# Interface: ModelProvider

Defined in: packages/core/src/types.ts:61

## Properties

### name

> `readonly` **name**: `string`

Defined in: packages/core/src/types.ts:62

## Methods

### complete()

> **complete**(`messages`, `options?`): `Promise`\<[`ModelResponse`](ModelResponse.md)\>

Defined in: packages/core/src/types.ts:63

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

Defined in: packages/core/src/types.ts:67

#### Parameters

##### messages

[`ModelMessage`](ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](ModelRequestOptions.md)

#### Returns

`AsyncIterable`\<[`ModelStreamChunk`](ModelStreamChunk.md)\>
