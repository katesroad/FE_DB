import * as React from "react";
import CountrySearcher from "./components/country-searcher";
import SearchResult from "./components/search-result";
import { CountrySearchProvider } from "./context";

export default function HomePage() {
  return (
    <CountrySearchProvider>
      <CountrySearcher />
      <SearchResult />
    </CountrySearchProvider>
  );
}
