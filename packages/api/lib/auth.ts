const DEV_FALLBACK_KEY = 'kikoyu-secret-key';

export function getExpectedApiKey(): string | undefined {
  if (process.env.API_KEY) {
    return process.env.API_KEY;
  }
  if (process.env.NODE_ENV === 'production') {
    return undefined;
  }
  return DEV_FALLBACK_KEY;
}

export function validateApiKey(request: Request): boolean {
  const expectedKey = getExpectedApiKey();
  if (!expectedKey) {
    return false;
  }

  const headerKey =
    request.headers.get('x-api-key') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');

  if (!headerKey || headerKey !== expectedKey) {
    return false;
  }
  return true;
}
