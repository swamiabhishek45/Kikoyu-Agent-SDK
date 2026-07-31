import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
  ModelStreamChunk,
  ToolCall,
} from '../types.js';

export interface GeminiProviderOptions {
  apiKey?: string;
  model?: string;
  baseURL?: string;
}

export class GeminiProvider implements ModelProvider {
  readonly name = 'gemini';
  private apiKey: string;
  private defaultModel: string;
  private baseURL: string;

  constructor(options: GeminiProviderOptions = {}) {
    this.apiKey = options.apiKey ?? process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY ?? '';
    this.defaultModel = options.model ?? 'gemini-1.5-flash';
    this.baseURL = options.baseURL ?? 'https://generativelanguage.googleapis.com/v1beta';
  }

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const systemInstructionMessage = messages.find((m) => m.role === 'system');
    const contentsMessages = messages.filter((m) => m.role !== 'system');

    const contents = contentsMessages.map((msg) => {
      const role = msg.role === 'assistant' ? 'model' : 'user';

      if (msg.role === 'tool') {
        return {
          role: 'user',
          parts: [
            {
              functionResponse: {
                name: msg.name ?? 'tool',
                response: { name: msg.name, content: msg.content },
              },
            },
          ],
        };
      }

      if (msg.role === 'assistant' && msg.toolCalls && msg.toolCalls.length > 0) {
        const parts: any[] = [];
        if (msg.content) {
          parts.push({ text: msg.content });
        }
        for (const tc of msg.toolCalls) {
          parts.push({
            functionCall: {
              name: tc.name,
              args: tc.args,
            },
          });
        }
        return { role: 'model', parts };
      }

      return {
        role,
        parts: [{ text: msg.content }],
      };
    });

    // Format tools for Gemini function declarations
    const tools = options?.tools
      ? [
          {
            functionDeclarations: options.tools.map((t) => ({
              name: t.name,
              description: t.description,
              parameters: t.parameters,
            })),
          },
        ]
      : undefined;

    const body: Record<string, unknown> = {
      contents,
      generationConfig: {
        temperature: options?.temperature,
        maxOutputTokens: options?.maxTokens,
        stopSequences: options?.stop,
      },
    };

    if (systemInstructionMessage) {
      body.systemInstruction = {
        parts: [{ text: systemInstructionMessage.content }],
      };
    }

    if (tools) {
      body.tools = tools;
    }

    const url = `${this.baseURL}/models/${this.defaultModel}:generateContent?key=${this.apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API error (${response.status}): ${errText}`);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = await response.json();
    const candidate = data.candidates?.[0];
    let text = '';
    const toolCalls: ToolCall[] = [];

    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.text) {
          text += part.text;
        }
        if (part.functionCall) {
          toolCalls.push({
            id: `call_${Math.random().toString(36).substring(2, 9)}`,
            name: part.functionCall.name,
            args: part.functionCall.args ?? {},
          });
        }
      }
    }

    return {
      text,
      toolCalls: toolCalls.length > 0 ? toolCalls : undefined,
      finishReason: candidate?.finishReason,
      usage: data.usageMetadata
        ? {
            promptTokens: data.usageMetadata.promptTokenCount,
            completionTokens: data.usageMetadata.candidatesTokenCount,
            totalTokens: data.usageMetadata.totalTokenCount,
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
