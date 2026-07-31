import OpenAI from 'openai';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
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

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const response = await this.client.chat.completions.create({
      model: this.defaultModel,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      temperature: options?.temperature,
      max_tokens: options?.maxTokens,
      stop: options?.stop,
    });

    const choice = response.choices[0];
    const text = choice?.message?.content ?? '';

    return {
      text,
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
}
