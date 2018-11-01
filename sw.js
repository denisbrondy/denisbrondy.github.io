
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log("Service Worker Registered"); });
}

self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pwa').then(cache => {
        return cache.addAll([
          '/',
          '/sw.js',
          '/bluetooth.js',
          '/js/angular.min.js',
          '/index.html',
          '/manifest.json',
          '/css/bootstrap.min.css',
          '/images/touch/apple-touch-icon.png',
          '/images/touch/chrome-touch-icon-192x192.png',
          '/images/touch/icon-128x128.png',
          '/images/touch/ms-touch-icon-144x144-precomposed.png',
          '/images/touch/splash.png'
        ])
        .then(() => self.skipWaiting());
      })
    )
  });
  
  self.addEventListener('activate',  event => {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });