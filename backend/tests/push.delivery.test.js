import test from 'node:test';
import assert from 'node:assert/strict';
import {
  bloodRequestPushPayload,
  sendPushToUser,
  _resetPushDeliveryStateForTests,
} from '../src/services/pushDelivery.js';

test('blood request push payload deep-links to hash alert route', () => {
  const payload = bloodRequestPushPayload({
    requestId: 'req-1',
    bloodGroup: 'O+',
    urgency: 'critical',
    unitsNeeded: 2,
    hospitalName: 'City Hospital',
  });
  assert.equal(payload.url, '/#/alert/req-1');
  assert.match(payload.title, /CRITICAL/);
  assert.match(payload.body, /O\+/);
});

test('sendPushToUser is a no-op when VAPID is unset', async () => {
  _resetPushDeliveryStateForTests();
  const result = await sendPushToUser(
    'donor-1',
    { title: 'x', body: 'y', url: '/#/home' },
    { isConfigured: () => false, queryFn: async () => assert.fail('should not query') },
  );
  assert.deepEqual(result, { sent: 0, failed: 0, removed: 0, skipped: true });
});

test('sendPushToUser sends and removes gone subscriptions', async () => {
  _resetPushDeliveryStateForTests();
  const queryCalls = [];
  const queryFn = async (sql, params) => {
    queryCalls.push({ sql, params });
    if (sql.includes('deliverable_push_subscriptions')) {
      return {
        rows: [
          { id: 'sub-ok', endpoint: 'https://push.example/ok', p256dh: 'p', auth: 'a' },
          { id: 'sub-gone', endpoint: 'https://push.example/gone', p256dh: 'p', auth: 'a' },
        ],
      };
    }
    if (sql.includes('delete_gone_push_subscription')) {
      return { rows: [{ removed: 1 }] };
    }
    return { rows: [] };
  };

  const sendNotification = async (subscription) => {
    if (subscription.endpoint.includes('gone')) {
      const error = new Error('Gone');
      error.statusCode = 410;
      throw error;
    }
  };

  const result = await sendPushToUser(
    'donor-1',
    { title: 'Blood', body: 'Needed', url: '/#/alert/r1' },
    {
      queryFn,
      sendNotification,
      isConfigured: () => true,
      configure: () => true,
    },
  );

  assert.equal(result.sent, 1);
  assert.equal(result.failed, 1);
  assert.equal(result.removed, 1);
  assert.equal(result.skipped, false);
  assert.equal(queryCalls.some((c) => c.sql.includes('delete_gone_push_subscription')), true);
});
