import axios from "axios";
import { useHistory } from "react-router-dom";
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
      deleteNotification(dispatch, failedNotification, 500);
      // @todo,an error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
      console.warn(error);
    },
    onSuccess: (data, { id }, context) => {
      const okNotification = generateNotification({
        variant: "success",
        msg: `Updated invoice  #${id}.`,
      });
      addNotification(dispatch, okNotification);
      deleteNotification(dispatch, okNotification, 500);
      queryClient.setQueryData(["invoice", id], data);
    },
    onSettled: (data, error, variables, context) => {
      deleteNotification(dispatch, loadingNotification, 250);
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
  const [, dispatch] = useNotification();
  const loadingNotification = generateNotification({
    variant: "primary",
    msg: "Deleting invoice...",
  });
  return useMutation(({ id, tag }) => deleteInvoice(id), {
    onMutate: (variables) => {
      addNotification(dispatch, loadingNotification);
      return variables;
    },
    onError: (error, { tag }, context) => {
      const failedNotification = generateNotification({
        variant: "danger",
        msg: `Failed to delete invoice #${tag}...`,
      });
      addNotification(dispatch, failedNotification);
      deleteNotification(dispatch, failedNotification, 500);
      // @todo,an error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
      console.warn(error);
    },
    onSuccess: async (data, { tag }, context) => {
      const okNotification = generateNotification({
        variant: "success",
        msg: `Deleted invoice #${tag}.`,
      });
      addNotification(dispatch, okNotification);
      deleteNotification(dispatch, okNotification, 500);
      await queryClient.refetchQueries(["invoices", "all"]);
      history.push("/");
    },
    onSettled: (data, error, variables, context) => {
      deleteNotification(dispatch, loadingNotification);
    },
  });
}
