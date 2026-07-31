export function validateApiKey(request: Request): boolean {
  const expectedKey = process.env.API_KEY || 'kikoyu-secret-key';
  const headerKey =
    request.headers.get('x-api-key') ||
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '');

  if (!headerKey || headerKey !== expectedKey) {
    return false;
  }
  return true;
}
