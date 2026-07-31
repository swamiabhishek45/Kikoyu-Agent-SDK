import { Agent, OpenAIProvider } from '@kikoyu/core';
import { NextResponse } from 'next/server';
import { agentRegistry } from '../../../../lib/agent-registry.js';
import { validateApiKey } from '../../../../lib/auth.js';

export async function POST(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, name, instructions, modelOptions } = body;

    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { error: 'Field "id" is required and must be a string.' },
        { status: 400 }
      );
    }

    const provider = new OpenAIProvider({
      apiKey: modelOptions?.apiKey ?? process.env.OPENAI_API_KEY,
      model: modelOptions?.model ?? 'gpt-4o-mini',
    });

    const agent = Agent.builder()
      .setName(name)
      .setInstructions(instructions)
      .setModel(provider)
      .build();

    agentRegistry.register(id, agent);

    return NextResponse.json({
      success: true,
      message: `Agent registered successfully with id "${id}".`,
      agentId: id,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
