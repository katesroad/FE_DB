import * as React from "react";
import CountryList from "./country-list";
import { useCountrySearch } from "screens/home/context";
import { Spinner } from "components/lib";
import { useQuery } from "react-query";

export default function SearchResult() {
	const { search } = useCountrySearch();
	const { status, data: countries, error } = useQuery(
		"countries",
		() => search.service
	);
	return (
		<section>
			{status === "loading" ? <Spinner /> : null}
			{status === "failed" ? <p>{JSON.stringify(error)}</p> : null}
			{status === "success" ? <CountryList countries={countries} /> : null}
		</section>
	);
}
