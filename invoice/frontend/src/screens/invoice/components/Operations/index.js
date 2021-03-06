// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import MarkButton from "components/MarkButton";
import PropTypes from "prop-types";
import DeleteBtn from "../ConfirmDeletion";
import { useUpdateInvoice } from "hooks/invoice-hooks";

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

function MarkPaid({ id }) {
  const { status, mutate } = useUpdateInvoice();
  return (
    <Button
      onClick={() => mutate({ id, status: "paid" })}
      css={`
        margin: 0 8px;
      `}
      variant="primary"
    >
      {status === "pending" ? "marking" : "mark as paid"}
    </Button>
  );
}

function MarkPending({ id }) {
  const { status, mutate } = useUpdateInvoice();
  return (
    <Button onClick={() => mutate({ id, status: "pending" })} variant="primary">
      {status === "pending" ? "marking" : "mark as pending"}
    </Button>
  );
}

/**
 * mark as paid, delete, and edit an invoice based on its status
 * An invoice is editable when the status is draft
 * An invoice can be marked as paid when the status is pending
 * An invoice can be deleted when the status is either draft or pending
 */
function Operations({ status, id, tag }) {
  const { status: markingStatus, mutate } = useUpdateInvoice();
  if (status === "paid") return <DeleteBtn id={id} tag={tag} />;
  if (status === "draft")
    return (
      <>
        <EditButton id={id} />
        <MarkPending id={id} />
        <MarkPaid id={id} />
      </>
    );
  if (status == "pending") return <MarkPaid id={id} />;
}
Operations.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export { DeleteBtn, MarkButton, EditButton };

export default Operations;
