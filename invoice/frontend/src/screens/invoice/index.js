// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { useGetInvoice } from "hooks/invoice.hooks";
import { Link, useParams } from "react-router-dom";
import { Spinner, Error, Card } from "components/lib";
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
    if (invoice?.tag) {
      document.title = `Fem Invoice#${invoice.tag}`;
    }
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
      {status === "success" ? (
        <>
          <InvoiceInfo {...invoice} />
          <Footer>
            <Operations invoice={invoice} />
          </Footer>
        </>
      ) : (
        <Card
          css={`
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 24px;
            height: 42vh;
            .error {
              font-size: 200%;
            }
          `}
        >
          {status === "error" ? (
            <Error className="error">{error?.message}</Error>
          ) : (
            <Spinner className="size-large" />
          )}
        </Card>
      )}
    </>
  );
}
