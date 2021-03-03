import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import ConfirmDeletion from "../ConfirmDeletion";

function InvoiceOperations({ id, handleEdit, handleMark }) {
  return (
    <>
      <Button onClick={handleEdit}>edit</Button>
      <ConfirmDeletion id={id} />
      <Button variant="primary" onClick={handleMark}>
        mark as paid
      </Button>
    </>
  );
}

InvoiceOperations.propTypes = {
  id: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleMark: PropTypes.func.isRequired,
};

export default InvoiceOperations;
