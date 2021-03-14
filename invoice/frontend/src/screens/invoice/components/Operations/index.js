// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";
import { useUpdateInvoice } from "hooks/invoice-hooks";
import SuspenseBoundary, { ErrorFallback } from "components/SuspenseBoundary";

const EditInvoice = React.lazy(() => import("../EditInvoice"));
const DeleteInvoice = React.lazy(() => import("../DeleteInvoice"));

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
function Operations({ invoice }) {
  if (invoice.status === "paid")
    return (
      <SuspenseBoundary FallbackComponent={ErrorFallback}>
        <DeleteInvoice {...invoice} />
      </SuspenseBoundary>
    );
  if (invoice.status === "draft")
    return (
      <>
        <SuspenseBoundary>
          {invoice ? <EditInvoice invoice={invoice} /> : null}
        </SuspenseBoundary>
        <MarkInvoiceBtn {...invoice} toStatus="pending" />
        <MarkInvoiceBtn {...invoice} toStatus="paid" />
      </>
    );
  if (invoice.status === "pending") {
    return <MarkInvoiceBtn {...invoice} toStatus="paid" />;
  }
  return null;
}

export default Operations;
