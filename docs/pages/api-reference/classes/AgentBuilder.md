[**Kikoyu Core API Reference**](../README.md)

***

[Kikoyu Core API Reference](../README.md) / AgentBuilder

# Class: AgentBuilder

Defined in: packages/core/src/agent-builder.ts:19

Fluent builder for constructing validated [Agent](Agent.md) instances using method chaining.

## Example

```typescript
const agent = Agent.builder()
  .setName('Support Agent')
  .setInstructions('Help users resolve issues.')
  .setModel(new OpenAIProvider())
  .addTool(myTool)
  .build();
```

## Constructors

### Constructor

> **new AgentBuilder**(): `AgentBuilder`

#### Returns

`AgentBuilder`

## Methods

### addTool()

> **addTool**(`tool`): `this`

Defined in: packages/core/src/agent-builder.ts:58

Attaches a single tool to the agent.

#### Parameters

##### tool

[`Tool`](../interfaces/Tool.md)

Tool definition.

#### Returns

`this`

***

### addTools()

> **addTools**(...`tools`): `this`

Defined in: packages/core/src/agent-builder.ts:67

Attaches multiple tools to the agent.

#### Parameters

##### tools

...[`Tool`](../interfaces/Tool.md)\<`any`, `any`, `any`\>[]

Array of tool definitions.

#### Returns

`this`

***

### build()

> **build**(): [`Agent`](Agent.md)

Defined in: packages/core/src/agent-builder.ts:94

Validates required configuration fields and builds an immutable [Agent](Agent.md).

#### Returns

[`Agent`](Agent.md)

#### Throws

Error if name, instructions, or model are missing.

***

### setInstructions()

> **setInstructions**(`instructions`): `this`

Defined in: packages/core/src/agent-builder.ts:40

Sets the system instructions / persona prompt.

#### Parameters

##### instructions

`string`

Detailed instructions for the agent.

#### Returns

`this`

***

### setModel()

> **setModel**(`model`): `this`

Defined in: packages/core/src/agent-builder.ts:49

Configures the ModelProvider instance.

#### Parameters

##### model

[`ModelProvider`](../interfaces/ModelProvider.md)

ModelProvider implementation (e.g. OpenAIProvider).

#### Returns

`this`

***

### setName()

> **setName**(`name`): `this`

Defined in: packages/core/src/agent-builder.ts:31

Sets the agent's display name.

#### Parameters

##### name

`string`

Non-empty string name for the agent.

#### Returns

`this`

***

### withGuardrails()

> **withGuardrails**(...`guardrails`): `this`

Defined in: packages/core/src/agent-builder.ts:76

Attaches input or output guardrails to the agent.

#### Parameters

##### guardrails

...[`Guardrail`](../interfaces/Guardrail.md)\<`any`\>[]

Guardrail instances.

#### Returns

`this`

***

### withHandoffs()

> **withHandoffs**(...`handoffs`): `this`

Defined in: packages/core/src/agent-builder.ts:85

Attaches handoffs to other target agents.

#### Parameters

##### handoffs

...([`Agent`](Agent.md) \| [`Handoff`](../interfaces/Handoff.md))[]

Handoff or target Agent instances.

#### Returns

`this`
