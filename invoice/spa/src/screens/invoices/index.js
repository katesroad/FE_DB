import * as React from "react";
import InvoiceList from "./components/InvoiceList";
import InvoiceFilter from "./components/InvoiceFilter";
import InvoicesStats from "./components/InvoicesStats";
import { useInvoices } from "hooks/invoices-hook";
import SuspenseBoundary from "components/SuspenseBoundary";
import { Header, InvoiceOperations, Title } from "./styles";

const InvoiceCreation = React.lazy(() =>
  import("./components/InvoiceCreation")
);
// Invoice list page
export default function InvoicesScreen() {
  const [invoiceStatus, setInvoiceStatus] = React.useState("all");
  const onChange = (value) => setInvoiceStatus(value);
  const { data: invoices, status, error } = useInvoices(invoiceStatus);
  return (
    <>
      <Header>
        <div>
          <Title>Invoices</Title>
          <InvoicesStats
            status={status}
            total={invoices?.length ? invoices.length : 0}
          />
        </div>
        <InvoiceOperations>
          <InvoiceFilter value={invoiceStatus} onChange={onChange} />
          <SuspenseBoundary>
            <InvoiceCreation />
          </SuspenseBoundary>
        </InvoiceOperations>
      </Header>
      <>
        {status === "loading" ? <p>loading...</p> : null}
        {status === "success" ? <InvoiceList invoices={invoices} /> : null}
        {status === "error" ? <p> {JSON.stringify(error)} </p> : null}
      </>
    </>
  );
}
