import { Agent, OpenAIProvider, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log(
      '⚠️ OPENAI_API_KEY environment variable is not set.'
    );
    console.log('To run this live against OpenAI, execute:');
    console.log('  OPENAI_API_KEY=your_key pnpm --filter @kikoyu/examples example:openai');
    return;
  }

  console.log('🤖 Initializing Agent with OpenAIProvider...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  const agent = new Agent({
    name: 'Haiku Assistant',
    instructions: 'You are a helpful assistant that responds strictly in 2-line haikus.',
    model: provider,
  });

  const runner = new Runner();
  console.log('🚀 Running Agent...');
  const result = await runner.run(agent, 'Tell me about coding.');

  console.log('\n--- Result ---');
  console.log('Text Response:\n', result.text);
  console.log('\nFull Message Trace:', JSON.stringify(result.messages, null, 2));
}

main().catch(console.error);
