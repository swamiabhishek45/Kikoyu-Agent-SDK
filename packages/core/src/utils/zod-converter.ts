import { zodToJsonSchema as convert } from 'zod-to-json-schema';
import type { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function zodToJsonSchema(schema: z.ZodTypeAny | any): Record<string, unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonSchema = (convert as any)(schema, { target: 'openAi' });
  if (typeof jsonSchema === 'object' && jsonSchema !== null) {
    const { $schema, ...cleanSchema } = jsonSchema as Record<string, unknown>;
    return cleanSchema;
  }
  return jsonSchema as Record<string, unknown>;
}
