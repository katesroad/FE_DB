// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import InvoiceForm from "components/InvoiceForm";
import { useCreateInvoice } from "hooks/invoice-hooks";
import { Modal, ModalOpenBtn, Button, ModalCloseBtn } from "components/lib";
import { ModalContent, Title, GoBackBtn, ModalFooter } from "./styles";

function InvoiceCreation() {
  const [invoice, setInvoice] = React.useState({
    senderAddress: {},
    clientAddress: {},
    items: [],
  });
  const { status, mutate } = useCreateInvoice();
  console.log(status, mutate, setInvoice);
  return (
    <Modal>
      <ModalOpenBtn>
        <Button variant="primary">+ new invoice</Button>
      </ModalOpenBtn>
      <ModalContent aria-label="invoice creation modal">
        <ModalCloseBtn>
          <GoBackBtn>{"<"} Go Back</GoBackBtn>
        </ModalCloseBtn>
        <Title>
          <span>New Invoice</span>
        </Title>
        <InvoiceForm invoice={invoice} />
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

export default InvoiceCreation;
