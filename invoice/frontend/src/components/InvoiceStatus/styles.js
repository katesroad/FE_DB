import styled from "styled-components";
import { invoicesStatusColors } from "styles/colors";
import { variant } from "styled-system";
import { ButtonBase } from "components/lib";

export const StatusButton = styled(ButtonBase)(
  {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    width: "104px",
    height: "40px",
    borderRadius: "6px",
  },
  variant({
    variants: {
      pending: invoicesStatusColors.pending,
      paid: invoicesStatusColors.paid,
      draft: invoicesStatusColors.draft,
    },
  })
);

export const Dot = styled.b`
  margin-right: 4px;
  font-size: 8px;
`;
