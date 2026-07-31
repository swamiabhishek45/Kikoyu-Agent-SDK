[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / FallbackProvider

# Class: FallbackProvider

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### new FallbackProvider()

> **new FallbackProvider**(`options`): [`FallbackProvider`](FallbackProvider.md)

#### Parameters

##### options

[`FallbackProviderOptions`](../interfaces/FallbackProviderOptions.md)

#### Returns

[`FallbackProvider`](FallbackProvider.md)

#### Defined in

providers/fallback.ts:19

## Properties

### name

> `readonly` **name**: `string`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

#### Defined in

providers/fallback.ts:15

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

providers/fallback.ts:29

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

providers/fallback.ts:49
