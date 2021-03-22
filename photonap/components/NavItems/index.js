import styeld from "styled-components/macro";
import * as React from "react";
import Link from "next/link";

export default function NavItems({ children, ...props }) {
  return (
    <ul
      css={`
        li {
          width: 100%;
          text-transform: uppercase;
        }
        a {
          display: block;
          width: 100%;
        }
        // the invite button
        button {
          width: 100%;
        }
      `}
      {...props}
    >
      <li>
        <Link href="/stories">stories</Link>
      </li>
      <li>
        <Link href="/features">features</Link>
      </li>
      <li>
        <Link href="/pricing">pricing</Link>
      </li>
      {/* to place the invite button for header */}
      {children}
    </ul>
  );
}
