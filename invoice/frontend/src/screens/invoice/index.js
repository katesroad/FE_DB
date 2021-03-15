import * as React from "react";
import { useGetInvoice } from "hooks/invoice-hooks";
import { Link, useParams } from "react-router-dom";
import { Spinner, Error } from "components/lib";
import GobackBtn from "components/GobackBtn";
import InvoiceInfo from "./components/InvoiceInfo";
import StatusPanel from "./components/StatusPanel";
import Operations from "./components/Operations";
import Footer from "./components/Footer";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const { status, data: invoice, error } = useGetInvoice(id);
  React.useEffect(() => {
    const tag = invoice?.tag ?? "";
    document.title = `Fem Invoice#${tag}`;
    return () => (document.title = "Fem Invoice");
  }, [invoice]);
  return (
    <>
      <Link to="/">
        <GobackBtn />
      </Link>
      <StatusPanel status={status} invoice={invoice}>
        <Operations invoice={invoice} />
      </StatusPanel>
      {["loading", "idle"].includes(status) ? (
        <Spinner className="size-large" />
      ) : status === "error" ? (
        <Error>{JSON.stringify(error.message)}</Error>
      ) : (
        <>
          <InvoiceInfo {...invoice} />
          <Footer>
            <Operations invoice={invoice} />
          </Footer>
        </>
      )}
    </>
  );
}
