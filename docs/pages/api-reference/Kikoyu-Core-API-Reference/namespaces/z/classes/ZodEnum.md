[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodEnum

# Class: ZodEnum\<T\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:762

## Extends

- [`ZodType`](ZodType.md)\<`T`\[`number`\], [`ZodEnumDef`](../interfaces/ZodEnumDef.md)\<`T`\>, `T`\[`number`\]\>

## Type Parameters

### T

`T` *extends* \[`string`, `...string[]`\]

## Constructors

### Constructor

> **new ZodEnum**\<`T`\>(`def`): `ZodEnum`\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

[`ZodEnumDef`](../interfaces/ZodEnumDef.md)

#### Returns

`ZodEnum`\<`T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`constructor`](ZodType.md#constructor)

## Properties

### \_cache

> **\_cache**: `Set`\<`T`\[`number`\]\> \| `undefined`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:763

***

### \_def

> `readonly` **\_def**: [`ZodEnumDef`](../interfaces/ZodEnumDef.md)

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

#### Inherited from

[`ZodType`](ZodType.md).[`_def`](ZodType.md#_def)

***

### \_input

> `readonly` **\_input**: `T`\[`number`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

#### Inherited from

[`ZodType`](ZodType.md).[`_input`](ZodType.md#_input)

***

### \_output

> `readonly` **\_output**: `T`\[`number`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

#### Inherited from

[`ZodType`](ZodType.md).[`_output`](ZodType.md#_output)

***

### \_type

> `readonly` **\_type**: `T`\[`number`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

#### Inherited from

[`ZodType`](ZodType.md).[`_type`](ZodType.md#_type)

***

### ~standard

> **~standard**: `Props`\<`T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

#### Inherited from

[`ZodType`](ZodType.md).[`~standard`](ZodType.md#standard)

***

### spa

> **spa**: (`data`, `params?`) => `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:70

Alias of safeParseAsync

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`spa`](ZodType.md#spa)

***

### create

> `static` **create**: \{\<`U`, `T`\>(`values`, `params?`): `ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>; \<`U`, `T`\>(`values`, `params?`): `ZodEnum`\<`T`\>; \}

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:771

#### Call Signature

> \<`U`, `T`\>(`values`, `params?`): `ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>

##### Type Parameters

###### U

`U` *extends* `string`

###### T

`T` *extends* readonly \[`U`, `U`\]

##### Parameters

###### values

`T`

###### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

`ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`T`\>\>

#### Call Signature

> \<`U`, `T`\>(`values`, `params?`): `ZodEnum`\<`T`\>

##### Type Parameters

###### U

`U` *extends* `string`

###### T

`T` *extends* \[`U`, `...U[]`\]

##### Parameters

###### values

`T`

###### params?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

##### Returns

`ZodEnum`\<`T`\>

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

### enum

#### Get Signature

> **get** **enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:766

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

***

### Enum

#### Get Signature

> **get** **Enum**(): [`Values`](../type-aliases/Values.md)\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:768

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

***

### options

#### Get Signature

> **get** **options**(): `T`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:765

##### Returns

`T`

***

### Values

#### Get Signature

> **get** **Values**(): [`Values`](../type-aliases/Values.md)\<`T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:767

##### Returns

[`Values`](../type-aliases/Values.md)\<`T`\>

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

> **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:764

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`T`\[`number`\]\>

#### Overrides

[`ZodType`](ZodType.md).[`_parse`](ZodType.md#_parse)

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_parseAsync`](ZodType.md#_parseasync)

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`T`\[`number`\]\>

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

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`_refinement`](ZodType.md#_refinement)

***

### ~validate()

> **~validate**(`data`): `Result`\<`T`\[`number`\]\> \| `Promise`\<`Result`\<`T`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<`T`\[`number`\]\> \| `Promise`\<`Result`\<`T`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`~validate`](ZodType.md#validate)

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodEnum`\<`T`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodEnum`\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`and`](ZodType.md#and)

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodEnum`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`array`](ZodType.md#array)

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodEnum`\<`T`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodEnum`\<`T`\>, `B`\>

#### Inherited from

[`ZodType`](ZodType.md).[`brand`](ZodType.md#brand)

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

`T`\[`number`\]

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodEnum`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => `T`\[`number`\]

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodEnum`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`catch`](ZodType.md#catch)

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`number`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodEnum`\<`T`\>\>

##### Inherited from

[`ZodType`](ZodType.md).[`default`](ZodType.md#default)

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`T`\[`number`\]\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodEnum`\<`T`\>\>

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

### exclude()

> **exclude**\<`ToExclude`\>(`values`, `newDef?`): `ZodEnum`\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, \[`string`, `...string[]`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:770

#### Type Parameters

##### ToExclude

`ToExclude` *extends* readonly \[`T`\[`number`\], `T`\[`number`\]\]

#### Parameters

##### values

`ToExclude`

##### newDef?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<[`typecast`](../type-aliases/typecast.md)\<[`Writeable`](../type-aliases/Writeable.md)\<[`FilterEnum`](../type-aliases/FilterEnum.md)\<`T`, `ToExclude`\[`number`\]\>\>, \[`string`, `...string[]`\]\>\>

***

### extract()

> **extract**\<`ToExtract`\>(`values`, `newDef?`): `ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:769

#### Type Parameters

##### ToExtract

`ToExtract` *extends* readonly \[`T`\[`number`\], `T`\[`number`\]\]

#### Parameters

##### values

`ToExtract`

##### newDef?

[`RawCreateParams`](../type-aliases/RawCreateParams.md)

#### Returns

`ZodEnum`\<[`Writeable`](../type-aliases/Writeable.md)\<`ToExtract`\>\>

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

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodEnum`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullable`](ZodType.md#nullable)

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodEnum`\<`T`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodEnum`\<`T`\>\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`nullish`](ZodType.md#nullish)

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodEnum`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`optional`](ZodType.md#optional)

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodEnum`\<`T`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodEnum`\<`T`\>, `T`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`or`](ZodType.md#or)

***

### parse()

> **parse**(`data`, `params?`): `T`\[`number`\]

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:64

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`T`\[`number`\]

#### Inherited from

[`ZodType`](ZodType.md).[`parse`](ZodType.md#parse)

***

### parseAsync()

> **parseAsync**(`data`, `params?`): `Promise`\<`T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:67

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<`T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`parseAsync`](ZodType.md#parseasync)

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodEnum`\<`T`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodEnum`\<`T`\>, `T`\>

#### Inherited from

[`ZodType`](ZodType.md).[`pipe`](ZodType.md#pipe)

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodEnum`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`promise`](ZodType.md#promise)

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodEnum`\<`T`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodEnum`\<`T`\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`readonly`](ZodType.md#readonly)

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:71

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `string`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refine`](ZodType.md#refine)

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:73

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `string`

##### Parameters

###### check

(`arg`) => `arg is RefinedOutput`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`refinement`](ZodType.md#refinement)

***

### safeParse()

> **safeParse**(`data`, `params?`): [`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:65

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParse`](ZodType.md#safeparse)

***

### safeParseAsync()

> **safeParseAsync**(`data`, `params?`): `Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:68

#### Parameters

##### data

`unknown`

##### params?

[`InexactPartial`](../namespaces/util/type-aliases/InexactPartial.md)\<[`ParseParams`](../type-aliases/ParseParams.md)\>

#### Returns

`Promise`\<[`SafeParseReturnType`](../type-aliases/SafeParseReturnType.md)\<`T`\[`number`\], `T`\[`number`\]\>\>

#### Inherited from

[`ZodType`](ZodType.md).[`safeParseAsync`](ZodType.md#safeparseasync)

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput` *extends* `string`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `RefinedOutput`, `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `T`\[`number`\], `T`\[`number`\]\>

##### Inherited from

[`ZodType`](ZodType.md).[`superRefine`](ZodType.md#superrefine)

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodEnum`\<`T`\>, `NewOut`\>

#### Inherited from

[`ZodType`](ZodType.md).[`transform`](ZodType.md#transform)
