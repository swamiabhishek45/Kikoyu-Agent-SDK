import { Agent, createTool, OpenAIProvider, type Tool, z } from '@kikoyu/core';
import { agentRegistry } from './agent-registry.js';
import { jsonSchemaToZod } from './json-schema-zod.js';

export interface InlineToolPayload {
  name: string;
  description: string;
  parametersSchema?: Record<string, unknown>;
  returnValue?: unknown;
}

export interface InlineAgentPayload {
  name: string;
  instructions: string;
  model?: {
    provider?: string;
    model?: string;
    apiKey?: string;
  };
  tools?: InlineToolPayload[];
}

export interface AgentRequestPayload {
  agentId?: string;
  agent?: InlineAgentPayload;
  input: string;
  context?: Record<string, unknown>;
  sessionId?: string;
}

export function resolveAgentFromPayload(payload: AgentRequestPayload): Agent {
  if (payload.agentId) {
    const registered = agentRegistry.get(payload.agentId);
    if (!registered) {
      throw new Error(`Agent with registered id "${payload.agentId}" was not found.`);
    }
    return registered;
  }

  if (payload.agent) {
    const { name, instructions, model, tools } = payload.agent;

    const provider = new OpenAIProvider({
      apiKey: model?.apiKey ?? process.env.OPENAI_API_KEY,
      model: model?.model ?? 'gpt-4o-mini',
    });

    const builder = Agent.builder()
      .setName(name)
      .setInstructions(instructions)
      .setModel(provider);

    if (tools && Array.isArray(tools)) {
      for (const tPayload of tools) {
        const parameters = jsonSchemaToZod(tPayload.parametersSchema);
        const tool: Tool = createTool({
          name: tPayload.name,
          description: tPayload.description,
          parameters,
          execute: () => tPayload.returnValue ?? 'ok',
        });
        builder.addTool(tool);
      }
    }

    return builder.build();
  }

  throw new Error(
    'Request body must include either an "agentId" string or an "agent" object definition.'
  );
}
