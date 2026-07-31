import { Agent, createTool, OpenAIProvider, Runner, z } from '@kikoyu/core';

const getTimeTool = createTool({
  name: 'get_current_time',
  description: 'Returns the current server time.',
  parameters: z.object({}),
  execute: () => new Date().toISOString(),
});

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('⚠️ OPENAI_API_KEY environment variable is not set.');
    console.log('To run this live against OpenAI with Streaming, execute:');
    console.log('  OPENAI_API_KEY=your_key pnpm --filter @kikoyu/examples example:stream');
    return;
  }

  console.log('🤖 Initializing Agent with Streaming Support...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  const agent = new Agent({
    name: 'Streaming Assistant',
    instructions: 'You are a helpful assistant. Use get_current_time tool if asked about time.',
    model: provider,
    tools: [getTimeTool],
  });

  const runner = new Runner();

  console.log('\n🚀 Starting Runner.stream(): "What is the current time and write a haiku about time?"\n');

  for await (const event of runner.stream(
    agent,
    'What is the current time and write a haiku about time?'
  )) {
    switch (event.type) {
      case 'text_delta':
        process.stdout.write(event.delta);
        break;
      case 'tool_call_started':
        console.log(`\n  ⚡ [Tool Call Started] ${event.toolCall.name}(${JSON.stringify(event.toolCall.args)})`);
        break;
      case 'tool_call_finished':
        console.log(`  ✅ [Tool Call Finished] ${event.name} -> ${JSON.stringify(event.result)}`);
        break;
      case 'handoff_occurred':
        console.log(`  🔄 [Handoff Occurred] ${event.fromAgent} -> ${event.toAgent}`);
        break;
      case 'run_complete':
        console.log('\n\n✨ [Run Complete] Final response length:', event.result.text.length);
        break;
    }
  }
}

main().catch(console.error);
