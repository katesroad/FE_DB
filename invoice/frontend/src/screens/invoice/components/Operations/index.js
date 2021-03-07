// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import DeleteBtn from "../ConfirmDeletion";
import { useUpdateInvoice } from "hooks/invoice-hooks";
import SuspenseBoundary from "components/SuspenseBoundary";

const InoiceEditModal = React.lazy(() => import("../EditInvoice"));

function MarkInvoiceBtn({ id, tag, toStatus, ...props }) {
  const { status, mutate } = useUpdateInvoice({ id, tag, toStatus });
  return (
    <Button
      onClick={() => mutate({ id, status: toStatus })}
      variant="primary"
      {...props}
    >
      {status === "pending" ? "marking" : `mark as ${toStatus}`}
    </Button>
  );
}
MarkInvoiceBtn.propTypes = {
  toStatus: PropTypes.oneOf(["pending", "paid"]),
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

/**
 * mark as paid, delete, and edit an invoice based on its status
 * An invoice is editable when the status is draft
 * An invoice can be marked as paid when the status is pending
 * An invoice can be deleted when the status is either draft or pending
 */
function Operations({ status, ...invoice }) {
  if (status === "paid") return <DeleteBtn {...invoice} />;
  if (status === "draft")
    return (
      <>
        <SuspenseBoundary>
          {invoice ? <InoiceEditModal id={invoice.id} /> : null}
        </SuspenseBoundary>
        <MarkInvoiceBtn
          css={`
            margin: 0 8px;
          `}
          {...invoice}
          toStatus="pending"
        />
        <MarkInvoiceBtn {...invoice} toStatus="paid" />
      </>
    );
  if (status === "pending") {
    return <MarkInvoiceBtn {...invoice} toStatus="paid" />;
  }
}
Operations.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Operations;
