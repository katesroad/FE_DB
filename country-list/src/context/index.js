// eslint-disable-next-line
import styled from "styled-components/macro";
import Footer from "components/footer";
import Header from "components/header";
import { Content } from "components/lib";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import GlobalStyles from "components/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

export default function AppProvider({ children }) {
	const client = new QueryClient();
	return (
		<>
			<GlobalStyles />
			<Router>
				<QueryClientProvider client={client}>
					<Header />
					<Content
						as="main"
						css={`
							flex-grow: 10;
						`}
					>
						<Switch>{children}</Switch>
					</Content>
				</QueryClientProvider>
				<Footer />
			</Router>
		</>
	);
}
