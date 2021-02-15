import AppProvider from "context";
import * as React from "react";
import { Redirect, Route } from "react-router";
import Country from "screens/country";
import HomePage from "screens/home";

function App() {
  return (
    <AppProvider>
      <Route path="/" component={HomePage} exact />
      <Route path="/country/:countryName" component={Country} exact />
      <Route path="/*" component={() => <Redirect to="/" />} />
    </AppProvider>
  );
}

export default App;
