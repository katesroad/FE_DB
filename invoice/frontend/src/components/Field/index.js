import * as React from "react";
import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { Label, FormControl, FieldError, Input } from "./styles";

export const TextField = React.memo(({ label, children, name, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  const error = meta.touched && meta.error;
  return (
    <FormControl>
      <Label htmlFor={props.name}>{label || props.name}</Label>
      <Input
        {...field}
        {...props}
        id={name}
        name={name}
        variant={error ? "error" : ""}
      />
      <FieldError>
        <ErrorMessage name={name} />
      </FieldError>
      {children}
    </FormControl>
  );
});

TextField.defaultPropTypes = {
  type: "text",
  value: "",
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
