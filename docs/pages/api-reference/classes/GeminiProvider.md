[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / GeminiProvider

# Class: GeminiProvider

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### new GeminiProvider()

> **new GeminiProvider**(`options`): [`GeminiProvider`](GeminiProvider.md)

#### Parameters

##### options

[`GeminiProviderOptions`](../interfaces/GeminiProviderOptions.md) = `{}`

#### Returns

[`GeminiProvider`](GeminiProvider.md)

#### Defined in

providers/gemini.ts:22

## Properties

### name

> `readonly` **name**: `"gemini"` = `'gemini'`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

#### Defined in

providers/gemini.ts:17

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

providers/gemini.ts:28

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

providers/gemini.ts:155
