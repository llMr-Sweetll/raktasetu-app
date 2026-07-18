import test from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';
import { apiRateLimitKey } from '../src/middleware/rateLimitKey.js';

test('apiRateLimitKey prefers Bearer sub over IP', () => {
  const token = jwt.sign({ sub: 'user-42', role: 'donor' }, 'test-secret');
  const key = apiRateLimitKey({
    headers: { authorization: `Bearer ${token}` },
    ip: '203.0.113.10',
  });
  assert.equal(key, 'user:user-42');
});

test('apiRateLimitKey falls back to IP when anonymous', () => {
  const key = apiRateLimitKey({
    headers: {},
    ip: '203.0.113.10',
  });
  assert.equal(key, '203.0.113.10');
});

test('apiRateLimitKey ignores malformed Bearer tokens', () => {
  const key = apiRateLimitKey({
    headers: { authorization: 'Bearer not-a-jwt' },
    ip: '198.51.100.7',
  });
  assert.equal(key, '198.51.100.7');
});
