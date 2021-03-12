import * as React from "react";
import { Formik, Form } from "formik";
import PaymentTerms from ".";

const Template = (args) => (
  <Formik
    {...args}
    render={({ values, setFieldValue }) => (
      <Form>
        <PaymentTerms value={values.paymentTerms} onChange={setFieldValue} />
      </Form>
    )}
  />
);

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  initialValues: {},
};

export default {
  title: "components/PaymentTerms",
  component: PaymentTerms,
};
