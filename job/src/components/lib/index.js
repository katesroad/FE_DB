import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as mediaQueries from "styles/media-queries";
export * from "./typography";
export * from "./button";

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
`;

export const LinkCard = styled(Link)`
	${cardStyle}
`;
