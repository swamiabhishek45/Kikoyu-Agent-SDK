import { Agent, createTool, Runner, z } from '@kikoyu/core';

const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Returns current weather information for a given city location.',
  parameters: z.object({
    location: z.string().describe('The name of the city, e.g. Tokyo, Paris, San Francisco'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius').optional(),
  }),
  execute: async ({ location, unit }) => {
    console.log(`\n  [Tool Executed] get_weather(location="${location}", unit="${unit ?? 'celsius'}")`);
    return {
      location,
      temperature: unit === 'fahrenheit' ? '72°F' : '22°C',
      condition: 'Sunny',
    };
  },
});

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    console.log(
      'To run live against OpenAI, set OPENAI_API_KEY=your_key or KIKOYU_API_KEY=your_key'
    );
    return;
  }

  console.log('Initializing Tool Agent with Agent.builder()...');

  const agent = Agent.builder()
    .setName('Weather Assistant')
    .setInstructions('Always check current weather conditions using the get_weather tool before answering.')
    .setApiKey(apiKey)
    .addTool(getWeatherTool)
    .build();

  const runner = new Runner();

  console.log('Running Agent: "What is the weather in Tokyo right now?"');
  const result = await runner.run(agent, 'What is the weather in Tokyo right now?');

  console.log('\nFinal Agent Answer:');
  console.log(result.text);
}

main().catch(console.error);
