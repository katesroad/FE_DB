import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function getInvoice({ queryKey }) {
  const [, id] = queryKey;
  return axios.get(`invoices/${id}`);
}
/**
 * get invoice by its id
 * @param(string) -id the invoice id
 * */
export function useInvoice(id) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: getInvoice,
  });
}

/**
 * Update invoice by invoice id
 * @param(object) - invoice, the data to be updated.
 * Invoice's id must be provided
 */
function updateInvoice(invoice) {
  const id = invoice.id;
  return axios.patch(`invoices/${id}`, invoice);
}
export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  return useMutation((invoice) => updateInvoice(invoice), {
    onSuccess: (data, { id }) => {
      queryClient.setQueryData(["invoice", id], data);
    },
  });
}

// Delete invoice by id
function deleteInvoice(id) {
  return axios.delete(`/invoices/${id}`);
}
export function useDeleteInvoice() {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useMutation(({ id, tag }) => deleteInvoice(id), {
    onSuccess: async (data, { tag }, context) => {
      await queryClient.refetchQueries(["invoices", "all"]);
      history.push("/");
    },
  });
}
