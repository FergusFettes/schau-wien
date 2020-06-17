addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event))
})

const main = 'test8/main.js'
const style = 'main/styles.css'
const url = 'https://experiments.schau-wien.at/'

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
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  if (!response) {
    const response = await fetch(`${url}${style}`, init)
  }
  const results = await gatherResponse(response)
  return new Response(results, init)
}

