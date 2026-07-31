import { describe, expect, it, vi } from 'vitest';
import { z } from 'zod';
import { Agent } from '../src/agent.js';
import { Runner } from '../src/runner.js';
import { createTool } from '../src/tool.js';
import type { ModelProvider } from '../src/types.js';

describe('Tool Approvals & Safeguards', () => {
  it('triggers tool approval and blocks execution if approval handler returns false', async () => {
    const dangerousTool = createTool({
      name: 'delete_database',
      description: 'Deletes the database',
      parameters: z.object({ table: z.string() }),
      requiresApproval: true,
      execute: vi.fn().mockResolvedValue({ deleted: true }),
    });

    const mockModel: ModelProvider = {
      name: 'mock',
      complete: vi
        .fn()
        .mockResolvedValueOnce({
          text: '',
          toolCalls: [{ id: 'call-1', name: 'delete_database', args: { table: 'users' } }],
        })
        .mockResolvedValueOnce({
          text: 'Safely handled rejection.',
        }),
    };

    const agent = new Agent({
      name: 'DBAgent',
      instructions: 'Manage database',
      model: mockModel,
      tools: [dangerousTool],
    });

    const runner = new Runner();

    const approvalHandler = vi.fn().mockResolvedValue(false);

    const events: string[] = [];
    let approvalRequested = false;

    for await (const event of runner.stream(agent, 'Delete users table', { approvalHandler })) {
      events.push(event.type);
      if (event.type === 'tool_approval_requested') {
        approvalRequested = true;
        expect(event.approved).toBe(false);
      }
    }

    expect(approvalRequested).toBe(true);
    expect(approvalHandler).toHaveBeenCalledWith('delete_database', { table: 'users' });
    expect(dangerousTool.execute).not.toHaveBeenCalled();
  });
});
