import fetch from "./fetch";

const GEO_API_KEY = process.env.REACT_APP_GEO_API_KEY;

export async function getMyIp() {
  return fetch("https://api.ipify.org/?format=json");
}

/**
 * Get geo information by domain name or ip address
 * @param{string} -value, the to be queried domain or ip
 * @param{enum} - type, either be domain or ipAddress
 */
export async function getGeoInfo(value, type = "domain") {
  const baseUrl = `https://geo.ipify.org/api/v1?apiKey=${GEO_API_KEY}`;
  const url = `${baseUrl}&${type}=${value}`;
  return fetch(url);
}
