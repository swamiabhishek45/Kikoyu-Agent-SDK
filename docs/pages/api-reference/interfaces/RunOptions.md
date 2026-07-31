[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / RunOptions

# Interface: RunOptions\<TContext\>

## Type Parameters

• **TContext** = `Record`\<`string`, `unknown`\>

## Properties

### approvalHandler?

> `optional` **approvalHandler**: [`ToolApprovalHandler`](../type-aliases/ToolApprovalHandler.md)

#### Defined in

[runner.ts:22](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L22)

***

### context?

> `optional` **context**: `TContext` \| [`RunContext`](../classes/RunContext.md)\<`TContext`\>

#### Defined in

[runner.ts:18](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L18)

***

### maxHandoffs?

> `optional` **maxHandoffs**: `number`

#### Defined in

[runner.ts:17](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L17)

***

### maxIterations?

> `optional` **maxIterations**: `number`

#### Defined in

[runner.ts:16](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L16)

***

### maxTokens?

> `optional` **maxTokens**: `number`

#### Defined in

[runner.ts:15](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L15)

***

### responseSchema?

> `optional` **responseSchema**: `ZodTypeAny`

#### Defined in

[runner.ts:21](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L21)

***

### session?

> `optional` **session**: `string` \| [`Session`](../classes/Session.md)

#### Defined in

[runner.ts:19](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L19)

***

### store?

> `optional` **store**: [`MemoryStore`](MemoryStore.md)

#### Defined in

[runner.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L20)

***

### temperature?

> `optional` **temperature**: `number`

#### Defined in

[runner.ts:14](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/ed3acbdfa036f9fea16ac7807fc9bacdb92f037a/packages/core/src/runner.ts#L14)
