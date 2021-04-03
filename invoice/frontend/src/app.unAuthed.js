// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "screens/login";
import SignUpScreen from "screens/login";
import { Content } from "components/lib";

export default function UnAuthedApp() {
	return (
		<>
			<Content
				as="main"
				css={`
					display: flex;
					align-items: center;
					justify-content: center;
				`}
			>
				<Switch>
					<Route path="/login" component={LoginScreen} />
					<Route path="/register" component={SignUpScreen} />
					<Route path="*" component={() => <Redirect to="/login" />} />
				</Switch>
			</Content>
		</>
	);
}
