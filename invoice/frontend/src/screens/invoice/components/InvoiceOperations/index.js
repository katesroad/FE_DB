// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Button } from "components/lib";
import PropTypes from "prop-types";

function InvoiceOperations({ id }) {
  return (
    <>
      <Button>edit</Button>
      <Button
        variant="danger"
        css={`
          margin-left: 8px;
          margin-right: 8px;
        `}
      >
        delete
      </Button>
      <Button variant="primary">mark as paid</Button>
    </>
  );
}

InvoiceOperations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default InvoiceOperations;
