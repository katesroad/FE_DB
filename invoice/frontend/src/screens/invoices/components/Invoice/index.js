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
import InvoiceStatus from "../InvoiceStatus";

function Invoice({ ...invoice }) {
  return (
    <Wrapper>
      <Column>
        <InvoiceId>
          # <strong>{invoice.id}</strong>
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
      <ArrowButton>&gt;</ArrowButton>
    </Wrapper>
  );
}

Invoice.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
};

export default Invoice;
