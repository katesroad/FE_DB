import * as React from "react";
import { Button } from "components/lib";
import MarkButton from "components/MarkButton";
import PropTypes from "prop-types";
import DeleteBtn from "../ConfirmDeletion";

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
      {status === "paid" ? null : <EditButton id={id} />}
      <DeleteBtn id={id} tag={tag} />
      {status === "pending" ? <MarkButton id={id} /> : null}
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
