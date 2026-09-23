import { z } from '@kikoyu/core';
import type { ZodTypeAny } from 'zod';

type JsonSchemaProperty = {
  type?: string;
  enum?: string[];
  description?: string;
  default?: unknown;
};

/**
 * Converts a minimal JSON Schema object definition into a Zod schema for inline API tools.
 */
export function jsonSchemaToZod(schema?: Record<string, unknown>): ZodTypeAny {
  if (!schema || schema.type !== 'object') {
    return z.object({});
  }

  const properties = schema.properties as Record<string, JsonSchemaProperty> | undefined;
  if (!properties || typeof properties !== 'object') {
    return z.object({});
  }

  const required = Array.isArray(schema.required)
    ? (schema.required as string[])
    : [];

  const shape: Record<string, ZodTypeAny> = {};

  for (const [key, prop] of Object.entries(properties)) {
    if (!prop || typeof prop !== 'object') {
      continue;
    }

    let field: ZodTypeAny;

    if (prop.enum && prop.enum.length > 0) {
      field = z.enum(prop.enum as [string, ...string[]]);
    } else {
      switch (prop.type) {
        case 'number':
        case 'integer':
          field = z.number();
          break;
        case 'boolean':
          field = z.boolean();
          break;
        case 'array':
          field = z.array(z.unknown());
          break;
        default:
          field = z.string();
      }
    }

    if (prop.description) {
      field = field.describe(prop.description);
    }

    if (!required.includes(key)) {
      field = field.optional();
      if (prop.default !== undefined) {
        field = field.default(prop.default as never);
      }
    }

    shape[key] = field;
  }

  return z.object(shape);
}
