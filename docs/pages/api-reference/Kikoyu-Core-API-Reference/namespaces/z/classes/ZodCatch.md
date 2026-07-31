[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodCatch

# Class: ZodCatch\<T\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:864

## Extends

- [`ZodType`](ZodType.md)\<`T`\[`"_output"`\], [`ZodCatchDef`](../interfaces/ZodCatchDef.md)\<`T`\>, `unknown`\>

## Type Parameters

### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Constructors

### Constructor

> **new ZodCatch**\<`T`\>(`def`): `ZodCatch`\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodCatchDef`](../interfaces/ZodCatchDef.md)

#### Returns

`ZodCatch`\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_def

> `readonly` **\_def**: [`ZodCatchDef`](../interfaces/ZodCatchDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: `unknown`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: `T`\[`"_output"`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: `T`\[`"_output"`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<`unknown`, `T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

***

### create

> `static` **create**: \<`Inner`\>(`type`, `params`) => `ZodCatch`\<`Inner`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:867

#### Type Parameters

##### Inner

`Inner` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### type

`Inner`

##### params

`object` & `object`

#### Returns

`ZodCatch`\<`Inner`\>

## Accessors

### description

#### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:53

##### Returns

`string` \| `undefined`

#### Inherited from

[`ZodType`](ZodType.md).[`description`](ZodType.md#description)

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:865

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`"_output"`\]\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`"_output"`\]\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<`T`\[`"_output"`\]\> \| `Promise`\<`Result`\<`T`\[`"_output"`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<`T`\[`"_output"`\]\> \| `Promise`\<`Result`\<`T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodCatch`\<`T`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodCatch`\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodCatch`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodCatch`\<`T`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodCatch`\<`T`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): `ZodCatch`\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

`T`\[`"_output"`\]

##### Returns

`ZodCatch`\<`ZodCatch`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): `ZodCatch`\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => `T`\[`"_output"`\]

##### Returns

`ZodCatch`\<`ZodCatch`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

`unknown`

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodCatch`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => `unknown`

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodCatch`\<`T`\>\>

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

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodCatch`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodCatch`\<`T`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodCatch`\<`T`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodCatch`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodCatch`\<`T`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodCatch`\<`T`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parse()

> **parse**(`data`, `params?`): `T`\[`"_output"`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`T`\[`"_output"`\]

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<`T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodCatch`\<`T`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodCatch`\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodCatch`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodCatch`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodCatch`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `any`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `any`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### removeCatch()

> **removeCatch**(): `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:866

#### Returns

`T`

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`unknown`, `T`\[`"_output"`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `any`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `RefinedOutput`, `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `T`\[`"_output"`\], `unknown`\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodCatch`\<`T`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)
