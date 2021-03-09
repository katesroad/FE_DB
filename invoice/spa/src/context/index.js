// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import GlobalStyles from "components/GlobalStyles";
import AppHeader from "components/header";
import { Content } from "components/lib";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./theme.context";
import { NotificationProvider } from "./notification.context";

const queryClient = new QueryClient();
export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <ThemeProvider>
            <BrowserRouter>
              <AppHeader />
              <Content
                as="main"
                css={`
                  flex-grow: 10;
                  padding-bottom: 100px;
                `}
              >
                <Switch>
                  {children}
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </Content>
            </BrowserRouter>
          </ThemeProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </>
  );
}
