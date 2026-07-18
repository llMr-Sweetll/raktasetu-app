import webpush from 'web-push';
import { query } from '../db.js';
import { configureWebPush, vapidConfigured } from '../routes/push.js';

let loggedUnconfigured = false;

/**
 * Send a Web Push payload to all subscriptions for a user.
 * Gone endpoints (404/410) are deleted. Missing VAPID is a no-op.
 */
export async function sendPushToUser(
  userId,
  payload,
  {
    queryFn = query,
    sendNotification = webpush.sendNotification.bind(webpush),
    isConfigured = vapidConfigured,
    configure = configureWebPush,
  } = {},
) {
  if (!isConfigured()) {
    if (!loggedUnconfigured) {
      console.warn('Web Push skipped: VAPID is not configured');
      loggedUnconfigured = true;
    }
    return { sent: 0, failed: 0, removed: 0, skipped: true };
  }

  configure();
  const subscriptions = await queryFn(
    'SELECT id, endpoint, p256dh, auth FROM deliverable_push_subscriptions($1)',
    [userId],
  );

  const body = JSON.stringify(payload);
  let sent = 0;
  let failed = 0;
  let removed = 0;

  for (const subscription of subscriptions.rows) {
    try {
      await sendNotification({
        endpoint: subscription.endpoint,
        keys: { p256dh: subscription.p256dh, auth: subscription.auth },
      }, body);
      sent += 1;
    } catch (error) {
      failed += 1;
      if ([404, 410].includes(error.statusCode)) {
        const deletion = await queryFn(
          'SELECT delete_gone_push_subscription($1, $2) AS removed',
          [subscription.id, userId],
        );
        removed += Number(deletion.rows[0]?.removed || 0);
      }
    }
  }

  return { sent, failed, removed, skipped: false };
}

export function bloodRequestPushPayload({
  requestId,
  bloodGroup,
  urgency,
  unitsNeeded,
  hospitalName,
}) {
  return {
    title: `${String(urgency || 'urgent').toUpperCase()}: Blood needed`,
    body: `${bloodGroup} · ${unitsNeeded} unit(s) at ${hospitalName || 'a nearby hospital'}`,
    url: `/#/alert/${requestId}`,
  };
}

/** Test helper to reset the one-time unconfigured log flag. */
export function _resetPushDeliveryStateForTests() {
  loggedUnconfigured = false;
}
