const CACHE_NAME = 'bell-mobile-v1';
const urlsToCache = [
  '/mobile',
  '/mobile/layout.tsx',
  '/styles/mobile.css',
  '/styles/globals.css',
  '/icons/bell-icon.svg',
  '/fonts/Jubilat-Light.otf',
  '/fonts/Acumin-RPro.otf',
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch - stratégie Cache First pour les ressources statiques
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - retourner la réponse
        if (response) {
          return response;
        }
        
        // Pas en cache - aller chercher en réseau
        return fetch(event.request).then(
          (response) => {
            // Vérifier si nous avons reçu une réponse valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone la réponse. Une réponse est un stream
            // et parce que nous voulons que le navigateur consomme la réponse
            // ainsi que le cache qui consomme la réponse, nous devons la cloner
            // pour que nous ayons deux streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

// Activation et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 