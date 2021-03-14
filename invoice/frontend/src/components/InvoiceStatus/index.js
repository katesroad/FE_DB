import { Status, Dot } from "./styles";
import PropTypes from "prop-types";

function InvoiceStatus({ status, ...props }) {
  return (
    <Status variant={status} {...props}>
      <Dot>⬤</Dot>
      {status}
    </Status>
  );
}

InvoiceStatus.propTypes = {
  status: PropTypes.oneOf(["paid", "pending", "draft"]).isRequired,
};

export default InvoiceStatus;
