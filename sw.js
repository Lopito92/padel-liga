// Minimal SW - just enough for PWA installability
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
// No fetch handler - don't intercept anything
