import axios from "axios";
import * as auth from "./auth";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
	(res) => res.data,
	(error) => {
		let errorMessage = "";
		try {
			errorMessage = error.response.data.msg;
		} catch (e) {}
		if (!error.response) {
			console.log("error 500");
			errorMessage = "Sorry there's a problem with the server";
		}
		if (error.response.status === 400) {
			auth.cleanUser();
			errorMessage = "Invalid email or password";
		}

		if ([401, 403].includes(error.response.status)) {
			auth.cleanUser();
			errorMessage = "Requesting resource that require authentication.";
			window.location.reload();
		}

		return Promise.reject(errorMessage); //error?.response.data?.msg
	}
);

axios.interceptors.request.use((conf) => ({
	...conf,
	withCredentials: true,
}));

export default axios;
