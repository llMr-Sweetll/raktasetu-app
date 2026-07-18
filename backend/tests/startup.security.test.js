import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('production startup contains no demo seed or credential copy', async () => {
  const server = await readFile(new URL('../src/server.js', import.meta.url), 'utf8');
  const login = await readFile(new URL('../../frontend/src/screens/Login.jsx', import.meta.url), 'utf8');
  const readme = await readFile(new URL('../../README.md', import.meta.url), 'utf8');

  assert.doesNotMatch(server, /seedData\s*\(/);
  assert.doesNotMatch(server, /password123|Seeded admin/);
  assert.doesNotMatch(login, /Demo:/);
  assert.doesNotMatch(readme, /Demo Credentials|password123/);
});

test('application factory does not listen or mutate schema', async () => {
  const appSource = await readFile(new URL('../src/app.js', import.meta.url), 'utf8');
  assert.doesNotMatch(appSource, /\.listen\s*\(/);
  assert.doesNotMatch(appSource, /ALTER TABLE|CREATE TABLE|seedData/);
});

test('production server refuses boot when MIGRATION_DATABASE_URL is present', async () => {
  const server = await readFile(new URL('../src/server.js', import.meta.url), 'utf8');
  assert.match(server, /MIGRATION_DATABASE_URL must not be set on the application service/);
});
