import * as React from "react";
import InvoiceStatus from "./InvoiceStatus";

const Template = (args) => <InvoiceStatus {...args} />;

export const PaidStatus = Template.bind({});
PaidStatus.args = {
  status: "paid",
};

export const PendingStatus = Template.bind({});
PendingStatus.args = {
  status: "pending",
};

export const DraftStatus = Template.bind({});
DraftStatus.args = {
  status: "draft",
};

export default {
  title: "components/InvoiceStatus",
  component: InvoiceStatus,
};
