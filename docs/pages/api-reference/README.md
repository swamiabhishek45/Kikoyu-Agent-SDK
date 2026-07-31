**Kikoyu Core API Reference**

***

# Kikoyu Core API Reference

## Classes

- [Agent](classes/Agent.md)
- [AgentBuilder](classes/AgentBuilder.md)
- [GuardrailError](classes/GuardrailError.md)
- [InMemoryStore](classes/InMemoryStore.md)
- [OpenAIProvider](classes/OpenAIProvider.md)
- [RunContext](classes/RunContext.md)
- [Runner](classes/Runner.md)
- [Session](classes/Session.md)
- [ToolRegistry](classes/ToolRegistry.md)

## Interfaces

- [AgentConfig](interfaces/AgentConfig.md)
- [Guardrail](interfaces/Guardrail.md)
- [GuardrailResult](interfaces/GuardrailResult.md)
- [Handoff](interfaces/Handoff.md)
- [HandoffOccurredEvent](interfaces/HandoffOccurredEvent.md)
- [HandoffOptions](interfaces/HandoffOptions.md)
- [MemoryStore](interfaces/MemoryStore.md)
- [ModelMessage](interfaces/ModelMessage.md)
- [ModelProvider](interfaces/ModelProvider.md)
- [ModelRequestOptions](interfaces/ModelRequestOptions.md)
- [ModelResponse](interfaces/ModelResponse.md)
- [ModelStreamChunk](interfaces/ModelStreamChunk.md)
- [ModelToolDefinition](interfaces/ModelToolDefinition.md)
- [OpenAIProviderOptions](interfaces/OpenAIProviderOptions.md)
- [RunCompleteEvent](interfaces/RunCompleteEvent.md)
- [RunOptions](interfaces/RunOptions.md)
- [RunResult](interfaces/RunResult.md)
- [SessionOptions](interfaces/SessionOptions.md)
- [TextDeltaEvent](interfaces/TextDeltaEvent.md)
- [TokenUsage](interfaces/TokenUsage.md)
- [Tool](interfaces/Tool.md)
- [ToolCall](interfaces/ToolCall.md)
- [ToolCallFinishedEvent](interfaces/ToolCallFinishedEvent.md)
- [ToolCallStartedEvent](interfaces/ToolCallStartedEvent.md)
- [ToolResult](interfaces/ToolResult.md)

## Type Aliases

- [GuardrailFunction](type-aliases/GuardrailFunction.md)
- [GuardrailType](type-aliases/GuardrailType.md)
- [ModelRole](type-aliases/ModelRole.md)
- [StreamEvent](type-aliases/StreamEvent.md)

## Functions

- [createGuardrail](functions/createGuardrail.md)
- [createHandoff](functions/createHandoff.md)
- [createTool](functions/createTool.md)
- [zodToJsonSchema](functions/zodToJsonSchema.md)
