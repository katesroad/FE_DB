import styled from "styled-components";
import { invoicesStatusColors, red } from "styles/colors";
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

const DotBase = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  margin-right: 4px;
  border-radius: 50%;
`;
export const StatusDot = styled(DotBase)(
  {},
  variant({
    variants: {
      pending: { bg: invoicesStatusColors.pending.color },
      paid: { bg: invoicesStatusColors.paid.color },
    },
  })
);
