import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import ConfirmDeletion from "../ComfirmDeletion";

function InvoiceOperations({ id, handelEdit, handleMark }) {
  return (
    <>
      <Button onClick={handelEdit}>edit</Button>
      <ConfirmDeletion id={id} />
      <Button variant="primary" onClick={handleMark}>
        mark as paid
      </Button>
    </>
  );
}

InvoiceOperations.propTypes = {
  id: PropTypes.string.isRequired,
  handelEdit: PropTypes.func.isRequired,
  handleMark: PropTypes.func.isRequired,
};

export default InvoiceOperations;
