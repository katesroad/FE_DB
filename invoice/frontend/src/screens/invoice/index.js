import * as React from "react";
import { useParams } from "react-router-dom";

// Invoice detail page
export default function InvoiceScreen() {
  const { id } = useParams();
  console.log(`invoice id:#${id}`);
  return <div></div>;
}
