import {
  CountryExtraInfo,
  CountryBorders,
  CountryBriefInfo,
} from "components/country";
import {
  CountryFlag,
  CountryInfo,
  Country,
  CountryName,
  CountryIntro,
} from "./styles";

export default function CountryItem(props) {
  const {
    name,
    flag,
    population,
    region,
    capital,
    borders,
    languages,
    topLevelDomain,
    ...extraInfo
  } = props;
  const briefInfo = { population, region, capital };
  return (
    <Country>
      <CountryFlag src={flag} alt={name} />
      <CountryIntro>
        <CountryName aria-label="country name">{name}</CountryName>
        <CountryInfo>
          <CountryExtraInfo {...extraInfo} />
          <CountryBriefInfo {...briefInfo} />
        </CountryInfo>
        <CountryBorders borders={borders} />
      </CountryIntro>
    </Country>
  );
}
