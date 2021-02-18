import { act, renderHook } from "@testing-library/react-hooks";
import {
  CountrySearchProvider,
  DEFAULT_STATE,
  searchByCountryName,
  searchByRegionName,
  useCountrySearch,
} from "screens/home/context";

test(`useCountrySearch`, () => {
  // https://react-hooks-testing-library.com/usage/advanced-hooks
  const Wrapper = ({ children }) => (
    <CountrySearchProvider>{children}</CountrySearchProvider>
  );
  const { result } = renderHook(() => useCountrySearch(), { wrapper: Wrapper });
  expect(result.current).toEqual({
    search: {
      country: "",
      region: DEFAULT_STATE.region,
      service: expect.any(Promise),
    },
    dispatch: expect.any(Function),
  });

  // To prepare a component for assertions, wrap the code rendering it and
  // performing updates inside an act() call.
  const countryName = "Argentina";
  act(() => {
    searchByCountryName(result.current.dispatch, countryName);
  });
  expect(result.current).toEqual({
    search: {
      country: countryName,
      region: DEFAULT_STATE.region,
      service: expect.any(Promise),
    },
    dispatch: expect.any(Function),
  });
  expect(result.current.search.country).toBe("Argentina");

  const regionName = "Americas";
  act(() => {
    searchByRegionName(result.current.dispatch, regionName);
  });
  expect(result.current).toEqual({
    search: {
      country: "",
      region: regionName,
      service: expect.any(Promise),
    },
    dispatch: expect.any(Function),
  });
});
