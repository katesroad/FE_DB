import Header, { THEME_MODE } from "components/header";
import { screen, render, userEvent, RouteProvider } from "test/test-utils";

test("render <Header />", () => {
  render(<Header />, { wrapper: RouteProvider });
  const modeBtn = screen.getByRole("button", /mode/i);
  expect(modeBtn).toHaveTextContent(THEME_MODE.dark);
  userEvent.click(modeBtn);
  expect(modeBtn).toHaveTextContent(THEME_MODE.light);
});
