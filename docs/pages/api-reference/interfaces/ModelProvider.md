[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ModelProvider

# Interface: ModelProvider

## Properties

### name

> `readonly` **name**: `string`

#### Defined in

[types.ts:62](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/types.ts#L62)

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

[types.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/types.ts#L63)

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

[types.ts:67](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/types.ts#L67)
