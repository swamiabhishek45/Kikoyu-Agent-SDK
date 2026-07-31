import { Agent, createTool, OpenAIProvider, Runner, z } from '@kikoyu/core';

const getWeatherTool = createTool({
  name: 'get_weather',
  description: 'Returns current weather information for a given city location.',
  parameters: z.object({
    location: z.string().describe('The name of the city, e.g. Tokyo, Paris, San Francisco'),
    unit: z.enum(['celsius', 'fahrenheit']).default('celsius').optional(),
  }),
  execute: async ({ location, unit }) => {
    console.log(`\n  ⚙️ [Tool Executed] get_weather(location="${location}", unit="${unit ?? 'celsius'}")`);
    const weatherData = {
      location,
      temperature: unit === 'fahrenheit' ? '72°F' : '22°C',
      condition: 'Sunny with light breeze',
      humidity: '45%',
    };
    return weatherData;
  },
});

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('⚠️ OPENAI_API_KEY environment variable is not set.');
    console.log('To run this live against OpenAI with tools, execute:');
    console.log('  OPENAI_API_KEY=your_key pnpm --filter @kikoyu/examples example:tool');
    return;
  }

  console.log('🤖 Initializing Tool Agent with Agent.builder()...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  const agent = Agent.builder()
    .setName('Weather Assistant')
    .setInstructions('You are a helpful travel assistant. Always use the get_weather tool to look up weather before answering questions about city conditions.')
    .setModel(provider)
    .addTool(getWeatherTool)
    .build();

  const runner = new Runner();
  console.log('🚀 Running Agent: "What is the weather in Tokyo right now?"');

  const result = await runner.run(agent, 'What is the weather in Tokyo right now?');

  console.log('\n--- Final Text Response ---');
  console.log(result.text);

  console.log('\n--- Complete Conversation Trace ---');
  for (const [idx, msg] of result.messages.entries()) {
    console.log(`[Message ${idx}] (${msg.role}):`, msg.content || (msg.toolCalls ? `[Tool Calls: ${msg.toolCalls.map(t=>t.name).join(', ')}]` : ''));
  }
}

main().catch(console.error);
