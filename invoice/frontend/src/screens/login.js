import * as React from "react";

export default function LoginScreen() {
	React.useEffect(() => {
		document.title = "Login";
		return () => (document.title = "Invoice App");
	}, []);
	return null;
}
