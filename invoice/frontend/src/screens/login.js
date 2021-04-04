import * as React from "react";
import AuthForm from "components/AuthForm";
import { useLogin } from "hooks/auth.hooks";

export default function LoginScreen() {
	React.useEffect(() => {
		document.title = "Login";
		return () => (document.title = "FEM Invoice");
	}, []);
	const mutation = useLogin();
	return <AuthForm type="login" mutation={mutation} />;
}
