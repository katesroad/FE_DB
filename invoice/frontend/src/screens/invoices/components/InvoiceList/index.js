// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Column,
  ClientName,
  InvoiceId,
  DueDate,
  InvoiceTotal,
  ArrowButton,
} from "./styles";
import InvoiceStatus from "components/InvoiceStatus";
import NoInvoice from "../NoInvoice";

const InvoiceType = {
  tag: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
};

function Invoice({ ...invoice }) {
  let dueDate;
  React.useEffect(() => {
    dueDate = new Date(invoice.paymentDue).toLocaleDateString();
  }, [invoice]);
  return (
    <Wrapper to={`/invoice/${invoice.id}`}>
      <Column>
        <InvoiceId>
          # <strong>{invoice.tag}</strong>
        </InvoiceId>
        <DueDate>Due {dueDate}</DueDate>
        <InvoiceTotal>
          $ <span>{invoice.total}</span>
        </InvoiceTotal>
      </Column>
      <Column>
        <ClientName>{invoice.clientName}</ClientName>
        <InvoiceStatus status={invoice.status} />
      </Column>
      <ArrowButton>&gt;</ArrowButton>
    </Wrapper>
  );
}
Invoice.propTypes = InvoiceType;

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
  return <NoInvoice />;
}

InvoiceList.defaultPropTypes = { invoices: [] };

InvoiceList.propTypes = {
  invoices: PropTypes.arrayOf(PropTypes.shape(InvoiceType)),
};

export default InvoiceList;
