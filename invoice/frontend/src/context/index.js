import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.context";
import { NotificationProvider } from "./notification.context";
import GlobalStyles from "components/GlobalStyles";
import { AuthProvider } from "./auth.context";

const queryClient = new QueryClient({
	defaultOptions: {
		staleTime: 5 * 60 * 1000,
		cacheTime: 5 * 60 * 1000,
		retry: 2,
	},
});
export default function AppProvider({ children }) {
	return (
		<>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<NotificationProvider>
					<AuthProvider>
						<ThemeProvider>
							<BrowserRouter>
								<>{children}</>
							</BrowserRouter>
						</ThemeProvider>
					</AuthProvider>
				</NotificationProvider>
			</QueryClientProvider>
		</>
	);
}
