// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import Field from "components/Field";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import { initialValues, AuthSchema } from "./auth.helper";
import { Wrapper, RedirectWrap, ErrorWrap } from "./styles";

function ErrorMsg({ isSubmitting, errMsg, onClearMsg }) {
	React.useEffect(() => {
		if (errMsg) {
			let t1 = setTimeout(() => {
				clearTimeout(t1);
				t1 = null;
				onClearMsg();
			}, 3000);
		}
	}, [errMsg, onClearMsg]);
	if (!isSubmitting) return null;
	return <ErrorWrap>{errMsg.toString()}</ErrorWrap>;
}

function AuthForm({ onSubmit, type }) {
	const [errMsg, setErrMsg] = React.useState("");
	const handleSubmit = (values) => {
		onSubmit(values).catch((errMsg) => setErrMsg(errMsg));
	};
	const handleFocus = (props) => () => {
		props.setSubmitting(false);
		setErrMsg("");
	};
	const handleClearMsg = (props) => () => {
		props.setSubmitting(false);
		setErrMsg("");
	};

	return (
		<Wrapper>
			<h1>{type === "login" ? "Login" : "Sign up"}</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={AuthSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting, ...props }) => (
					<Form onFocus={handleFocus(props)}>
						{type === "login" ? null : (
							<Field
								label="User Name"
								name="username"
								type="text"
								placeholder="user name"
							/>
						)}
						<Field label="Email" name="email" type="text" placeholder="email" />
						<Field
							label="Password"
							name="password"
							type="password"
							placeholder="Password"
						/>
						<ErrorMsg
							errMsg={errMsg}
							isSubmitting={isSubmitting}
							onClearMsg={handleClearMsg(props)}
						/>
						<p className="footer">
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting
									? type === "register"
										? "registering"
										: "logining"
									: type}
							</Button>
						</p>
					</Form>
				)}
			</Formik>
			<RedirectWrap>
				{type === "login" ? (
					<>
						Don't have an account?&nbsp;
						<Link to="/register">Sign Up</Link>
					</>
				) : (
					<>
						Already have an account?&nbsp;
						<Link to="/login">Login</Link>
					</>
				)}
			</RedirectWrap>
		</Wrapper>
	);
}

AuthForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	type: PropTypes.oneOf(["login", "register"]).isRequired,
};
export default AuthForm;
