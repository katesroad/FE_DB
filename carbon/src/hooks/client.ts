// given by task guide
const BASE_URL = 'https://api.carbonintensity.org.uk'

export default function client(endpoint: string): Promise<unknown | null> {
  // @todo what if users pass in /////?
  const path = endpoint.indexOf('/') === 0 ? endpoint : `/${endpoint}`
  const url = `${BASE_URL}${path}`
  const options = {
    headers: { Accept: 'application/json' },
    method: 'GET',
  }

  return window
    .fetch(url, options)
    .then(async (res) => {
      if (res.ok) {
        try {
          //  all the data given back from API are wraper in {data} format
          const { data } = await res.json()
          return data
        } catch (e) {
          console.warn(e)
        }
      }
      return Promise.reject(null)
    })
    .catch((e) => {
      console.warn(e)
      return null
    })
}
