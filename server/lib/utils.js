export const isAPIRequest = (req) => {
  return req.url.startsWith('/api/')
}

