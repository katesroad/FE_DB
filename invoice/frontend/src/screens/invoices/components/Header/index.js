import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "components/lib";
import InvoiceForm from "components/InvoiceForm";
import { useCreateInvoice } from "hooks/invoice-hooks";
import { invoice } from "components/InvoiceForm/invoice.helper";
import SideModal, { ModalCloseBtn } from "components/SideModal";
import { Wrapper, InvoiceText, DiscardButton, ButtonGroup } from "./styles";

const NewInvoiceBtn = (props) => (
  <Button variant="primary" {...props}>
    <b>+</b> New<InvoiceText> Invoice</InvoiceText>
  </Button>
);
function Header({ children }) {
  const { mutate, status } = useCreateInvoice();
  const [action, setAction] = React.useState("");
  const onClick = ({ target }) => setAction(target.innerHTML);
  const onSubmit = (invoice) => {
    const status = action === "send" ? "pending" : "draft";
    mutate({ ...invoice, status });
  };
  return (
    <Wrapper>
      {children}
      <SideModal title="Create Invoice" openBtn={<NewInvoiceBtn />}>
        <InvoiceForm {...invoice} onSubmit={onSubmit}>
          {/* to place discard, save, and send button */}
          <ModalCloseBtn>
            <DiscardButton>Discard</DiscardButton>
          </ModalCloseBtn>
          <ButtonGroup>
            <Button
              type="submit"
              onClick={onClick}
              disabled={status === "pending"}
            >
              {status === "loading" && action === "save" ? "saving" : "save"}
            </Button>
            <Button
              type="submit"
              onClick={onClick}
              disabled={status === "loading"}
              variant="primary"
            >
              {status === "loading" && action === "send" ? "sending" : "send"}
            </Button>
          </ButtonGroup>
        </InvoiceForm>
      </SideModal>
    </Wrapper>
  );
}
Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Header;
