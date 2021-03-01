import InvoiceStatus from "../InvoiceStatus";
import { screen, render } from "test/render-utils";

test("invoice status button", () => {
  const pending = "pending";
  const paid = "paid";
  const draft = "draft";
  render(
    <>
      <InvoiceStatus status={pending} />
      <InvoiceStatus status={paid} />
      <InvoiceStatus status={draft} />
    </>
  );
  expect(screen.getByText(/pending/i)).toBeInTheDocument();
  expect(screen.getByText(/paid/i)).toBeInTheDocument();
  expect(screen.getByText(/draft/i)).toBeInTheDocument();
});
