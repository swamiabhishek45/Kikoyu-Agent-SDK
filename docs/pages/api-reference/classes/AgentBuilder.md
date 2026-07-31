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

[agent-builder.ts:68](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L68)

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

[agent-builder.ts:77](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L77)

***

### build()

> **build**(): [`Agent`](Agent.md)

Validates required configuration fields and builds an immutable [Agent](Agent.md).

#### Returns

[`Agent`](Agent.md)

#### Throws

Error if name, instructions, or model are missing.

#### Defined in

[agent-builder.ts:104](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L104)

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

[agent-builder.ts:59](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L59)

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

[agent-builder.ts:41](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L41)

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

[agent-builder.ts:50](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L50)

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

[agent-builder.ts:32](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L32)

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

[agent-builder.ts:86](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L86)

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

[agent-builder.ts:95](https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/blob/b94d381587e8366b37c07b8fc4dec57c4a1ff640/packages/core/src/agent-builder.ts#L95)
