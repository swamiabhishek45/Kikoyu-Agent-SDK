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

## Returns

[`Tool`](../interfaces/Tool.md)\<`TSchema`, `TResult`, `TContext`\>

## Defined in

[tool.ts:5](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/tool.ts#L5)
