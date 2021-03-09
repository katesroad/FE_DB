import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.context";
import { NotificationProvider } from "./notification.context";
import { Content } from "components/lib";
import GlobalStyles from "components/GlobalStyles";
import AppHeader from "components/header";

const queryClient = new QueryClient();
export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <ThemeProvider>
            <AppHeader />
            <Content
              css={`
                flex-grow: 10;
                min-height: 10vh;
              `}
              as="main"
            >
              <BrowserRouter>
                <>
                  {children}
                  <Route path="/*" component={() => <Redirect to="/" />} />
                </>
              </BrowserRouter>
            </Content>
          </ThemeProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </>
  );
}
