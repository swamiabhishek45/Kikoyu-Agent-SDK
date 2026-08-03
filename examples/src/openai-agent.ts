import dotenv from 'dotenv';
dotenv.config({ path: ['../.env', '.env'] });

import { Agent, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    console.log(
      'To run live against OpenAI, set OPENAI_API_KEY=your_key or KIKOYU_API_KEY=your_key'
    );
    return;
  }

  console.log('Initializing Agent with Agent.builder()...');

  const agent = Agent.builder()
    .setName('Assistant')
    .setInstructions('You are a helpful AI assistant that responds in concise sentences.')
    .setApiKey(apiKey)
    .build();

  const runner = new Runner();

  console.log('Running Agent...');
  const result = await runner.run(agent, 'Hello! Introduce yourself in one sentence.');

  console.log('\nResult:');
  console.log(result.text);
}

main().catch(console.error);
