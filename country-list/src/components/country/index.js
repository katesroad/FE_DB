import { InfoItem, InfoItemName, BorderCountry } from "./styles";
import * as React from "react";

function CountryInfoItem({ label, value }) {
  return (
    <InfoItem aria-label={label}>
      <InfoItemName>{label}:</InfoItemName>
      <span>{value}</span>
    </InfoItem>
  );
}

export function CountryBriefInfo(props) {
  const { population, region, capital } = props;
  return (
    <>
      <CountryInfoItem label="population" value={population} />
      <CountryInfoItem label="region" value={region} />
      <CountryInfoItem label="capital" value={capital} />
    </>
  );
}

export function CountryBorders({ borders }) {
  return (
    <InfoItem as="div" aria-label="border countries">
      <InfoItemName>Border Countries:</InfoItemName>
      <p>
        {borders?.map((border) => (
          <BorderCountry key={border}>{border}</BorderCountry>
        ))}
      </p>
    </InfoItem>
  );
}

export function CountryExtraInfo(props) {
  const { subregion, topLevelDomain, languages, nativeName } = props;
  return (
    <>
      <CountryInfoItem label="native name" value={nativeName} />
      <CountryInfoItem label="sub region" value={subregion} />
      <CountryInfoItem label="top level domain" value={topLevelDomain} />
      <CountryInfoItem label="languages" value={languages} />
    </>
  );
}
