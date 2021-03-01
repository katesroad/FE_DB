import * as React from "react";
import AppProvider from "context";
import InvoiceScreen from "screens/invoice";
import InvoicesScreen from "screens/invoices";
import { Route } from "react-router-dom";
import UILibScreen from "screens/ui";

function App() {
  return (
    <AppProvider>
      <Route path="/" exact component={InvoicesScreen} />
      <Route path="/invoice/:id" component={InvoiceScreen} />
      <Route path="/ui" exact component={UILibScreen} />
    </AppProvider>
  );
}

export default App;
