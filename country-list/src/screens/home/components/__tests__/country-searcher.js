import { screen, render, userEvent } from "test/test-utils";
import { CountrySearchProvider } from "screens/home/context";
import CountrySearcher from "screens/home/components/country-searcher";

let wrapper;
beforeAll(() => {
  wrapper = ({ children }) => (
    <CountrySearchProvider>{children}</CountrySearchProvider>
  );
});
afterAll(() => (wrapper = null));

test("search by country name for <CountrySearcher />", () => {
  render(<CountrySearcher />, { wrapper });
  const countryInput = screen.getByRole("textbox");
  const countryRegion = screen.getByLabelText(/region/i);

  expect(countryInput.value).toBe("");
  expect(countryRegion.textContent).toMatchInlineSnapshot(`"Filter by region"`);

  const countryName = "Argintina";
  userEvent.type(countryInput, countryName);
  expect(countryInput.value).toBe(countryName);
});

test("search by region name for <CountrySearcher />", () => {
  render(<CountrySearcher />, { wrapper });
  const countryInput = screen.getByRole("textbox");
  const countryRegion = screen.getByLabelText(/region/i);

  expect(countryInput.value).toBe("");
  expect(countryRegion.textContent).toMatchInlineSnapshot(`"Filter by region"`);

  userEvent.click(countryRegion);
  userEvent.click(screen.getByText(/Africa/i));
  expect(countryRegion.textContent).toMatchInlineSnapshot(`"Africa"`);
  expect(countryInput.value).toBe("");
});
