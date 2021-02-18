// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { LinkButton } from "components/lib";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function BackButton({ to }) {
  return (
    <LinkButton
      to={to}
      css={`
        display: flex;
        align-items: center;
        justify-content: space-around;
        max-width: 60px;
        padding: 0.5rem 1rem;
        margin-bottom: 4rem;
        box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 4px;
      `}
    >
      <FaLongArrowAltLeft />
      <span>Back</span>
    </LinkButton>
  );
}
