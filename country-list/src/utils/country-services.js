import fetch from "./fetch";

export function cleanCountryData(country) {
  const { languages = [], topLevelDomain = [], ...countryData } = country;
  return {
    ...countryData,
    languages: languages?.map(({ name }) => name).join(","),
    topLevelDomain: topLevelDomain?.join(","),
  };
}

export function getCountryByName(countryName) {
  const url = `name/${encodeURIComponent(countryName)}?fullText=true`;
  return fetch(url).then((countries) =>
    countries.map((country) => cleanCountryData(country))
  );
}

export function getAllCountries() {
  const url = `all`;
  return fetch(url);
}

export function getCountryByRegion(region) {
  return fetch(`region/${region}`);
}
