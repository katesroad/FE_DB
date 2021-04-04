import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.response.use(
	(res) => res.data?.data,
	(error) => Promise.reject(error)
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
