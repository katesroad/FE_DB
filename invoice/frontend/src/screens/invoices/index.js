import * as React from "react";
import { useInvoices } from "hooks/useGetInvoices";
import InvoiceList from "./components/InvoiceList";

// Invoice detail page
export default function InvoicesScreen() {
  const { status, data: invoices, error } = useInvoices();
  return <InvoiceList invoices={invoices} />;
}
