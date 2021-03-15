import * as React from "react";
// eslint-disable-next-line
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import { useInvoices } from "hooks/useGetInvoices";
import SuspenseErrorBoundary, {
  ErrorFallback,
} from "components/SuspenseBoundary";
import InvoiceList from "./components/InvoiceList";
import InvoiceStats from "./components/InvoiceStats";
import InvoicesFilter from "./components/InvoicesFilter";

const CreateInvoice = React.lazy(() => import("./components/CreateInvoice"));
// Invoice detail page
export default function InvoicesScreen() {
  const [statusList, setStatusList] = React.useState([]);
  const onSelect = (status) => {
    const statusSet = new Set(statusList);
    if (statusSet.has(status)) {
      statusSet.delete(status);
    } else statusSet.add(status);
    setStatusList([...statusSet]);
  };
  const { status, data: invoices } = useInvoices(statusList.join(","));
  return (
    <>
      {/* page header */}
      <div
        css={`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
          margin-bottom: 32px;
          transition: all 0.25 ease;
          ${mediaQueries.medium} {
            margin-top: 56px;
            margin-bottom: 56px;
          }
          ${mediaQueries.medium} {
            margin-top: 72px;
            margin-bottom: 65px;
          }
        `}
      >
        <InvoiceStats status={status} invoices={invoices} />
        <div
          css={`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          {/* invoice status filter */}
          <InvoicesFilter statusList={statusList} onSelect={onSelect} />
          {/* new invoice button and the modal triggered by click create button */}
          <SuspenseErrorBoundary FallbackComponent={ErrorFallback} key={status}>
            <CreateInvoice />
          </SuspenseErrorBoundary>
        </div>
      </div>
      {/* invoice list */}
      <InvoiceList status={status} invoices={invoices} />
    </>
  );
}
