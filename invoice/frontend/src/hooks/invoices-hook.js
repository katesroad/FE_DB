import axios from "utils/axios";
import { useQuery } from "react-query";

function getInvoices({ queryKey }) {
  const [, status = "all"] = queryKey;
  const params = status === "all" ? {} : { status };
  return axios.get("invoices", { params });
}

/**
 * Get invoice list by invoice status
 * @param{string} -status invoice Status
 * options: paid, pending, dfrat, all
 */
export function useInvoices(status) {
  return useQuery({
    queryKey: ["invoices", status],
    queryFn: (status) => getInvoices(status),
  });
}
