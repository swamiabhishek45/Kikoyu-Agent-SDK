[**Kikoyu Core API Reference**](../../../../README.md)

***

[Kikoyu Core API Reference](../../../../README.md) / [z](../README.md) / objectOutputType

# Type Alias: objectOutputType\<Shape, Catchall, UnknownKeys\>

> **objectOutputType**\<`Shape`, `Catchall`, `UnknownKeys`\> = [`flatten`](../namespaces/objectUtil/type-aliases/flatten.md)\<[`addQuestionMarks`](../namespaces/objectUtil/type-aliases/addQuestionMarks.md)\<[`baseObjectOutputType`](baseObjectOutputType.md)\<`Shape`\>\>\> & [`CatchallOutput`](CatchallOutput.md)\<`Catchall`\> & [`PassthroughType`](PassthroughType.md)\<`UnknownKeys`\>

Defined in: node\_modules/.pnpm/zod@3.25.76/node\_modules/zod/v3/types.d.cts:507

## Type Parameters

### Shape

`Shape` *extends* [`ZodRawShape`](ZodRawShape.md)

### Catchall

`Catchall` *extends* [`ZodTypeAny`](ZodTypeAny.md)

### UnknownKeys

`UnknownKeys` *extends* [`UnknownKeysParam`](UnknownKeysParam.md) = [`UnknownKeysParam`](UnknownKeysParam.md)
