import type { Agent } from './agent.js';
import { GuardrailError } from './guardrail.js';
import type { MemoryStore } from './memory.js';
import { RunContext } from './run-context.js';
import { Session } from './session.js';
import type { StreamEvent } from './stream-event.js';
import type { ModelMessage, RunResult, ToolCall } from './types.js';

export interface RunOptions<TContext = Record<string, unknown>> {
  temperature?: number;
  maxTokens?: number;
  maxIterations?: number;
  context?: RunContext<TContext> | TContext;
  session?: Session | string;
  store?: MemoryStore;
}

export class Runner {
  async *stream<TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): AsyncGenerator<StreamEvent, RunResult, void> {
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

      // On initial turn, run input guardrails concurrently
      if (iteration === 1 && inputGuardrails.length > 0) {
        await Promise.all(
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
      }

      let textOutput = '';
      let toolCallsOutput: ToolCall[] | undefined;

      if (typeof currentAgent.model.streamComplete === 'function') {
        for await (const chunk of currentAgent.model.streamComplete(
          currentMessages,
          modelOptions
        )) {
          if (chunk.delta) {
            textOutput += chunk.delta;
            yield { type: 'text_delta', delta: chunk.delta };
          }
          if (chunk.toolCalls && chunk.toolCalls.length > 0) {
            toolCallsOutput = [...(toolCallsOutput ?? []), ...chunk.toolCalls];
          }
        }
      } else {
        const response = await currentAgent.model.complete(
          currentMessages,
          modelOptions
        );
        textOutput = response.text;
        toolCallsOutput = response.toolCalls;
        if (textOutput) {
          yield { type: 'text_delta', delta: textOutput };
        }
      }

      // Record assistant turn
      const assistantMessage: ModelMessage = {
        role: 'assistant',
        content: textOutput,
        toolCalls: toolCallsOutput,
      };

      currentMessages.push(assistantMessage);

      // If no tool calls requested by model, evaluate output guardrails and complete
      if (!toolCallsOutput || toolCallsOutput.length === 0) {
        for (const g of outputGuardrails) {
          const check = await g.execute(textOutput, runContext);
          if (!check.pass) {
            throw new GuardrailError(
              g.name,
              'output',
              check.reasoning,
              check.metadata
            );
          }
        }

        if (session) {
          const newTurnMessages = currentMessages.slice(
            1 + priorSessionMessages.length
          );
          await session.appendMessages(newTurnMessages);
        }

        const finalResult: RunResult = {
          text: textOutput,
          messages: currentMessages,
          agent: currentAgent,
        };

        yield { type: 'run_complete', result: finalResult };
        return finalResult;
      }

      // Process tool calls (including handoffs)
      let pendingHandoffAgent: Agent | undefined;

      for (const toolCall of toolCallsOutput) {
        yield { type: 'tool_call_started', toolCall };

        const tool = currentAgent.toolRegistry.get(toolCall.name);
        let toolOutputContent: string;
        let executionResult: unknown;
        let executionError: string | undefined;

        if (!tool) {
          executionError = `Tool "${toolCall.name}" is not registered on this agent.`;
          toolOutputContent = JSON.stringify({ error: executionError });
        } else {
          const parseResult = tool.parameters.safeParse(toolCall.args);
          if (!parseResult.success) {
            executionError = `Invalid parameters for tool "${toolCall.name}": ${parseResult.error.message}`;
            toolOutputContent = JSON.stringify({ error: executionError });
          } else {
            try {
              executionResult = await tool.execute(
                parseResult.data,
                runContext
              );
              toolOutputContent =
                typeof executionResult === 'string'
                  ? executionResult
                  : JSON.stringify(executionResult ?? null);

              if (tool.handoffTarget) {
                pendingHandoffAgent = tool.handoffTarget;
              }
            } catch (err: unknown) {
              const errorMessage =
                err instanceof Error ? err.message : String(err);
              executionError = `Tool "${toolCall.name}" execution failed: ${errorMessage}`;
              toolOutputContent = JSON.stringify({ error: executionError });
            }
          }
        }

        currentMessages.push({
          role: 'tool',
          name: toolCall.name,
          toolCallId: toolCall.id,
          content: toolOutputContent,
        });

        yield {
          type: 'tool_call_finished',
          toolCallId: toolCall.id,
          name: toolCall.name,
          result: executionResult,
          error: executionError,
        };
      }

      // If handoff was triggered, swap active agent and inject transition message
      if (pendingHandoffAgent) {
        const fromAgentName = currentAgent.name;
        currentAgent = pendingHandoffAgent;

        yield {
          type: 'handoff_occurred',
          fromAgent: fromAgentName,
          toAgent: currentAgent.name,
        };

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

  async run<TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): Promise<RunResult> {
    let finalResult: RunResult | undefined;

    for await (const event of this.stream(agent, input, options)) {
      if (event.type === 'run_complete') {
        finalResult = event.result;
      }
    }

    if (!finalResult) {
      throw new Error(
        'Runner stream completed without returning a final RunResult.'
      );
    }

    return finalResult;
  }
}
