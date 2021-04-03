// eslint-disable-next-line
import styled from "styled-components/macro";
import { useQuery } from "react-query";
import { Content } from "components/lib";
import * as React from "react";
import * as auth from "utils/auth";

const AuthContext = React.createContext();
AuthContext.displayName = "AuthContext";

export function AuthProvider(props) {
	const { data, status } = useQuery({
		queryKey: ["user"],
		queryFn: auth.getUser,
	});
	const [user, setUser] = React.useState(auth.getCachedUser);
	React.useEffect(() => {
		if (status === "success" && data) setUser(data);
	}, [status, data]);

	// when data changes, we store the user data in localstorage
	React.useEffect(() => {
		if (user) auth.storeUser(user);
		return auth.cleanUser;
	}, [user]);

	// user register function
	const register = React.useCallback(
		(form) => auth.register(form).then((data) => setUser(data)),
		[setUser]
	);

	// user login function
	const login = React.useCallback(
		(form) => auth.login(form).then((data) => setUser(data)),
		[setUser]
	);

	// user logout function
	const logout = React.useCallback(
		() => auth.logout().then(() => setUser(null)),
		[setUser]
	);

	if (["loading", "idle"].includes(status)) {
		return (
			<Content
				css={`
					position: fixed;
					top: 0;
					width: 100vw;
					height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 3rem;
					background: var(--body-background);
				`}
			>
				<p>Loading...</p>
			</Content>
		);
	}

	const value = { user, register, login, logout };
	return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
	const context = React.useContext(AuthContext);
	if (context === undefined) {
		throw new Error(`useAuth must be used inside of AuthProvider`);
	}
	return context;
}
