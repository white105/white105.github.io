"use strict";var precacheConfig=[["/index.html","a435eacd4335f97a3aa6fd68fc60dd95"],["/static/css/main.81e9a1fa.css","a165f9a39672edcba1e8fad3c42f1c4f"],["/static/js/main.493b74d9.js","16917a553bf2f7faf328960e2f26be8d"],["/static/media/MeemzIO.3b2509b4.png","3b2509b4d2c51c515a6e1132d5f8f97e"],["/static/media/backyard-crypto.a815eaec.png","a815eaece1eefbd8ca263202ae27224a"],["/static/media/bar-tabs.ceadc86d.png","ceadc86da4ca665dd63f15796eaf36a3"],["/static/media/barstoolsports-logo.81ae53e2.png","81ae53e20764535ae249e8da6f8fed1d"],["/static/media/big_red.91ba7bfb.jpg","91ba7bfb7a9e5e3c717bb9c16901fae0"],["/static/media/blockchainub.54987724.png","54987724029a803a7080fa51a7df27a3"],["/static/media/canisius-logo.d7778260.jpg","d7778260cc4d31f09c04aed09883c2e0"],["/static/media/dandyhacksgroup.b562f540.jpg","b562f5409ad822e414c95f8d7ef7c7ac"],["/static/media/horizns-logo.523b7c5b.png","523b7c5b5bebe72df3017cf0ae9b7715"],["/static/media/newGoogle.9394d809.png","9394d809a34f1cae7104bdeaddaea8fa"],["/static/media/noogle.0aa3cb79.png","0aa3cb7922033635b2ae2b2b6acfe8b4"],["/static/media/photo1.39c75725.jpg","39c757255f54ff7615309f6897a42f8a"],["/static/media/photo2.7d18ac3d.jpg","7d18ac3d5334290cf7335e755901fc7c"],["/static/media/photo3.72bb8648.jpg","72bb8648f5d2c5e3402b4cafd46e8047"],["/static/media/photo4.93a5c74f.jpg","93a5c74ff7857674963e5f8441fa4cbe"],["/static/media/photo5.fbb094e9.jpg","fbb094e981c98d1196cc6718e9aff3e6"],["/static/media/photo6.491c8afd.jpg","491c8afdee17d727c99c2a5d15dff6ff"],["/static/media/photo7.7300694f.jpg","7300694fb9ab1072722aa2408597054a"],["/static/media/presentation.bcd7205c.jpg","bcd7205c6bbad4aa0e45eb1930e5a402"],["/static/media/rubric-calculator.e58355df.png","e58355df50556c986e5ffe4a83dc53fe"],["/static/media/sketchit.59dcf61c.png","59dcf61cfdc39dae23000c2e0e0b3b24"],["/static/media/square_map.6353b71a.png","6353b71ab5a15a08dce409702cbae120"],["/static/media/ubhacking1.1679e584.jpg","1679e5848bf271cc13b7ed4b989b8bf0"],["/static/media/ubhacking2.fa6fe8fe.jpg","fa6fe8fe9d767d6c5a0a944d64d674ad"],["/static/media/whipLogo.a3219ae9.png","a3219ae9778433658dbcca1e2937f25f"],["/static/media/wip_logo.7fcb048d.png","7fcb048de7601118cc62ac0413e6126c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});