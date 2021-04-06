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
import { useAuth } from "context/auth.context";

function ErrorMsg({ isSubmitting, errMsg, onClearMsg }) {
  React.useEffect(() => {
    if (errMsg) {
      let t1 = setTimeout(() => {
        clearTimeout(t1);
        t1 = null;
        onClearMsg();
      }, 5000);
    }
  }, [errMsg, onClearMsg]);
  if (!isSubmitting) return null;
  return <ErrorWrap>{errMsg.toString()}</ErrorWrap>;
}

function AuthForm({ mutation, type }) {
  const [errMsg, setErrMsg] = React.useState("");
  const { setUser } = useAuth();
  const handleSubmit = (values) => {
    mutation.mutateAsync(values).catch((e) => {
      if (type === "login") setErrMsg("Invalid email or password");
      else setErrMsg("Account has been registered");
    });
  };
  const getClearErrorHandler = (props) => () => {
    props.setSubmitting(false);
    setErrMsg("");
  };
  React.useEffect(() => {
    if (mutation.status === "success") {
      setUser(mutation.data);
    }
  }, [mutation.status, mutation.data, setUser]);

  return (
    <Wrapper>
      <h1>{type === "login" ? "Login" : "Sign up"}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={AuthSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, ...props }) => (
          <Form onFocus={getClearErrorHandler(props)}>
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
              onClearMsg={getClearErrorHandler(props)}
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
  mutation: PropTypes.object.isRequired, // react query mutation
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};
export default AuthForm;
