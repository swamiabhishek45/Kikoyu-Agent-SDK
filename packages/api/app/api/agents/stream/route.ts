import { Runner } from '@kikoyu/core';
import { NextResponse } from 'next/server';
import { resolveAgentFromPayload } from '../../../../lib/agent-resolver.js';
import { validateApiKey } from '../../../../lib/auth.js';
import { apiSessionStore } from '../../../../lib/session-store.js';

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

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();

        try {
          for await (const event of runner.stream(agent, body.input, {
            context: body.context,
            ...(body.sessionId
              ? { session: body.sessionId, store: apiSessionStore }
              : {}),
          })) {
            const data = `data: ${JSON.stringify(event)}\n\n`;
            controller.enqueue(encoder.encode(data));
          }
          controller.close();
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : String(err);
          const errorEvent = `data: ${JSON.stringify({ type: 'error', error: errorMessage })}\n\n`;
          controller.enqueue(encoder.encode(errorEvent));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
