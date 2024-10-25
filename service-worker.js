self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('age-calculator-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html', // Replace with your actual HTML file name
                '/manifest.json',
                '/style.css', // Include if you have an external CSS file
                '/script.js', // Include if you have an external JS file
                'icon-192x192.png',
                'icon-512x512.png'
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
