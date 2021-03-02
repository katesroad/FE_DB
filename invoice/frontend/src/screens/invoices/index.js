// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import invoiceList from "./data";
import Invoice from "./components/Invoice";
import InvoiceFilter from "./components/InvoiceFilter";
import { Header, CreateBtn, InvoiceOperations, Title } from "./styles";

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
          <CreateBtn variant="primary"> + new invoice</CreateBtn>
        </InvoiceOperations>
      </Header>
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
