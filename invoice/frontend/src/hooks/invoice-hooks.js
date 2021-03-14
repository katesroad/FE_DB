import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  useNotification,
  createNotification,
} from "context/notification.context";

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
      createNotification(dispatch, {
        msg: errorMsg,
        variant: "danger",
      });
    }
    if (successMsg && mutation.status === "success") {
      createNotification(
        dispatch,
        { msg: successMsg, variant: "success" },
        { autoDelete: true, duration: 1000 }
      );
    }
  }, [mutation.status, dispatch, errorMsg, successMsg]);
  return mutation;
}

// create invoice
export function useCreateInvoice() {
  return useInvoiceMutation((invoice) => axios.post("invoices", invoice), {
    errorMsg: "Failed to create invoice",
    onSuccess: (data, { id }, ctx) => {
      window.location.reload();
    },
  });
}

//Get invoice by invoice's id
export function useGetInvoice(id) {
  return useQuery({
    queryKey: ["invoice", id],
    queryFn: () => axios.get(`invoices/${id}`),
  });
}

export function useUpdateInvoice({ id, tag }) {
  return useInvoiceMutation(
    (invoice) => axios.patch(`invoices/${invoice.id}`, invoice),
    {
      errorMsg: `Failed to update invoice#${tag || id}`,
      successMsg: `Updated invoice#${tag || id}`,
      onSuccess: (data, { id }) => {
        window.location.reload();
      },
    }
  );
}

// delete invoice
export function useDeleteInvoice(invoice) {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useInvoiceMutation(
    (invoice) => axios.delete(`invoices/${invoice.id}`),
    {
      successMsg: `Deleted invoice#${invoice.tag}`,
      onSuccess: async () => {
        await queryClient.refetchQueries("invoices", "all");
        history.push("/");
      },
    }
  );
}
