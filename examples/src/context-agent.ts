import { Agent, createTool, OpenAIProvider, Runner, z } from '@kikoyu/core';

interface AppContext {
  userId: string;
  userRole: string;
  orgId: string;
}

const getUserAccountTool = createTool<
  z.ZodObject<Record<string, never>>,
  Record<string, unknown>,
  AppContext
>({
  name: 'get_user_account',
  description: 'Fetches the current user account details based on session context.',
  parameters: z.object({}),
  execute: async (_args, ctx) => {
    const userId = ctx.get('userId');
    const userRole = ctx.get('userRole');
    const orgId = ctx.get('orgId');

    console.log(`\n  🔐 [Context Tool Executed] Reading session context: userId="${userId}", role="${userRole}", orgId="${orgId}"`);

    return {
      userId,
      userRole,
      orgId,
      accountBalance: '$4,250.00',
      status: 'Active Premium',
    };
  },
});

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('⚠️ OPENAI_API_KEY environment variable is not set.');
    console.log('To run this live against OpenAI with RunContext, execute:');
    console.log('  OPENAI_API_KEY=your_key pnpm --filter @kikoyu/examples example:context');
    return;
  }

  console.log('🤖 Initializing Agent with Context-Aware Tool...');
  const provider = new OpenAIProvider({ apiKey, model: 'gpt-4o-mini' });

  const agent = new Agent({
    name: 'Account Concierge',
    instructions: 'You are an internal account concierge. Use the get_user_account tool to check user details when requested.',
    model: provider,
    tools: [getUserAccountTool],
  });

  const runner = new Runner();

  console.log('🚀 Running Agent with RunContext: { userId: "usr_42", userRole: "admin", orgId: "org_enterprise" }');

  const result = await runner.run(agent, 'What is my account status and balance?', {
    context: {
      userId: 'usr_42',
      userRole: 'admin',
      orgId: 'org_enterprise',
    },
  });

  console.log('\n--- Final Text Response ---');
  console.log(result.text);
}

main().catch(console.error);
