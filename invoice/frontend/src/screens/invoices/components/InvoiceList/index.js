// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
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
import InvoiceStatus from "components/InvoiceStatus";

export const InvoiceShape = {
  tag: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
};

function Invoice({ ...invoice }) {
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
      </Column>
      <ArrowButton />
    </InvoiceWrap>
  );
}
Invoice.propTypes = InvoiceShape;

function InvoiceList({ invoices }) {
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
InvoiceList.defaultPropTypes = { invoices: [] };
InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape(InvoiceShape)),
};

export default InvoiceList;
