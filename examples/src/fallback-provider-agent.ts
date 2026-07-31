import { Agent, AnthropicProvider, FallbackProvider, GeminiProvider, OpenAIProvider, Runner } from '@kikoyu/core';
import dotenv from 'dotenv';
dotenv.config();

async function main() {
  const primaryProvider = new AnthropicProvider({ apiKey: process.env.ANTHROPIC_API_KEY ?? 'invalid-key' });
  const backupGemini = new GeminiProvider({ apiKey: process.env.GEMINI_API_KEY ?? 'invalid-key' });
  const backupOpenAI = new OpenAIProvider({ apiKey: process.env.OPENAI_API_KEY ?? 'mock-key' });

  const fallbackModel = new FallbackProvider({
    primary: primaryProvider,
    fallbacks: [backupGemini, backupOpenAI],
  });

  const agent = Agent.builder()
    .setName('ResilientAgent')
    .setInstructions('Provide a concise breakdown of quantum computing principles.')
    .setModel(fallbackModel)
    .build();

  const runner = new Runner();
  console.log(`Running Resilient Agent using provider: ${fallbackModel.name}...`);

  const result = await runner.run(agent, 'Explain quantum entanglement.');
  console.log('Response:', result.text);
}

main().catch(console.error);
