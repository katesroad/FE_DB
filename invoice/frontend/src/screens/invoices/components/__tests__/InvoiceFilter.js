import * as React from "react";
import { render, screen } from "@testing-library/react";

test("<InvoiceFilter />", () => {
  const onSelect = jest.fn();
  const statusList = ["draft", "pending"];
  render(<InvoicesFilter statusList={statusList} onSelect={onSelect} />);
  expect(screen.getByText("dfrat"));
});
