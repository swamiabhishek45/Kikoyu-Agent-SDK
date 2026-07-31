[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / Runner

# Class: Runner

## Constructors

### new Runner()

> **new Runner**(): [`Runner`](Runner.md)

#### Returns

[`Runner`](Runner.md)

## Methods

### run()

> **run**\<`TContext`\>(`agent`, `input`, `options`?): `Promise`\<[`RunResult`](../interfaces/RunResult.md)\>

#### Type Parameters

• **TContext** = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` | [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`Promise`\<[`RunResult`](../interfaces/RunResult.md)\>

#### Defined in

[runner.ts:245](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/runner.ts#L245)

***

### stream()

> **stream**\<`TContext`\>(`agent`, `input`, `options`?): `AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md), `void`\>

#### Type Parameters

• **TContext** = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` | [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md), `void`\>

#### Defined in

[runner.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/runner.ts#L19)
