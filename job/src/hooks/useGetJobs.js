import { useQuery } from "react-query";
import axios from "utils/axios";

export function useGetJobs(filter) {
	const params = { ...filter };
	Object.keys(params).forEach((key) => {
		if (!params[key]) delete params[key];
		else params[key] = encodeURI(params[key]);
	});
	return useQuery({
		queryFn: () => axios.get("/", { params }),
		queryKey: ["jobs", params],
	});
}
