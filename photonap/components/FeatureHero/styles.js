import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	${mediaQueries.medium} {
		flex-direction: row-reverse;
		.intro-text {
			width: 59.74vw;
		}
	}
	${mediaQueries.large} {
		.intro-text {
			padding-top: 0 !important;
			padding-bottom: 0 !important;
			display: flex;
			align-items: center;
			.content {
				max-width: 24.1875rem;
			}
		}
	}
`;

export const HeroImg = styled.div`
	height: 78.4vw;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-image: url(/features/mobile/hero.jpg);
	${mediaQueries.medium} {
		flex-grow: 1;
		height: 63.8vw;
		width: 40.26vw;
		background-image: url(/features/tablet/hero.jpg);
	}
	${mediaQueries.large} {
		width: 57.6vw;
		height: 30.625rem;
		background-image: url(/features/desktop/hero.jpg);
		background-size: cover;
	}
`;
