// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useInvoices } from "hooks/useGetInvoices";
import InvoiceList from "./components/InvoiceList";
import InvoiceStats from "./components/InvoiceStats";
import InvoicesFilter from "./components/InvoicesFilter";
import Header from "./components/Header";

// Invoice detail page
export default function InvoicesScreen() {
  const { status, data: invoices } = useInvoices();
  const [invoiceStatus, setInvoiceStatus] = React.useState("all");
  return (
    <>
      {/* page header */}
      <Header>
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-grow: 1;
            margin-right: 24px;
          `}
        >
          <InvoiceStats status={status} invoices={invoices} />
          <InvoicesFilter status={invoiceStatus} onChange={() => {}} />
        </div>
      </Header>
      {/* invoice list */}
      <InvoiceList status={status} invoices={invoices} />
    </>
  );
}
