import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.div`
	position: relative;
	padding: 4.5rem calc(12px + 3.2vw);
	${mediaQueries.medium} {
		padding-top: 7.8125rem;
		display: flex;
		justify-content: center;
	}
`;

export const ColorfulLine = styled.div`
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
`;

export const Content = styled.div`
	max-width: 397px;
	h2 {
		padding-bottom: 1rem;
		font-size: 2rem;
		letter-spacing: 0.208rem;
		text-transform: uppercase;
		${mediaQueries.medium} {
			padding-bottom: 1.3125rem;
		}
	}
	p {
		font-size: 0.9375rem;
		line-height: 1.667;
		color: var(--dark);
		opacity: 0.6;
		${mediaQueries.medium} {
			font-size: 1.25rem;
		}
	}
`;
