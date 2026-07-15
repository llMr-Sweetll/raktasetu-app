import api from '../api/client.js';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}

export function notificationsSupported() {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export async function showLocalNotification(title, body, options = {}) {
  if (!notificationsSupported()) {
    throw new Error('Notifications are not supported in this browser');
  }
  let permission = Notification.permission;
  if (permission === 'default') {
    permission = await Notification.requestPermission();
  }
  if (permission !== 'granted') {
    throw new Error('Notification permission denied');
  }

  if ('serviceWorker' in navigator) {
    const reg = await navigator.serviceWorker.ready.catch(() => null);
    if (reg?.showNotification) {
      await reg.showNotification(title, {
        body,
        icon: '/drop-icon.svg',
        badge: '/drop-icon.svg',
        ...options,
      });
      return { via: 'serviceWorker' };
    }
  }

  // Fallback when SW not ready
  // eslint-disable-next-line no-new
  new Notification(title, { body, icon: '/drop-icon.svg', ...options });
  return { via: 'Notification' };
}

export async function enablePushNotifications() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    throw new Error('Push messaging is not supported');
  }
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    throw new Error('Notification permission denied');
  }

  const { data } = await api.get('/push/vapid-public-key');
  const publicKey = data.data?.publicKey;
  if (!publicKey) throw new Error('VAPID public key not available');

  const reg = await navigator.serviceWorker.ready;
  let sub = await reg.pushManager.getSubscription();
  if (!sub) {
    sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicKey),
    });
  }

  const json = sub.toJSON();
  await api.post('/push/subscribe', {
    endpoint: json.endpoint,
    keys: json.keys,
  });
  return { subscribed: true };
}

export async function testServerPush(body) {
  const { data } = await api.post('/push/test', { body });
  return data;
}
