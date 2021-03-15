// eslint-disable-next-line
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import * as React from "react";
import { IconArrowLeft } from "components/Icon";

export default function GobackBtn(props) {
  return (
    <span
      css={`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 81px;
        padding-top: 32px;
        padding-bottom: 24px;
        ${mediaQueries.medium} {
          padding-top: 48px;
          padding-bottom: 32px;
        }
        ${mediaQueries.medium} {
          padding-top: 64px;
        }
        cursor: pointer;
      `}
      {...props}
    >
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
    </span>
  );
}
