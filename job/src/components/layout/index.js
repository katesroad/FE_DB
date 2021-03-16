import * as React from "react";
import { useTheme, THEME_MODE } from "context/theme.context";
import { Header, Main } from "./styles";

const { light, dark } = THEME_MODE;
export function AppHeader() {
	const [mode, setMode] = useTheme();
	const handleClick = () => {
		mode === light ? setMode(dark) : setMode(light);
		return false;
	};
	return (
		<Header>
			<>
				<button onClick={handleClick}>
					{mode === THEME_MODE.dark ? "light" : "dark"}
				</button>
			</>
		</Header>
	);
}

export const AppMain = ({ children }) => {
	return <Main as="main">{children}</Main>;
};
