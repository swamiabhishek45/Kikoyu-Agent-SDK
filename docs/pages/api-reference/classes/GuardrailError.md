[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / GuardrailError

# Class: GuardrailError

## Extends

- `Error`

## Constructors

### new GuardrailError()

> **new GuardrailError**(`guardrailName`, `guardrailType`, `reasoning`?, `metadata`?): [`GuardrailError`](GuardrailError.md)

#### Parameters

##### guardrailName

`string`

##### guardrailType

[`GuardrailType`](../type-aliases/GuardrailType.md)

##### reasoning?

`string`

##### metadata?

`Record`\<`string`, `unknown`\>

#### Returns

[`GuardrailError`](GuardrailError.md)

#### Overrides

`Error.constructor`

#### Defined in

[guardrail.ts:30](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/guardrail.ts#L30)

## Properties

### guardrailName

> `readonly` **guardrailName**: `string`

#### Defined in

[guardrail.ts:25](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/guardrail.ts#L25)

***

### guardrailType

> `readonly` **guardrailType**: [`GuardrailType`](../type-aliases/GuardrailType.md)

#### Defined in

[guardrail.ts:26](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/guardrail.ts#L26)

***

### metadata?

> `readonly` `optional` **metadata**: `Record`\<`string`, `unknown`\>

#### Defined in

[guardrail.ts:28](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/guardrail.ts#L28)

***

### reasoning?

> `readonly` `optional` **reasoning**: `string`

#### Defined in

[guardrail.ts:27](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/guardrail.ts#L27)
