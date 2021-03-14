import * as React from "react";
import { FormControl, Label, FieldError } from "components/lib/form";
import { useField, ErrorMessage } from "formik";
import { IconCalenddar } from "components/Icon";
import { DatepickerCompo, Button, DateValue } from "./styles";
import "./datepicker.css";

const PickerButton = React.forwardRef(({ value, onClick }, ref) => (
  <Button onClick={onClick} ref={ref}>
    <DateValue>{value || "Due date"}</DateValue>
    <IconCalenddar />
  </Button>
));

const DatepickerPopper = ({ children }) => (
  <div className="datepicker-popper">{children}</div>
);

// the Datepicker
export default React.memo(({ label, value, onChange, name }) => {
  const [, meta] = useField({ name, value });
  const error = meta.touched && meta.error;
  return (
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
        variant={error ? "error" : ""}
      />
      <FieldError>
        <ErrorMessage name={name} />
      </FieldError>
    </FormControl>
  );
});
