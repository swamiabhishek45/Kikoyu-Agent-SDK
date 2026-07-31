import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
  ModelStreamChunk,
  ToolCall,
} from '../types.js';

export interface AnthropicProviderOptions {
  apiKey?: string;
  model?: string;
  baseURL?: string;
}

export class AnthropicProvider implements ModelProvider {
  readonly name = 'anthropic';
  private apiKey: string;
  private defaultModel: string;
  private baseURL: string;

  constructor(options: AnthropicProviderOptions = {}) {
    this.apiKey = options.apiKey ?? process.env.ANTHROPIC_API_KEY ?? '';
    this.defaultModel = options.model ?? 'claude-3-5-sonnet-20240620';
    this.baseURL = options.baseURL ?? 'https://api.anthropic.com/v1';
  }

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const systemMessage = messages.find((m) => m.role === 'system')?.content;
    const nonSystemMessages = messages.filter((m) => m.role !== 'system');

    const formattedMessages = nonSystemMessages.map((msg) => {
      if (msg.role === 'tool') {
        return {
          role: 'user',
          content: [
            {
              type: 'tool_result',
              tool_call_id: msg.toolCallId,
              content: msg.content,
            },
          ],
        };
      }
      if (msg.role === 'assistant' && msg.toolCalls && msg.toolCalls.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const contentBlocks: any[] = [];
        if (msg.content) {
          contentBlocks.push({ type: 'text', text: msg.content });
        }
        for (const tc of msg.toolCalls) {
          contentBlocks.push({
            type: 'tool_use',
            id: tc.id,
            name: tc.name,
            input: tc.args,
          });
        }
        return { role: 'assistant', content: contentBlocks };
      }
      return {
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content,
      };
    });

    const tools = options?.tools?.map((t) => ({
      name: t.name,
      description: t.description,
      input_schema: t.parameters,
    }));

    const body: Record<string, unknown> = {
      model: this.defaultModel,
      max_tokens: options?.maxTokens ?? 1024,
      messages: formattedMessages,
      temperature: options?.temperature,
    };

    if (systemMessage) {
      body.system = systemMessage;
    }
    if (tools && tools.length > 0) {
      body.tools = tools;
    }

    const response = await fetch(`${this.baseURL}/messages`, {
      method: 'POST',
      headers: {
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Anthropic API error (${response.status}): ${errText}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await response.json();
    let text = '';
    const toolCalls: ToolCall[] = [];

    if (Array.isArray(data.content)) {
      for (const block of data.content) {
        if (block.type === 'text') {
          text += block.text;
        } else if (block.type === 'tool_use') {
          toolCalls.push({
            id: block.id,
            name: block.name,
            args: block.input ?? {},
          });
        }
      }
    }

    return {
      text,
      toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
      usage: data.usage
        ? {
            promptTokens: data.usage.input_tokens,
            completionTokens: data.usage.output_tokens,
            totalTokens: (data.usage.input_tokens ?? 0) + (data.usage.output_tokens ?? 0),
          }
        : undefined,
    };
  }

  async *streamComplete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): AsyncIterable<ModelStreamChunk> {
    const res = await this.complete(messages, options);
    if (res.text) {
      yield { delta: res.text };
    }
    if (res.toolCalls && res.toolCalls.length > 0) {
      yield { toolCalls: res.toolCalls };
    }
  }
}
