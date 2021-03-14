import * as React from "react";
import PropTypes from "prop-types";
import { useField, ErrorMessage } from "formik";
import { Label, FormControl, FieldError, Input } from "components/lib/form";

const TextField = React.memo(({ label, name, children, ...props }) => {
  const [field, meta] = useField({ name, ...props });
  const error = meta.touched && meta.error;
  return (
    <FormControl>
      <Label htmlFor={name}>{label}</Label>
      <Input
        {...field}
        {...props}
        id={name}
        name={name}
        className={error ? "error" : ""}
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

export default TextField;
