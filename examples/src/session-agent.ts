import 'dotenv/config';
import { Agent, InMemoryStore, OpenAIProvider, Runner, Session } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('⚠️ OPENAI_API_KEY environment variable is not set.');
    console.log('To run this live against OpenAI with Session Persistence, set your key in .env or run:');
    console.log('  $env:OPENAI_API_KEY="your_key"; pnpm --filter @kikoyu/examples example:session');
    return;
  }

  console.log('🤖 Initializing Agent with Agent.builder()...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  const agent = Agent.builder()
    .setName('Memory Assistant')
    .setInstructions('You are a helpful assistant with memory of past turns.')
    .setModel(provider)
    .build();

  const memoryStore = new InMemoryStore();
  const session = new Session({ sessionId: 'session_demo_99', store: memoryStore });

  const runner = new Runner();

  console.log('\n--- Turn 1 ---');
  console.log('User: "My favorite color is cerulean blue."');
  const res1 = await runner.run(agent, 'My favorite color is cerulean blue.', { session });
  console.log('Assistant:', res1.text);

  console.log('\n--- Turn 2 ---');
  console.log('User: "What is my favorite color?"');
  const res2 = await runner.run(agent, 'What is my favorite color?', { session });
  console.log('Assistant:', res2.text);

  console.log('\n--- Stored Session Turn History ---');
  const history = await session.getMessages();
  for (const [idx, msg] of history.entries()) {
    console.log(`[History ${idx}] (${msg.role}): ${msg.content}`);
  }
}

main().catch(console.error);
