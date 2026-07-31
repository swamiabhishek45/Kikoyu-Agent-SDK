[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / AgentBuilder

# Class: AgentBuilder

Fluent builder for constructing validated [Agent](Agent.md) instances using method chaining.

## Example

```typescript
const agent = Agent.builder()
  .setName('Support Agent')
  .setInstructions('Help users resolve issues.')
  .setApiKey(process.env.KIKOYU_API_KEY)
  .addTool(myTool)
  .build();
```

## Constructors

### new AgentBuilder()

> **new AgentBuilder**(): [`AgentBuilder`](AgentBuilder.md)

#### Returns

[`AgentBuilder`](AgentBuilder.md)

## Methods

### addTool()

> **addTool**(`tool`): `this`

Attaches a single tool to the agent.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

Tool definition.

#### Returns

`this`

#### Defined in

[agent-builder.ts:72](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L72)

***

### addTools()

> **addTools**(...`tools`): `this`

Attaches multiple tools to the agent.

#### Parameters

##### tools

...[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

Array of tool definitions.

#### Returns

`this`

#### Defined in

[agent-builder.ts:81](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L81)

***

### build()

> **build**(): [`Agent`](Agent.md)

Validates required configuration fields and builds an immutable [Agent](Agent.md).

#### Returns

[`Agent`](Agent.md)

#### Throws

Error if name, instructions, or model are missing.

#### Defined in

[agent-builder.ts:133](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L133)

***

### setApiKey()

> **setApiKey**(`apiKey`): `this`

Convenience helper to set up OpenAIProvider / Kikoyu API Key.

#### Parameters

##### apiKey

`string`

API key string.

#### Returns

`this`

#### Defined in

[agent-builder.ts:63](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L63)

***

### setInstructions()

> **setInstructions**(`instructions`): `this`

Sets the system instructions / persona prompt.

#### Parameters

##### instructions

`string`

Detailed instructions for the agent.

#### Returns

`this`

#### Defined in

[agent-builder.ts:45](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L45)

***

### setModel()

> **setModel**(`model`): `this`

Configures the ModelProvider instance.

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

ModelProvider implementation (e.g. OpenAIProvider).

#### Returns

`this`

#### Defined in

[agent-builder.ts:54](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L54)

***

### setName()

> **setName**(`name`): `this`

Sets the agent's display name.

#### Parameters

##### name

`string`

Non-empty string name for the agent.

#### Returns

`this`

#### Defined in

[agent-builder.ts:36](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L36)

***

### withGuardrails()

> **withGuardrails**(...`guardrails`): `this`

Attaches input or output guardrails to the agent.

#### Parameters

##### guardrails

...[`Guardrail`](../interfaces/Guardrail.md)\<`any`\>[]

Guardrail instances.

#### Returns

`this`

#### Defined in

[agent-builder.ts:90](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L90)

***

### withHandoffs()

> **withHandoffs**(...`handoffs`): `this`

Attaches handoffs to other target agents.

#### Parameters

##### handoffs

...([`Agent`](Agent.md) \| [`Handoff`](../interfaces/Handoff.md))[]

Handoff or target Agent instances.

#### Returns

`this`

#### Defined in

[agent-builder.ts:99](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L99)

***

### withMaxHandoffs()

> **withMaxHandoffs**(`max`): `this`

Sets maximum allowed agent handoffs before loop prevention triggers.

#### Parameters

##### max

`number`

#### Returns

`this`

#### Defined in

[agent-builder.ts:116](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L116)

***

### withMaxRetries()

> **withMaxRetries**(`max`): `this`

Sets maximum model retry attempts.

#### Parameters

##### max

`number`

#### Returns

`this`

#### Defined in

[agent-builder.ts:124](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L124)

***

### withResponseSchema()

> **withResponseSchema**(`schema`): `this`

Configures a Zod response schema for structured output.

#### Parameters

##### schema

`any`

#### Returns

`this`

#### Defined in

[agent-builder.ts:108](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/3996f7505baeacb8a12b6235b4a00961beacdbc1/packages/core/src/agent-builder.ts#L108)
