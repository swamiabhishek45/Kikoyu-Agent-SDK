import { describe, expect, it, vi } from 'vitest';
import { AnthropicProvider, FallbackProvider, GeminiProvider, OpenAIProvider } from '../src/providers/index.js';
import type { ModelProvider, ModelResponse } from '../src/types.js';

describe('Model Providers', () => {
  it('instantiates AnthropicProvider with options', () => {
    const provider = new AnthropicProvider({ apiKey: 'test-key', model: 'claude-3-haiku-20240307' });
    expect(provider.name).toBe('anthropic');
  });

  it('instantiates GeminiProvider with options', () => {
    const provider = new GeminiProvider({ apiKey: 'test-key', model: 'gemini-1.5-pro' });
    expect(provider.name).toBe('gemini');
  });

  it('FallbackProvider uses primary when successful', async () => {
    const primaryResponse: ModelResponse = { text: 'Primary success' };
    const mockPrimary: ModelProvider = {
      name: 'primary',
      complete: vi.fn().mockResolvedValue(primaryResponse),
    };
    const mockBackup: ModelProvider = {
      name: 'backup',
      complete: vi.fn().mockResolvedValue({ text: 'Backup success' }),
    };

    const fallbackProvider = new FallbackProvider({
      primary: mockPrimary,
      fallbacks: [mockBackup],
    });

    const res = await fallbackProvider.complete([{ role: 'user', content: 'hello' }]);
    expect(res.text).toBe('Primary success');
    expect(mockPrimary.complete).toHaveBeenCalledTimes(1);
    expect(mockBackup.complete).not.toHaveBeenCalled();
  });

  it('FallbackProvider cascades to backup when primary throws', async () => {
    const mockPrimary: ModelProvider = {
      name: 'primary',
      complete: vi.fn().mockRejectedValue(new Error('Primary API rate limit exceeded')),
    };
    const mockBackup: ModelProvider = {
      name: 'backup',
      complete: vi.fn().mockResolvedValue({ text: 'Fallback response' }),
    };

    const fallbackProvider = new FallbackProvider({
      primary: mockPrimary,
      fallbacks: [mockBackup],
    });

    const res = await fallbackProvider.complete([{ role: 'user', content: 'hello' }]);
    expect(res.text).toBe('Fallback response');
    expect(mockPrimary.complete).toHaveBeenCalledTimes(1);
    expect(mockBackup.complete).toHaveBeenCalledTimes(1);
  });
});
