import { Agent, Mem0Store, OpenAIProvider, Runner, Session } from '@kikoyu/core';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  const mem0Store = new Mem0Store({
    apiKey: process.env.MEM0_API_KEY ?? 'mock-mem0-key',
    userId: process.env.MEM0_USER_ID ?? 'user_abhishek',
  });

  const session = new Session('session_user_abhishek', mem0Store);

  const agent = Agent.builder()
    .setName('Mem0PersonalAssistant')
    .setInstructions('You are an intelligent assistant with long-term memory powered by Mem0.')
    .setModel(new OpenAIProvider({ apiKey: process.env.OPENAI_API_KEY ?? 'mock-key' }))
    .build();

  const runner = new Runner();
  console.log('Running Agent with Mem0 Memory Store...');

  const result = await runner.run(agent, 'Remember that my favorite programming language is TypeScript.', {
    session,
  });

  console.log('Agent Response:', result.text);
  console.log('Stored Messages in Mem0 Session:', await session.getMessages());
}

main().catch(console.error);
