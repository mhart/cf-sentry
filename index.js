import { log } from './sentry'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    const res = await handleRequest(event.request)
    return res
  } catch (e) {
    event.waitUntil(log(e, event.request))
    return new Response(e.message || 'An error occurred!', { status: e.statusCode || 500 })
  }
}

async function handleRequest(request) {
  // To test:
  // throw new Error('Oh no!')
  return new Response('Hello worker!', { status: 200 })
}
