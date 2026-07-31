[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / ZodType

# Abstract Class: ZodType\<Output, Def, Input\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:48

## Extended by

- [`ZodString`](ZodString.md)
- [`ZodNumber`](ZodNumber.md)
- [`ZodBigInt`](ZodBigInt.md)
- [`ZodBoolean`](ZodBoolean.md)
- [`ZodDate`](ZodDate.md)
- [`ZodSymbol`](ZodSymbol.md)
- [`ZodUndefined`](ZodUndefined.md)
- [`ZodNull`](ZodNull.md)
- [`ZodAny`](ZodAny.md)
- [`ZodUnknown`](ZodUnknown.md)
- [`ZodNever`](ZodNever.md)
- [`ZodVoid`](ZodVoid.md)
- [`ZodArray`](ZodArray.md)
- [`ZodObject`](ZodObject.md)
- [`ZodUnion`](ZodUnion.md)
- [`ZodDiscriminatedUnion`](ZodDiscriminatedUnion.md)
- [`ZodIntersection`](ZodIntersection.md)
- [`ZodTuple`](ZodTuple.md)
- [`ZodRecord`](ZodRecord.md)
- [`ZodMap`](ZodMap.md)
- [`ZodSet`](ZodSet.md)
- [`ZodFunction`](ZodFunction.md)
- [`ZodLazy`](ZodLazy.md)
- [`ZodLiteral`](ZodLiteral.md)
- [`ZodEnum`](ZodEnum.md)
- [`ZodNativeEnum`](ZodNativeEnum.md)
- [`ZodPromise`](ZodPromise.md)
- [`ZodEffects`](ZodEffects.md)
- [`ZodOptional`](ZodOptional.md)
- [`ZodNullable`](ZodNullable.md)
- [`ZodDefault`](ZodDefault.md)
- [`ZodCatch`](ZodCatch.md)
- [`ZodNaN`](ZodNaN.md)
- [`ZodBranded`](ZodBranded.md)
- [`ZodPipeline`](ZodPipeline.md)
- [`ZodReadonly`](ZodReadonly.md)

## Type Parameters

### Output

`Output` = `any`

### Def

`Def` *extends* [`ZodTypeDef`](../interfaces/ZodTypeDef.md) = [`ZodTypeDef`](../interfaces/ZodTypeDef.md)

### Input

`Input` = `Output`

## Constructors

### Constructor

> **new ZodType**\<`Output`, `Def`, `Input`\>(`def`): `ZodType`\<`Output`, `Def`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:79

#### Parameters

##### def

`Def`

#### Returns

`ZodType`\<`Output`, `Def`, `Input`\>

## Properties

### \_def

> `readonly` **\_def**: `Def`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:52

***

### \_input

> `readonly` **\_input**: `Input`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:51

***

### \_output

> `readonly` **\_output**: `Output`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:50

***

### \_type

> `readonly` **\_type**: `Output`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:49

***

### ~standard

> **~standard**: `Props`\<`Input`, `Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:54

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

## Accessors

### description

#### Get Signature

> **get** **description**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:53

##### Returns

`string` \| `undefined`

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

***

### \_getType()

> **\_getType**(`input`): `string`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:56

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

`string`

***

### \_parse()

> `abstract` **\_parse**(`input`): [`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:55

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`ParseReturnType`](../type-aliases/ParseReturnType.md)\<`Output`\>

***

### \_parseAsync()

> **\_parseAsync**(`input`): [`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:63

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`AsyncParseReturnType`](../type-aliases/AsyncParseReturnType.md)\<`Output`\>

***

### \_parseSync()

> **\_parseSync**(`input`): [`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:62

#### Parameters

##### input

[`ParseInput`](../type-aliases/ParseInput.md)

#### Returns

[`SyncParseReturnType`](../type-aliases/SyncParseReturnType.md)\<`Output`\>

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

***

### \_refinement()

> **\_refinement**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:75

#### Parameters

##### refinement

(`arg`, `ctx`) => `any`

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

***

### ~validate()

> **~validate**(`data`): `Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:66

#### Parameters

##### data

`unknown`

#### Returns

`Result`\<`Output`\> \| `Promise`\<`Result`\<`Output`\>\>

***

### and()

> **and**\<`T`\>(`incoming`): [`ZodIntersection`](ZodIntersection.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:86

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### incoming

`T`

#### Returns

[`ZodIntersection`](ZodIntersection.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

***

### array()

> **array**(): [`ZodArray`](ZodArray.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:83

#### Returns

[`ZodArray`](ZodArray.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### brand()

> **brand**\<`B`\>(`brand?`): [`ZodBranded`](ZodBranded.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `B`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:90

#### Type Parameters

##### B

`B` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### brand?

`B`

#### Returns

[`ZodBranded`](ZodBranded.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `B`\>

***

### catch()

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:91

##### Parameters

###### def

`Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Call Signature

> **catch**(`def`): [`ZodCatch`](ZodCatch.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:92

##### Parameters

###### def

(`ctx`) => `Output`

##### Returns

[`ZodCatch`](ZodCatch.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### default()

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:88

##### Parameters

###### def

[`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

#### Call Signature

> **default**(`def`): [`ZodDefault`](ZodDefault.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:89

##### Parameters

###### def

() => [`noUndefined`](../namespaces/util/type-aliases/noUndefined.md)\<`Input`\>

##### Returns

[`ZodDefault`](ZodDefault.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### describe()

> **describe**(`description`): `this`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:96

#### Parameters

##### description

`string`

#### Returns

`this`

***

### isNullable()

> **isNullable**(): `boolean`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:100

#### Returns

`boolean`

***

### isOptional()

> **isOptional**(): `boolean`

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:99

#### Returns

`boolean`

***

### nullable()

> **nullable**(): [`ZodNullable`](ZodNullable.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:81

#### Returns

[`ZodNullable`](ZodNullable.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### nullish()

> **nullish**(): [`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:82

#### Returns

[`ZodOptional`](ZodOptional.md)\<[`ZodNullable`](ZodNullable.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>\>

***

### optional()

> **optional**(): [`ZodOptional`](ZodOptional.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:80

#### Returns

[`ZodOptional`](ZodOptional.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### or()

> **or**\<`T`\>(`option`): [`ZodUnion`](ZodUnion.md)\<\[`ZodType`\<`Output`, `Def`, `Input`\>, `T`\]\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:85

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### option

`T`

#### Returns

[`ZodUnion`](ZodUnion.md)\<\[`ZodType`\<`Output`, `Def`, `Input`\>, `T`\]\>

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

***

### pipe()

> **pipe**\<`T`\>(`target`): [`ZodPipeline`](ZodPipeline.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:97

#### Type Parameters

##### T

`T` *extends* [`ZodTypeAny`](../type-aliases/ZodTypeAny.md)

#### Parameters

##### target

`T`

#### Returns

[`ZodPipeline`](ZodPipeline.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `T`\>

***

### promise()

> **promise**(): [`ZodPromise`](ZodPromise.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:84

#### Returns

[`ZodPromise`](ZodPromise.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### readonly()

> **readonly**(): [`ZodReadonly`](ZodReadonly.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:98

#### Returns

[`ZodReadonly`](ZodReadonly.md)\<`ZodType`\<`Output`, `Def`, `Input`\>\>

***

### refine()

#### Call Signature

> **refine**\<`RefinedOutput`\>(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

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

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Call Signature

> **refine**(`check`, `message?`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:72

##### Parameters

###### check

(`arg`) => `unknown`

###### message?

`string` \| `Partial`\<[`Omit`](../namespaces/util/type-aliases/Omit.md)\<[`ZodCustomIssue`](../interfaces/ZodCustomIssue.md), `"code"`\>\> \| ((`arg`) => [`CustomErrorParams`](../type-aliases/CustomErrorParams.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

***

### refinement()

#### Call Signature

> **refinement**\<`RefinedOutput`\>(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

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

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Call Signature

> **refinement**(`check`, `refinementData`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:74

##### Parameters

###### check

(`arg`) => `boolean`

###### refinementData

[`IssueData`](../type-aliases/IssueData.md) \| ((`arg`, `ctx`) => [`IssueData`](../type-aliases/IssueData.md))

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

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

***

### superRefine()

#### Call Signature

> **superRefine**\<`RefinedOutput`\>(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:76

##### Type Parameters

###### RefinedOutput

`RefinedOutput`

##### Parameters

###### refinement

(`arg`, `ctx`) => `arg is RefinedOutput`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `RefinedOutput`, `Input`\>

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:77

##### Parameters

###### refinement

(`arg`, `ctx`) => `void`

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

#### Call Signature

> **superRefine**(`refinement`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:78

##### Parameters

###### refinement

(`arg`, `ctx`) => `Promise`\<`void`\>

##### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `Output`, `Input`\>

***

### transform()

> **transform**\<`NewOut`\>(`transform`): [`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `NewOut`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:87

#### Type Parameters

##### NewOut

`NewOut`

#### Parameters

##### transform

(`arg`, `ctx`) => `NewOut` \| `Promise`\<`NewOut`\>

#### Returns

[`ZodEffects`](ZodEffects.md)\<`ZodType`\<`Output`, `Def`, `Input`\>, `NewOut`\>
