import * as React from "react";
import PropTypes from "prop-types";
import { Error, Spinner } from "components/lib";
import InvoiceStatus from "components/InvoiceStatus";
import { Wrapper, StatusWrap } from "./styles";

const StatusPanel = ({ invoice, status, children }) => {
  return (
    <Wrapper>
      <StatusWrap>
        <span>Status</span>
        {["idle", "loading"].includes(status) ? (
          <Spinner />
        ) : status === "error" ? (
          <Error>Failed to load invoice</Error>
        ) : (
          <InvoiceStatus status={invoice?.status} className="status" />
        )}
      </StatusWrap>
      {status === "success" ? (
        <div className="operations">{children}</div>
      ) : null}
    </Wrapper>
  );
};
StatusPanel.propTypes = {
  status: PropTypes.oneOf(["idle", "pending", "error", "success"]).isRequired,
};

export default StatusPanel;
