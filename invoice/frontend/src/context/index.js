import GlobalStyles from "components/GlobalStyles";
import AppHeader from "components/header";
import { Content } from "components/lib";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const queryClient = new QueryClient();
export default function AppProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppHeader />
          <Content as="main">
            <Switch>
              {children}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Content>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}
