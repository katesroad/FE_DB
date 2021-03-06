import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

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
export function useUpdateInvoice() {
  const queryClient = useQueryClient();
  return useMutation((invoice) => updateInvoice(invoice), {
    onSuccess: (data, { id }) => {
      queryClient.setQueryData(["invoice", id], data);
    },
  });
}

// Delete invoice by id
export function deleteInvoice(id) {
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
