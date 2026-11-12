/* Key Inventory service worker: it shows alerts and opens the app when you tap one.
   It does not store pages, so you always get the newest version of the app. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    for (const c of list) { if ('focus' in c) return c.focus(); }
    return self.clients.openWindow('./');
  }));
});
/* ready for a push service later: shows whatever title and body it is sent */
self.addEventListener('push', (e) => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (x) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Key Inventory', { body: d.body || '', icon: 'icon-192.png', badge: 'icon-192.png', tag: d.tag || 'key-inventory' }));
});
