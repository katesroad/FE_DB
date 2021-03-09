// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PaymentTerms from "components/PaymentTerms";
import UserAddress from "components/UserAddress";
import ItemList from "components/ItemList";
import { FormControl, Label, Input } from "components/lib";

function InvoiceForm({ children, invoice }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div
        css={`
          margin-bottom: 24px;
        `}
      >
        <UserAddress
          type="sender"
          userAddress={invoice.senderAddress}
          onChange={() => {}}
        />
      </div>
      <UserAddress
        type="client"
        userAddress={invoice.clientAddress}
        onChange={() => {}}
      >
        <FormControl>
          <Label>Client's Name</Label>
          <Input
            name="clientName"
            value={invoice.clientName}
            onChange={() => {}}
          />
        </FormControl>
        <FormControl>
          <Label>Client's Email</Label>
          <Input
            name="clientEmail"
            value={invoice.clientEmail}
            onChange={() => {}}
          />
        </FormControl>
      </UserAddress>
      <FormControl>
        <Label>Invoice Date</Label>
        <Input name="paymentDue" onChange={() => {}} />
      </FormControl>
      <PaymentTerms value={invoice.paymentTerms} onChange={(value) => {}} />
      <FormControl>
        <Label>Project/Description</Label>
        <Input name="description" onChange={() => {}} />
      </FormControl>
      <ItemList
        items={invoice.items}
        onAddItem={() => {}}
        onEditItem={() => {}}
        onDeleteItem={() => {}}
      />
      {children}
    </form>
  );
}

export default InvoiceForm;
