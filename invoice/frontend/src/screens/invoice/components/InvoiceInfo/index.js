import * as React from "react";
import ItemList from "../ItemList";
import { Wrapper, Column, Item, Address } from "./styles";

const UserAddress = ({ address }) => (
  <Address>
    <span>{address.street}</span>
    <span>{address.city}</span>
    <span>{address.postcode}</span>
    <span>{address.country}</span>
  </Address>
);

const InvoiceDate = ({ name, date }) => (
  <Item>
    <span>{name}</span>
    <strong>{date}</strong>
  </Item>
);

export default function InvoiceInfo({ ...invoice }) {
  return (
    <Wrapper>
      <Column className="row1">
        <Item>
          <span>
            # <strong className="invoice-tag">{invoice.tag}</strong>
          </span>
          <span className="invoice-desc">{invoice.description}</span>
        </Item>
        <Item>
          <UserAddress address={invoice?.senderAddress} />
        </Item>
      </Column>
      <Column className="row2">
        <Column>
          <Item>
            <InvoiceDate
              name="Invoice Date"
              date={new Date(invoice.createdAt).toLocaleDateString()}
            />
            <InvoiceDate
              name="Payment Due"
              date={new Date(invoice.paymentDue).toLocaleDateString()}
            />
          </Item>
        </Column>
        <Column>
          <Item>
            <span>Bill To</span>
            <strong className="client-name">{invoice.clientName}</strong>
            <UserAddress address={invoice?.clientAddress} />
          </Item>
        </Column>
        <Column>
          <Item>
            <span>Sent to</span>
            <strong>{invoice.clientEmail}</strong>
          </Item>
        </Column>
      </Column>
      <ItemList
        items={invoice?.items || []}
        total={invoice?.total}
        invoiceStatus={invoice?.status}
      />
    </Wrapper>
  );
}
