[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ParseStatus

# Class: ParseStatus

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:39

## Constructors

### Constructor

> **new ParseStatus**(): `ParseStatus`

#### Returns

`ParseStatus`

## Properties

### value

> **value**: `"aborted"` \| `"dirty"` \| `"valid"`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:40

## Methods

### abort()

> **abort**(): `void`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:42

#### Returns

`void`

***

### dirty()

> **dirty**(): `void`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:41

#### Returns

`void`

***

### mergeArray()

> `static` **mergeArray**(`status`, `results`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:43

#### Parameters

##### status

`ParseStatus`

##### results

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>[]

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)

***

### mergeObjectAsync()

> `static` **mergeObjectAsync**(`status`, `pairs`): `Promise`\<[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:44

#### Parameters

##### status

`ParseStatus`

##### pairs

`object`[]

#### Returns

`Promise`\<[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`any`\>\>

***

### mergeObjectSync()

> `static` **mergeObjectSync**(`status`, `pairs`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/helpers/parseUtil.d.cts:48

#### Parameters

##### status

`ParseStatus`

##### pairs

`object`[]

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)
