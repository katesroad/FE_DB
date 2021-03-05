import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  useNotification,
  generateNotification,
  addNotification,
  deleteNotification,
} from "context/notification.context";

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
  const queryClient = useQueryClient();
  const [, dispatch] = useNotification();
  const loadingNotification = generateNotification({
    variant: "primary",
    msg: "Updating invoice...",
  });
  return useMutation((invoice) => updateInvoice(invoice), {
    onMutate: (variables) => {
      addNotification(dispatch, loadingNotification);
      return variables;
    },
    onError: (error, { id }, context) => {
      const failedNotification = generateNotification({
        variant: "danger",
        msg: `Failed to update invoice #${id}...`,
      });
      addNotification(dispatch, failedNotification);
      deleteNotification(dispatch, failedNotification, 1000);
      // @todo
      // An error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
      console.warn(error);
    },
    onSuccess: (data, { id }, context) => {
      deleteNotification(dispatch, loadingNotification, 1000);
      const okNotification = generateNotification({
        variant: "success",
        msg: `Updated invoice  #${id}.`,
      });
      addNotification(dispatch, okNotification);
      deleteNotification(dispatch, okNotification, 1000);
      queryClient.setQueryData(["invoice", id], data);
    },
    onSettled: (data, error, variables, context) => {},
  });
}
