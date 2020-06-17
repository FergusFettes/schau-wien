addEventListener('fetch', event => {
  event.respondWith(handleRequest(event))
})

const BUCKET_NAME = 'schau-wien-images/media'
const BUCKET_URL = `http://storage.googleapis.com/${BUCKET_NAME}`

async function fetchAsset(event) {
  response = await fetch(`${BUCKET_URL}${url.pathname}`)
  const headers = { 'cache-control': 'public, max-age=14400' }
  response = new Response(response.body, { ...response, headers })
  return response
}

async function handleRequest(event) {
  if (event.request.method === 'GET') {
    const url = new URL(event.request.url)
    const cache = caches.default
    let response = await cache.match(event.request)
    if (!response) {
      let response = await fetchAsset(event)
      event.waitUntil(cache.put(event.request, response.clone()))
    }
    if (response.status > 399) {
      response = new Response(response.statusText, { status: response.status })
    }
    return response
  } else {
    return new Response('Method not allowed', { status: 405 })
  }
}
