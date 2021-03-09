import * as React from "react";
import PropTypes from "prop-types";

function InvoiceStats({ status, total }) {
  if (status === "loading") return <small>loading</small>;
  if (status === "failed") return <small>eror happened</small>;
  if (status === "success") {
    return (
      <small>
        {total ? `there are ${total} total invocies` : "No invoices"}
      </small>
    );
  }
  return <small>loading..</small>;
}

InvoiceStats.propTypes = {
  total: PropTypes.number,
  status: PropTypes.string.isRequired,
};

export default InvoiceStats;
