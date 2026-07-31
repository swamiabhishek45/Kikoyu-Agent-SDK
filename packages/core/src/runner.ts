import type { Agent } from './agent.js';
import type { ModelMessage, RunResult } from './types.js';

export interface RunOptions {
  temperature?: number;
  maxTokens?: number;
}

export class Runner {
  async run(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions
  ): Promise<RunResult> {
    const inputMessages: ModelMessage[] =
      typeof input === 'string'
        ? [{ role: 'user', content: input }]
        : [...input];

    // Build complete message trace starting with agent system instructions
    const messages: ModelMessage[] = [
      { role: 'system', content: agent.instructions },
      ...inputMessages,
    ];

    const response = await agent.model.complete(messages, options);

    const assistantMessage: ModelMessage = {
      role: 'assistant',
      content: response.text,
    };

    const finalMessages = [...messages, assistantMessage];

    return {
      text: response.text,
      messages: finalMessages,
      agent,
    };
  }
}
