**Kikoyu Core API Reference**

***

# Kikoyu Core API Reference

## Classes

- [Agent](classes/Agent.md)
- [AgentBuilder](classes/AgentBuilder.md)
- [AnthropicProvider](classes/AnthropicProvider.md)
- [FallbackProvider](classes/FallbackProvider.md)
- [FileStore](classes/FileStore.md)
- [GeminiProvider](classes/GeminiProvider.md)
- [GuardrailError](classes/GuardrailError.md)
- [InMemoryStore](classes/InMemoryStore.md)
- [OpenAIProvider](classes/OpenAIProvider.md)
- [RedisStore](classes/RedisStore.md)
- [RunContext](classes/RunContext.md)
- [Runner](classes/Runner.md)
- [Session](classes/Session.md)
- [ToolRegistry](classes/ToolRegistry.md)
- [TraceCollector](classes/TraceCollector.md)

## Interfaces

- [AgentConfig](interfaces/AgentConfig.md)
- [AnthropicProviderOptions](interfaces/AnthropicProviderOptions.md)
- [FallbackProviderOptions](interfaces/FallbackProviderOptions.md)
- [FileStoreOptions](interfaces/FileStoreOptions.md)
- [GeminiProviderOptions](interfaces/GeminiProviderOptions.md)
- [Guardrail](interfaces/Guardrail.md)
- [GuardrailResult](interfaces/GuardrailResult.md)
- [GuardrailTriggeredEvent](interfaces/GuardrailTriggeredEvent.md)
- [Handoff](interfaces/Handoff.md)
- [HandoffOccurredEvent](interfaces/HandoffOccurredEvent.md)
- [HandoffOptions](interfaces/HandoffOptions.md)
- [MemoryStore](interfaces/MemoryStore.md)
- [MinimalRedisClient](interfaces/MinimalRedisClient.md)
- [ModelMessage](interfaces/ModelMessage.md)
- [ModelProvider](interfaces/ModelProvider.md)
- [ModelRequestOptions](interfaces/ModelRequestOptions.md)
- [ModelResponse](interfaces/ModelResponse.md)
- [ModelStreamChunk](interfaces/ModelStreamChunk.md)
- [ModelToolDefinition](interfaces/ModelToolDefinition.md)
- [OpenAIProviderOptions](interfaces/OpenAIProviderOptions.md)
- [RetryAttemptedEvent](interfaces/RetryAttemptedEvent.md)
- [RunCompleteEvent](interfaces/RunCompleteEvent.md)
- [RunFailedEvent](interfaces/RunFailedEvent.md)
- [RunOptions](interfaces/RunOptions.md)
- [RunResult](interfaces/RunResult.md)
- [RunTrace](interfaces/RunTrace.md)
- [SessionOptions](interfaces/SessionOptions.md)
- [StepTrace](interfaces/StepTrace.md)
- [StructuredOutputRepairOptions](interfaces/StructuredOutputRepairOptions.md)
- [StructuredOutputResult](interfaces/StructuredOutputResult.md)
- [TextDeltaEvent](interfaces/TextDeltaEvent.md)
- [TokenUsage](interfaces/TokenUsage.md)
- [Tool](interfaces/Tool.md)
- [ToolApprovalRequestedEvent](interfaces/ToolApprovalRequestedEvent.md)
- [ToolCall](interfaces/ToolCall.md)
- [ToolCallFinishedEvent](interfaces/ToolCallFinishedEvent.md)
- [ToolCallStartedEvent](interfaces/ToolCallStartedEvent.md)
- [ToolResult](interfaces/ToolResult.md)

## Type Aliases

- [GuardrailFunction](type-aliases/GuardrailFunction.md)
- [GuardrailType](type-aliases/GuardrailType.md)
- [ModelRole](type-aliases/ModelRole.md)
- [StreamEvent](type-aliases/StreamEvent.md)
- [ToolApprovalHandler](type-aliases/ToolApprovalHandler.md)

## Functions

- [createGuardrail](functions/createGuardrail.md)
- [createHandoff](functions/createHandoff.md)
- [createTool](functions/createTool.md)
- [parseAndValidateStructuredOutput](functions/parseAndValidateStructuredOutput.md)
- [repairStructuredOutput](functions/repairStructuredOutput.md)
- [zodToJsonSchema](functions/zodToJsonSchema.md)
