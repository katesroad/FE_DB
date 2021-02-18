// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Content } from "components/lib";
import { NavLink, ThemedElement } from "components/lib";
import { Brand, ModeButton } from "./styles";
import { FaMoon, FaSun } from "react-icons/fa";
import { useLocation } from "react-router";
import { GlobalFechingIndicator } from "components/GlobalLoadingIndicator";

export const THEME_MODE = {
	light: "light",
	dark: "dark",
};

const __THEME__KEY = "__theme__mode__key";

export default function Header() {
	const [mode, setMode] = React.useState(() => {
		try {
			return localStorage.getItem(__THEME__KEY) || THEME_MODE.light;
		} catch (e) {
			return THEME_MODE.light;
		}
	});
	const toggleMode = () => {
		setMode((mode) => {
			mode === THEME_MODE.light
				? setMode(THEME_MODE.dark)
				: setMode(THEME_MODE.light);
		});
		return false;
	};
	React.useEffect(() => {
		document.body.dataset.theme = mode;
		localStorage.setItem(__THEME__KEY, mode);
	}, [mode]);

	const { pathname } = useLocation();
	React.useEffect(() => {
		if (pathname.indexOf("country") > -1) {
			document.title = `Country  | ${pathname.split("/")[2]}`;
		} else {
			document.title = "Country List";
		}
	}, [pathname]);
	return (
		<ThemedElement
			as="header"
			css={`
				margin-bottom: 4rem;
				box-shadow: 0 2px 5px var(--shadow);
			`}
		>
			<GlobalFechingIndicator />
			<Content
				as="nav"
				css={`
					display: flex;
					justify-content: space-between;
				`}
			>
				<NavLink to="/">
					<Brand>Where in the world</Brand>
				</NavLink>
				<ModeButton onClick={toggleMode}>
					{mode === "light" ? <FaMoon /> : <FaSun />}
					<span>{mode === "light" ? "dark" : "light"} mode</span>
				</ModeButton>
			</Content>
		</ThemedElement>
	);
}
