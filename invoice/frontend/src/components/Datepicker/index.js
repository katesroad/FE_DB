import * as React from "react";
import { FormControl, Label } from "components/lib";
import { IconCalenddar } from "components/Icon";
import {
  DatepickerCompo,
  DatepickerWrapper,
  Button,
  DateValue,
} from "./styles";
import "./datepicker.css";

const PickerButton = React.forwardRef(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref}>
    <IconCalenddar />
    {value ? <DateValue>{value}</DateValue> : null}
  </Button>
));

const DatepickerPopper = ({ children }) => (
  <DatepickerWrapper className="datepicker-popper">
    {children}
  </DatepickerWrapper>
);

// the Datepicker
export default React.memo(({ label, value, onChange, name }) => (
  <FormControl>
    <Label>{label}</Label>
    <DatepickerCompo
      name={name}
      selected={value}
      onChange={(e) => onChange(name, e)}
      customInput={<PickerButton />}
      dateFormat="dd MMM yyyy"
      closeOnScroll={true}
      calendarContainer={DatepickerPopper}
      popperPlacement="top-right"
    />
  </FormControl>
));
