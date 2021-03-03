// eslint-disable-next-line
import { THEME_MODE, useTheme } from "context/theme.context";
import PropTypes from "prop-types";
import * as React from "react";
import { colors } from "styles/colors";
import { Wrapper } from "./styles";

function InvoiceInfo({ senderAddress, clientAddress, ...invoice }) {
  const [theme] = useTheme();
  const color = theme === THEME_MODE.light ? colors.p12 : colors.p10;
  return (
    <Wrapper
      css={`
        color: ${color};
      `}
    >
      <div>
        <p>
          <strong># {invoice.id}</strong>
          <span>{invoice.description}</span>
        </p>
        <p>
          {Object.keys(senderAddress).map((key) => (
            <span key={key}>{senderAddress[key]}</span>
          ))}
        </p>
      </div>
      <div>
        <p>
          <span>Invoice Date</span>
          <strong>{invoice.createdAt}</strong>
        </p>
        <p>
          <span>Payment Due</span>
          <strong>{invoice.paymentDue}</strong>
        </p>
      </div>
      <div>
        <span>Bill To</span>
        <strong>{invoice.clientName}</strong>
        <p>
          {Object.keys(senderAddress).map((key) => (
            <span key={key}>{senderAddress[key]}</span>
          ))}
        </p>
      </div>
      <div>
        <span>Send to</span>
        <strong>{invoice.clientEmail}</strong>
      </div>
    </Wrapper>
  );
}

InvoiceInfo.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  paymentDue: PropTypes.string.isRequired,
  clientName: PropTypes.string.isRequired,
  clientEmail: PropTypes.string.isRequired,
  clientAddress: PropTypes.object.isRequired,
  senderAddress: PropTypes.object.isRequired,
};

export default InvoiceInfo;
