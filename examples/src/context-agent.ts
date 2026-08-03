import dotenv from 'dotenv';
dotenv.config({ path: ['../.env', '.env'] });

import { Agent, createTool, Runner, z } from '@kikoyu/core';

interface AppContext {
  userId: string;
  userRole: string;
  orgId: string;
}

const getUserAccountTool = createTool<
  z.ZodObject<Record<string, never>>,
  unknown,
  AppContext
>({
  name: 'get_user_account',
  description: 'Returns account status and balance information for the context user.',
  parameters: z.object({}),
  execute: async (_args, ctx) => {
    const userId = ctx.get('userId');
    const userRole = ctx.get('userRole');
    const orgId = ctx.get('orgId');

    console.log(`\n  [Context Accessed] User: ${userId}, Role: ${userRole}, Org: ${orgId}`);

    return {
      userId,
      userRole,
      orgId,
      accountStatus: 'Active',
      tier: 'Enterprise',
      balance: '$12,450.00',
    };
  },
});

async function main() {
  const apiKey = process.env.KIKOYU_API_KEY || process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.log('OPENAI_API_KEY environment variable is not set.');
    return;
  }

  console.log('Initializing Agent with Agent.builder()...');

  const agent = Agent.builder()
    .setName('Account Agent')
    .setInstructions('Help users inspect their account balance using the get_user_account tool.')
    .setApiKey(apiKey)
    .addTool(getUserAccountTool)
    .build();

  const runner = new Runner();

  const userContext: AppContext = {
    userId: 'usr_89213',
    userRole: 'admin',
    orgId: 'org_acme_corp',
  };

  console.log('Running Agent with isolated context...');
  const result = await runner.run(agent, 'Check my current account balance.', {
    context: userContext,
  });

  console.log('\nFinal Answer:');
  console.log(result.text);
}

main().catch(console.error);
