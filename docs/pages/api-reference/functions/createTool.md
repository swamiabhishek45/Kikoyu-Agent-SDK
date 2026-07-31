[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / createTool

# Function: createTool()

> **createTool**\<`TSchema`, `TResult`, `TContext`\>(`config`): [`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>

Defined in: [packages/core/src/tool.ts:5](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool.ts#L5)

## Type Parameters

### TSchema

`TSchema` *extends* [`ZodTypeAny`](../Kikoyu-Core-API-Reference/namespaces/z/type-aliases/ZodTypeAny.md)

### TResult

`TResult`

### TContext

`TContext` = `Record`\<`string`, `unknown`\>

## Parameters

### config

#### description

`string`

#### execute

(`args`, `context`) => `TResult` \| `Promise`\<`TResult`\>

#### name

`string`

#### parameters

`TSchema`

## Returns

[`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>
