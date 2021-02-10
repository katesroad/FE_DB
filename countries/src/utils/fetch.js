const BASE_URL = "https://restcountries.eu/rest/v2";
export default async function fetch(endpoint) {
  const url = `${BASE_URL}/${endpoint}`;
  return window
    .fetch(url, {
      method: "GET",
      timeout: 2000,
    })
    .then(async (res) => {
      const result = await res.json();
      return res.ok ? result : Promise.reject(result);
    });
}
