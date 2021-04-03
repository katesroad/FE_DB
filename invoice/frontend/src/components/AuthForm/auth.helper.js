import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
	username: Yup.string(),
	email: Yup.string()
		.email("Must be a valid email.")
		.required(`Email can't be empty`),
	password: Yup.string().required(`Password can't be empty`),
});

export const initialValues = {
	username: "",
	email: "",
	password: "",
};
