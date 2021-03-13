import styled, { css } from "styled-components";
import { Field } from "formik";
import { red } from "styles/colors";

export const inputStyle = css`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  height: 48px;
  border: 1px solid var(--input-border-color);
  border-radius: 4px;
  font-size: 16px;
  color: var(--input-text-color);
  text-transform: capitalize;
  background-color: var(--input-background-color);
  font-weight: var(--font-weight-bold);
`;

export const inputStyleWithStatus = css`
  ${inputStyle}
  &:disabled {
    width: auto;
    border: 0;
    background-color: transparent;
  }
  &:focus {
    border-color: var(--color-primary);
  }
  &.error {
    border-color: ${red.normal}!important;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  align-self: flex-start;
  margin-bottom: 10px;
  display: block;
  color: var(--element-text-color);
  text-transform: capitalize;
`;

export const Input = styled(Field)`
  ${inputStyleWithStatus}
`;

export const FieldError = styled.small`
  margin-top: 8px;
  font-size: 80%;
  color: ${red.normal};
  &:empty {
    display: none;
  }
`;
