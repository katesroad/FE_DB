import * as React from "react";
import * as Yup from "yup";
import AuthForm from ".";

const Template = (args) => <AuthForm {...args} />;

export const Register = Template.bind({});
Register.args = {
	type: "register",
	onSubmit: () => {},
};

const FormSchema = Yup.object().shape({
	street: Yup.string().required("Street is required."),
});

export const Login = Template.bind({});
Login.args = {
	type: "login",
	onSubmit: () => {},
};
export default {
	title: "components/AuthForm",
	component: AuthForm,
};
