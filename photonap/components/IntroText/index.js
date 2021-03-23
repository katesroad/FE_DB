import styled from "styled-components/macro";
import * as React from "react";
import { Wrapper, Content, ColorfulLine } from "./styles";

export default function IntroText({ title, content, variant, ...props }) {
	return (
		<Wrapper
			css={`
				background: ${variant === "dark" ? "var(--black)" : "var(--white)"};
			`}
			{...props}
		>
			{variant === "dark" ? <ColorfulLine /> : null}
			<Content
				css={`
					color: ${variant === "dark" ? "var(--white)" : "var(--black)"};
				`}
			>
				<h2>{title}</h2>
				<p>{content}</p>
			</Content>
		</Wrapper>
	);
}
