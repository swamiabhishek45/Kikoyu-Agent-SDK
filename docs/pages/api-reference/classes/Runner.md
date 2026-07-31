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

> **run**\<`TStructured`, `TContext`\>(`agent`, `input`, `options`?): `Promise`\<[`RunResult`](../interfaces/RunResult.md)\<`TStructured`\>\>

#### Type Parameters

• **TStructured** = `unknown`

• **TContext** = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` | [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`Promise`\<[`RunResult`](../interfaces/RunResult.md)\<`TStructured`\>\>

#### Defined in

[runner.ts:434](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L434)

***

### stream()

> **stream**\<`TStructured`, `TContext`\>(`agent`, `input`, `options`?): `AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md)\<`TStructured`\>, `void`\>

#### Type Parameters

• **TStructured** = `unknown`

• **TContext** = `Record`\<`string`, `unknown`\>

#### Parameters

##### agent

[`Agent`](Agent.md)

##### input

`string` | [`ModelMessage`](../interfaces/ModelMessage.md)[]

##### options?

[`RunOptions`](../interfaces/RunOptions.md)\<`TContext`\>

#### Returns

`AsyncGenerator`\<[`StreamEvent`](../type-aliases/StreamEvent.md), [`RunResult`](../interfaces/RunResult.md)\<`TStructured`\>, `void`\>

#### Defined in

[runner.ts:26](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L26)
