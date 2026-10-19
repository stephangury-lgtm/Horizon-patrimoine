'use strict';
const VERSION='horizon-pwa-v1';
const PREFIX='horizon-'+encodeURIComponent(self.registration.scope)+'-';
const CACHE=PREFIX+VERSION;
const FILES=['./','index.html','app.js','crypto-import.js','pwa.js','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/maskable-512.png'];
const urls=FILES.map(path=>new URL(path,self.registration.scope).href);
function safe(response,url){return response.ok&&!response.redirected&&response.type!=='opaque'&&(!response.url||response.url===url);}
self.addEventListener('install',event=>{event.waitUntil((async()=>{const responses=await Promise.all(urls.map(async url=>{const r=await fetch(new Request(url,{cache:'reload',credentials:'same-origin'}));if(!safe(r,url))throw Error('App shell unavailable');return r;}));const cache=await caches.open(CACHE);await Promise.all(urls.map((url,i)=>cache.put(url,responses[i])));})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const names=await caches.keys();await Promise.all(names.filter(name=>name.startsWith(PREFIX)&&name!==CACHE).map(name=>caches.delete(name)));await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('fetch',event=>{const request=event.request,url=new URL(request.url);if(request.method!=='GET'||url.origin!==self.location.origin)return;const plain=url.origin+url.pathname;if(!urls.includes(plain))return;event.respondWith((async()=>{const cache=await caches.open(CACHE);if(request.mode==='navigate'){try{return await fetch(request);}catch{const cached=await cache.match(new URL('index.html',self.registration.scope).href);return cached||Response.error();}}return await cache.match(plain)||fetch(request);})());});
