import { zodToJsonSchema as convert } from 'zod-to-json-schema';
import type { z } from 'zod';

export function zodToJsonSchema(schema: z.ZodType): Record<string, unknown> {
  const jsonSchema = convert(schema, { target: 'openAi' });
  if (typeof jsonSchema === 'object' && jsonSchema !== null) {
    const { $schema, ...cleanSchema } = jsonSchema as Record<string, unknown>;
    return cleanSchema;
  }
  return jsonSchema as Record<string, unknown>;
}
