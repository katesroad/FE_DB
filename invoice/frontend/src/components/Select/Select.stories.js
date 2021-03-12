import * as React from "react";
import { Formik, Form } from "formik";
import Select, { Option } from ".";
import * as Yup from "yup";

const name = "paymentTerms";
const label = "payment terms";

const terms = [
  { value: "1", label: "Net 1 Day" },
  { value: "7", label: "Net 7 Days" },
  { value: "14", label: "Net 14 Days" },
  { value: "30", label: "Net 30 Days" },
];

const Template = ({ name, label, errors, ...props }) => (
  <Formik
    {...props}
    onSubmit={(props) => {
      alert(JSON.stringify({ props, errors }));
    }}
    render={({ values }) => (
      <Form>
        <Select name={name} value={values[name]} label={label}>
          {terms.map((term) => (
            <Option key={term.label} value={term.value}>
              <span>{term.label}</span>
            </Option>
          ))}
        </Select>
        <button type="submit">submit</button>
      </Form>
    )}
  />
);

const FormSchema = Yup.object().shape({
  [name]: Yup.string().required("Payment terms is required"),
});
export const NoValue = Template.bind({});
NoValue.args = {
  initialValues: { paymentTerms: "" },
  validationSchema: FormSchema,
  name,
  label,
};

export const ProvideValue = Template.bind({});
ProvideValue.args = {
  initialValues: { paymentTerms: "30" },
  name,
  label,
};

export default {
  title: "components/Select",
  component: Select,
};
