import { describe, expect, it } from 'vitest';
import { jsonSchemaToZod } from '../lib/json-schema-zod.js';

describe('jsonSchemaToZod', () => {
  it('returns empty object schema when schema is missing', () => {
    const schema = jsonSchemaToZod(undefined);
    expect(schema.parse({})).toEqual({});
  });

  it('parses string properties and required fields', () => {
    const schema = jsonSchemaToZod({
      type: 'object',
      properties: {
        location: { type: 'string', description: 'City' },
        unit: { type: 'string', enum: ['celsius', 'fahrenheit'] },
      },
      required: ['location'],
    });

    expect(schema.parse({ location: 'Tokyo' })).toEqual({ location: 'Tokyo' });
    expect(() => schema.parse({})).toThrow();
  });
});
