import * as React from "react";
import * as countryServices from "utils/country-services";

const SearchContext = React.createContext(null);
SearchContext.displayName = "SearchContext";

const SEARCH_TERMS = { country: "country", region: "region" };
const DEFAULT_STATE = {
  country: "",
  region: "all",
  service: countryServices.getAllCountries(),
};

function searchReducer(state = DEFAULT_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_TERMS.region: {
      const service =
        payload === DEFAULT_STATE.region
          ? countryServices.getAllCountries()
          : countryServices.getCountryByRegion(payload);
      return {
        ...state,
        country: "",
        region: payload,
        service,
      };
    }
    case SEARCH_TERMS.country: {
      const service = payload
        ? countryServices.getCountryByName(payload)
        : countryServices.getAllCountries();
      return {
        ...state,
        country: payload,
        region: DEFAULT_STATE.region,
        service,
      };
    }
    default: {
      return { ...state, service: countryServices.getAllCountries };
    }
  }
}

function CountrySearchProvider(props) {
  const [search, dispatch] = React.useReducer(searchReducer, DEFAULT_STATE);
  const value = { search, dispatch };
  return <SearchContext.Provider value={value} {...props} />;
}

function useCountrySearch() {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error(
      `useCountrySearch must be used inside of <CountrySearchProvider />`
    );
  } else return context;
}

function searchByCountryName(dispatch, countryName) {
  dispatch({
    type: SEARCH_TERMS.country,
    payload: countryName,
  });
}

function searchByRegionName(dispatch, regionName) {
  dispatch({
    type: SEARCH_TERMS.region,
    payload: regionName,
  });
}

export {
  searchByCountryName,
  searchByRegionName,
  CountrySearchProvider,
  useCountrySearch,
  DEFAULT_STATE,
};
