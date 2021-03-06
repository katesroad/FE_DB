import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  useMutation as userQueryMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import {
  useNotification,
  generateNotification,
  addNotification,
  deleteNotification,
  addSuccesNotification,
  addFailedNotification,
} from "context/notification.context";

function useInvoiceMutation(queryFn, conf = {}) {
  const [, dispatch] = useNotification();
  const { operations, onSuccess, invoice } = {
    operations: [],
    invoice: {},
    ...conf,
  };
  const [
    operating = "Updating",
    failed = "update",
    done = "Updated",
  ] = operations;
  const msg = `${operating} #${invoice.tag || invoice.id}`;
  const notification = generateNotification({ variant: "primary", msg: msg });
  return userQueryMutation(queryFn, {
    onMutate: (v) => addNotification(dispatch, notification),
    onError: (e, { tag, id }) => {
      const msg = `Failed to ${failed} invoice #${tag || id}`;
      addFailedNotification(dispatch, msg);
    },
    onSuccess: async (data, { tag, id }) => {
      const msg = `${done} invoice #${tag || id}`;
      addSuccesNotification(dispatch, msg);
      if (onSuccess) onSuccess(data, { tag });
    },
    onSettled: deleteNotification(dispatch, notification, 500),
  });
}

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

function updateInvoice(invoice) {
  const id = invoice.id;
  return axios.patch(`invoices/${id}`, invoice);
}
/**
 *  update invoice
 * @param {object} invoice the update data. Invoice id must be provided
 */
export function useUpdateInvoice({ id, tag }) {
  const queryClient = useQueryClient();
  return useInvoiceMutation(updateInvoice, {
    opertions: ["Updating", "update", "Updated"],
    invoice: { id, tag },
    onSuccess: (data) => queryClient.setQueryData(["invoice", id], data),
  });
}

// Delete invoice by id
function deleteInvoice(id) {
  return axios.delete(`/invoices/${id}`);
}
export function useDeleteInvoice({ id, tag }) {
  const history = useHistory();
  const queryClient = useQueryClient();
  return useInvoiceMutation(({ id, tag }) => deleteInvoice(id), {
    invoice: { id, tag },
    operations: ["Deleting", "delete", "Deleted"],
    onSuccess: async () => {
      await queryClient.refetchQueries(["invoices", "all"]);
      history.push("/");
    },
  });
}
