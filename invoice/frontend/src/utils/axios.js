import axios from "axios";
import * as auth from "./auth";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
	(res) => res.data?.data,
	(error) => {
		let errorMessage = "";
		let isAtAuth = false;
		let url = "";
		try {
			url = JSON.parse(JSON.stringify(error)).config.url;
			if (url.indexOf("auth/token") > -1) isAtAuth = true;
			if (["/login", "/register"].includes(window.location.pathname)) {
				isAtAuth = true;
			}
			errorMessage = error.response.data.msg;
		} catch (e) {}
		if (!error.response) {
			console.log("error 500");
			errorMessage = "Sorry there's a problem with the server";
		}
		if (error.response.status === 400) {
			auth.cleanUser();
			errorMessage = "Email has been registered";
		}

		if ([401, 403].includes(error.response.status)) {
			auth.cleanUser();
			errorMessage = "Please check the email and password";
			if (!isAtAuth) {
				errorMessage = "Requesting resource that require authentication.";
				window.location.reload();
			}
		}

		return Promise.reject(errorMessage); //error?.response.data?.msg
	}
);

axios.interceptors.request.use((conf) => ({
	...conf,
}));

export default axios;
