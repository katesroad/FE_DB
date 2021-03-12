import * as React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Datepicker from ".";

const Template = ({ name, label, ...formik }) => (
  <Formik
    {...formik}
    render={({ values, setFieldValue }) => (
      <Form>
        <Datepicker
          name={name}
          label={label}
          value={values.paymentDue}
          onChange={setFieldValue}
        />
        <button type="submit">submit</button>
      </Form>
    )}
  ></Formik>
);

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  name: "paymentDue",
  label: "Due Date",
  initialValues: {
    paymentDue: new Date(),
  },
};

const FormSchema = Yup.object().shape({
  paymentDue: Yup.string().required("Payment due date is required."),
});
export const WithoutDefaultValue = Template.bind({});
WithoutDefaultValue.args = {
  name: "paymentDue",
  label: "Due Date",
  initialValues: {
    paymentDue: "",
  },
  validationSchema: FormSchema,
};

export default {
  title: "components/Datepicker",
  component: Datepicker,
};
