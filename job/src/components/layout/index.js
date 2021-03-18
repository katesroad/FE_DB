import * as React from "react";
import { useTheme, THEME_MODE } from "context/theme.context";
import { IconLogo, IconMoon, IconSun } from "components/Icon";
import { Content } from "components/lib";
import { Header, Switch, Main } from "./styles";
import { Link } from "react-router-dom";

const { light, dark } = THEME_MODE;
export function AppHeader({ children, ...props }) {
	const [mode, setMode] = useTheme();
	const handleClick = () => {
		mode === light ? setMode(dark) : setMode(light);
		return false;
	};
	return (
		<Header {...props}>
			<Content className="content">
				<Link to="/">
					<IconLogo />
				</Link>
				<Switch className={mode === light ? "" : "on"}>
					<IconSun />
					<button onClick={handleClick} className="pill">
						<span className="circle"></span>
					</button>
					<IconMoon />
				</Switch>
			</Content>
			{children ? <Content className="children">{children}</Content> : null}
		</Header>
	);
}

export const AppMain = ({ children }) => {
	return <Main as="main">{children}</Main>;
};
