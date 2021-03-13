// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { PageHeader as Header } from "components/layout";
import { useInvoices } from "hooks/useGetInvoices";
import InvoiceList from "./components/InvoiceList";
import InvoiceStats from "./components/InvoiceStats";
import InvoicesFilter from "./components/InvoicesFilter";
import CreateInvoice from "./components/CreateInvoice";

// Invoice detail page
export default function InvoicesScreen() {
  const [statusList, setStatusList] = React.useState([]);
  const onSelect = (status) => {
    const statusSet = new Set(statusList);
    if (statusSet.has(status)) {
      statusSet.delete(status);
    } else statusSet.add(status);
    setStatusList([...statusSet]);
  };
  const { status, data: invoices } = useInvoices(statusList.join(","));
  return (
    <>
      {/* page header */}
      <Header>
        <InvoiceStats status={status} invoices={invoices} />
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          {/* invoice status filter */}
          <InvoicesFilter statusList={statusList} onSelect={onSelect} />
          {/* new invoice button and the modal triggered by click create button */}
          <CreateInvoice />
        </div>
      </Header>
      {/* invoice list */}
      <InvoiceList status={status} invoices={invoices} />
    </>
  );
}
