import test from 'node:test';
import assert from 'node:assert/strict';
import { authorize } from '../src/auth/policy.js';

const donor = { id: 'donor-a', role: 'donor', account_status: 'active' };
const hospital = {
  id: 'hospital-user-a',
  role: 'hospital',
  account_status: 'active',
  hospital_id: 'hospital-a',
  approval_status: 'approved',
};
const pendingHospital = { ...hospital, approval_status: 'pending' };
const admin = { id: 'admin-a', role: 'admin', account_status: 'active' };

test('role and ownership matrix defaults to deny', () => {
  const cases = [
    [donor, 'hospital.request.update', { hospital_id: 'hospital-a' }, false],
    [hospital, 'donor.profile.read', { user_id: 'donor-a' }, false],
    [pendingHospital, 'hospital.request.read', { hospital_id: 'hospital-a' }, false],
    [hospital, 'hospital.request.read', { hospital_id: 'hospital-b' }, false],
    [donor, 'donor.profile.read', { user_id: 'donor-b' }, false],
    [admin, 'donor.profile.read', { user_id: 'donor-a' }, false],
    [admin, 'admin.user.read', { user_id: 'donor-a' }, true],
  ];
  for (const [actor, action, resource, expected] of cases) {
    assert.equal(authorize({ actor, action, resource }).allowed, expected, `${actor.role} ${action}`);
  }
});

test('only active owners receive operational access', () => {
  assert.equal(authorize({ actor: donor, action: 'donor.profile.update', resource: { user_id: donor.id } }).allowed, true);
  assert.equal(authorize({ actor: hospital, action: 'hospital.request.update', resource: { hospital_id: hospital.hospital_id } }).allowed, true);
  assert.equal(authorize({ actor: { ...donor, account_status: 'deleted' }, action: 'donor.profile.read', resource: { user_id: donor.id } }).allowed, false);
  assert.equal(authorize({ actor: { ...donor, account_status: 'deactivated' }, action: 'donor.profile.read', resource: { user_id: donor.id } }).allowed, false);
});

test('credit redemption actions follow donor/hospital ownership', () => {
  assert.equal(authorize({ actor: donor, action: 'donor.redemption.create', resource: { user_id: donor.id } }).allowed, true);
  assert.equal(authorize({ actor: donor, action: 'donor.family.write', resource: { user_id: 'donor-b' } }).allowed, false);
  assert.equal(authorize({ actor: hospital, action: 'hospital.redemption.verify', resource: { hospital_id: hospital.hospital_id } }).allowed, true);
  assert.equal(authorize({ actor: hospital, action: 'hospital.redemption.verify', resource: { hospital_id: 'hospital-b' } }).allowed, false);
  assert.equal(authorize({ actor: donor, action: 'hospital.redemption.verify', resource: { hospital_id: 'hospital-a' } }).allowed, false);
});

test('pilot metrics: admin-only admin metrics; hospital slice scoped; donor denied', () => {
  assert.equal(authorize({ actor: admin, action: 'admin.metrics.read' }).allowed, true);
  assert.equal(authorize({ actor: donor, action: 'admin.metrics.read' }).allowed, false);
  assert.equal(authorize({ actor: hospital, action: 'admin.metrics.read' }).allowed, false);

  assert.equal(authorize({
    actor: hospital, action: 'hospital.metrics.read', resource: { hospital_id: hospital.hospital_id },
  }).allowed, true);
  assert.equal(authorize({
    actor: hospital, action: 'hospital.metrics.read', resource: { hospital_id: 'hospital-b' },
  }).allowed, false);
  assert.equal(authorize({
    actor: donor, action: 'hospital.metrics.read', resource: { hospital_id: 'hospital-a' },
  }).allowed, false);
  assert.equal(authorize({
    actor: pendingHospital, action: 'hospital.metrics.read', resource: { hospital_id: 'hospital-a' },
  }).allowed, false);
});
