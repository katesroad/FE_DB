import * as React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "components/lib";
import BackButton from "components/back-button";
import Country from "./components/country";
import * as countryServices from "utils/country-services";
import ErrorMsg from "components/ErrorMsg";
import { useQuery } from "react-query";

export default function CountryScreen() {
	const { countryName } = useParams();
	const { status, data: countries, error } = useQuery("country", () =>
		countryServices.getCountryByName(countryName)
	);
	return (
		<>
			<BackButton to="/" />
			{status === "loading" ? <Spinner /> : null}
			{status === "failed" ? (
				<ErrorMsg>
					<h2>
						<i>{countryName}</i> is {error.message}
					</h2>
				</ErrorMsg>
			) : null}
			{status === "success" ? <Country {...countries[0]} /> : null}
		</>
	);
}
