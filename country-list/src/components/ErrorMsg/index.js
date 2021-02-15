// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { ThemedElement } from "components/lib";

export default function ErrorMsg({ error, children }) {
	return (
		<ThemedElement
			css={`
				padding: 2rem;
			`}
		>
			{error ? (
				<p
					css={`
						max-width: 320px;
						margin: 0 auto;
					`}
				>
					{JSON.stringify(error)}
				</p>
			) : null}
			{children}
		</ThemedElement>
	);
}
