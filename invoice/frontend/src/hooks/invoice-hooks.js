import * as React from "react";
import axios from "axios";
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
    queryFn: () => axios.get(id),
  });
}

export function useUpdateInvoice({ id, tag }) {
  const queryClient = useQueryClient();
  return useInvoiceMutation(
    (invoice) => axios.patch(`invoice/${invoice.id}`, invoice),
    {
      errorMsg: `Failed to update invoice#${tag || id}`,
      successMsg: `Updated invoice#${tag || id}`,
      onSuccess: (data, { id }) => {
        queryClient.setQueryData("invoice", id, data);
        queryClient.refetchQueries(["invoices", "all"]);
        queryClient.refetchQueries(["invoices", data.status]);
      },
    }
  );
}

// delete invoice
export function useDeleteInvoice(invoice) {
  const queryClient = useQueryClient();
  return useInvoiceMutation(
    (invoice) => axios.delete(`invoice/${invoice.id}`),
    {
      successMsg: `Updated invoice#${invoice.id}`,
      onSuccess: () => {
        queryClient.refetchQueries("invoices", "all");
      },
    }
  );
}
