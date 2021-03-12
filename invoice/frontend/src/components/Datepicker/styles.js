import styled from "styled-components";
import ReactDatepicker from "react-datepicker";
import { inputStyle } from "components/lib/form";
import { buttonStyle } from "components/lib/button";
require("react-datepicker/dist/react-datepicker.css");

export const DatepickerCompo = styled(ReactDatepicker)`
  ${inputStyle}
  max-width: 100px;
`;

export const Button = styled.span`
  ${buttonStyle}
  display: block;
`;

export const DateValue = styled.span`
  margin-top: 2px;
  margin-left: 8px;
`;
