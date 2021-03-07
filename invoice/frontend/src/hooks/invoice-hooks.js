import axios from "axios";
import {
  createNotification,
  useNotification,
} from "context/notification.context";
import * as React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

function useInvoiceMutation(queryFn, conf = {}) {
  const { onSuccess, errorMsg, successMsg } = conf;
  const mutation = useMutation(queryFn, {
    onSuccess: async (data, { tag, id }, ctx) => {
      onSuccess && onSuccess(data, { tag, id }, ctx);
    },
  });
  const [, dispatch] = useNotification();
  React.useEffect(() => {
    if (errorMsg && mutation.status === "error") {
      createNotification(dispatch, { msg: errorMsg, variant: "success" });
    }
    if (successMsg && mutation.status === "success") {
      createNotification(
        dispatch,
        { msg: successMsg, variant: "success" },
        { duration: 1000 }
      );
    }
  }, [mutation.status, dispatch, errorMsg, successMsg]);
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
    successMsg: `Deleted invoice#${tag}.`,
    onSuccess: async () => {
      await queryClient.refetchQueries(["invoices", "all"]);
      setTimeout(() => {
        history.push("/");
      }, 1000);
    },
  });
  return mutation;
}
