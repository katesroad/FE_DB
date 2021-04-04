import axios from "utils/axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

// please make sure to be identical with the access token expiration time
const conf = {
	staleTime: 29 * 60 * 1000, //milliseconds,
	cacheTime: 30 * 60 * 1000,
	retry: 0,
};

export function useGetUser() {
	const queryClient = useQueryClient();
	return useQuery(["user"], () => axios.get("auth/token").catch((e) => null), {
		...conf,
		onError: () => queryClient.setQueryData(["user"], null),
	});
}

export function useRegister() {
	return useMutation((data) => axios.post("auth/register", data));
}

export function useLogin() {
	return useMutation((data) => axios.post("auth/login", data));
}

export function useLogout() {
	const queryClient = useQueryClient();
	return useMutation(() => axios.get("auth/logout").catch((e) => null), {
		onSuccess: () => (window.location.href = "/login"),
		onError: async () => {
			await queryClient.refetchQueries(["user"]);
		},
	});
}
