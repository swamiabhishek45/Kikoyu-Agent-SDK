[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ToolRegistry

# Class: ToolRegistry

## Constructors

### new ToolRegistry()

> **new ToolRegistry**(`tools`): [`ToolRegistry`](ToolRegistry.md)

#### Parameters

##### tools

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[] = `[]`

#### Returns

[`ToolRegistry`](ToolRegistry.md)

#### Defined in

[tool-registry.ts:7](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L7)

## Methods

### get()

> **get**(`name`): `undefined` \| [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>

#### Parameters

##### name

`string`

#### Returns

`undefined` \| [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>

#### Defined in

[tool-registry.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L20)

***

### has()

> **has**(`name`): `boolean`

#### Parameters

##### name

`string`

#### Returns

`boolean`

#### Defined in

[tool-registry.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L24)

***

### list()

> **list**(): [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

#### Returns

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

#### Defined in

[tool-registry.ts:28](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L28)

***

### register()

> **register**(`tool`): `void`

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`void`

#### Defined in

[tool-registry.ts:13](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L13)

***

### toModelDefinitions()

> **toModelDefinitions**(): [`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]

#### Returns

[`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]

#### Defined in

[tool-registry.ts:32](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/7ed70578944b6183f33990019a5929c002fe7631/packages/core/src/tool-registry.ts#L32)
