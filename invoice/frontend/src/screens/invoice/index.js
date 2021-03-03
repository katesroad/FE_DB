// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import InvoiceOperations from "./components/InvoiceOperations";
import { useParams } from "react-router-dom";
import invoices from "./data";
import { Header, StatusLabel, Wrapper } from "./styles";
import StatusValue from "components/InvoiceStatus";
import { useInvoice } from "hooks/invoice-hook";
import InvoiceInfo from "./components/InvoiceInfo";
import BillItems from "./components/BillItems";
import GrandTotal from "./components/GrandTotal";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  useInvoice(id);
  const [invoice, setInvoice] = React.useState(invoices[0]);
  return (
    <>
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          <StatusValue status={invoice.status} />
        </p>
        <p className="operations">
          <InvoiceOperations id={invoice.id} />
        </p>
      </Header>
      <>
        <InvoiceInfo {...invoice} />
        <BillItems items={invoice.items} />
        <GrandTotal />
      </>
    </>
  );
}