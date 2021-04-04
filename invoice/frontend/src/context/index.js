import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./theme.context";
import { NotificationProvider } from "./notification.context";
import GlobalStyles from "components/GlobalStyles";
import { AuthProvider } from "./auth.context";

const queryClient = new QueryClient({
	cacheTime: 2500,
	staleTime: 2000,
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
