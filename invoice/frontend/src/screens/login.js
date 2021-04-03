import * as React from "react";
import AuthForm from "components/AuthForm";
import { useAuth } from "context/auth.context";

export default function LoginScreen() {
	React.useEffect(() => {
		document.title = "Login";
		return () => (document.title = "Invoice App");
	}, []);
	const { login } = useAuth();
	const handleSubmit = (values) => login(values);
	return <AuthForm type="login" onSubmit={handleSubmit} />;
}
