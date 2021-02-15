import { rtlRender, screen, countryServices } from "test/test-utils";
import Country from "screens/country/components/country/index";
import { countryList } from "test/country-list";

test("Render <Country  /> without crash", () => {
  const country = countryServices.cleanCountryData(countryList[0]);
  rtlRender(<Country {...country} />);

  const {
    name,
    capital,
    population,
    nativeName,
    region,
    languages,
    topLevelDomain,
  } = country;

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(population)).toBeInTheDocument();
  expect(screen.getByText(capital)).toBeInTheDocument();
  expect(screen.getByText(nativeName)).toBeInTheDocument();
  expect(screen.getByText(region)).toBeInTheDocument();
  expect(screen.getByText(languages)).toBeInTheDocument();
  expect(screen.getByText(topLevelDomain)).toBeInTheDocument();
  expect(screen.getByRole("img", /name/i)).toBeInTheDocument();
});
