import type { z } from 'zod';
import type { Agent } from './agent.js';
import { GuardrailError } from './guardrail.js';
import type { MemoryStore } from './memory.js';
import { RunContext } from './run-context.js';
import { Session } from './session.js';

import type { StreamEvent } from './stream-event.js';
import { parseAndValidateStructuredOutput, repairStructuredOutput } from './structured-output.js';
import { TraceCollector } from './tracing.js';
import type { ModelMessage, RunResult, ToolApprovalHandler, ToolCall } from './types.js';

export interface RunOptions<TContext = Record<string, unknown>> {
  temperature?: number;
  maxTokens?: number;
  maxIterations?: number;
  maxHandoffs?: number;
  context?: RunContext<TContext> | TContext;
  session?: Session | string;
  store?: MemoryStore;
  responseSchema?: z.ZodTypeAny;
  approvalHandler?: ToolApprovalHandler;
}

export class Runner {
  async *stream<TStructured = unknown, TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): AsyncGenerator<StreamEvent, RunResult<TStructured>, void> {
    const maxIterations = options?.maxIterations ?? 10;
    const maxHandoffs = options?.maxHandoffs ?? agent.maxHandoffs ?? 5;
    const responseSchema = options?.responseSchema ?? agent.responseSchema;
    const runContext = RunContext.from<TContext>(options?.context);
    const tracer = new TraceCollector(agent.name);

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
    let handoffCount = 0;

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

      // On initial turn, run input guardrails
      if (iteration === 1 && inputGuardrails.length > 0) {
        const guardrailStart = Date.now();
        try {
          for (const g of inputGuardrails) {
            const check = await g.execute(inputTarget, runContext);
            if (!check.pass) {
              yield {
                type: 'guardrail_triggered',
                name: g.name,
                guardrailType: 'input',
                reasoning: check.reasoning,
              };
              throw new GuardrailError(
                g.name,
                'input',
                check.reasoning,
                check.metadata
              );
            }
          }
          tracer.addStep(
            'guardrail',
            { type: 'input', passed: true, count: inputGuardrails.length },
            Date.now() - guardrailStart
          );
        } catch (err: unknown) {
          const errorMsg = err instanceof Error ? err.message : String(err);
          tracer.addStep(
            'guardrail',
            { type: 'input', passed: false, error: errorMsg },
            Date.now() - guardrailStart
          );
          yield { type: 'run_failed', error: errorMsg };
          tracer.exportTrace('guardrail_tripped', errorMsg);
          throw err;
        }
      }

      let textOutput = '';
      let toolCallsOutput: ToolCall[] | undefined;
      const modelCallStart = Date.now();

      try {
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
          tracer.recordTokenUsage(response.usage);
          if (textOutput) {
            yield { type: 'text_delta', delta: textOutput };
          }
        }
        tracer.addStep(
          'model_call',
          {
            agent: currentAgent.name,
            provider: currentAgent.model.name,
            hasToolCalls: !!toolCallsOutput?.length,
          },
          Date.now() - modelCallStart
        );
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        tracer.addStep(
          'model_call',
          { provider: currentAgent.model.name, error: errorMsg },
          Date.now() - modelCallStart
        );
        yield { type: 'run_failed', error: errorMsg };
        throw err;
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
        const outputGuardrailStart = Date.now();
        for (const g of outputGuardrails) {
          const check = await g.execute(textOutput, runContext);
          if (!check.pass) {
            yield {
              type: 'guardrail_triggered',
              name: g.name,
              guardrailType: 'output',
              reasoning: check.reasoning,
            };
            tracer.addStep(
              'guardrail',
              { type: 'output', passed: false, name: g.name },
              Date.now() - outputGuardrailStart
            );
            const gErr = new GuardrailError(
              g.name,
              'output',
              check.reasoning,
              check.metadata
            );
            yield { type: 'run_failed', error: gErr.message };
            throw gErr;
          }
        }
        if (outputGuardrails.length > 0) {
          tracer.addStep(
            'guardrail',
            { type: 'output', passed: true, count: outputGuardrails.length },
            Date.now() - outputGuardrailStart
          );
        }

        // Process structured output if schema provided
        let structuredData: TStructured | undefined;
        if (responseSchema) {
          const structStart = Date.now();
          const parsed = await parseAndValidateStructuredOutput<TStructured>(
            textOutput,
            responseSchema
          );

          if (parsed.success) {
            structuredData = parsed.data;
            tracer.addStep(
              'structured_output_repair',
              { success: true, attempts: 1 },
              Date.now() - structStart
            );
          } else {
            yield {
              type: 'retry_attempted',
              attempt: 1,
              maxRetries: 2,
              reason: parsed.error,
            };
            const repaired = await repairStructuredOutput<TStructured>(
              currentAgent.model,
              currentMessages,
              textOutput,
              parsed.error,
              responseSchema,
              2
            );
            if (repaired.success) {
              structuredData = repaired.data;
              textOutput = repaired.rawText;
              tracer.addStep(
                'structured_output_repair',
                { success: true, attempts: repaired.attempts },
                Date.now() - structStart
              );
            } else {
              tracer.addStep(
                'structured_output_repair',
                { success: false, error: repaired.error },
                Date.now() - structStart
              );
              const structErr = `Structured output validation failed after repair attempts: ${repaired.error}`;
              yield { type: 'run_failed', error: structErr };
              throw new Error(structErr);
            }
          }
        }

        if (session) {
          const newTurnMessages = currentMessages.slice(
            1 + priorSessionMessages.length
          );
          await session.appendMessages(newTurnMessages);
        }

        const trace = tracer.exportTrace('completed');
        const finalResult: RunResult<TStructured> = {
          text: textOutput,
          messages: currentMessages,
          agent: currentAgent,
          structuredOutput: structuredData,
          trace,
        };

        yield { type: 'run_complete', result: finalResult };
        return finalResult;
      }

      // Process tool calls (including handoffs)
      let pendingHandoffAgent: Agent | undefined;

      for (const toolCall of toolCallsOutput) {
        yield { type: 'tool_call_started', toolCall };
        const toolStart = Date.now();

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
            // Check tool approval requirement
            let needsApproval = false;
            if (typeof tool.requiresApproval === 'function') {
              needsApproval = tool.requiresApproval(parseResult.data);
            } else if (typeof tool.requiresApproval === 'boolean') {
              needsApproval = tool.requiresApproval;
            }

            let isApproved = true;
            if (needsApproval) {
              const handler = options?.approvalHandler;
              if (handler) {
                isApproved = await handler(toolCall.name, parseResult.data);
              }
              yield {
                type: 'tool_approval_requested',
                toolCallId: toolCall.id,
                name: toolCall.name,
                args: parseResult.data,
                approved: isApproved,
              };
            }

            if (!isApproved) {
              executionError = `Execution of tool "${toolCall.name}" was rejected by approval handler.`;
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
        }

        tracer.addStep(
          'tool_call',
          {
            tool: toolCall.name,
            args: toolCall.args,
            error: executionError,
          },
          Date.now() - toolStart
        );

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
        handoffCount++;
        if (handoffCount > maxHandoffs) {
          const handoffErr = `Max handoffs limit reached (${maxHandoffs}). Halting agent handoffs to prevent infinite recursion loop.`;
          tracer.addStep(
            'handoff',
            { from: currentAgent.name, to: pendingHandoffAgent.name, rejected: true },
            0
          );
          yield { type: 'run_failed', error: handoffErr };
          throw new Error(handoffErr);
        }

        const fromAgentName = currentAgent.name;
        currentAgent = pendingHandoffAgent;

        tracer.addStep(
          'handoff',
          { from: fromAgentName, to: currentAgent.name, count: handoffCount },
          0
        );

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

    const limitErr = `Agent execution loop exceeded maximum iterations limit (${maxIterations}).`;
    tracer.exportTrace('max_iterations_reached', limitErr);
    yield { type: 'run_failed', error: limitErr };
    throw new Error(limitErr);
  }

  async run<TStructured = unknown, TContext = Record<string, unknown>>(
    agent: Agent,
    input: string | ModelMessage[],
    options?: RunOptions<TContext>
  ): Promise<RunResult<TStructured>> {
    let finalResult: RunResult<TStructured> | undefined;

    for await (const event of this.stream<TStructured, TContext>(agent, input, options)) {
      if (event.type === 'run_complete') {
        finalResult = event.result as RunResult<TStructured>;
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
