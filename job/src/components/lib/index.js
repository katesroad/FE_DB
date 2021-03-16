import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as mediaQueries from "styles/media-queries";
export * from "./typography";
export * from "./button";
export * from "./spinner";

export const cardStyle = css`
	padding: 32px;
	border-radius: 6px;
	color: inherit;
	background: var(--element-background);
`;
export const Card = styled.div`
	${cardStyle}
`;

export const Content = styled.div`
	padding-left: 12px;
	padding-right: 12px;
	${mediaQueries.iphone} {
		padding-left: 20px;
		padding-right: 20px;
	}
	${mediaQueries.small} {
		padding-left: calc(30px + 1vw);
		padding-right: calc(30px + 1vw);
	}
	${mediaQueries.medium} {
		padding-left: calc(39px + 1vw);
		padding-right: calc(39px + 1vw);
	}
	${mediaQueries.large} {
		width: 1100px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 0;
		padding-right: 0;
	}
`;

export const LinkCard = styled(Link)`
	${cardStyle}
`;
