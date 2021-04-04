import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
	(res) => res.data?.data,
	(error) => {
		const { url } = error.config;
		if (url.indexOf("invoices") === -1) return Promise.reject(error);
		return new Promise(async (resolve, reject) => {
			const originalRequest = error.config;
			if (
				error.response &&
				error.response.status === 401 &&
				error.config &&
				!error.config.__isRetryRequest
			) {
				originalRequest._retry = true;
				await axios
					.get("auth/token")
					.then(() => axios(originalRequest))
					.then((res) => resolve(res))
					.catch((e) => reject(error));
			}
			return Promise.reject(error);
		});
	}
);

axios.interceptors.request.use((conf) => {
	const { method, url, data } = conf;
	if (process.NODE_ENV === "development") {
		if (["POST", "PATCH", "PUT"].includes(method.toUpperCase())) {
			console.log(`${method} ${url} with data:\n`, data, "\n");
		} else {
			console.log(`${method} ${url}\n`);
		}
	}
	return conf;
});

export default axios;
