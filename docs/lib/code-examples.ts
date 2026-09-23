export type CodeExampleTab = 'agent' | 'tools' | 'handoffs' | 'stream';

export const CODE_EXAMPLE_TABS: { id: CodeExampleTab; label: string }[] = [
  { id: 'agent', label: 'agent.ts' },
  { id: 'tools', label: 'tools.ts' },
  { id: 'handoffs', label: 'handoffs.ts' },
  { id: 'stream', label: 'stream.ts' },
];

export const CODE_EXAMPLES: Record<CodeExampleTab, string> = {
  agent: `import { Agent, Runner } from '@kikoyu/core';

const agent = Agent.builder()
  .setName('Assistant')
  .setInstructions('You are a helpful AI assistant that responds in concise sentences.')
  .setApiKey(process.env.KIKOYU_API_KEY!)
  .build();

const runner = new Runner();
const result = await runner.run(agent, 'Hello! Who are you?');

console.log(result.text);`,
  tools: `import { createTool, z } from '@kikoyu/core';

export const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Lookup current weather conditions for a city.',
  parameters: z.object({
    location: z.string().describe('City name, e.g. Tokyo, Paris'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius'),
  }),
  execute: async ({ location, unit }) => {
    return { location, temp: unit === 'fahrenheit' ? '72°F' : '22°C', condition: 'Sunny' };
  },
});`,
  handoffs: `import { Agent, createHandoff, Runner } from '@kikoyu/core';

const mathSpecialist = Agent.builder()
  .setName('Math Specialist')
  .setInstructions('Solve complex math expressions step-by-step.')
  .setApiKey(process.env.KIKOYU_API_KEY!)
  .build();

const triageRouter = Agent.builder()
  .setName('Triage Router')
  .setInstructions('Route math questions to Math Specialist.')
  .setApiKey(process.env.KIKOYU_API_KEY!)
  .withHandoffs(createHandoff(mathSpecialist))
  .build();`,
  stream: `import { Agent, Runner } from '@kikoyu/core';

const runner = new Runner();

for await (const event of runner.stream(agent, 'Write a poem about space')) {
  if (event.type === 'text_delta') {
    process.stdout.write(event.delta);
  } else if (event.type === 'tool_call_started') {
    console.log(\`Executing tool: \${event.toolCall.name}\`);
  }
}`,
};

export const SIMULATED_LOGS: Record<CodeExampleTab, string[]> = {
  agent: [
    '[Runner] Starting agent "Assistant"...',
    '[Model] gpt-4o-mini completion request sent',
    '[Text Delta] "I am a helpful assistant built with Kikoyu."',
    '[Run Complete] Finished in 420ms',
  ],
  tools: [
    '[Runner] Tool loop iteration 1',
    '[Tool Call Started] get_weather({ location: "Tokyo", unit: "celsius" })',
    '[Tool Call Finished] get_weather -> { temp: "22°C", condition: "Sunny" }',
    '[Run Complete] Final answer synthesized',
  ],
  handoffs: [
    '[Runner] Active agent: Triage Router',
    '[Handoff] Triage Router -> Math Specialist',
    '[Model] Specialist completion started',
    '[Run Complete] Handoff chain finished',
  ],
  stream: [
    '[Stream] run_started',
    '[Stream] text_delta: "Among the stars..."',
    '[Stream] text_delta: " code quietly flows..."',
    '[Stream] run_complete',
  ],
};
