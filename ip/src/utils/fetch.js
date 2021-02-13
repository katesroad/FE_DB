export default function fetch(url) {
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
