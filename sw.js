/* Behavior Observation Log: offline support.
   When you change any app file, raise VERSION so teachers get the update. */
const VERSION = 'v1.1.0';
const CACHE = 'behavior-log-' + VERSION;
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './vendor/chart.umd.js',
  './vendor/jszip.min.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))));
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('behavior-log-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', e => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // App files come from the cache first, so the app opens instantly and offline.
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, {ignoreSearch: true}) ||
      (req.mode === 'navigate' ? await cache.match('./index.html') : null);
    if (hit) return hit;
    try { return await fetch(req); }
    catch { return req.mode === 'navigate' ? (await cache.match('./index.html')) : Response.error(); }
  })());
});
