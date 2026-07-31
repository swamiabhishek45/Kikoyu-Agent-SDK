[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / createTool

# Function: createTool()

> **createTool**\<`TSchema`, `TResult`, `TContext`\>(`config`): [`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>

Defined in: packages/core/src/tool.ts:5

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
