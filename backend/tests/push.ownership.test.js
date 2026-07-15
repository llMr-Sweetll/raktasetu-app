import test from 'node:test';
import assert from 'node:assert/strict';
import { subscriptionOwnerDecision } from '../src/routes/push.js';

test('push endpoint ownership cannot move between users', () => {
  assert.equal(subscriptionOwnerDecision(null, 'user-a'), 'create');
  assert.equal(subscriptionOwnerDecision({ user_id: 'user-a' }, 'user-a'), 'update');
  assert.equal(subscriptionOwnerDecision({ user_id: 'user-b' }, 'user-a'), 'deny');
});
