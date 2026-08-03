[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / createTool

# Function: createTool()

> **createTool**\<`TSchema`, `TResult`, `TContext`\>(`config`): [`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>

## Type Parameters

• **TSchema** *extends* `ZodTypeAny`

• **TResult**

• **TContext** = `Record`\<`string`, `unknown`\>

## Parameters

### config

#### config.description

`string`

#### config.execute

(`args`, `context`) => `TResult` \| `Promise`\<`TResult`\>

#### config.name

`string`

#### config.parameters

`TSchema`

#### config.requiresApproval

`boolean` \| (`args`) => `boolean`

## Returns

[`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>

## Defined in

[tool.ts:5](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool.ts#L5)
