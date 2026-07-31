import type { Agent } from './agent.js';
import { GuardrailError } from './guardrail.js';
import { RunContext } from './run-context.js';
import type { ModelMessage, ModelResponse, RunResult } from './types.js';

export interface RunOptions<TContext = Record<string, unknown>> {
  temperature?: number;
  maxTokens?: number;
  maxIterations?: number;
  context?: RunContext<TContext> | TContext;
}

export class Runner {
  async run<TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): Promise<RunResult> {
    const maxIterations = options?.maxIterations ?? 10;
    const runContext = RunContext.from<TContext>(options?.context);

    const inputMessages: ModelMessage[] =
      typeof input === 'string'
        ? [{ role: 'user', content: input }]
        : [...input];

    const inputTarget =
      typeof input === 'string'
        ? input
        : input
            .filter((m) => m.role === 'user')
            .map((m) => m.content)
            .join('\n');

    const inputGuardrails = agent.guardrails.filter((g) => g.type === 'input');
    const outputGuardrails = agent.guardrails.filter((g) => g.type === 'output');

    const currentMessages: ModelMessage[] = [
      { role: 'system', content: agent.instructions },
      ...inputMessages,
    ];

    let iteration = 0;

    while (iteration < maxIterations) {
      iteration++;

      const toolDefinitions = agent.toolRegistry.toModelDefinitions();
      const modelOptions = {
        temperature: options?.temperature,
        maxTokens: options?.maxTokens,
        tools: toolDefinitions.length > 0 ? toolDefinitions : undefined,
      };

      let response: ModelResponse;

      // On initial turn, run input guardrails concurrently with the first model call
      if (iteration === 1 && inputGuardrails.length > 0) {
        const inputCheckTask = Promise.all(
          inputGuardrails.map(async (g) => {
            const check = await g.execute(inputTarget, runContext);
            if (!check.pass) {
              throw new GuardrailError(
                g.name,
                'input',
                check.reasoning,
                check.metadata
              );
            }
          })
        );

        const modelTask = agent.model.complete(currentMessages, modelOptions);

        // Promise.all will reject immediately if any input guardrail throws GuardrailError
        const [, modelResponse] = await Promise.all([inputCheckTask, modelTask]);
        response = modelResponse;
      } else {
        response = await agent.model.complete(currentMessages, modelOptions);
      }

      // Record assistant turn
      const assistantMessage: ModelMessage = {
        role: 'assistant',
        content: response.text,
        toolCalls: response.toolCalls,
      };

      currentMessages.push(assistantMessage);

      // If no tool calls requested by model, check output guardrails and finish
      if (!response.toolCalls || response.toolCalls.length === 0) {
        // Execute output guardrails on final text answer
        for (const g of outputGuardrails) {
          const check = await g.execute(response.text, runContext);
          if (!check.pass) {
            throw new GuardrailError(
              g.name,
              'output',
              check.reasoning,
              check.metadata
            );
          }
        }

        return {
          text: response.text,
          messages: currentMessages,
          agent,
        };
      }

      // Execute requested tool calls sequentially
      for (const toolCall of response.toolCalls) {
        const tool = agent.toolRegistry.get(toolCall.name);
        let toolOutputContent: string;

        if (!tool) {
          toolOutputContent = JSON.stringify({
            error: `Tool "${toolCall.name}" is not registered on this agent.`,
          });
        } else {
          const parseResult = tool.parameters.safeParse(toolCall.args);
          if (!parseResult.success) {
            toolOutputContent = JSON.stringify({
              error: `Invalid parameters for tool "${toolCall.name}": ${parseResult.error.message}`,
            });
          } else {
            try {
              const rawResult = await tool.execute(
                parseResult.data,
                runContext
              );
              toolOutputContent =
                typeof rawResult === 'string'
                  ? rawResult
                  : JSON.stringify(rawResult ?? null);
            } catch (err: unknown) {
              const errorMessage =
                err instanceof Error ? err.message : String(err);
              toolOutputContent = JSON.stringify({
                error: `Tool "${toolCall.name}" execution failed: ${errorMessage}`,
              });
            }
          }
        }

        currentMessages.push({
          role: 'tool',
          name: toolCall.name,
          toolCallId: toolCall.id,
          content: toolOutputContent,
        });
      }
    }

    throw new Error(
      `Agent execution loop exceeded maximum iterations limit (${maxIterations}).`
    );
  }
}
