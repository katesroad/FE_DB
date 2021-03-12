import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "components/lib";
import InvoiceForm from "components/InvoiceForm";
import SideModal, { ModalCloseBtn } from "components/SideModal";
import { Wrapper, InvoiceText } from "./styles";

const NewInvoiceBtn = (props) => (
  <Button variant="primary" {...props}>
    +New<InvoiceText> Invoice</InvoiceText>
  </Button>
);

function Header({ children }) {
  return (
    <Wrapper>
      {children}
      <SideModal title="Create Invoice" openBtn={<NewInvoiceBtn />}>
        <InvoiceForm>
          <ModalCloseBtn>
            <Button>Discard</Button>
          </ModalCloseBtn>
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
