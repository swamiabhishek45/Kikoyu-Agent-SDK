[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Runner

# Class: Runner

Defined in: [packages/core/src/runner.ts:18](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/runner.ts#L18)

## Constructors

### Constructor

> **new Runner**(): `Runner`

#### Returns

`Runner`

## Methods

### run()

> **run**\<`TContext`\>(`agent`, `input`, `options?`): `Promise`\<[`RunResult`](../interfaces/RunResult.md)\>

Defined in: [packages/core/src/runner.ts:245](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/runner.ts#L245)

#### Type Parameters

##### TContext

`TContext` = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` \| [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`Promise`\<[`RunResult`](../interfaces/RunResult.md)\>

***

### stream()

> **stream**\<`TContext`\>(`agent`, `input`, `options?`): `AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md), `void`\>

Defined in: [packages/core/src/runner.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7b36dfb5f645f98f923c091f638175786bd9c8a5/packages/core/src/runner.ts#L19)

#### Type Parameters

##### TContext

`TContext` = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` \| [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md), `void`\>
