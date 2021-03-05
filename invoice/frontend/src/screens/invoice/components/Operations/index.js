import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import DeleteBtn from "../ConfirmDeletion";
import { useUpdateInvoice } from "hooks/invoice-hooks";

function MarkButton({ id }) {
  const mutation = useUpdateInvoice({ id });
  const handleClick = (e) => mutation.mutate({ id, status: "paid" });
  return (
    <Button onClick={handleClick} variant="primary">
      mark as paid
    </Button>
  );
}
MarkButton.propTypes = {
  id: PropTypes.string.isRequired,
};

function EditButton({ id }) {
  const handleClick = (e) => {
    console.log(`Editting invoice #${id}...`);
    return false;
  };
  return <Button onClick={handleClick}>Edit</Button>;
}
EditButton.propTypes = {
  id: PropTypes.string.isRequired,
};

function Operations({ id, status, tag }) {
  return (
    <>
      <EditButton id={id} />
      <DeleteBtn id={id} tag={tag} />
      {status !== "paid" ? <MarkButton id={id} /> : null}
    </>
  );
}
Operations.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export { DeleteBtn, MarkButton, EditButton };

export default Operations;
