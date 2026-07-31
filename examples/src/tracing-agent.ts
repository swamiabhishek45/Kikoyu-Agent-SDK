import { Agent, createTool, OpenAIProvider, Runner, z } from '@kikoyu/core';
import dotenv from 'dotenv';
dotenv.config();

const calculatorTool = createTool({
  name: 'add',
  description: 'Add two numbers together',
  parameters: z.object({ a: z.number(), b: z.number() }),
  execute: ({ a, b }) => a + b,
});

async function main() {
  const agent = Agent.builder()
    .setName('MathTracingAgent')
    .setInstructions('Solve math problems using the add tool.')
    .setModel(new OpenAIProvider({ apiKey: process.env.OPENAI_API_KEY ?? 'mock-key' }))
    .addTool(calculatorTool)
    .build();

  const runner = new Runner();
  console.log('Running Tracing Agent...');

  const result = await runner.run(agent, 'What is 150 + 275?');

  console.log('Final Text:', result.text);
  console.log('Run Trace Details:');
  console.dir(result.trace, { depth: null });
}

main().catch(console.error);
