import * as React from "react";
import { FormControl, Label } from "components/lib";
import { IconCalenddar } from "components/Icon";
import { DatepickerCompo, Button, DateValue } from "./styles";
import "./datepicker.css";

const PickerButton = React.forwardRef(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref}>
    <IconCalenddar />
    <DateValue>{value || "Due date"}</DateValue>
  </Button>
));

const DatepickerPopper = ({ children }) => (
  <div className="datepicker-popper">{children}</div>
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
      dateFormat="MM/dd/yy"
      closeOnScroll={true}
      calendarContainer={DatepickerPopper}
      popperPlacement="top-right"
    />
  </FormControl>
));
