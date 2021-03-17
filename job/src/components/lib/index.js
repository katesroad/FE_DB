import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import * as mediaQueries from "styles/media-queries";

export * from "./typography";
export * from "./button";
export * from "./modal";
// export * from "./spinner";

export const cardStyle = css`
	padding: 24px;
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
		width: 89%;
		padding-left: 0;
		padding-right: 0;
		margin-left: auto;
		margin-right: auto;
	}
	${mediaQueries.xlarge} {
		max-width: 1100px;
	}
`;

export const LinkCard = styled(Link)`
	${cardStyle}
`;
