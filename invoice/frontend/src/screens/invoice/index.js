import * as React from "react";
import Operations from "./components/Operations";
import { useParams } from "react-router-dom";
import invoices from "./data";
import { Header, StatusLabel } from "./styles";
import StatusValue from "components/InvoiceStatus";
import { useInvoice } from "hooks/invoice-hook";
import InvoiceInfo from "./components/InvoiceInfo";
import BillItems from "./components/BillItems";
import GrandTotal from "./components/GrandTotal";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const handleEdit = () => {};
  const handleMark = () => {};
  useInvoice(id);
  const [invoice, setInvoice] = React.useState(invoices[0]);
  return (
    <>
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          <StatusValue status={invoice.status} />
        </p>
        <p className="operations">
          <Operations
            id={invoice.id}
            handleEdit={handleEdit}
            handleMark={handleMark}
          />
        </p>
      </Header>
      <>
        <InvoiceInfo {...invoice} />
        <BillItems items={invoice.items} />
        <GrandTotal />
      </>
    </>
  );
}
