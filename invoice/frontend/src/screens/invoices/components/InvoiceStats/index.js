import * as React from "react";
import PropTypes from "prop-types";
import { Spinner, Error } from "components/lib";
import { Title, Wrapper } from "./styles";

function InvoiceStats({ status, invoices }) {
  const [invoiceText, setInvoiceText] = React.useState("");

  React.useEffect(() => {
    const invoiceText = (invoices?.length ?? 0) > 0 ? "invoices" : "invoice";
    setInvoiceText(invoiceText);
  }, [invoices]);

  const content = ["idle", "loading"].includes(status) ? (
    <Spinner />
  ) : status === "error" ? (
    <Error as="small">Failed to load stats</Error>
  ) : (
    <small>
      {invoices?.length ? `${invoices.length} ${invoiceText}` : "No Invoices"}
    </small>
  );

  return (
    <Wrapper>
      <Title>Invoices</Title>
      {content}
    </Wrapper>
  );
}

InvoiceStats.propTypes = {
  status: PropTypes.oneOf(["idle", "loading", "error", "success"]).isRequired,
  invoices: PropTypes.arrayOf(PropTypes.any),
};

export default InvoiceStats;
