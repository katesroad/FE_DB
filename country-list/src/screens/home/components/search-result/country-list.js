// eslint-disable-next-line
import styled from "styled-components/macro";
import { Image, NavLink } from "components/lib";
import * as React from "react";
import { CountryBriefInfo } from "components/country";
import {
  CountryName,
  CountryItem,
  CountryIntro,
  CountryList,
  EmptyResult,
} from "./styles";
import PropTypes from "prop-types";

const countryType = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};

function Country({ name, flag, ...briefInfo }) {
  return (
    <NavLink
      to={`/country/${name}`}
      css={`
        display: block;
        height: 100%;
      `}
    >
      <Image src={flag} alt={name} />
      <CountryIntro>
        <CountryName>{name}</CountryName>
        <CountryBriefInfo {...briefInfo} />
      </CountryIntro>
    </NavLink>
  );
}
Country.propTypes = countryType;

function Countries({ countries }) {
  if (countries?.length === 0) {
    return (
      <EmptyResult>
        <h2>No countries were found with given search.</h2>
      </EmptyResult>
    );
  }
  return (
    <CountryList>
      {countries?.map((country) => (
        <CountryItem key={country.name}>
          <Country {...country} />
        </CountryItem>
      ))}
    </CountryList>
  );
}
Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape(countryType)),
};

export default Countries;
