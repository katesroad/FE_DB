// eslint-disable-next-line
import styled from "styled-components/macro";
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
  return (
    <Button
      onClick={handleClick}
      css={`
        margin-right: 8px;
      `}
    >
      Edit
    </Button>
  );
}
EditButton.propTypes = {
  id: PropTypes.string.isRequired,
};

/**
 * mark as paid, delete, and edit an invoice based on its status
 * An invoice is editable when the status is draft
 * An invoice can be marked as paid when the status is pending
 * An invoice can be deleted when the status is either draft or pending
 */
function Operations({ status, ...invoice }) {
  if (status === "paid") return <DeleteBtn {...invoice} />;
  return (
    <p>
      {status === "draft" ? (
        <>
          <EditButton id={invoice.id} />
          <MarkButton id={invoice.id} />
        </>
      ) : null}
      {status === "pending" ? <MarkButton id={invoice.id} /> : null}
    </p>
  );
}
Operations.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export { DeleteBtn, MarkButton, EditButton };

export default Operations;
