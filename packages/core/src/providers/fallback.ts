import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
  ModelStreamChunk,
} from '../types.js';

export interface FallbackProviderOptions {
  primary: ModelProvider;
  fallbacks: ModelProvider[];
}

export class FallbackProvider implements ModelProvider {
  readonly name: string;
  private primary: ModelProvider;
  private fallbacks: ModelProvider[];

  constructor(options: FallbackProviderOptions) {
    if (!options.primary) {
      throw new Error('FallbackProvider requires a primary provider.');
    }
    this.primary = options.primary;
    this.fallbacks = options.fallbacks ?? [];
    const fallbackNames = this.fallbacks.map((f) => f.name).join(', ');
    this.name = `fallback(${this.primary.name} -> [${fallbackNames}])`;
  }

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const providers = [this.primary, ...this.fallbacks];
    const errors: Array<{ provider: string; error: string }> = [];

    for (const provider of providers) {
      try {
        return await provider.complete(messages, options);
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        errors.push({ provider: provider.name, error: errorMsg });
      }
    }

    const summary = errors.map((e) => `${e.provider}: ${e.error}`).join(' | ');
    throw new Error(`All providers in FallbackProvider failed. Details: ${summary}`);
  }

  async *streamComplete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): AsyncIterable<ModelStreamChunk> {
    const providers = [this.primary, ...this.fallbacks];
    const errors: Array<{ provider: string; error: string }> = [];

    for (const provider of providers) {
      try {
        if (typeof provider.streamComplete === 'function') {
          for await (const chunk of provider.streamComplete(messages, options)) {
            yield chunk;
          }
          return;
        } else {
          const res = await provider.complete(messages, options);
          if (res.text) yield { delta: res.text };
          if (res.toolCalls && res.toolCalls.length > 0) yield { toolCalls: res.toolCalls };
          return;
        }
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        errors.push({ provider: provider.name, error: errorMsg });
      }
    }

    const summary = errors.map((e) => `${e.provider}: ${e.error}`).join(' | ');
    throw new Error(`All providers in FallbackProvider failed during stream. Details: ${summary}`);
  }
}
