// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import InvoiceForm from "components/InvoiceForm";
import { useUpdateInvoice } from "hooks/invoice-hooks";
import SideModal, { ModalCloseBtn } from "components/SideModal";

export default function EditInvoice({ invoice }) {
  const { mutate, isSuccess, isLoading } = useUpdateInvoice({ ...invoice });
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    if (isSuccess) setIsOpen(false);
  }, [isSuccess]);
  const [toStatus, setToStatus] = React.useState(invoice.status);
  const handleClick = ({ target: { innerHTML } }) => {
    const toStatus = innerHTML === "save" ? "draft" : "pending";
    setToStatus(toStatus);
  };
  const onSubmit = (invoice) => mutate({ ...invoice, status: toStatus });
  return (
    <SideModal
      title="Edit Invoice"
      openBtn={<Button onClick={() => setIsOpen(true)}>Edit</Button>}
      isOpen={isOpen}
    >
      <InvoiceForm {...invoice} onSubmit={onSubmit}>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            button {
              margin-left: 8px;
            }
          `}
        >
          <ModalCloseBtn>
            <Button variant="cancel" as="span" onClick={() => setIsOpen(false)}>
              cancel
            </Button>
          </ModalCloseBtn>
          <p>
            <Button type="submit" disabled={isLoading} onClick={handleClick}>
              {isLoading && toStatus === "draft" ? "saving" : "save"}
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              onClick={handleClick}
            >
              {isLoading && toStatus === "pending" ? "sending" : "send"}
            </Button>
          </p>
        </div>
      </InvoiceForm>
    </SideModal>
  );
}
