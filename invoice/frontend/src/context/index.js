import * as React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.context";
import { NotificationProvider } from "./notification.context";
import GlobalStyles from "components/GlobalStyles";
import { AppHeader, AppMain } from "components/layout";

const queryClient = new QueryClient({
  cacheTime: 2500,
  staleTime: 2000,
});
export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <ThemeProvider>
            <AppHeader />
            <AppMain>
              <BrowserRouter>
                <>
                  {children}
                  <Route path="/*" component={() => <Redirect to="/" />} />
                </>
              </BrowserRouter>
            </AppMain>
          </ThemeProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </>
  );
}
