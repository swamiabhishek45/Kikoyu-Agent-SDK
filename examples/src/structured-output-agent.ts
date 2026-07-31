import { Agent, OpenAIProvider, Runner, z } from '@kikoyu/core';
import dotenv from 'dotenv';
dotenv.config();

const UserProfileSchema = z.object({
  username: z.string(),
  skills: z.array(z.string()),
  experienceYears: z.number(),
  recommendation: z.string(),
});

type UserProfile = z.infer<typeof UserProfileSchema>;

async function main() {
  const agent = Agent.builder()
    .setName('ProfileExtractor')
    .setInstructions(
      'Extract developer profile information from text and output strictly valid JSON matching the schema.'
    )
    .setModel(new OpenAIProvider({ apiKey: process.env.OPENAI_API_KEY ?? 'mock-key' }))
    .withResponseSchema(UserProfileSchema)
    .build();

  const runner = new Runner();
  console.log('Running Structured Output Agent...');

  const result = await runner.run<UserProfile>(
    agent,
    'Hi, I am Alex. I have been building TypeScript web apps for 6 years and specialize in Node.js and React.'
  );

  console.log('Final Text Response:', result.text);
  console.log('Parsed Structured Output:', result.structuredOutput);
  console.log('Execution Trace Status:', result.trace?.finalStatus);
}

main().catch(console.error);
