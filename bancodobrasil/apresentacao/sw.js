/* Service worker — Depois do Código.
   Deixa a apresentação rodar offline (modo demo). O voto ao vivo precisa
   de rede; offline, o deck cai no simulado automaticamente. */
var CACHE = 'dc-v3';
var CORE = [
  './', 'index.html',
  'assets/css/deck.css',
  'assets/js/render.js', 'assets/js/engine.js',
  'assets/js/polls-live.js', 'assets/js/votar.js',
  'assets/js/vendor/qrcode.js',
  'content/screens.json', 'content/concepts.json',
  'votar/', 'votar/index.html'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);

  // Fontes do Google: cache-first (garante fontes offline após 1ª carga)
  if (url.host === 'fonts.googleapis.com' || url.host === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { c.put(req, res.clone()); return res; });
      });
    }));
    return;
  }

  // Firebase SDK e config: só rede (offline → falha → modo demo). Não cachear.
  if (url.host === 'www.gstatic.com' || url.pathname.indexOf('firebase-config') >= 0) return;

  // App (mesmo domínio): network-first, ignorando o cache HTTP do navegador —
  // online sempre pega a versão nova; o cache do SW é só o fallback offline.
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' }).then(function (res) {
        if (res && res.status === 200) {
          var clone = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, clone); });
        }
        return res;
      }).catch(function () { return caches.match(req); })
    );
  }
});
