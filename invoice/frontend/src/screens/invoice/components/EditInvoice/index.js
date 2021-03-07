// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import PropTypes from "prop-types";
import PaymentTerms from "components/PaymentTerms";
import UserAddress from "components/UserAddress";
import ItemList from "components/ItemList";
import {
  FormControl,
  Label,
  Input,
  Modal,
  ModalOpenBtn,
  Button,
  Spinner,
  ModalCloseBtn,
} from "components/lib";
import { useInvoice } from "hooks/invoice-hooks";
import { ModalContent, Title, GoBackBtn, ModalFooter } from "./styles";

function EditInvoice({ id, ...props }) {
  const { data: invoice, status, error } = useInvoice(id);
  if (status === "error") return <p>{error.message}</p>;
  if (status === "loading" || status === "idle") return <Spinner />;
  return (
    <Modal>
      <ModalOpenBtn>
        <Button>Edit</Button>
      </ModalOpenBtn>
      <ModalContent>
        <ModalCloseBtn>
          <GoBackBtn>{"<"} Go Back</GoBackBtn>
        </ModalCloseBtn>
        <Title>
          <span>Edit #{invoice.tag}</span>
        </Title>
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
          />
        </form>
        <ModalFooter>
          <ModalCloseBtn>
            <Button>Cancel</Button>
          </ModalCloseBtn>
          <Button
            variant="primary"
            onClick={() => {
              console.log("update invoice");
            }}
          >
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

EditInvoice.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditInvoice;
