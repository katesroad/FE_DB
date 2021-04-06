import * as React from "react";
import { useAuth } from "context/auth.context";
import AuthedApp from "app.authed";
import UnAuthedApp from "app.unAuthed";

function App() {
  const { user } = useAuth();
  const [redirectTo] = React.useState(() => window.location.pathname);
  return user ? <AuthedApp redirectTo={redirectTo} /> : <UnAuthedApp />;
}

export default App;
