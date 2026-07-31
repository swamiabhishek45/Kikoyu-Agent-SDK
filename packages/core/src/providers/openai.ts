import OpenAI from 'openai';
import type { ChatCompletionMessageParam, ChatCompletionTool } from 'openai/resources/chat/completions';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
  ModelStreamChunk,
  ToolCall,
} from '../types.js';

export interface OpenAIProviderOptions {
  apiKey?: string;
  model?: string;
  baseURL?: string;
  client?: OpenAI;
}

export class OpenAIProvider implements ModelProvider {
  readonly name = 'openai';
  private client: OpenAI;
  private defaultModel: string;

  constructor(options: OpenAIProviderOptions = {}) {
    this.defaultModel = options.model ?? 'gpt-4o-mini';
    this.client =
      options.client ??
      new OpenAI({
        apiKey: options.apiKey ?? process.env.OPENAI_API_KEY,
        baseURL: options.baseURL,
      });
  }

  private formatMessages(messages: ModelMessage[]): ChatCompletionMessageParam[] {
    return messages.map((msg) => {
      if (msg.role === 'tool') {
        return {
          role: 'tool',
          tool_call_id: msg.toolCallId ?? '',
          content: msg.content,
        };
      }

      if (msg.role === 'assistant' && msg.toolCalls && msg.toolCalls.length > 0) {
        return {
          role: 'assistant',
          content: msg.content || null,
          tool_calls: msg.toolCalls.map((tc) => ({
            id: tc.id,
            type: 'function' as const,
            function: {
              name: tc.name,
              arguments: JSON.stringify(tc.args),
            },
          })),
        };
      }

      return {
        role: msg.role as 'system' | 'user' | 'assistant',
        content: msg.content,
      };
    });
  }

  private formatTools(tools?: ModelRequestOptions['tools']): ChatCompletionTool[] | undefined {
    return tools
      ? tools.map((t) => ({
          type: 'function' as const,
          function: {
            name: t.name,
            description: t.description,
            parameters: t.parameters,
          },
        }))
      : undefined;
  }

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const formattedMessages = this.formatMessages(messages);
    const formattedTools = this.formatTools(options?.tools);

    const response = await this.client.chat.completions.create({
      model: this.defaultModel,
      messages: formattedMessages,
      tools: formattedTools,
      temperature: options?.temperature,
      max_tokens: options?.maxTokens,
      stop: options?.stop,
    });

    const choice = response.choices[0];
    const text = choice?.message?.content ?? '';

    let toolCalls: ToolCall[] | undefined;

    if (choice?.message?.tool_calls && choice.message.tool_calls.length > 0) {
      toolCalls = choice.message.tool_calls.map((tc) => {
        let parsedArgs: Record<string, unknown> = {};
        try {
          parsedArgs = JSON.parse(tc.function.arguments || '{}');
        } catch {
          parsedArgs = {};
        }
        return {
          id: tc.id,
          name: tc.function.name,
          args: parsedArgs,
        };
      });
    }

    return {
      text,
      toolCalls,
      finishReason: choice?.finish_reason ?? undefined,
      usage: response.usage
        ? {
            promptTokens: response.usage.prompt_tokens,
            completionTokens: response.usage.completion_tokens,
            totalTokens: response.usage.total_tokens,
          }
        : undefined,
    };
  }

  async *streamComplete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): AsyncIterable<ModelStreamChunk> {
    const formattedMessages = this.formatMessages(messages);
    const formattedTools = this.formatTools(options?.tools);

    const stream = await this.client.chat.completions.create({
      model: this.defaultModel,
      messages: formattedMessages,
      tools: formattedTools,
      temperature: options?.temperature,
      max_tokens: options?.maxTokens,
      stop: options?.stop,
      stream: true,
    });

    const toolCallsMap = new Map<number, { id: string; name: string; argsStr: string }>();

    for await (const chunk of stream) {
      const choice = chunk.choices[0];
      if (!choice) continue;

      const delta = choice.delta?.content;
      if (delta) {
        yield { delta };
      }

      if (choice.delta?.tool_calls) {
        for (const tc of choice.delta.tool_calls) {
          const index = tc.index;
          let existing = toolCallsMap.get(index);
          if (!existing) {
            existing = {
              id: tc.id ?? `call_${index}`,
              name: tc.function?.name ?? '',
              argsStr: '',
            };
            toolCallsMap.set(index, existing);
          }
          if (tc.id) existing.id = tc.id;
          if (tc.function?.name) existing.name = tc.function.name;
          if (tc.function?.arguments) existing.argsStr += tc.function.arguments;
        }
      }
    }

    if (toolCallsMap.size > 0) {
      const toolCalls: ToolCall[] = Array.from(toolCallsMap.values()).map((tc) => {
        let args: Record<string, unknown> = {};
        try {
          args = JSON.parse(tc.argsStr || '{}');
        } catch {
          args = {};
        }
        return {
          id: tc.id,
          name: tc.name,
          args,
        };
      });
      yield { toolCalls };
    }
  }
}
