import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
	useNotification,
	createNotification,
} from "context/notification.context";
import { getUser } from "./auth.hooks";

function useInvoiceMutation(queryFn, conf = {}) {
	const queryClient = useQueryClient();
	const { onSuccess, errorMsg, successMsg } = conf;
	const mutation = useMutation(queryFn, {
		onSuccess: async (data, { tag, id }, ctx) => {
			queryClient.refetchQueries(["invoices", data.status]);
			queryClient.refetchQueries(["invoices", ""]);
			onSuccess && onSuccess(data, { tag, id }, ctx);
		},
		onError: async () => {
			await queryClient.fetchQuery(["user"], getUser, { retry: 0 });
		},
		retry: 1,
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

export function getInvoice(id) {
	return axios.get(`invoices/${id}`);
}
//Get invoice by invoice's id
export function useGetInvoice(id) {
	return useQuery(["invoice", id], () => getInvoice(id), {
		staleTime: 30 * 60 * 1000,
		cacheTime: 50 * 1000,
		retry: 0,
	});
}

export function useUpdateInvoice({ id, tag, toStatus }) {
	const queryClient = useQueryClient();
	return useInvoiceMutation(
		(invoice) => axios.patch(`invoices/${invoice.id}`, invoice),
		{
			errorMsg: `Failed to update invoice#${tag || id}`,
			successMsg: `Updated invoice#${tag || id}`,
			onSuccess: (data, { id }) => {
				queryClient.setQueryData(["invoice", id], data);
				queryClient.refetchQueries(["invoices", toStatus]);
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
			onSuccess: async (data) => {
				await Promise.all([
					queryClient.refetchQueries(["invoices", data.status]),
					queryClient.refetchQueries(["invoices", ""]),
				]);
				history.push("/");
			},
		}
	);
}
