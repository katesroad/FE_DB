import * as React from "react";
import AppProvider from "context";
import { Route, Switch, Redirect } from "react-router-dom";
import JobsScreen from "screens/jobs";
import JobScreen from "screens/job";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path="/" exact component={JobsScreen} />
        <Route path="/jobs" exact component={JobScreen} />
        <Route path="/job/:id" exact component={JobScreen} />
        <Route path="/*" component={() => <Redirect to="/" />} />
      </Switch>
    </AppProvider>
  );
}

export default App;
