import {
  screen,
  render,
  RouteProvider,
  waitForElementToBeRemoved,
} from "test/test-utils";
import HomePage from "screens/home/index";
import { countryList } from "test/country-list";
import {
  searchByCountryName,
  searchByRegionName,
  CountrySearchProvider,
  useCountrySearch,
  DEFAULT_STATE,
} from "screens/home/context";

test("renders home screen", async () => {
  const wrapper = ({ children }) => (
    <RouteProvider>
      <CountrySearchProvider>{children}</CountrySearchProvider>
    </RouteProvider>
  );
  const { rerender } = render(<HomePage />, { wrapper });

  // show spinner when loading data
  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i));
  expect(screen.getByText(countryList[0].name)).toBeInTheDocument();
});
