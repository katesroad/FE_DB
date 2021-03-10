import * as React from "react";
import AppProvider from "context";
import { Route, Switch } from "react-router-dom";
import InvoicesScreen from "screens/invoices";
import InvoiceScreen from "screens/invoice";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" exact component={InvoicesScreen} />
        <Route path="/invoices" exact component={InvoicesScreen} />
        <Route path="/invoice/:id" exact component={InvoiceScreen} />
      </Switch>
    </AppProvider>
  );
}

export default App;
