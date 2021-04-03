import axios from "./axios";
import Cookies from "js-cookie";

const conf = {
	jwt: process.env.REACT_APP_JWT_KEY,
	refresh: process.env.REACT_APP_REFRESH_KEY,
	user: process.env.REACT_APP_USER_KEY,
};

export function getCachedUser() {
	try {
		return JSON.parse(window.localStorage.getItem(conf.user));
	} catch (e) {
		return null;
	}
}

export function storeUser(userData) {
	window.localStorage.setItem(conf.user, JSON.stringify(userData));
	return userData;
}

export function cleanUser() {
	window.localStorage.removeItem(conf.user);
	return null;
}

export function login({ email, password }) {
	return axios
		.post("/auth/login", { email, password })
		.then((userData) => storeUser(userData));
}

export function register({ username, email, password }) {
	return axios
		.post("/auth/register", { username, email, password })
		.then((userData) => storeUser(userData));
}

export function logout() {
	return axios.get("/auth/logout").then(() => cleanUser());
}

export function getUser() {
	const refreshToken = Cookies.get(conf.refresh);
	if (!refreshToken) return Promise.resolve(null);
	return axios
		.get("/auth/token")
		.then((userData) => storeUser(userData))
		.catch((e) => cleanUser());
}
