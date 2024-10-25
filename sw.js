self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('age-calculator-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json'
                // Add additional files if necessary
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
