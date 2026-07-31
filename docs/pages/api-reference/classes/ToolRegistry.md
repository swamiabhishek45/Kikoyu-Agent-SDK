[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / ToolRegistry

# Class: ToolRegistry

Defined in: [packages/core/src/tool-registry.ts:4](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L4)

## Constructors

### Constructor

> **new ToolRegistry**(`tools?`): `ToolRegistry`

Defined in: [packages/core/src/tool-registry.ts:7](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L7)

#### Parameters

##### tools?

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[] = `[]`

#### Returns

`ToolRegistry`

## Methods

### get()

> **get**(`name`): [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\> \| `undefined`

Defined in: [packages/core/src/tool-registry.ts:20](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L20)

#### Parameters

##### name

`string`

#### Returns

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\> \| `undefined`

***

### has()

> **has**(`name`): `boolean`

Defined in: [packages/core/src/tool-registry.ts:24](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L24)

#### Parameters

##### name

`string`

#### Returns

`boolean`

***

### list()

> **list**(): [`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

Defined in: [packages/core/src/tool-registry.ts:28](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L28)

#### Returns

[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

***

### register()

> **register**(`tool`): `void`

Defined in: [packages/core/src/tool-registry.ts:13](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L13)

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

#### Returns

`void`

***

### toModelDefinitions()

> **toModelDefinitions**(): [`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]

Defined in: [packages/core/src/tool-registry.ts:32](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/06f638bddb80491b010e83e1f0c1dc9addd81d7a/packages/core/src/tool-registry.ts#L32)

#### Returns

[`ModelToolDefinition`](../interfaces/ModelToolDefinition.md)[]
