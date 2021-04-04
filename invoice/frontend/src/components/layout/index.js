import * as React from "react";
import { useTheme, THEME_MODE } from "context/theme.context";
import { useLogout } from "hooks/auth.hooks";
import { useAuth } from "context/auth.context";
import { IconSun, IconMoon } from "components/Icon";
import { Header, ModeBtn, Avatar, Logo, Main } from "./styles";
import avatarSrc from "./image-avatar.jpg";
import logoSrc from "./logo.png";

export function AppHeader() {
	const [mode, setMode] = useTheme();
	const { user } = useAuth();
	const { mutate } = useLogout();
	const { light, dark } = THEME_MODE;
	const handleClick = () => {
		mode === light ? setMode(dark) : setMode(light);
		return false;
	};
	return (
		<Header as="header">
			<button onClick={mutate}>logout</button>
			<Logo src={logoSrc} alt="invoice app" />
			<>
				<ModeBtn onClick={handleClick}>
					{mode === THEME_MODE.dark ? <IconSun /> : <IconMoon />}
				</ModeBtn>
				<Avatar>
					<img src={avatarSrc} alt="Mr Corner" />
					{user ? <span>{user?.username}</span> : null}
				</Avatar>
			</>
		</Header>
	);
}

export const AppMain = ({ children }) => {
	return <Main as="main">{children}</Main>;
};
