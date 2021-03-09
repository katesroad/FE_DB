import * as React from "react";

export function Spinner({ children }) {
  return <span>{children ? children : "loading..."}</span>;
}
