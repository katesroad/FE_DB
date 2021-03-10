import * as React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import UserAddress from "components/UserAddress";
import { FormControl, Label, Input } from "components/lib";

function InvoiceForm({ invoice }) {
  return (
    <Formik initialValues={invoice} onSubmit={(values) => console.log(values)}>
      <Form>
        <UserAddress type="senderAddress" address={{}} />
        <UserAddress type="clientAddress" address={{}}>
          <FormControl>
            <Label>Client Name</Label>
            <Input name="clientEmail" />
          </FormControl>
          <FormControl>
            <Label>Client Email</Label>
            <Input name="clientEmail" />
          </FormControl>
        </UserAddress>
      </Form>
    </Formik>
  );
}

InvoiceForm.propTypes = {
  invoice: PropTypes.object,
};
export default InvoiceForm;
