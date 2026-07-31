[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ToolRegistry

# Class: ToolRegistry

Defined in: packages/core/src/tool-registry.ts:4

## Constructors

### Constructor

> **new ToolRegistry**(`tools?`): `ToolRegistry`

Defined in: packages/core/src/tool-registry.ts:7

#### Parameters

##### tools?

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[] = `[]`

#### Returns

`ToolRegistry`

## Methods

### get()

> **get**(`name`): [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\> \| `undefined`

Defined in: packages/core/src/tool-registry.ts:20

#### Parameters

##### name

`string`

#### Returns

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\> \| `undefined`

***

### has()

> **has**(`name`): `boolean`

Defined in: packages/core/src/tool-registry.ts:24

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### list()

> **list**(): [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

Defined in: packages/core/src/tool-registry.ts:28

#### Returns

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

***

### register()

> **register**(`tool`): `void`

Defined in: packages/core/src/tool-registry.ts:13

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`void`

***

### toModelDefinitions()

> **toModelDefinitions**(): [`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]

Defined in: packages/core/src/tool-registry.ts:32

#### Returns

[`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]
