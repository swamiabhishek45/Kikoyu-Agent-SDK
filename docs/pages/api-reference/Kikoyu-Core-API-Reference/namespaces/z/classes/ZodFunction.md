[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodFunction

# Class: ZodFunction\<Args, Returns\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:713

## Extends

- [`ZodType`](ZodType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

## Type Parameters

### Args

`Args` *extends* [`ZodTuple`](ZodTuple.md)\<`any`, `any`\>

### Returns

`Returns` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

## Constructors

### Constructor

> **new ZodFunction**\<`Args`, `Returns`\>(`def`): `ZodFunction`\<`Args`, `Returns`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)

#### Returns

`ZodFunction`\<`Args`, `Returns`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_def

> `readonly` **\_def**: [`ZodFunctionDef`](../interfaces/ZodFunctionDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

***

### validate

> **validate**: \<`F`\>(`func`) => `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType` : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:721

#### Type Parameters

##### F

`F` *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

##### func

`F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType` : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:714

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`any`\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\> \| `Promise`\<`Result`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\> \| `Promise`\<`Result`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### args()

> **args**\<`Items`\>(...`items`): `ZodFunction`\<[`ZodTuple`](ZodTuple.md)\<`Items`, [`ZodUnknown`](ZodUnknown.md)\>, `Returns`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:717

#### Type Parameters

##### Items

`Items` *extends* \[\] \| \[[`ZodTypeAny`](../type-aliases/ZodTypeAny.md), `...ZodTypeAny[]`\]

#### Parameters

##### items

...`Items`

#### Returns

`ZodFunction`\<[`ZodTuple`](ZodTuple.md)\<`Items`, [`ZodUnknown`](ZodUnknown.md)\>, `Returns`\>

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodFunction`\<`Args`, `Returns`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodFunction`\<`Args`, `Returns`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

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

### implement()

> **implement**\<`F`\>(`func`): `ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType` : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:719

#### Type Parameters

##### F

`F` *extends* (...`args`) => `Returns`\[`"_input"`\]

#### Parameters

##### func

`F`

#### Returns

`ReturnType`\<`F`\> *extends* `Returns`\[`"_output"`\] ? (...`args`) => `ReturnType` : [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodFunction`\<`Args`, `Returns`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodFunction`\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodFunction`\<`Args`, `Returns`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodFunction`\<`Args`, `Returns`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parameters()

> **parameters**(): `Args`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:715

#### Returns

`Args`

***

### parse()

> **parse**(`data`, `params?`): [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodFunction`\<`Args`, `Returns`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodFunction`\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### returns()

> **returns**\<`NewReturnType`\>(`returnType`): `ZodFunction`\<`Args`, `NewReturnType`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:718

#### Type Parameters

##### NewReturnType

`NewReturnType` *extends* [`ZodType`](ZodType.md)\<`any`, `any`, `any`\>

#### Parameters

##### returnType

`NewReturnType`

#### Returns

`ZodFunction`\<`Args`, `NewReturnType`\>

***

### returnType()

> **returnType**(): `Returns`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:716

#### Returns

`Returns`

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### strictImplement()

> **strictImplement**(`func`): [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:720

#### Parameters

##### func

[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

#### Returns

[`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* (...`args`) => `Returns`\[`"_output"`\]

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `RefinedOutput`, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, [`OuterTypeOfFunction`](../type-aliases/OuterTypeOfFunction.md)\<`Args`, `Returns`\>, [`InnerTypeOfFunction`](../type-aliases/InnerTypeOfFunction.md)\<`Args`, `Returns`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodFunction`\<`Args`, `Returns`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

***

### create()

#### Call Signature

> `static` **create**(): `ZodFunction`\<[`ZodTuple`](ZodTuple.md)\<\[\], [`ZodUnknown`](ZodUnknown.md)\>, [`ZodUnknown`](ZodUnknown.md)\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:722

##### Returns

`ZodFunction`\<[`ZodTuple`](ZodTuple.md)\<\[\], [`ZodUnknown`](ZodUnknown.md)\>, [`ZodUnknown`](ZodUnknown.md)\>

#### Call Signature

> `static` **create**\<`T`\>(`args`): `ZodFunction`\<`T`, [`ZodUnknown`](ZodUnknown.md)\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:723

##### Type Parameters

###### T

`T` *extends* [`AnyZodTuple`](../type-aliases/AnyZodTuple.md) = [`ZodTuple`](ZodTuple.md)\<\[\], [`ZodUnknown`](ZodUnknown.md)\>

##### Parameters

###### args

`T`

##### Returns

`ZodFunction`\<`T`, [`ZodUnknown`](ZodUnknown.md)\>

#### Call Signature

> `static` **create**\<`T`, `U`\>(`args`, `returns`): `ZodFunction`\<`T`, `U`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:724

##### Type Parameters

###### T

`T` *extends* [`AnyZodTuple`](../type-aliases/AnyZodTuple.md)

###### U

`U` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

##### Parameters

###### args

`T`

###### returns

`U`

##### Returns

`ZodFunction`\<`T`, `U`\>

#### Call Signature

> `static` **create**\<`T`, `U`\>(`args`, `returns`, `params?`): `ZodFunction`\<`T`, `U`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:725

##### Type Parameters

###### T

`T` *extends* [`AnyZodTuple`](../type-aliases/AnyZodTuple.md) = [`ZodTuple`](ZodTuple.md)\<\[\], [`ZodUnknown`](ZodUnknown.md)\>

###### U

`U` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md) = [`ZodUnknown`](ZodUnknown.md)

##### Parameters

###### args

`T`

###### returns

`U`

###### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

`ZodFunction`\<`T`, `U`\>
