addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event))
})

const GIT_REPO = 'https://raw.githubusercontent.com/FergusFettes/schau-wien/master/www/prod/styles.css'

async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')
  if (contentType.includes('application/json')) {
    return await response.json()
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}

async function handleRequest(event) {
  const url = new URL(event.request.url)
  const cache = caches.default
  let response = await cache.match(event.request)
  const init = {
    headers: { 'content-type': 'text/css;charset=UTF-8' },
  }
  if (!response) {
    response = await fetch(`${GIT_REPO}`, init)
    event.waitUntil(cache.put(event.request, response.clone()))
  }
  const results = await gatherResponse(response)
  return new Response(results, init)
}

