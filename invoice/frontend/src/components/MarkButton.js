import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import { useUpdateInvoice } from "hooks/invoice-hooks";

function MarkButton({ id, label, children }) {
  const { status, mutate } = useUpdateInvoice({ id });
  const handleClick = (e) => mutate({ id, status: "paid" });
  return (
    <Button
      onClick={handleClick}
      variant="primary"
      disabled={status === "pending"}
    >
      {label || children}
    </Button>
  );
}
MarkButton.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default MarkButton;
