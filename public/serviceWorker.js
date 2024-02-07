// Inside serviceWorker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/js/bundle.js', // Adjust based on your actual app structure
          '/css/app.css', // Adjust based on your actual app structure
          '/favicon.ico',
          '/logo192.png',
          '/logo512.png',
          // Add other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  