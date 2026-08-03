[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / AnthropicProvider

# Class: AnthropicProvider

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### new AnthropicProvider()

> **new AnthropicProvider**(`options`): [`AnthropicProvider`](AnthropicProvider.md)

#### Parameters

##### options

[`AnthropicProviderOptions`](../interfaces/AnthropicProviderOptions.md) = `{}`

#### Returns

[`AnthropicProvider`](AnthropicProvider.md)

#### Defined in

<<<<<<< HEAD
[providers/anthropic.ts:22](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/anthropic.ts#L22)
=======
[providers/anthropic.ts:22](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/anthropic.ts#L22)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

## Properties

### name

> `readonly` **name**: `"anthropic"` = `'anthropic'`

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

#### Defined in

<<<<<<< HEAD
[providers/anthropic.ts:17](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/anthropic.ts#L17)
=======
[providers/anthropic.ts:17](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/anthropic.ts#L17)
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
[providers/anthropic.ts:28](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/anthropic.ts#L28)
=======
[providers/anthropic.ts:28](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/anthropic.ts#L28)
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
[providers/anthropic.ts:137](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/providers/anthropic.ts#L137)
=======
[providers/anthropic.ts:137](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/providers/anthropic.ts#L137)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
