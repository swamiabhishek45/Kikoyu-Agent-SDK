import { InMemoryStore } from '@kikoyu/core';

/** Shared in-process session store so `sessionId` persists across HTTP requests. */
export const apiSessionStore = new InMemoryStore();
