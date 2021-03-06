import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import { useUpdateInvoice } from "hooks/invoice-hooks";

function MarkButton({ id, tag, children }) {
  const mutation = useUpdateInvoice({ id, tag });
  const handleClick = (e) => mutation.mutate({ id, status: "paid" });
  return (
    <Button onClick={handleClick} variant="primary">
      {children}
    </Button>
  );
}
MarkButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MarkButton;
