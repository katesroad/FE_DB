import * as React from "react";
import InvoiceList from ".";
import { INVOICE_LIST } from "test/data";

const { id, ...invoice } = INVOICE_LIST[0];
const invoices = [
  { ...invoice, tag: id, id: Math.random(), status: "pending" },
  { ...invoice, tag: id, id: Math.random(), status: "paid" },
  { ...invoice, tag: id, id: Math.random(), status: "draft" },
];

const Template = (args) => <InvoiceList {...args} />;

export const WithoutData = Template.bind({});
WithoutData.args = {
  invoices: [],
};

export const WithData = Template.bind({});
WithData.args = {
  invoices: invoices,
};

export default {
  title: "components/InvoiceList",
  component: InvoiceList,
};
