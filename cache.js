/*chrome://cache

Cache-Control: max-age=31536000

CacheStrage.open(cacheName)

ServiceWorker

https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js

코드 스니펫은 {domxref ( "ServiceWorker")}}가 사용하는 캐시 버전 관리를

chrome://inspect/#service-workers


caches


*/

/*
[THE CACHE API GUIDE]
출처 : https://flaviocopes.com/cache-api/
*/

1. Detect if the cache api is available

    if ('caches' in window) {
        console.log('caches ok');
    }


2. Initialize a cache
    caches.open('mycache').then(cache => {
        console.log('You can start using the cache');
    })


3. Add items to the cache
    3-1. cache.add()

    caches.open('mycache').then(cache => {
      cache.add('/api/todos')
    })

    caches.open('mycache').then(cache => {
      const options = {
        // the options
      }
      cache.add(new Request('/api/todos', options))
    })

    3-2. cache.addall()
    caches.open('mycache').then(cache => {
      cache.addAll(['/api/todos', '/api/todos/today']).then(() => {
        //all requests were cached
      })
    })

4. Manually fetch and add
    const url = '/api/todos'
    fetch(url).then(res => {
      return caches.open('mycache').then(cache => {
        return cache.put(url, res)
      })
    })

6. Retrieve an item from the cache
    caches.open('mycache').then(cache => {
      cache.match('/api/todos').then(res => {
        //res is the Response Object
      })
    })

7. Get all the items in an cache
    caches.open('mycache').then(cache => {
        cache.keys().then(cachedItems => {
            console.log(cachedItems)    ;
        })
    })

8. Get all the available Caches
    caches.keys().then(keys => {
      // keys is an array with the list of keys
      console.log(keys);
    })

9. Remove an item from the cache
    caches.open('mycache').then(cache => {
      cache.delete('/api/todos')
    })

10. Delete a cache
    aches.delete('mycache').then(() => {
      // deleted successfully
    })



























// 출처 : https://stackoverflow.com/questions/1922910/force-browser-to-clear-cache
    window.addEventListener('load', function(e) {

      window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
          // Browser downloaded a new app cache.
          // Swap it in and reload the page to get the new hotness.
          window.applicationCache.swapCache();
          if (confirm('A new version of this site is available. Load it?')) {
            window.location.reload();
          }
        } else {
          // Manifest didn't changed. Nothing new to server.
        }
      }, false);

    }, false);