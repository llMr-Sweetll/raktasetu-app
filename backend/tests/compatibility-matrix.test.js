import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GIVERS as donorGivers } from '../src/routes/donor.js';
import { GIVERS as hospitalGivers } from '../src/routes/hospital.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Extract `export const GIVERS = { ... };` from theme.js without importing the frontend bundle. */
function extractGiversFromThemeSource(source) {
  const match = source.match(/export const GIVERS = (\{[\s\S]*?\});/);
  assert.ok(match, 'frontend/src/theme.js must export const GIVERS = { ... }');
  // Theme uses single-quoted keys/values; evaluate as a plain object literal.
  return Function(`"use strict"; return (${match[1]});`)();
}

test('blood compatibility matrix is identical across donor, hospital, and frontend theme', () => {
  const themePath = path.resolve(__dirname, '../../frontend/src/theme.js');
  const themeSource = fs.readFileSync(themePath, 'utf8');
  const themeGivers = extractGiversFromThemeSource(themeSource);

  assert.deepEqual(donorGivers, hospitalGivers);
  assert.deepEqual(donorGivers, themeGivers);
});
