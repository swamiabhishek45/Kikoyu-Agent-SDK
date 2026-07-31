[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / OpenAIProvider

# Class: OpenAIProvider

Defined in: [packages/core/src/providers/openai.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/providers/openai.ts#L19)

## Implements

- [`ModelProvider`](../interfaces/ModelProvider.md)

## Constructors

### Constructor

> **new OpenAIProvider**(`options?`): `OpenAIProvider`

Defined in: [packages/core/src/providers/openai.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/providers/openai.ts#L24)

#### Parameters

##### options?

[`OpenAIProviderOptions`](../interfaces/OpenAIProviderOptions.md) = `{}`

#### Returns

`OpenAIProvider`

## Properties

### name

> `readonly` **name**: `"openai"` = `'openai'`

Defined in: [packages/core/src/providers/openai.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/providers/openai.ts#L20)

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`name`](../interfaces/ModelProvider.md#name)

## Methods

### complete()

> **complete**(`messages`, `options?`): `Promise`\<[`ModelResponse`](../interfaces/ModelResponse.md)\>

Defined in: [packages/core/src/providers/openai.ts:79](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/providers/openai.ts#L79)

#### Parameters

##### messages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](../interfaces/ModelRequestOptions.md)

#### Returns

`Promise`\<[`ModelResponse`](../interfaces/ModelResponse.md)\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`complete`](../interfaces/ModelProvider.md#complete)

***

### streamComplete()

> **streamComplete**(`messages`, `options?`): `AsyncIterable`\<[`ModelStreamChunk`](../interfaces/ModelStreamChunk.md)\>

Defined in: [packages/core/src/providers/openai.ts:130](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/providers/openai.ts#L130)

#### Parameters

##### messages

[`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`ModelRequestOptions`](../interfaces/ModelRequestOptions.md)

#### Returns

`AsyncIterable`\<[`ModelStreamChunk`](../interfaces/ModelStreamChunk.md)\>

#### Implementation of

[`ModelProvider`](../interfaces/ModelProvider.md).[`streamComplete`](../interfaces/ModelProvider.md#streamcomplete)
