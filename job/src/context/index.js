import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.context";
import GlobalStyles from "styles/GlobalStyle";
import { AppHeader, AppMain } from "components/layout";

const queryClient = new QueryClient({
	cacheTime: 250000,
	staleTime: 250000,
});
export default function AppProvider({ children }) {
	return (
		<>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<AppHeader />
					<AppMain>
						<BrowserRouter>{children}</BrowserRouter>
					</AppMain>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
