import * as React from "react";
import PropTypes from "prop-types";
import { StatusButton, StatusDot } from "./styles";

function InvoiceStatus({ status }) {
  return (
    <StatusButton variant={status}>
      <StatusDot variant={status} />
      {status}
    </StatusButton>
  );
}

InvoiceStatus.propTypes = {
  status: PropTypes.oneOf(["paid", "pending", "draft"]).isRequired,
};

export default InvoiceStatus;
