import * as React from "react";

const ThemeContext = React.createContext();
const THEME_MODE = {
	light: "light",
	dark: "dark",
};

function ThemeProvider(props) {
	const [mode, setMode] = React.useState(() => {
		try {
			return localStorage.getItem("jobs-theme") || THEME_MODE.dark;
		} catch (e) {
			return THEME_MODE.dark;
		}
	});
	React.useEffect(() => {
		window.localStorage.setItem("jobs-theme", mode);
		document.documentElement.setAttribute("data-theme", mode);
	}, [mode]);
	const value = [mode, setMode];
	return <ThemeContext.Provider value={value} {...props} />;
}

function useTheme() {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		throw new Error(`Using useTheme outside of <ThemeProvider />`);
	}
	return context;
}

export { THEME_MODE, ThemeProvider, useTheme };
