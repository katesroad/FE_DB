import { render, screen } from "test/render-utils";
import InvoiceStatus from "../InvoiceStatus";

test("InvoiceStatus", () => {
  render(
    <div>
      <InvoiceStatus status="draft" />
      <InvoiceStatus status="pending" />
      <InvoiceStatus status="paid" />
    </div>
  );
  expect(screen.getByText(/draft/i)).toBeInTheDocument();
  expect(screen.getByText(/pending/i)).toBeInTheDocument();
  expect(screen.getByText(/paid/i)).toBeInTheDocument();
});
