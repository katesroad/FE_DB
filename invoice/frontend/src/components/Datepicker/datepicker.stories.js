import * as React from "react";
import { Datepicker } from "./styles";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";

const Template = (args) => <Datepicker {...args} />;

export const NowDate = Template.bind({});

export default {
  title: "components/Datepicker",
  component: Datepicker,
};
