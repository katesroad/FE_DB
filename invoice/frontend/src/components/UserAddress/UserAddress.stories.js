import * as React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import UserAddress from ".";

const Template = ({ type, ...props }) => (
  <Formik
    {...props}
    render={({ values }) => (
      <Form>
        <UserAddress type={type} address={values[type]} />
        <button type="submit">submit</button>
      </Form>
    )}
  ></Formik>
);

export const NotRequired = Template.bind({});
NotRequired.args = {
  initialValues: {
    clientAddress: {
      street: "sender address",
      city: "sender city",
      postcode: "sender postcode",
      country: "sender country",
    },
  },
  type: "clientAddress",
};

const AddressSchema = Yup.object().shape({
  street: Yup.string()
    .min(2, "Street address is too short.")
    .max(50, "Street address is too long.")
    .required("Street address is required."),
  city: Yup.string()
    .min(2, "City is too short.")
    .max(50, "City is too long.")
    .required("City is required."),
  postcode: Yup.string()
    .min(2, "Postcode is too short.")
    .max(50, "Postcode is too long.")
    .required("Postcode is required."),
  country: Yup.string()
    .min(2, "Country is too short.")
    .max(50, "Country is too long.")
    .required("Country is required."),
});
export const Required = Template.bind({});
Required.args = {
  initialValues: {
    senderAddress: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
  },
  type: "senderAddress",
  validationSchema: Yup.object().shape({
    senderAddress: AddressSchema,
  }),
};

export default {
  title: "components/UserAddress",
  component: UserAddress,
};
