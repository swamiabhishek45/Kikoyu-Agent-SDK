import * as fs from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { FileStore, RedisStore } from '../src/memory.js';

describe('Storage Adapters', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'kikoyu-test-store-'));
  });

  afterEach(() => {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it('FileStore sets, gets, and appends JSON data correctly', () => {
    const store = new FileStore({ directoryPath: tempDir });
    expect(store.get('session-1')).toBeUndefined();

    store.set('session-1', [{ role: 'user', content: 'hello' }]);
    expect(store.get('session-1')).toEqual([{ role: 'user', content: 'hello' }]);

    store.append('session-1', { role: 'assistant', content: 'hi back' });
    expect(store.get('session-1')).toEqual([
      { role: 'user', content: 'hello' },
      { role: 'assistant', content: 'hi back' },
    ]);
  });

  it('RedisStore delegates to underlying Redis client', async () => {
    const mockRedisMap = new Map<string, string>();
    const mockRedis = {
      get: vi.fn(async (key: string) => mockRedisMap.get(key) ?? null),
      set: vi.fn(async (key: string, val: string) => {
        mockRedisMap.set(key, val);
      }),
    };

    const redisStore = new RedisStore(mockRedis, 'test:');
    await redisStore.set('key-1', { count: 42 });

    expect(mockRedis.set).toHaveBeenCalledWith('test:key-1', JSON.stringify({ count: 42 }));
    const fetched = await redisStore.get<{ count: number }>('key-1');
    expect(fetched).toEqual({ count: 42 });
  });
});
