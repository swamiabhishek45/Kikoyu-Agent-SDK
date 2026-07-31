[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ModelProvider

# Interface: ModelProvider

## Properties

### name

> `readonly` **name**: `string`

#### Defined in

[types.ts:62](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/types.ts#L62)

## Methods

### complete()

> **complete**(`messages`, `options`?): `Promise`\<[`ModelResponse`](ModelResponse.md)\>

#### Parameters

##### messages

[`ModelMessage`](ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](ModelRequestOptions.md)

#### Returns

`Promise`\<[`ModelResponse`](ModelResponse.md)\>

#### Defined in

[types.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/types.ts#L63)

***

### streamComplete()?

> `optional` **streamComplete**(`messages`, `options`?): `AsyncIterable`\<[`ModelStreamChunk`](ModelStreamChunk.md)\>

#### Parameters

##### messages

[`ModelMessage`](ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](ModelRequestOptions.md)

#### Returns

`AsyncIterable`\<[`ModelStreamChunk`](ModelStreamChunk.md)\>

#### Defined in

[types.ts:67](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/types.ts#L67)
