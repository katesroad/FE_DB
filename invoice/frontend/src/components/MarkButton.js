import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import { useUpdateInvoice } from "hooks/invoice-hooks";

function MarkButton({ id, children }) {
  const mutation = useUpdateInvoice({ id });
  const handleClick = (e) => mutation.mutate({ id, status: "paid" });
  return (
    <Button
      onClick={handleClick}
      variant="primary"
      disabled={mutation.status === "pending"}
    >
      {children || "mark as paid"}
    </Button>
  );
}
MarkButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MarkButton;
