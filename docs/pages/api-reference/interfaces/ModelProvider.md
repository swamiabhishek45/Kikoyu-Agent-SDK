[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ModelProvider

# Interface: ModelProvider

## Properties

### name

> `readonly` **name**: `string`

#### Defined in

<<<<<<< HEAD
[types.ts:62](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L62)
=======
[types.ts:62](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L62)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

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

<<<<<<< HEAD
[types.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L63)
=======
[types.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L63)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

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

<<<<<<< HEAD
[types.ts:67](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/types.ts#L67)
=======
[types.ts:67](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/types.ts#L67)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
