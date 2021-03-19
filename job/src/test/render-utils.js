import {
  screen,
  render as rtlRender,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "context/index";

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
};
