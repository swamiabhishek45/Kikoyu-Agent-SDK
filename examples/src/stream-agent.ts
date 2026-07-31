import { Agent, createTool, Runner, z } from '@kikoyu/core';

const getTimeTool = createTool({
  name: 'get_current_time',
  description: 'Returns the current server time.',
  parameters: z.object({}),
  execute: () => new Date().toISOString(),
});

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    return;
  }

  console.log('Initializing Agent with Agent.builder()...');

  const agent = Agent.builder()
    .setName('Stream Assistant')
    .setInstructions('Always check the server time first using get_current_time, then answer concisely.')
    .setApiKey(apiKey)
    .addTool(getTimeTool)
    .build();

  const runner = new Runner();

  console.log('\nStarting Runner.stream(): "What is the current time and write a haiku about time?"\n');

  for await (const event of runner.stream(
    agent,
    'What is the current time and write a haiku about time?'
  )) {
    if (event.type === 'text_delta') {
      process.stdout.write(event.delta);
    } else if (event.type === 'tool_call_started') {
      console.log(`\n  [Tool Call Started] ${event.toolCall.name}(${JSON.stringify(event.toolCall.args)})`);
    } else if (event.type === 'tool_call_finished') {
      console.log(`  [Tool Call Finished] ${event.name} -> ${JSON.stringify(event.result)}`);
    } else if (event.type === 'handoff_occurred') {
      console.log(`  [Handoff Occurred] ${event.fromAgent} -> ${event.toAgent}`);
    } else if (event.type === 'run_complete') {
      console.log('\n\n[Run Complete] Final response length:', event.result.text.length);
    }
  }
}

main().catch(console.error);
