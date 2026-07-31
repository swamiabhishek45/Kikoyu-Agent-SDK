[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodDiscriminatedUnion

# Class: ZodDiscriminatedUnion\<Discriminator, Options\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:611

## Extends

- [`ZodType`](ZodType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)\<`Discriminator`, `Options`\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

## Type Parameters

### Discriminator

`Discriminator` *extends* `string`

### Options

`Options` *extends* readonly [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>[]

## Constructors

### Constructor

> **new ZodDiscriminatedUnion**\<`Discriminator`, `Options`\>(`def`): `ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)

#### Returns

`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_def

> `readonly` **\_def**: [`ZodDiscriminatedUnionDef`](../interfaces/ZodDiscriminatedUnionDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: [`input`](../type-aliases/input.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: [`output`](../type-aliases/output.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: [`output`](../type-aliases/output.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

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

### discriminator

#### Get Signature

> **get** **discriminator**(): `Discriminator`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:613

##### Returns

`Discriminator`

***

### options

#### Get Signature

> **get** **options**(): `Options`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:614

##### Returns

`Options`

***

### optionsMap

#### Get Signature

> **get** **optionsMap**(): `Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:615

##### Returns

`Map`\<[`Primitive`](../type-aliases/Primitive.md), [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`any`\>\>

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:612

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\> \| `Promise`\<`Result`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\> \| `Promise`\<`Result`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

[`output`](../type-aliases/output.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => [`output`](../type-aliases/output.md)

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parse()

> **parse**(`data`, `params?`): [`output`](../type-aliases/output.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`output`](../type-aliases/output.md)

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<[`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* \{ \[k in string \| number\]: addQuestionMarks\<baseObjectOutputType\<\{ \[key in string\]: ZodTypeAny \} & ZodRawShape\>, any\>\[k\] \}

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `RefinedOutput`, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, [`output`](../type-aliases/output.md)\<`Options`\[`number`\]\>, [`input`](../type-aliases/input.md)\<`Options`\[`number`\]\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodDiscriminatedUnion`\<`Discriminator`, `Options`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)

***

### create()

> `static` **create**\<`Discriminator`, `Types`\>(`discriminator`, `options`, `params?`): `ZodDiscriminatedUnion`\<`Discriminator`, `Types`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:624

The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
However, it only allows a union of objects, all of which need to share a discriminator property. This property must
have a different value for each object in the union.

#### Type Parameters

##### Discriminator

`Discriminator` *extends* `string`

##### Types

`Types` *extends* readonly \[[`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>, [`ZodDiscriminatedUnionOption`](../type-aliases/ZodDiscriminatedUnionOption.md)\<`Discriminator`\>\]

#### Parameters

##### discriminator

`Discriminator`

the name of the discriminator property

##### options

`Types`

##### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodDiscriminatedUnion`\<`Discriminator`, `Types`\>
