import styled from "styled-components";
import { cardStyle } from "styles/styles";
import { DisclosurePanel } from "@reach/disclosure";
import "./style.css"; // contain the styling for button

export const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
`;

export const StatusList = styled(DisclosurePanel)`
  position: absolute;
  top: 32px;
  left: 16px;
  padding: 16px;
  width: 100%;
  ${cardStyle}
  &:focus {
    outline: 0;
  }
`;

export const StatusItem = styled.p`
  display: flex;
  margin-bottom: 16px;
  color: var(--title-text-color);
  font-weight: var(--font-weight-bold);
  text-transform: capitalize;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 16px;
    border-radius: 4px;
    transition: all 0.25s ease;
    background-color: var(--body-bg);
    border: 2px solid var(--body-bg);
    &:hover {
      border-color: var(--color-primary);
    }
  }
  &.checked {
    .checkbox {
      border-color: var(--color-primary);
      background-color: var(--color-primary);
    }
  }
`;
