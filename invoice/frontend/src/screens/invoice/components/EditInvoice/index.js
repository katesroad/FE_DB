// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import InvoiceForm from "components/InvoiceForm";
import { useUpdateInvoice } from "hooks/invoice-hooks";
import SideModal, { ModalCloseBtn } from "components/SideModal";

export default function EditInvoice({ invoice }) {
  const { mutate, status } = useUpdateInvoice({ ...invoice });
  const onSubmit = (invoice) => {
    mutate(invoice);
  };
  return (
    <SideModal title="Edit Invoice" openBtn={<Button>Edit</Button>}>
      <InvoiceForm {...invoice} onSubmit={onSubmit}>
        <p
          css={`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            button {
              margin-left: 8px;
            }
          `}
        >
          <ModalCloseBtn>
            <Button>cancel</Button>
          </ModalCloseBtn>
          <Button
            type="submit"
            disabled={status === "loading"}
            variant="primary"
          >
            {status === "loading" ? "saving" : "save"}
          </Button>
        </p>
      </InvoiceForm>
    </SideModal>
  );
}
