import * as React from "react";
import { Spinner } from "components/lib";
import Operations from "./components/Operations";
import { useParams } from "react-router-dom";
import StatusValue from "components/InvoiceStatus";
import InvoiceInfo from "./components/InvoiceInfo";
import InvoiceBillItems from "./components/InvoiceBillItems";
import { useInvoice } from "hooks/invoice-hooks";
import { Header, StatusLabel, Wrapper, Footer } from "./styles";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  const { data: invoice, status, error } = useInvoice(id);
  return (
    <>
      {/* the page header */}
      <Header>
        <p className="status">
          <StatusLabel>Status</StatusLabel>
          {/* add loading spinner when loading invoice data */}
          {status === "loading" ? (
            <Spinner />
          ) : status === "success" ? (
            <StatusValue status={invoice?.status} />
          ) : null}
        </p>
        {/* show opeations when invoice has been loaded */}
        {status === "success" ? (
          <p className="operations tablet">
            <Operations {...invoice} />
          </p>
        ) : null}
      </Header>
      {/* the page main content */}
      <>
        {status === "loading" ? (
          <Spinner />
        ) : status === "success" ? (
          <>
            <Wrapper>
              <InvoiceInfo {...invoice} />
              <InvoiceBillItems items={invoice?.items} total={invoice?.total} />
            </Wrapper>
            <Footer>
              <Operations {...invoice} />
            </Footer>
          </>
        ) : status === "error" ? (
          <Wrapper>{error.message}</Wrapper>
        ) : null}
      </>
    </>
  );
}
