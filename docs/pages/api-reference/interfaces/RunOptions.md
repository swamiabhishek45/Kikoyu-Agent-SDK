[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunOptions

# Interface: RunOptions\<TContext\>

Defined in: packages/core/src/runner.ts:9

## Type Parameters

### TContext

`TContext` = `Record`\<`string`, `unknown`\>

## Properties

### context?

> `optional` **context?**: `TContext` \| [`RunContext`](../classes/RunContext.md)\<`TContext`\>

Defined in: packages/core/src/runner.ts:13

***

### maxIterations?

> `optional` **maxIterations?**: `number`

Defined in: packages/core/src/runner.ts:12

***

### maxTokens?

> `optional` **maxTokens?**: `number`

Defined in: packages/core/src/runner.ts:11

***

### session?

> `optional` **session?**: `string` \| [`Session`](../classes/Session.md)

Defined in: packages/core/src/runner.ts:14

***

### store?

> `optional` **store?**: [`MemoryStore`](MemoryStore.md)

Defined in: packages/core/src/runner.ts:15

***

### temperature?

> `optional` **temperature?**: `number`

Defined in: packages/core/src/runner.ts:10
