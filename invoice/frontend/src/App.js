import * as React from "react";
import AppProvider from "context";
import InvoiceScreen from "screens/invoice";
import InvoicesScreen from "screens/invoices";
import { Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Route path="/" component={InvoicesScreen} />
      <Route path="/invoice/:id" component={InvoiceScreen} />
    </AppProvider>
  );
}

export default App;
