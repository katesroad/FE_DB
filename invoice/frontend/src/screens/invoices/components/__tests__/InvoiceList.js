import { render, screen } from "test/render-utils";
import InvoiceList from "../InvoiceList";
import { INVOICE_LIST } from "test/data";

test("render <InvoiceList /> with data", () => {
  const { id, status, clientName, paymentDue, total } = INVOICE_LIST[0];
  const invoice = {
    id: Math.random(),
    tag: id,
    clientName,
    paymentDue,
    total,
    status,
  };
  render(
    <>
      <InvoiceList invoices={[invoice]} />
    </>
  );
  expect(screen.getByText(invoice.tag)).toBeInTheDocument();
  expect(screen.getByText(invoice.total)).toBeInTheDocument();
  expect(screen.getByText(invoice.status)).toBeInTheDocument();
  expect(screen.getByText(invoice.clientName)).toBeInTheDocument();
  expect(screen.getByText("Due " + invoice.paymentDue)).toBeInTheDocument();
});

test("render <InvoiceList /> without data", () => {
  render(
    <>
      <InvoiceList invoices={[]} />
    </>
  );
  expect(screen.getByText(/There is nothing here/i)).toBeInTheDocument();
});
