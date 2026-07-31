import { Runner } from '@kikoyu/core';
import { NextResponse } from 'next/server';
import { resolveAgentFromPayload } from '../../../../lib/agent-resolver.js';
import { validateApiKey } from '../../../../lib/auth.js';

export async function POST(request: Request) {
  if (!validateApiKey(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();

    if (!body.input || typeof body.input !== 'string') {
      return NextResponse.json(
        { error: 'Field "input" is required and must be a string.' },
        { status: 400 }
      );
    }

    const agent = resolveAgentFromPayload(body);
    const runner = new Runner();

    const result = await runner.run(agent, body.input, {
      context: body.context,
      session: body.sessionId,
    });

    return NextResponse.json({
      text: result.text,
      messages: result.messages,
      agentName: result.agent.name,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
