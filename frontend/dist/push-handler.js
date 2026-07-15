/* Loaded by the Vite PWA service worker via importScripts */
self.addEventListener('push', (event) => {
  let data = { title: 'RaktaSetu', body: 'New blood request nearby', url: '/#/home' };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch {
    try {
      data.body = event.data.text();
    } catch { /* ignore */ }
  }
  event.waitUntil(
    self.registration.showNotification(data.title || 'RaktaSetu', {
      body: data.body || '',
      icon: '/drop-icon.svg',
      badge: '/drop-icon.svg',
      data: { url: data.url || '/#/home' },
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/#/home';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const client of list) {
        if ('focus' in client) {
          client.navigate(url);
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
