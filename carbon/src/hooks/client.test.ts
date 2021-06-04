import client from './client'

/**
 * @todo test client
 * Link https://www.leighhalliday.com/mock-fetch-jest might be useful
 * Different opinion: https://kentcdodds.com/blog/stop-mocking-fetch
 */
test('client', () => {
  const originalFetch = window.fetch
  console.log(originalFetch)
})
