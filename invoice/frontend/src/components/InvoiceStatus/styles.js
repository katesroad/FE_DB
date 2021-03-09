import styled from "styled-components";
import { invoicesStatusColors } from "styles/colors";
import { variant } from "styled-system";

export const StatusBase = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94px;
  height: 40px;
  border-radius: 6px;
  font-weight: var(--font-weight-normal);
  background-color: var(--button-background-color);
  color: var(--button-text-color);
  text-transform: capitalize;
`;

export const Status = styled(StatusBase)(
  {},
  variant({
    variants: {
      pending: invoicesStatusColors.pending,
      paid: invoicesStatusColors.paid,
    },
  })
);

export const Dot = styled.b`
  margin-right: 4px;
  font-size: 10px;
`;
