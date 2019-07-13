/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f339b0f253f5951f679468390d4aefc"
  },
  {
    "url": "assets/css/0.styles.5a340a5a.css",
    "revision": "4f64225d8abf2ea52ccc69a0c92024cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0883b37a.js",
    "revision": "c18ae9c35c3f33abc14f2f04eee2badb"
  },
  {
    "url": "assets/js/2.bf092e2c.js",
    "revision": "a1bce28daf4e041bc072e0a82f2d4c2f"
  },
  {
    "url": "assets/js/3.c36658a2.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.7ecfc7fd.js",
    "revision": "655077462d6650dd7e5b0a9857971f75"
  },
  {
    "url": "assets/js/5.c9dcb879.js",
    "revision": "408fa136bad3265ecb6e957202276a3a"
  },
  {
    "url": "assets/js/6.7ddfb56c.js",
    "revision": "edb176bac831aeefda62fa1082ca7f9e"
  },
  {
    "url": "assets/js/7.b787707b.js",
    "revision": "f693b23f860b77829e74cdb281866759"
  },
  {
    "url": "assets/js/8.79ea9e74.js",
    "revision": "73fec93e6e671c87dcf1353b764f86fc"
  },
  {
    "url": "assets/js/9.cb110f69.js",
    "revision": "66f1adb26991dbfaab62f9bebed198ea"
  },
  {
    "url": "assets/js/app.4edf5177.js",
    "revision": "31897784b5e3d9f216e08d20144afe92"
  },
  {
    "url": "colegio/estructura.html",
    "revision": "eb0cb4c85f381ee04d1ec63d4c7b518e"
  },
  {
    "url": "colegio/index.html",
    "revision": "fe2f18ec2e8a9f6c199f3b53e3bc7c93"
  },
  {
    "url": "colegio/instalacion.html",
    "revision": "ef020cf2b1b8981b86e65f6f22aed715"
  },
  {
    "url": "filemanager/estructura.html",
    "revision": "59497f03ed47977ac4daaef7d54db20a"
  },
  {
    "url": "filemanager/index.html",
    "revision": "d39ca370c27de04a0238b456994fbcc4"
  },
  {
    "url": "filemanager/instalacion.html",
    "revision": "2161dd00a232cb88387ea3829670c6e6"
  },
  {
    "url": "images/c.png",
    "revision": "f58316e0100cb90fe908222ba21d3c74"
  },
  {
    "url": "images/hamburger.svg",
    "revision": "d9c3b5e906d226c9718ee1d5856bf068"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "deeba1f5646a0a8e25051821ea83846f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3bf5f406c6566a3d2aeedc00fc6a4b3f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "40799df31a91c3544450372fe29bc5a3"
  },
  {
    "url": "index.html",
    "revision": "dc0f7cbb16f064dfe95e62b8b0fb13c5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
