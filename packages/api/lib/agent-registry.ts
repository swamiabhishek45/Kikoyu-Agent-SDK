import type { Agent } from '@kikoyu/core';

export interface RegisteredAgentPayload {
  id: string;
  name: string;
  instructions: string;
  modelOptions?: {
    apiKey?: string;
    model?: string;
  };
}

class AgentRegistryStore {
  private registeredAgents = new Map<string, Agent>();

  register(id: string, agent: Agent): void {
    this.registeredAgents.set(id, agent);
  }

  get(id: string): Agent | undefined {
    return this.registeredAgents.get(id);
  }

  has(id: string): boolean {
    return this.registeredAgents.has(id);
  }

  clear(): void {
    this.registeredAgents.clear();
  }
}

export const agentRegistry = new AgentRegistryStore();
