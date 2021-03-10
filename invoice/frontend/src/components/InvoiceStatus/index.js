import { Status, Dot } from "./styles";
import PropTypes from "prop-types";

function InvoiceStatus({ status }) {
  return (
    <Status variant={status}>
      <Dot>⬤</Dot>
      {status}
    </Status>
  );
}

InvoiceStatus.propTypes = {
  status: PropTypes.oneOf(["paid", "pending", "draft"]).isRequired,
};

export default InvoiceStatus;
