import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { parseAndValidateStructuredOutput, repairStructuredOutput } from '../src/structured-output.js';
import type { ModelProvider } from '../src/types.js';

describe('Structured Output & Auto-Repair', () => {
  const UserSchema = z.object({
    name: z.string(),
    age: z.number(),
  });

  it('parses valid json matching schema', async () => {
    const raw = '{"name": "Alice", "age": 30}';
    const res = await parseAndValidateStructuredOutput(raw, UserSchema);
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data).toEqual({ name: 'Alice', age: 30 });
    }
  });

  it('parses JSON formatted in markdown code block', async () => {
    const raw = '```json\n{"name": "Bob", "age": 25}\n```';
    const res = await parseAndValidateStructuredOutput(raw, UserSchema);
    expect(res.success).toBe(true);
    if (res.success) {
      expect(res.data).toEqual({ name: 'Bob', age: 25 });
    }
  });

  it('returns failure for schema type mismatch', async () => {
    const raw = '{"name": "Bob", "age": "twenty-five"}';
    const res = await parseAndValidateStructuredOutput(raw, UserSchema);
    expect(res.success).toBe(false);
  });

  it('repairStructuredOutput invokes model repair prompt and parses corrected response', async () => {
    const mockModel: ModelProvider = {
      name: 'mock',
      complete: vi.fn().mockResolvedValue({
        text: '{"name": "Charlie", "age": 40}',
      }),
    };

    const repaired = await repairStructuredOutput(
      mockModel,
      [],
      'invalid json text',
      'JSON parse error',
      UserSchema,
      2
    );

    expect(repaired.success).toBe(true);
    expect(repaired.data).toEqual({ name: 'Charlie', age: 40 });
    expect(mockModel.complete).toHaveBeenCalledTimes(1);
  });
});
