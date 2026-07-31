import type { Agent } from './agent.js';
import { GuardrailError } from './guardrail.js';
import type { MemoryStore } from './memory.js';
import { RunContext } from './run-context.js';
import { Session } from './session.js';
import type { ModelMessage, ModelResponse, RunResult } from './types.js';

export interface RunOptions<TContext = Record<string, unknown>> {
  temperature?: number;
  maxTokens?: number;
  maxIterations?: number;
  context?: RunContext<TContext> | TContext;
  session?: Session | string;
  store?: MemoryStore;
}

export class Runner {
  async run<TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): Promise<RunResult> {
    const maxIterations = options?.maxIterations ?? 10;
    const runContext = RunContext.from<TContext>(options?.context);

    // Resolve session if supplied
    let session: Session | undefined;
    if (options?.session) {
      if (typeof options.session === 'string') {
        session = new Session(options.session, options.store);
      } else if (options.session instanceof Session) {
        session = options.session;
      }
    }

    let currentAgent = agent;

    const priorSessionMessages = session ? await session.getMessages() : [];

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

    const currentMessages: ModelMessage[] = [
      { role: 'system', content: currentAgent.instructions },
      ...priorSessionMessages,
      ...inputMessages,
    ];

    let iteration = 0;

    while (iteration < maxIterations) {
      iteration++;

      const inputGuardrails = currentAgent.guardrails.filter(
        (g) => g.type === 'input'
      );
      const outputGuardrails = currentAgent.guardrails.filter(
        (g) => g.type === 'output'
      );

      const toolDefinitions = currentAgent.toolRegistry.toModelDefinitions();
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

        const modelTask = currentAgent.model.complete(
          currentMessages,
          modelOptions
        );

        const [, modelResponse] = await Promise.all([inputCheckTask, modelTask]);
        response = modelResponse;
      } else {
        response = await currentAgent.model.complete(
          currentMessages,
          modelOptions
        );
      }

      // Record assistant turn
      const assistantMessage: ModelMessage = {
        role: 'assistant',
        content: response.text,
        toolCalls: response.toolCalls,
      };

      currentMessages.push(assistantMessage);

      // If no tool calls requested by model, evaluate output guardrails and complete
      if (!response.toolCalls || response.toolCalls.length === 0) {
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

        // Persist new turn messages to session if active
        if (session) {
          const newTurnMessages = currentMessages.slice(
            1 + priorSessionMessages.length
          );
          await session.appendMessages(newTurnMessages);
        }

        return {
          text: response.text,
          messages: currentMessages,
          agent: currentAgent,
        };
      }

      // Process tool calls (including handoffs)
      let pendingHandoffAgent: Agent | undefined;

      for (const toolCall of response.toolCalls) {
        const tool = currentAgent.toolRegistry.get(toolCall.name);
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

              if (tool.handoffTarget) {
                pendingHandoffAgent = tool.handoffTarget;
              }
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

      // If handoff was triggered, swap active agent and inject transition message
      if (pendingHandoffAgent) {
        currentAgent = pendingHandoffAgent;
        currentMessages.push({
          role: 'system',
          content: `[Agent Handoff] You are now acting as agent "${currentAgent.name}". Instructions: ${currentAgent.instructions}`,
        });
      }
    }

    throw new Error(
      `Agent execution loop exceeded maximum iterations limit (${maxIterations}).`
    );
  }
}
