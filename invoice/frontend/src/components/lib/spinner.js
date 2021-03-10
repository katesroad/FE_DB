import * as React from "react";

export function Spinner({ children, ...props }) {
  return <span {...props}>{children ? children : "Loading..."}</span>;
}
