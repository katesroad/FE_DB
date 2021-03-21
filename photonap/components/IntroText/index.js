import styled from "styled-components/macro";
import * as React from "react";
import * as mediaQueries from "styles/media-queries";

export default function IntroText({ title, content, variant, ...props }) {
	return (
		<div
			css={`
				position: relative;
				padding: 4.5rem calc(12px + 3.2vw);
				background: ${variant === "dark" ? "var(--black)" : "var(--white)"};
				${mediaQueries.medium} {
					padding-top: 10.8125rem;
				}
				h2 {
					padding-bottom: 1rem;
					font-size: 2.5rem;
					letter-spacing: 0.208rem;
					text-transform: uppercase;
					color: ${variant === "dark" ? "var(--white)" : "var(--black)"};
					${mediaQueries.medium} {
						margin-bottom: 1.3125rem;
					}
				}
				p {
					font-size: 0.9375rem;
					line-height: 1.5625rem;
					color: var(--gray);
					word-break: break-all;
				}
			`}
			{...props}
		>
			{variant === "dark" ? (
				<div
					className="line"
					css={`
						position: absolute;
						left: calc(12px + 3.22vw);
						top: 0;
						height: 0.375rem;
						width: 34vw;
						background: linear-gradient(
							26.57deg,
							#ffc593 0%,
							#bc7198 43.29%,
							#5a77ff 83.33%
						);
						${mediaQueries.medium} {
							left: 0;
							top: 10.8125rem;
							height: 8.75rem;
							width: 0.375rem;
						}
					`}
				></div>
			) : null}
			<div className="content">
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
}
