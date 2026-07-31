import { Agent, createHandoff, Runner } from '@kikoyu/core';

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    return;
  }

  console.log('Initializing Specialist Agents and Triage Router Agent with Agent.builder()...');

  const codeSpecialist = Agent.builder()
    .setName('Code Specialist')
    .setInstructions('You are an expert software engineer. Provide code solutions cleanly in TypeScript.')
    .setApiKey(apiKey)
    .build();

  const mathSpecialist = Agent.builder()
    .setName('Math Specialist')
    .setInstructions('You are a mathematics expert. Solve math problems step by step.')
    .setApiKey(apiKey)
    .build();

  const triageRouter = Agent.builder()
    .setName('Triage Router')
    .setInstructions(
      'You analyze incoming user requests and route coding questions to Code Specialist and math questions to Math Specialist.'
    )
    .setApiKey(apiKey)
    .withHandoffs(
      createHandoff(codeSpecialist, {
        description: 'Hand off technical software development and coding questions.',
      }),
      createHandoff(mathSpecialist, {
        description: 'Hand off mathematical calculations and equations.',
      })
    )
    .build();

  const runner = new Runner();

  console.log('Running Triage Router with Query: "Can you write a typescript function to binary search an array?"');
  const result = await runner.run(
    triageRouter,
    'Can you write a typescript function to binary search an array?'
  );

  console.log('\nExecution Finished!');
  console.log('Active Final Agent:', result.agent.name);
  console.log('Final Answer:');
  console.log(result.text);
}

main().catch(console.error);
