// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { IconArrowLeft } from "components/Icon";

export default function GobackBtn() {
  return (
    <>
      <IconArrowLeft />
      <strong
        css={`
          margin-left: 16px;
          font-size: 12px;
          letter-spacing: -0.25px;
          &:hover {
            color: #888eb0;
          }
        `}
      >
        Go Back
      </strong>
    </>
  );
}
