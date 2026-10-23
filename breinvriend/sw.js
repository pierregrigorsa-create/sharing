// Breinvriend het geskuif: verwyder die ou kas en stuur na die nuwe adres.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate('https://hennieterblanche.co.za/breinvriend/'))))});
