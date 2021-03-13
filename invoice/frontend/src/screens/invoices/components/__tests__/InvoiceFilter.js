import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InvoicesFilter from "screens/invoices/components/InvoicesFilter";

test("<InvoiceFilter />", () => {
  const onSelect = jest.fn();
  const statusList = ["draft"];
  render(<InvoicesFilter statusList={statusList} onSelect={onSelect} />);
  expect(screen.getByLabelText("draft")).toHaveTextContent("draft");
  expect(screen.getByLabelText("draft")).toHaveClass("checked");
  userEvent.click(screen.getByLabelText("paid"));
  expect(onSelect).toBeCalledWith("paid");
});
