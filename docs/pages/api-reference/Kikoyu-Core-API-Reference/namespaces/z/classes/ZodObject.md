[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodObject

# Class: ZodObject\<T, UnknownKeys, Catchall, Output, Input\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:529

## Extends

- [`ZodType`](ZodType.md)\<`Output`, [`ZodObjectDef`](../interfaces/ZodObjectDef.md)\<`T`, `UnknownKeys`, `Catchall`\>, `Input`\>

## Type Parameters

### T

`T` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

### UnknownKeys

`UnknownKeys` *extends* [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md) = [`UnknownKeysParam`](../type-aliases/UnknownKeysParam.md)

### Catchall

`Catchall` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

### Output

`Output` = [`objectOutputType`](../type-aliases/objectOutputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

### Input

`Input` = [`objectInputType`](../type-aliases/objectInputType.md)\<`T`, `Catchall`, `UnknownKeys`\>

## Constructors

### Constructor

> **new ZodObject**\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>(`def`): `ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodObjectDef`](../interfaces/ZodObjectDef.md)

#### Returns

`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_def

> `readonly` **\_def**: [`ZodObjectDef`](../interfaces/ZodObjectDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: `Input`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: `Output`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: `Output`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<`Input`, `Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### ~~augment~~

> **augment**: \<`Augmentation`\>(`augmentation`) => `ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:549

#### Type Parameters

##### Augmentation

`Augmentation` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### augmentation

`Augmentation`

#### Returns

`ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`\>

#### Deprecated

Use `.extend` instead

***

### ~~nonstrict~~

> **nonstrict**: () => `ZodObject`\<`T`, `"passthrough"`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:544

#### Returns

`ZodObject`\<`T`, `"passthrough"`, `Catchall`\>

#### Deprecated

In most cases, this is no longer needed - unknown properties are now silently stripped.
If you want to pass through unknown properties, use `.passthrough()` instead.

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

***

### create

> `static` **create**: \<`Shape`\>(`shape`, `params?`) => `ZodObject`\<`Shape`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<Shape\>, any\>\[k\] \}, \{ \[k in string \| number \| symbol\]: baseObjectInputType\<Shape\>\[k\] \}\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:587

#### Type Parameters

##### Shape

`Shape` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

`Shape`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`Shape`, `"strip"`, [`ZodTypeAny`](../type-aliases/ZodTypeAny.md), \{ \[k in string \| number \| symbol\]: addQuestionMarks\<baseObjectOutputType\<Shape\>, any\>\[k\] \}, \{ \[k in string \| number \| symbol\]: baseObjectInputType\<Shape\>\[k\] \}\>

***

### lazycreate

> `static` **lazycreate**: \<`Shape`\>(`shape`, `params?`) => `ZodObject`\<`Shape`, `"strip"`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:589

#### Type Parameters

##### Shape

`Shape` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

() => `Shape`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`Shape`, `"strip"`\>

***

### strictCreate

> `static` **strictCreate**: \<`Shape`\>(`shape`, `params?`) => `ZodObject`\<`Shape`, `"strict"`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:588

#### Type Parameters

##### Shape

`Shape` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### shape

`Shape`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodObject`\<`Shape`, `"strict"`\>

## Accessors

### description

#### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:53

##### Returns

`string` \| `undefined`

#### Inherited from

[`ZodType`](ZodType.md).[`description`](ZodType.md#description)

***

### shape

#### Get Signature

> **get** **shape**(): `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:536

##### Returns

`T`

## Methods

### \_getCached()

> **\_getCached**(): `object`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:531

#### Returns

`object`

##### keys

> **keys**: `string`[]

##### shape

> **shape**: `T`

***

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:535

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

`Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => `Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### catchall()

> **catchall**\<`Index`\>(`index`): `ZodObject`\<`T`, `UnknownKeys`, `Index`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:559

#### Type Parameters

##### Index

`Index` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### index

`Index`

#### Returns

`ZodObject`\<`T`, `UnknownKeys`, `Index`\>

***

### ~~deepPartial()~~

> **deepPartial**(): `DeepPartial`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:569

#### Returns

`DeepPartial`\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Deprecated

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

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

### extend()

> **extend**\<`Augmentation`\>(`augmentation`): `ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:545

#### Type Parameters

##### Augmentation

`Augmentation` *extends* [`ZodRawShape`](../type-aliases/ZodRawShape.md)

#### Parameters

##### augmentation

`Augmentation`

#### Returns

`ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `UnknownKeys`, `Catchall`\>

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

### keyof()

> **keyof**(): [`ZodEnum`](ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, \[\]\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:586

#### Returns

[`ZodEnum`](ZodEnum.md)\<`CastToStringTuple`\<`UnionToTuple`\<keyof `T`, \[\]\>\>\>

***

### merge()

> **merge**\<`Incoming`, `Augmentation`\>(`merging`): `ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:555

Prior to zod@1.0.12 there was a bug in the
inferred type of merged objects. Please
upgrade if you are experiencing issues.

#### Type Parameters

##### Incoming

`Incoming` *extends* [`AnyZodObject`](../type-aliases/AnyZodObject.md)

##### Augmentation

`Augmentation` *extends* `any`

#### Parameters

##### merging

`Incoming`

#### Returns

`ZodObject`\<[`extendShape`](../namespaces/objectUtil/type-aliases/extendShape.md)\<`T`, `Augmentation`\>, `Incoming`\[`"_def"`\]\[`"unknownKeys"`\], `Incoming`\[`"_def"`\]\[`"catchall"`\]\>

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### omit()

> **omit**\<`Mask`\>(`mask`): `ZodObject`\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:563

#### Type Parameters

##### Mask

`Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

##### mask

`Mask`

#### Returns

`ZodObject`\<`Omit`\<`T`, keyof `Mask`\>, `UnknownKeys`, `Catchall`\>

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parse()

> **parse**(`data`, `params?`): `Output`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Output`

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`Output`\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### partial()

#### Call Signature

> **partial**(): `ZodObject`\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:570

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: ZodOptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`\>

#### Call Signature

> **partial**\<`Mask`\>(`mask`): `ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\]\> : T\[k\] \}\[k\] : never \}, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:573

##### Type Parameters

###### Mask

`Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

###### mask

`Mask`

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? ZodOptional\<T\[k\]\> : T\[k\] \}\[k\] : never \}, `UnknownKeys`, `Catchall`\>

***

### passthrough()

> **passthrough**(): `ZodObject`\<`T`, `"passthrough"`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:539

#### Returns

`ZodObject`\<`T`, `"passthrough"`, `Catchall`\>

***

### pick()

> **pick**\<`Mask`\>(`mask`): `ZodObject`\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:560

#### Type Parameters

##### Mask

`Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

#### Parameters

##### mask

`Mask`

#### Returns

`ZodObject`\<`Pick`\<`T`, `Extract`\<keyof `T`, keyof `Mask`\>\>, `UnknownKeys`, `Catchall`\>

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### required()

#### Call Signature

> **required**(): `ZodObject`\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:578

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: deoptional\<T\[k\]\> \}, `UnknownKeys`, `Catchall`\>

#### Call Signature

> **required**\<`Mask`\>(`mask`): `ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\]\> : T\[k\] \}\[k\] : never \}, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:581

##### Type Parameters

###### Mask

`Mask` *extends* [`Exactly`](../namespaces/util/type-aliases/Exactly.md)\<\{ \[k in string \| number \| symbol\]?: true \}, `Mask`\>

##### Parameters

###### mask

`Mask`

##### Returns

`ZodObject`\<\{ \[k in string \| number \| symbol\]: k extends keyof T ? \{ \[k in string \| number \| symbol\]: k extends keyof Mask ? deoptional\<T\[k\]\> : T\[k\] \}\[k\] : never \}, `UnknownKeys`, `Catchall`\>

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`Input`, `Output`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### setKey()

> **setKey**\<`Key`, `Schema`\>(`key`, `schema`): `ZodObject`\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:556

#### Type Parameters

##### Key

`Key` *extends* `string`

##### Schema

`Schema` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### key

`Key`

##### schema

`Schema`

#### Returns

`ZodObject`\<`T` & `{ [k in string]: Schema }`, `UnknownKeys`, `Catchall`\>

***

### strict()

> **strict**(`message?`): `ZodObject`\<`T`, `"strict"`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:537

#### Parameters

##### message?

`ErrMessage`

#### Returns

`ZodObject`\<`T`, `"strict"`, `Catchall`\>

***

### strip()

> **strip**(): `ZodObject`\<`T`, `"strip"`, `Catchall`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:538

#### Returns

`ZodObject`\<`T`, `"strip"`, `Catchall`\>

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `RefinedOutput`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `Output`, `Input`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodObject`\<`T`, `UnknownKeys`, `Catchall`, `Output`, `Input`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)
