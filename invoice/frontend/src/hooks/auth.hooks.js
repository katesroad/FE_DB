import axios from "utils/axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const conf = {
	staleTime: 29 * 60 * 1000, //milliseconds,
	cacheTime: 30 * 60 * 1000,
	retry: 0,
};

export function useGetUser() {
	return useQuery(["user"], () => axios.get("auth/token").catch((e) => null), {
		...conf,
		onError: () => {
			window.location.reload();
		},
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
		...conf,
		onSuccess: (data) => {
			queryClient.setQueryData(["user"], null);
		},
	});
}
