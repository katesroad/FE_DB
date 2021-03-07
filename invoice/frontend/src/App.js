import * as React from "react";
import AppProvider from "context";
import InvoicesScreen from "screens/invoices";
import { Route } from "react-router-dom";
import SuspenseErrorBoundary, {
  RouteFallbackComponent,
} from "components/SuspenseBoundary";

const InvoiceScreen = React.lazy(() => import("screens/invoice"));

function App() {
  return (
    <AppProvider>
      <SuspenseErrorBoundary ErrorFallback={RouteFallbackComponent}>
        <Route path="/" exact component={InvoicesScreen} />
        <Route path="/invoices" exact component={InvoicesScreen} />
        <Route path="/invoice/:id" exact component={InvoiceScreen} />
      </SuspenseErrorBoundary>
    </AppProvider>
  );
}

export default App;
