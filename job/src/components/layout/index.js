import * as React from "react";
import { Header, Main } from "./styles";

export function AppHeader({ children, ...props }) {
	return <Header {...props}>{children}</Header>;
}

export const AppMain = ({ children, ...props }) => {
	return (
		<Main as="main" {...props}>
			{children}
		</Main>
	);
};
