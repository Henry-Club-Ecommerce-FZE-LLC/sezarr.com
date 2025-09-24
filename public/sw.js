// Optimized Service Worker for CDN and Performance
const CACHE_NAME = 'sezarr-v3';
const CDN_CACHE = 'sezarr-cdn-v3';

const STATIC_ASSETS = [
  '/',
  '/offline/',
  '/favicon.svg',
  '/scripts/enhancedThemeScript.js'
];

const CDN_DOMAINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net',
  'unpkg.com'
];

// Install - cache essential assets only
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name.startsWith('sezarr') && !['sezarr-v3', 'sezarr-cdn-v3'].includes(name))
            .map(name => caches.delete(name))
        );
      }),
      self.clients.claim()
    ])
  );
});

// Fetch - optimized for CDN and local assets
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isLocal = url.origin === self.location.origin;
  const isCDN = CDN_DOMAINS.some(domain => url.hostname === domain);

  if (!isLocal && !isCDN) return;

  event.respondWith(
    (async () => {
      // CDN resources - cache first, then network
      if (isCDN) {
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) return cachedResponse;

        try {
          const response = await fetch(event.request);
          if (response.ok) {
            const cache = await caches.open(CDN_CACHE);
            cache.put(event.request, response.clone());
          }
          return response;
        } catch (error) {
          return cachedResponse || new Response('CDN resource unavailable', { status: 503 });
        }
      }

      // Local resources - network first, then cache
      try {
        const response = await fetch(event.request);
        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        const cachedResponse = await caches.match(event.request);
        return cachedResponse || (
          url.pathname === '/' || url.pathname.endsWith('.html') ? 
          await caches.match('/offline/') : 
          new Response('Resource unavailable', { status: 503 })
        );
      }
    })()
  );
});