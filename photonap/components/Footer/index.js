import styled from "styled-components/macro";
import * as React from "react";
import Link from "next/link";
import { Content } from "components/lib";

export default function Footer() {
	return (
		<footer
			css={`
				padding-top: 56px;
				padding-bottom: 56px;
				background-color: var(--black);
				align-self: flex-end;
				width: 100%;
			`}
		>
			<Content></Content>
		</footer>
	);
}
