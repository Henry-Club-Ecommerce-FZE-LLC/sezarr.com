/* Service Worker for Performance */
const CACHE_NAME = 'sezarr-v1';
const STATIC_ASSETS = [
  '/',
  '/tools/',
  '/posts/',
  '/offline/',
  '/site.webmanifest',
  '/favicon.ico'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - Cache first for static assets, network first for dynamic content
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip external requests
  if (!url.origin.includes(location.origin)) return;

  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          // Fetch fresh version in background for next time
          fetch(request).then((freshResponse) => {
            if (freshResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, freshResponse.clone());
              });
            }
          }).catch(() => {});
          return response;
        }

        // Fetch from network
        return fetch(request)
          .then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            
            // Cache successful responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            
            return response;
          })
          .catch(() => {
            // Return offline page for navigation requests
            if (request.mode === 'navigate') {
              return caches.match('/offline/');
            }
            throw new Error('Failed to fetch');
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  // Handle offline form submissions
  const store = await getStore();
  const forms = await store.getAll('pending-forms');
  
  for (const form of forms) {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: form.data
      });
      await store.delete('pending-forms', form.id);
    } catch (error) {
      // Keep in queue for next sync
    }
  }
}

async function getStore() {
  const db = await idb.openDB('sezarr-store', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('pending-forms')) {
        db.createObjectStore('pending-forms', { keyPath: 'id' });
      }
    }
  });
  return db;
}