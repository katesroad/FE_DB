// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useParams } from "react-router-dom";
import { Spinner, ThemedElement } from "components/lib";
import BackButton from "components/back-button";
import Country from "./components/country";
import { useAsync, ASYNC_STATUS } from "utils/use-async";
import * as countryServices from "utils/country-services";

export default function CountryScreen() {
  const { countryName } = useParams();
  const { status, data: countries, error, run } = useAsync(null);
  React.useEffect(() => {
    run(countryServices.getCountryByName(countryName));
  }, [countryName, run]);
  return (
    <>
      <BackButton to="/" />
      {status === ASYNC_STATUS.pending ? <Spinner /> : null}
      {status === ASYNC_STATUS.rejected ? (
        <ThemedElement
          css={`
            padding: 2rem 1rem;
          `}
        >
          <h2>
            The country <i>{countryName}</i> is {error.message}
          </h2>
        </ThemedElement>
      ) : null}
      {status === ASYNC_STATUS.resovled ? <Country {...countries[0]} /> : null}
    </>
  );
}
