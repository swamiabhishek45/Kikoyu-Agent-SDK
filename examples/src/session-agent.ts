import { Agent, InMemoryStore, Runner, Session } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    return;
  }

  console.log('Initializing Agent with Agent.builder()...');

  const memoryStore = new InMemoryStore();
  const session = new Session({
    sessionId: 'session_demo_99',
    store: memoryStore,
  });

  const agent = Agent.builder()
    .setName('Memory Assistant')
    .setInstructions('Remember user details across multiple conversation turns.')
    .setApiKey(apiKey)
    .build();

  const runner = new Runner();

  console.log('\n--- Turn 1: Storing Memory ---');
  const res1 = await runner.run(agent, 'My favorite color is cerulean blue and I live in Seattle.', {
    session,
  });
  console.log('Assistant:', res1.text);

  console.log('\n--- Turn 2: Recalling Memory ---');
  const res2 = await runner.run(agent, 'What is my favorite color and where do I live?', {
    session,
  });
  console.log('Assistant:', res2.text);
}

main().catch(console.error);
