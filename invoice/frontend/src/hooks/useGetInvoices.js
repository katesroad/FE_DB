import { useQuery } from "react-query";
import axios from "utils/axios";

/**
 * Get inovices by invoices status
 * @param{string} - status invoice's status(pending, paid, draft)
 */
export function useInvoices(status) {
  return useQuery({
    queryKey: ["invoices", status],
    queryFn: ({ queryKey: [, status] }) => {
      const params = status === "all" ? {} : { status };
      return axios.get("invoices", { params });
    },
  });
}
