import test from 'node:test';
import assert from 'node:assert/strict';
import { buildHelmetOptions, applyPrivacyHeaders } from '../src/security.js';
import { buildAccountExport } from '../src/utils/dataExport.js';
import { isDonorEligible, nbtcIntervalDays } from '../src/utils/eligibility.js';

test('production security policy enables HSTS and restricts browser capabilities', () => {
  const options = buildHelmetOptions(true);

  assert.equal(options.hsts.maxAge, 31536000);
  assert.equal(options.referrerPolicy.policy, 'strict-origin-when-cross-origin');
  assert.deepEqual(options.contentSecurityPolicy.directives.objectSrc, ["'none'"]);
  assert.deepEqual(options.contentSecurityPolicy.directives.frameAncestors, ["'none'"]);
  assert.ok(!options.contentSecurityPolicy.directives.styleSrc.includes('https://unpkg.com'));
  assert.ok(!options.contentSecurityPolicy.directives.imgSrc.includes('https://unpkg.com'));
  assert.deepEqual(options.contentSecurityPolicy.directives.connectSrc, ["'self'", 'https://accounts.google.com']);
});

test('Permissions-Policy allows same-origin camera for QR verify', () => {
  const headers = {};
  applyPrivacyHeaders({}, { setHeader: (key, value) => { headers[key] = value; } }, () => {});
  assert.match(headers['Permissions-Policy'], /camera=\(self\)/);
  assert.match(headers['Permissions-Policy'], /microphone=\(\)/);
  assert.match(headers['Permissions-Policy'], /payment=\(\)/);
  assert.match(headers['Permissions-Policy'], /usb=\(\)/);
});

test('NBTC eligibility intervals are sex-aware with conservative fallback', () => {
  assert.equal(nbtcIntervalDays('male'), 90);
  assert.equal(nbtcIntervalDays('female'), 120);
  assert.equal(nbtcIntervalDays(null), 120);
  assert.equal(isDonorEligible(null), true);
  assert.equal(isDonorEligible('2099-01-01'), false);
  assert.equal(isDonorEligible('2000-01-01'), true);
});

test('account export contains scoped records and excludes authentication secrets', () => {
  const result = buildAccountExport({
    user: {
      id: 'user-1',
      email: 'donor@example.com',
      name: 'Donor',
      password_hash: 'secret',
      google_sub: 'google-secret',
      token_version: 4,
    },
    hospital: null,
    donations: [{ id: 'donation-1', donor_id: 'user-1' }],
    responses: [],
    credits: [],
    familyMembers: [],
    notifications: [],
  }, '2026-07-15T00:00:00.000Z');

  assert.equal(result.exported_at, '2026-07-15T00:00:00.000Z');
  assert.equal(result.account.email, 'donor@example.com');
  assert.equal(result.account.password_hash, undefined);
  assert.equal(result.account.google_sub, undefined);
  assert.equal(result.account.token_version, undefined);
  assert.equal(result.donations.length, 1);
});
