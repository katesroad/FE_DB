import { screen, render } from "test/test-utils";
import CountryScreen from "screens/country";
import { countryList } from "test/country-list";

let country = null;
beforeAll(() => (country = countryList[0]));
afterAll(() => (country = null));
test("render country screen", () => {
  render(<CountryScreen />);
  jest.spyOn(window, "fetch").mockImplementation((url) => {
    if (url.endsWith(country.name)) {
      return {
        ok: true,
        json: async () => {
          return country;
        },
      };
    }
  });
});
