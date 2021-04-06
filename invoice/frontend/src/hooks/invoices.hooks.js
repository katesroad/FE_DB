import { useQuery } from "react-query";
import axios from "utils/axios";

/**
 * Get inovices by invoices status
 * @param{string} - status invoice's status(pending, paid, draft)
 */
export function useInvoices(status = "") {
  const staleTime = status ? 0 : 30 * 60 * 1000;
  return useQuery(
    ["invoices", status],
    ({ queryKey: [, status] }) => {
      const params = status === "" ? {} : { status };
      return axios.get("invoices", { params });
    },
    { staleTime }
  );
}
