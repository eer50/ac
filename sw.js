self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('age-calculator-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/ac/index.html',
                '/ac/manifest.json',
                // Include CSS, JS, and any other assets
                // For example:
                // '/ac/style.css',
                // '/ac/script.js',
                // '/ac/icon.png',
                // '/ac/icon-512.png',
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
