import type { z } from 'zod';
import { zodToJsonSchema } from './utils/zod-converter.js';
import type { ModelMessage, ModelProvider } from './types.js';

export interface StructuredOutputRepairOptions {
  maxRetries?: number;
}

export interface StructuredOutputResult<T = unknown> {
  success: boolean;
  data?: T;
  rawText: string;
  error?: string;
  attempts: number;
}

export async function parseAndValidateStructuredOutput<T = unknown>(
  text: string,
  schema: z.ZodTypeAny
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  let jsonString = text.trim();

  // Try extracting json block ```json ... ``` if present
  const markdownJsonMatch = jsonString.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (markdownJsonMatch && markdownJsonMatch[1]) {
    jsonString = markdownJsonMatch[1].trim();
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(jsonString);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      error: `Failed to parse JSON output: ${msg}. Output received: "${text.substring(0, 200)}"`,
    };
  }

  const result = schema.safeParse(parsedJson);
  if (result.success) {
    return { success: true, data: result.data as T };
  } else {
    return {
      success: false,
      error: `Validation error against schema: ${result.error.message}`,
    };
  }
}

export async function repairStructuredOutput<T = unknown>(
  provider: ModelProvider,
  history: ModelMessage[],
  invalidText: string,
  validationError: string,
  schema: z.ZodTypeAny,
  maxRetries = 2
): Promise<StructuredOutputResult<T>> {
  let currentText = invalidText;
  let currentError = validationError;
  const jsonSchemaStr = JSON.stringify(zodToJsonSchema(schema), null, 2);

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const parseResult = await parseAndValidateStructuredOutput<T>(currentText, schema);
    if (parseResult.success) {
      return {
        success: true,
        data: parseResult.data,
        rawText: currentText,
        attempts: attempt,
      };
    }

    const repairMessages: ModelMessage[] = [
      ...history,
      { role: 'assistant', content: currentText },
      {
        role: 'user',
        content: `Your previous response failed validation with error:\n${currentError}\n\nPlease fix the format and output ONLY valid JSON matching this schema:\n${jsonSchemaStr}`,
      },
    ];

    const response = await provider.complete(repairMessages, { temperature: 0.1 });
    currentText = response.text;
    const nextParse = await parseAndValidateStructuredOutput<T>(currentText, schema);
    if (nextParse.success) {
      return {
        success: true,
        data: nextParse.data,
        rawText: currentText,
        attempts: attempt + 1,
      };
    }
    currentError = nextParse.error;
  }

  return {
    success: false,
    rawText: currentText,
    error: currentError,
    attempts: maxRetries + 1,
  };
}
