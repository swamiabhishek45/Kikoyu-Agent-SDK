import * as fs from 'node:fs';
import * as path from 'node:path';

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

export interface FileStoreOptions {
  directoryPath?: string;
}

export class FileStore implements MemoryStore {
  private dirPath: string;

  constructor(options: FileStoreOptions = {}) {
    this.dirPath = options.directoryPath ?? path.join(process.cwd(), '.kikoyu-store');
    if (!fs.existsSync(this.dirPath)) {
      fs.mkdirSync(this.dirPath, { recursive: true });
    }
  }

  private getFilePath(key: string): string {
    const sanitized = key.replace(/[^a-zA-Z0-9_-]/g, '_');
    return path.join(this.dirPath, `${sanitized}.json`);
  }

  get<T = unknown>(key: string): T | undefined {
    const filePath = this.getFilePath(key);
    if (!fs.existsSync(filePath)) {
      return undefined;
    }
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(content) as T;
    } catch {
      return undefined;
    }
  }

  set<T = unknown>(key: string, value: T): void {
    const filePath = this.getFilePath(key);
    fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf-8');
  }

  append<T = unknown>(key: string, item: T): void {
    const existing = (this.get<T[]>(key) ?? []) as T[];
    if (!Array.isArray(existing)) {
      throw new Error(`Cannot append to non-array file store key "${key}"`);
    }
    this.set(key, [...existing, item]);
  }
}

export interface MinimalRedisClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<unknown>;
}

export class RedisStore implements MemoryStore {
  constructor(private redisClient: MinimalRedisClient, private prefix = 'kikoyu:') {}

  async get<T = unknown>(key: string): Promise<T | undefined> {
    const val = await this.redisClient.get(this.prefix + key);
    if (!val) return undefined;
    try {
      return JSON.parse(val) as T;
    } catch {
      return undefined;
    }
  }

  async set<T = unknown>(key: string, value: T): Promise<void> {
    await this.redisClient.set(this.prefix + key, JSON.stringify(value));
  }

  async append<T = unknown>(key: string, item: T): Promise<void> {
    const existing = (await this.get<T[]>(key)) ?? [];
    if (!Array.isArray(existing)) {
      throw new Error(`Cannot append to non-array redis store key "${key}"`);
    }
    await this.set(key, [...existing, item]);
  }
}

