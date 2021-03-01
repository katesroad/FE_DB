import * as React from "react";
import PropTypes from "prop-types";
import { StatusButton, Dot } from "./styles";

function InvoiceStatus({ status }) {
  return (
    <StatusButton variant={status}>
      <Dot>⬤</Dot>
      {status}
    </StatusButton>
  );
}

InvoiceStatus.propTypes = {
  status: PropTypes.oneOf(["paid", "pending", "draft"]).isRequired,
};

export default InvoiceStatus;
