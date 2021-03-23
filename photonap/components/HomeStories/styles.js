import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const StoryWrap = styled.li`
	display: flex;
	flex-direction: column;
	${mediaQueries.medium} {
		flex-direction: row;
		&:nth-child(2n + 1) {
			flex-direction: row-reverse;
		}
		.intro-text {
			width: 64.44%;
		}
	}
`;

export const SotryImg = styled.div.attrs(() => ({
	className: "story-img",
}))`
	height: 78.4vw;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100% auto;
	${mediaQueries.medium} {
		flex-grow: 1;
		height: 71.8vw;
		width: 40.26vw;
	}
	${mediaQueries.large} {
		width: 57.6vw;
		height: 32.625rem;
		background-size: cover;
	}
`;

/*------------------------Story list-----------------------------*/
export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
`;
