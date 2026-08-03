[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / OpenAIProvider

# Class: OpenAIProvider

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### new OpenAIProvider()

> **new OpenAIProvider**(`options`): [`OpenAIProvider`](OpenAIProvider.md)

#### Parameters

##### options

[`OpenAIProviderOptions`](../interfaces/OpenAIProviderOptions.md) = `{}`

#### Returns

[`OpenAIProvider`](OpenAIProvider.md)

#### Defined in

<<<<<<< HEAD
[providers/openai.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/openai.ts#L24)
=======
[providers/openai.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/openai.ts#L24)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Properties

### name

> `readonly` **name**: `"openai"` = `'openai'`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

#### Defined in

<<<<<<< HEAD
[providers/openai.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/openai.ts#L20)
=======
[providers/openai.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/openai.ts#L20)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Methods

### complete()

> **complete**(`messages`, `options`?): `Promise`\<[`ModelResponse`](../interfaces/ModelResponse.md)\>

#### Parameters

##### messages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](../interfaces/ModelRequestOptions.md)

#### Returns

`Promise`\<[`ModelResponse`](../interfaces/ModelResponse.md)\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`complete`](../interfaces/ModelProvider.md#complete)

#### Defined in

<<<<<<< HEAD
[providers/openai.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/openai.ts#L79)
=======
[providers/openai.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/openai.ts#L79)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

***

### streamComplete()

> **streamComplete**(`messages`, `options`?): `AsyncIterable`\<[`ModelStreamChunk`](../interfaces/ModelStreamChunk.md)\>

#### Parameters

##### messages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](../interfaces/ModelRequestOptions.md)

#### Returns

`AsyncIterable`\<[`ModelStreamChunk`](../interfaces/ModelStreamChunk.md)\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`streamComplete`](../interfaces/ModelProvider.md#streamcomplete)

#### Defined in

<<<<<<< HEAD
[providers/openai.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/openai.ts#L130)
=======
[providers/openai.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/openai.ts#L130)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
