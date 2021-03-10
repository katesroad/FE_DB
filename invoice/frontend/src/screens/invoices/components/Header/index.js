import * as React from "react";
import PropTypes from "prop-types";
import { Button } from "components/lib";
import SideModal from "components/SideModal";
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
        hahdhdah
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

