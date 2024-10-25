self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('age-calculator-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/ac/index.html',
                '/ac/manifest.json'
                // Include any other essential files
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
