import 'dotenv/config';
import { Agent, createHandoff, OpenAIProvider, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('⚠️ OPENAI_API_KEY environment variable is not set.');
    console.log('To run this live against OpenAI with Agent Handoffs, set your key in .env or run:');
    console.log('  $env:OPENAI_API_KEY="your_key"; pnpm --filter @kikoyu/examples example:handoff');
    return;
  }

  console.log('🤖 Initializing Specialist Agents and Triage Router Agent with Agent.builder()...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  // 1. Math Specialist Agent
  const mathSpecialistAgent = Agent.builder()
    .setName('Math Specialist')
    .setInstructions('You are a mathematics expert. Solve complex math expressions step-by-step.')
    .setModel(provider)
    .build();

  // 2. Code Specialist Agent
  const codeSpecialistAgent = Agent.builder()
    .setName('Code Specialist')
    .setInstructions('You are a senior software engineering expert. Provide clean code snippets.')
    .setModel(provider)
    .build();

  // 3. Triage Router Agent with Handoffs
  const triageRouterAgent = Agent.builder()
    .setName('Triage Router')
    .setInstructions('You are a triage receptionist. Inspect user requests and immediately use handoff tools to transfer control to the Math Specialist for math questions or Code Specialist for coding questions.')
    .setModel(provider)
    .withHandoffs(
      createHandoff(mathSpecialistAgent, { description: 'Transfer math questions to Math Specialist' }),
      createHandoff(codeSpecialistAgent, { description: 'Transfer coding questions to Code Specialist' })
    )
    .build();

  const runner = new Runner();

  console.log('🚀 Running Triage Router with Query: "Can you write a typescript function to binary search an array?"');

  const result = await runner.run(
    triageRouterAgent,
    'Can you write a typescript function to binary search an array?'
  );

  console.log('\n--- Execution Finished ---');
  console.log('Active Agent at Completion:', result.agent.name);
  console.log('\nFinal Text Response:\n', result.text);
}

main().catch(console.error);
