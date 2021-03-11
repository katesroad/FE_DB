import styled, { css } from "styled-components";
import { Field } from "formik";
import { variant } from "styled-system";
import { red } from "styles/colors";

export const inputStyles = css`
  padding: 8px 16px;
  height: 48px;
  border: 1px solid;
  border-color: var(--input-border-color);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  color: var(--input-text-color);
  background-color: var(--input-background-color);
  &:disabled {
    width: auto;
    border: 0;
    background-color: transparent;
  }
  &:focus {
    border: 1px solid var(--color-primary);
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
`;

export const InputBase = styled(Field)`
  width: 100%;
  ${inputStyles}
`;

export const Input = styled(InputBase)(
  {},
  variant({
    variants: {
      error: {
        border: `1px solid ${red.normal}`,
      },
    },
  })
);

export const FieldError = styled.small`
  margin-top: 8px;
  font-size: 80%;
  color: ${red.normal};
  &:empty {
    display: none;
  }
`;
