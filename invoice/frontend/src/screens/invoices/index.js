// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import invoiceList from "./data";
import Invoice from "./components/Invoice";
import InvoiceFilter from "./components/InvoiceFilter";
import { Button } from "components/lib";
import { Header, InvoiceOperations, Title } from "./styles";
import NoInvoice from "./components/NoInvoice";

// Invoice list page
export default function InvoicesScreen() {
  const [status, setStatus] = React.useState("all");
  const onChange = (value) => setStatus(value);
  return (
    <>
      <Header>
        <div>
          <Title>Invoices</Title>
          <small>there are 7 total invocies</small>
        </div>
        <InvoiceOperations>
          <InvoiceFilter value={status} onChange={onChange} />
          <Button variant="primary"> + new invoice</Button>
        </InvoiceOperations>
      </Header>
      <NoInvoice />
      <ul>
        {invoiceList.reverse().map((invoice) => (
          <li
            key={invoice.id}
            css={`
              margin-bottom: 16px;
            `}
          >
            <Invoice {...invoice} />
          </li>
        ))}
      </ul>
    </>
  );
}
