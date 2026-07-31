export interface MemoryStore {
  get<T = unknown>(key: string): Promise<T | undefined> | T | undefined;
  set<T = unknown>(key: string, value: T): Promise<void> | void;
  append<T = unknown>(key: string, item: T): Promise<void> | void;
}

export class InMemoryStore implements MemoryStore {
  private store = new Map<string, unknown>();

  get<T = unknown>(key: string): T | undefined {
    const val = this.store.get(key);
    return val !== undefined ? (val as T) : undefined;
  }

  set<T = unknown>(key: string, value: T): void {
    this.store.set(key, value);
  }

  append<T = unknown>(key: string, item: T): void {
    const existing = (this.store.get(key) as T[] | undefined) ?? [];
    if (!Array.isArray(existing)) {
      throw new Error(`Cannot append to non-array memory store key "${key}"`);
    }
    this.store.set(key, [...existing, item]);
  }
}
