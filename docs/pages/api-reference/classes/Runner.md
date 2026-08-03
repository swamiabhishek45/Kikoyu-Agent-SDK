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

<<<<<<< HEAD
[runner.ts:434](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/runner.ts#L434)
=======
[runner.ts:434](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/runner.ts#L434)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945

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

<<<<<<< HEAD
[runner.ts:26](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/runner.ts#L26)
=======
[runner.ts:26](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/main/packages/core/src/runner.ts#L26)
>>>>>>> 13e7d84e6a73a2939cd4c9993ca2f34dfe669945
