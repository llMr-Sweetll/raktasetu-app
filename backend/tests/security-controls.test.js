import test from 'node:test';
import assert from 'node:assert/strict';
import { authorize } from '../src/auth/policy.js';
import {
  registrationSchema,
  hospitalApprovalSchema,
  donationCompletionSchema,
  paginationSchema,
  pushSubscriptionSchema,
} from '../src/validation/schemas.js';
import { decideGoogleFlow } from '../src/auth/google.js';
import { tokenFromHandshake } from '../src/realtime/socketAuthorization.js';

test('policy denies inactive and cross-tenant actors', () => {
  assert.equal(authorize({
    actor: { id: 'd1', role: 'donor', account_status: 'suspended' },
    action: 'donor.profile.read',
    resource: { user_id: 'd1' },
  }).allowed, false);
  assert.equal(authorize({
    actor: { id: 'h1', role: 'hospital', account_status: 'active', hospital_id: 'a', approval_status: 'approved' },
    action: 'hospital.request.read',
    resource: { hospital_id: 'b' },
  }).allowed, false);
});

test('policy allows explicit owner actions only', () => {
  assert.equal(authorize({
    actor: { id: 'd1', role: 'donor', account_status: 'active' },
    action: 'donor.profile.read',
    resource: { user_id: 'd1' },
  }).allowed, true);
  assert.equal(authorize({
    actor: { id: 'h1', role: 'hospital', account_status: 'active', hospital_id: 'a', approval_status: 'approved' },
    action: 'hospital.request.update',
    resource: { hospital_id: 'a' },
  }).allowed, true);
});

test('registration schema is strict, normalized, and requires an adult donor', () => {
  const valid = registrationSchema.parse({
    email: ' Donor@Example.com ',
    phone: '+91 98765 43210',
    password: 'Strong!Pass1',
    name: 'Test Donor',
    role: 'donor',
    blood_group: 'O+',
    date_of_birth: '1990-01-01',
    city: 'Hubballi',
    state: 'Karnataka',
    consent_given: true,
    consent_policy_version: '2026-07-15',
  });
  assert.equal(valid.email, 'donor@example.com');
  assert.equal(valid.phone, '+919876543210');
  assert.throws(() => registrationSchema.parse({ ...valid, unknown: true }));
  assert.throws(() => registrationSchema.parse({ ...valid, date_of_birth: new Date().toISOString().slice(0, 10) }));
});

test('mutation schemas reject mass assignment and unsafe bounds', () => {
  assert.throws(() => hospitalApprovalSchema.parse({ status: 'approved', approved_by: 'fake' }));
  assert.throws(() => donationCompletionSchema.parse({
    request_id: '3bd8987e-8b0e-4e3e-8b7a-3586e14c73bb',
    donor_id: '257e9b50-98fe-46f7-bd57-b15762dbd19e',
    units: 1,
    credits_earned: 5000,
  }));
  assert.equal(paginationSchema.parse({ limit: '100' }).limit, 100);
  assert.throws(() => paginationSchema.parse({ limit: '101' }));
});

test('push schema accepts HTTPS only and bounded key material', () => {
  assert.doesNotThrow(() => pushSubscriptionSchema.parse({
    endpoint: 'https://push.example.test/subscription',
    keys: { p256dh: 'a'.repeat(64), auth: 'b'.repeat(24) },
  }));
  assert.throws(() => pushSubscriptionSchema.parse({
    endpoint: 'http://push.example.test/subscription',
    keys: { p256dh: 'a', auth: 'b' },
  }));
});

test('Google flow never auto-links by email or privileged role', () => {
  assert.deepEqual(decideGoogleFlow({ googleMatch: null, emailMatch: null }), { flow: 'onboarding_required' });
  assert.deepEqual(
    decideGoogleFlow({ googleMatch: null, emailMatch: { role: 'donor' } }),
    { flow: 'link_required' },
  );
  assert.deepEqual(
    decideGoogleFlow({ googleMatch: null, emailMatch: { role: 'admin' } }),
    { flow: 'privileged_link_denied' },
  );
  assert.deepEqual(
    decideGoogleFlow({ googleMatch: { role: 'donor', account_status: 'active' }, emailMatch: null }),
    { flow: 'session' },
  );
});

test('Socket.IO accepts auth payload tokens only', () => {
  assert.equal(tokenFromHandshake({ auth: { token: 'safe' }, query: { token: 'unsafe' } }), 'safe');
  assert.equal(tokenFromHandshake({ auth: {}, query: { token: 'unsafe' } }), null);
});
