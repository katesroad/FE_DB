import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  useNotification,
  createNotification,
} from "context/notification.context";

function useInvoiceMutation(queryFn, conf = {}) {
  const { onSuccess, errorMsg } = conf;
  const mutation = useMutation(queryFn, {
    onSuccess: async (data, { tag, id }, ctx) => {
      onSuccess && onSuccess(data, { tag, id }, ctx);
    },
  });
  const [, dispatch] = useNotification();
  React.useEffect(() => {
    if (errorMsg && mutation.status === "error") {
      createNotification(dispatch, {
        msg: errorMsg,
        variant: "danger",
      });
    }
  }, [mutation.status, dispatch, errorMsg]);
  return mutation;
}

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
export function useUpdateInvoice({ tag, toStatus }) {
  const queryClient = useQueryClient();
  let errorMsg = `Failed to update invoice#${tag}`;
  if (toStatus) {
    errorMsg = `${errorMsg} as ${toStatus}`;
  }
  errorMsg += ".";
  const conf = {
    errorMsg,
    onSuccess: (data, { id }, ctx) => {
      queryClient.setQueryData(["invoice", id], data);
    },
  };
  const mutation = useInvoiceMutation(
    (invoice) => updateInvoice(invoice),
    conf
  );
  return mutation;
}

// Delete invoice by id
function deleteInvoice(id) {
  return axios.delete(`/invoices/${id}`);
}
export function useDeleteInvoice({ id, tag }) {
  const history = useHistory();
  const queryClient = useQueryClient();
  const mutation = useInvoiceMutation(({ id }) => deleteInvoice(id), {
    errorMsg: `Failed to delete invoice#${tag}.`,
    onSuccess: async () => {
      await queryClient.refetchQueries(["invoices", "all"]);
      history.push("/");
    },
  });
  return mutation;
}
