import axios from "axios";
import { useMutation, useQuery } from "react-query";

export function getInvoice({ queryKey }) {
  const [, id] = queryKey;
  return axios.get(`invoices/${id}`);
}
// get invoice by its id
export function useInvoice(id) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: getInvoice,
  });
}

/**
 *  update invoice
 * @param {object} invoice the update data. Invoice id must be provided
 */
export function updateInvoice(invoice) {
  const id = invoice.id;
  return axios.patch(`invoices/${id}`, invoice);
}
/**
 *  update invoice
 * @param {object} invoice the update data. Invoice id must be provided
 */
export function useUpdateInvoice() {
  return useMutation((invoice) => updateInvoice(invoice));
}
