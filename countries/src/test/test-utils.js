import {
  screen,
  render as rtlRender,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppProvider from "context/index";
import { BrowserRouter as Router } from "react-router-dom";
import * as countryServices from "utils/country-services";

const RouteProvider = ({ children }) => <Router>{children}</Router>;

function render(ui, options) {
  return rtlRender(ui, {
    wrapper: AppProvider,
    ...options,
  });
}

export {
  screen,
  render,
  userEvent,
  rtlRender,
  RouteProvider,
  waitForElementToBeRemoved,
  countryServices,
};
