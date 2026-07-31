[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodArray

# Class: ZodArray\<T, Cardinality\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:487

## Extends

- [`ZodType`](ZodType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, [`ZodArrayDef`](../interfaces/ZodArrayDef.md)\<`T`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

## Type Parameters

### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

### Cardinality

`Cardinality` *extends* [`ArrayCardinality`](../type-aliases/ArrayCardinality.md) = `"many"`

## Constructors

### Constructor

> **new ZodArray**\<`T`, `Cardinality`\>(`def`): `ZodArray`\<`T`, `Cardinality`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodArrayDef`](../interfaces/ZodArrayDef.md)

#### Returns

`ZodArray`\<`T`, `Cardinality`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_def

> `readonly` **\_def**: [`ZodArrayDef`](../interfaces/ZodArrayDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: [`arrayOutputType`](../type-aliases/arrayOutputType.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: [`arrayOutputType`](../type-aliases/arrayOutputType.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

***

### create

> `static` **create**: \<`El`\>(`schema`, `params?`) => `ZodArray`\<`El`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:494

#### Type Parameters

##### El

`El` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### schema

`El`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodArray`\<`El`\>

## Accessors

### description

#### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:53

##### Returns

`string` \| `undefined`

#### Inherited from

[`ZodReadonly`](ZodReadonly.md).[`description`](ZodReadonly.md#description)

***

### element

#### Get Signature

> **get** **element**(): `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:489

##### Returns

`T`

## Methods

### \_getOrReturnCtx()

> **\_getOrReturnCtx**(`input`, `ctx?`): [`ParseContext`](../interfaces/ParseContext.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:57

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

##### ctx?

[`ParseContext`](../interfaces/ParseContext.md)

#### Returns

[`ParseContext`](../interfaces/ParseContext.md)

#### Inherited from

[`ZodType`](ZodType.md).[`_getOrReturnCtx`](ZodType.md#_getorreturnctx)

***

### \_getType()

> **\_getType**(`input`): `string`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:56

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`string`

#### Inherited from

[`ZodType`](ZodType.md).[`_getType`](ZodType.md#_gettype)

***

### \_parse()

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:488

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseSync`](ZodType.md#_parsesync)

***

### \_processInputParams()

> **\_processInputParams**(`input`): `object`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:58

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`object`

##### ctx

> **ctx**: [`ParseContext`](../interfaces/ParseContext.md)

##### status

> **status**: [`ParseStatus`](ParseStatus.md)

#### Inherited from

[`ZodType`](ZodType.md).[`_processInputParams`](ZodType.md#_processinputparams)

***

### \_refinement()

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\> \| `Promise`\<`Result`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\> \| `Promise`\<`Result`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### array()

> **array**(): `ZodArray`\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

`ZodArray`\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodArray`\<`T`, `Cardinality`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodArray`\<`T`, `Cardinality`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

[`arrayOutputType`](../type-aliases/arrayOutputType.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => [`arrayOutputType`](../type-aliases/arrayOutputType.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

***

### describe()

> **describe**(`description`): `this`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:96

#### Parameters

##### description

`string`

#### Returns

`this`

#### Inherited from

[`ZodType`](ZodType.md).[`describe`](ZodType.md#describe)

***

### isNullable()

> **isNullable**(): `boolean`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:100

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isNullable`](ZodType.md#isnullable)

***

### isOptional()

> **isOptional**(): `boolean`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:99

#### Returns

`boolean`

#### Inherited from

[`ZodType`](ZodType.md).[`isOptional`](ZodType.md#isoptional)

***

### length()

> **length**(`len`, `message?`): `this`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:492

#### Parameters

##### len

`number`

##### message?

`ErrMessage`

#### Returns

`this`

***

### max()

> **max**(`maxLength`, `message?`): `this`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:491

#### Parameters

##### maxLength

`number`

##### message?

`ErrMessage`

#### Returns

`this`

***

### min()

> **min**(`minLength`, `message?`): `this`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:490

#### Parameters

##### minLength

`number`

##### message?

`ErrMessage`

#### Returns

`this`

***

### nonempty()

> **nonempty**(`message?`): `ZodArray`\<`T`, `"atleastone"`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:493

#### Parameters

##### message?

`ErrMessage`

#### Returns

`ZodArray`\<`T`, `"atleastone"`\>

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodArray`\<`T`, `Cardinality`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodArray`\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodArray`\<`T`, `Cardinality`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodArray`\<`T`, `Cardinality`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parse()

> **parse**(`data`, `params?`): [`arrayOutputType`](../type-aliases/arrayOutputType.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`arrayOutputType`](../type-aliases/arrayOutputType.md)

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodArray`\<`T`, `Cardinality`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodArray`\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \[`T`\[`"_output"`\], `...T["_output"][]`\] \| `T`\[`"_output"`\][]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \[`T`\[`"_output"`\], `...T["_output"][]`\] \| `T`\[`"_output"`\][]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][], [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \[`T`\[`"_output"`\], `...T["_output"][]`\] \| `T`\[`"_output"`\][]

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `RefinedOutput`, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, [`arrayOutputType`](../type-aliases/arrayOutputType.md)\<`T`, `Cardinality`\>, `Cardinality` *extends* `"atleastone"` ? \[`T`\[`"_input"`\], `...T["_input"][]`\] : `T`\[`"_input"`\][]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodArray`\<`T`, `Cardinality`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)
