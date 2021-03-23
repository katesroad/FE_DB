import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const FeatureWrap = styled.li`
	max-width: 21.25rem;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	.img {
		width: 4.5rem;
		height: 4.5rem;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
	.title {
		margin-top: 3rem;
		margin-bottom: 1rem;
		color: var(--dark);
		font-size: 1.125rem;
	}
	.desc {
		line-height: 1.5625rem;
		color: var(--black);
		opacity: 0.6;
	}
`;

export const Wrapper = styled.ul`
	padding-top: 4rem;
	padding-bottom: 5.3125rem;
	li {
		padding-bottom: 3.125rem;
	}
	${mediaQueries.medium} {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		li {
			width: 50%;
			padding-bottom: calc(3.125rem + 4vw);
		}
	}
	${mediaQueries.xlarge} {
		padding-top: 9.06rem;
		padding-bottom: 9.06rem;
		li {
			padding-bottom: calc(4.75rem + 1.7vw);
			&:nth-child(n + 4) {
				padding-bottom: 0;
			}
		}
	}
	@media only screen and (min-width: 1440px) {
		padding-bottom: 6.18754m;
	}
`;
