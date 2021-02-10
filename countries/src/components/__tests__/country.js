import {
  CountryBriefInfo,
  CountryExtraInfo,
  CountryBorders,
} from "components/country";
import { countryList } from "test/country-list";
import { screen, render, countryServices } from "test/test-utils";

let country;
beforeAll(() => {
  country = countryServices.cleanCountryData(countryList[0]);
});
afterAll(() => (country = null));

test("render <CountryBreifInfo /> without crash", () => {
  const { region, population, capital } = country;
  const breifInfo = { region, population, capital };
  render(<CountryBriefInfo {...breifInfo} />);
  expect(screen.getByLabelText(/region/i)).toHaveTextContent(region);
  expect(screen.getByLabelText(/population/i)).toHaveTextContent(population);
  expect(screen.getByLabelText(/capital/i)).toHaveTextContent(capital);
});

test("render <CountryExtraInfo /> without crash", () => {
  render(<CountryExtraInfo {...country} />);
  expect(screen.getByLabelText(/sub region/i)).toHaveTextContent(
    country.subregion
  );
  expect(screen.getByLabelText(/native name/i)).toHaveTextContent(
    country.nativeName
  );
  expect(screen.getByLabelText(/languages/i)).toHaveTextContent(
    country.languages
  );
  expect(screen.getByLabelText(/top level domain/i)).toHaveTextContent(
    country.topLevelDomain
  );
});

test("render <CountryBorders /> without crash", () => {
  const borders = country.borders;
  render(<CountryBorders borders={borders} />);
  expect(screen.getByLabelText(/Border Countries/i)).toHaveTextContent(
    borders.join("")
  );
});
