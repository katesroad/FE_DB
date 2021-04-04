import * as React from "react";
import { useAuth } from "context/auth.context";
import AuthedApp from "app.authed";
import UnAuthedApp from "app.unAuthed";

function App() {
	const { user } = useAuth();
	return user ? <AuthedApp /> : <UnAuthedApp />;
}

export default App;
