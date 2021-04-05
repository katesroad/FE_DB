import * as React from "react";
import AppProvider from "context";
import { AppHeader, AppMain } from "components/layout";
import { Route, Switch, Redirect } from "react-router-dom";
import InvoicesScreen from "screens/invoices";
import InvoiceScreen from "screens/invoice";

export default function AuthedApp({ redirectTo = "invoices" }) {
	const [to, setTo] = React.useState(() => redirectTo);
	React.useEffect(() => {
		setTo("invoices");
	}, [redirectTo]);
	return (
		<AppProvider>
			<AppHeader />
			<AppMain>
				<Switch>
					<Route path="/invoices" exact component={InvoicesScreen} />
					<Route path="/invoice/:id" exact component={InvoiceScreen} />
					<Route path="/*" component={() => <Redirect to={to} />} />
				</Switch>
			</AppMain>
		</AppProvider>
	);
}
