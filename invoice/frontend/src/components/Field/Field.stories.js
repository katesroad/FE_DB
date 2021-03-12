import * as React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextField from ".";

const Template = ({ name, label, type, ...formik }) => (
  <Formik {...formik}>
    <Form>
      <TextField name={name} label={label} type={type} />
      <button type="submit">submit</button>
    </Form>
  </Formik>
);

export const NotRequiredField = Template.bind({});
NotRequiredField.args = {
  name: "street",
  label: "street",
  type: "text",
  initialValues: {
    street: "Liken Roadd",
  },
};

const FormSchema = Yup.object().shape({
  street: Yup.string().required("Street is required."),
});

export const RequiredField = Template.bind({});
RequiredField.args = {
  name: "street",
  label: "street",
  initialValues: {
    street: "",
  },
  validationSchema: FormSchema,
};

export default {
  title: "components/TextField",
  component: TextField,
};
