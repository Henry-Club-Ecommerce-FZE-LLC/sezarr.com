// ULTRA-OPTIMIZED Service Worker - Aggressive Caching for PageSpeed
const CACHE_NAME = 'sezarr-performance-v4';
const CDN_CACHE = 'sezarr-cdn-v4';
const RUNTIME_CACHE = 'sezarr-runtime-v4';

// Critical assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline/',
  '/favicon.svg',
  '/scripts/enhancedThemeScript.js',
  '/tools/auto-insurance-calculator/',
  '/api/rates/auto.json'
];

// CDN domains for aggressive caching
const CDN_DOMAINS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net',
  'unpkg.com',
  'cdnjs.cloudflare.com'
];

// Ultra-fast install
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS)),
      self.skipWaiting()
    ])
  );
});

// Aggressive cache cleanup
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name.startsWith('sezarr') && !['sezarr-performance-v4', 'sezarr-cdn-v4', 'sezarr-runtime-v4'].includes(name))
            .map(name => caches.delete(name))
        );
      }),
      self.clients.claim()
    ])
  );
});

// Ultra-optimized fetch
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isLocal = url.origin === self.location.origin;
  const isCDN = CDN_DOMAINS.some(domain => url.hostname === domain);
  const isAPI = url.pathname.startsWith('/api/');
  const isAsset = /\.(css|js|woff2?|png|jpe?g|svg|webp|ico)$/i.test(url.pathname);

  if (isCDN || (isAsset && isLocal)) {
    event.respondWith(cacheFirstStrategy(event.request));
  } else if (isAPI) {
    event.respondWith(staleWhileRevalidateStrategy(event.request));
  } else if (isLocal) {
    event.respondWith(networkFirstStrategy(event.request));
  }
});

// Cache-first for static assets
async function cacheFirstStrategy(request) {
  const cache = await caches.open(CDN_CACHE);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Asset unavailable', { status: 503 });
  }
}

// Stale-while-revalidate for APIs
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached || new Response('{}', { headers: { 'Content-Type': 'application/json' } }));
  
  return cached || await fetchPromise;
}

// Network-first for HTML
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    return cached || caches.match('/offline/');
  }
}