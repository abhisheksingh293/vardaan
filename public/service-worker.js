// Service Worker for caching Supabase API responses
const CACHE_NAME = 'supabase-api-cache-v1';
const SUPABASE_API_REGEX = /https:\/\/([\w-]+)\.supabase\.co\//;

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.url.match(SUPABASE_API_REGEX) && request.method === 'GET') {
    event.respondWith(
      caches.open(CACHE_NAME).then(async cache => {
        const cached = await cache.match(request);
        if (cached) {
          // Optionally: Update cache in background
          fetch(request).then(response => {
            if (response.ok) cache.put(request, response.clone());
          });
          return cached;
        }
        const response = await fetch(request);
        if (response.ok) {
          cache.put(request, response.clone());
        }
        return response;
      })
    );
  }
});

// Clean up old caches if needed
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});
