// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import InvoiceStatus from "components/InvoiceStatus";
import { Card, Spinner, Error } from "components/lib";
import {
  InvoiceWrap,
  Column,
  ClientName,
  InvoiceId,
  DueDate,
  InvoiceTotal,
  ArrowButton,
  NoInvoice,
  Title,
  Text,
  EmptyImage,
} from "./styles";

export const InvoiceShape = {
  tag: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
};

const Invoice = React.memo(({ ...invoice }) => {
  return (
    <InvoiceWrap to={`/invoice/${invoice.id}`}>
      <Column>
        <InvoiceId>
          # <strong>{invoice.tag}</strong>
        </InvoiceId>
        <DueDate>Due {invoice.paymentDue}</DueDate>
        <InvoiceTotal>
          $ <span>{invoice.total}</span>
        </InvoiceTotal>
      </Column>
      <Column>
        <ClientName>{invoice.clientName}</ClientName>
        <InvoiceStatus status={invoice.status} />
        <ArrowButton />
      </Column>
    </InvoiceWrap>
  );
});
Invoice.propTypes = InvoiceShape;

function InvoiceList({ invoices, status }) {
  if (["idle", "loading"].includes(status))
    return (
      <Spinner
        css={`
          font-size: 2rem;
        `}
      />
    );
  if (status === "error")
    return (
      <Card>
        <Error>Failed to load invoices.</Error>
      </Card>
    );
  if (invoices?.length) {
    return (
      <ul>
        {invoices.map((invoice) => (
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
    );
  }
  return (
    <NoInvoice>
      <EmptyImage alt="No invoices" />
      <Title>There is nothing here</Title>
      <Text>
        Create a new invoice by clicking the <br />
        <b>New Invoice</b> button and get started
      </Text>
    </NoInvoice>
  );
}
InvoiceList.defaultPropTypes = { invoices: [], status: "idle" };
InvoiceList.propTypes = {
  status: PropTypes.oneOf(["idle", "loading", "error", "success"]).isRequired,
  invoices: PropTypes.arrayOf(PropTypes.any),
};

export default React.memo(InvoiceList);
