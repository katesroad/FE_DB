import { useQuery } from "react-query";
import axios from "utils/axios";

export function useGetJobs(filter) {
	const params = { ...filter };
	Object.keys(params).forEach((key) => {
		if (!params[key]) delete params[key];
		else params[key] = encodeURI(params[key]);
	});
	return useQuery({
		queryFn: () => axios.get("/positions.json", { params }),
		queryKey: ["jobs", params],
	});
}

export function useGetJob(id) {
	return useQuery({
		queryFn: () => axios.get(`/positions/${id}.json`),
		queryKey: ["job", id],
	});
}
