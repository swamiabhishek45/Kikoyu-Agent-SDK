import { InMemoryStore, type MemoryStore } from './memory.js';
import type { ModelMessage } from './types.js';

export interface SessionOptions {
  sessionId: string;
  store?: MemoryStore;
}

export class Session {
  readonly sessionId: string;
  readonly store: MemoryStore;

  constructor(
    sessionIdOrOptions: string | SessionOptions,
    store?: MemoryStore
  ) {
    if (typeof sessionIdOrOptions === 'string') {
      if (!sessionIdOrOptions) {
        throw new Error('sessionId must be a non-empty string');
      }
      this.sessionId = sessionIdOrOptions;
      this.store = store ?? new InMemoryStore();
    } else {
      if (!sessionIdOrOptions.sessionId) {
        throw new Error('sessionId must be a non-empty string');
      }
      this.sessionId = sessionIdOrOptions.sessionId;
      this.store = sessionIdOrOptions.store ?? store ?? new InMemoryStore();
    }
  }

  private get storeKey(): string {
    return `session:${this.sessionId}:messages`;
  }

  async getMessages(): Promise<ModelMessage[]> {
    const messages = await this.store.get<ModelMessage[]>(this.storeKey);
    return messages ?? [];
  }

  async appendMessages(newMessages: ModelMessage[]): Promise<void> {
    const existing = await this.getMessages();
    await this.store.set(this.storeKey, [...existing, ...newMessages]);
  }

  async clear(): Promise<void> {
    await this.store.set(this.storeKey, []);
  }
}
