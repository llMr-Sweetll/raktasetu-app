import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { tokenFromHandshake } from '../src/realtime/socketAuthorization.js';

test('socket authentication ignores URL query tokens', () => {
  assert.equal(tokenFromHandshake({ query: { token: 'leaks-in-logs' } }), null);
  assert.equal(tokenFromHandshake({ auth: { token: 'private-payload' }, query: { token: 'ignored' } }), 'private-payload');
});

test('socket transport exposes no mutation implementation', async () => {
  const source = await readFile(new URL('../src/realtime/socketAuthorization.js', import.meta.url), 'utf8');
  assert.match(source, /HTTP_MUTATION_REQUIRED/);
  assert.doesNotMatch(source, /INSERT INTO|UPDATE users|UPDATE donor_responses/);
});
