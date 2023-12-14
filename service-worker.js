// Register a cache named 'cache-v1' for storing static assets
const cacheName = 'cache-v1';

// Install event handler (triggered when the service worker is installed)
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName)
    .then(cache => {
      // Add necessary static assets to the cache, e.g., your logo, app shell (index.html, CSS, etc.)
      return cache.addAll([
        '/',
        '/logo.png',
        '/index.html',
        '/app.css',
        // ... Add other assets you want to cache
      ]);
    }));
});

// Fetch event handler (triggered when the app requests a resource)
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      // If the requested resource is found in the cache, return it
      if (cachedResponse) {
        return cachedResponse;
      }

      // If the resource is not found in the cache, fetch it from the network and cache it for future use
      return fetch(event.request)
        .then(response => {
          caches.open(cacheName)
            .then(cache => {
              // Only cache successful responses
              if (response.status === 200) {
                cache.put(event.request, response.clone());
              }
            });
          return response;
        });
    }));
});
