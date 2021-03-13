import styled from "styled-components";
import ReactDatepicker from "react-datepicker";
import { inputStyle } from "components/lib/form";
require("react-datepicker/dist/react-datepicker.css");

export const DatepickerCompo = styled(ReactDatepicker)`
  ${inputStyle}
  display: flex;
  justify-content: space-betweem;
  align-items: center;
`;

export const Button = styled.span`
  ${inputStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DateValue = styled.span`
  margin-top: 2px;
  margin-left: 8px;
`;
