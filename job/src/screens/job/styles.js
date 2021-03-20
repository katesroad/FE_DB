import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";
import { colors } from "styles/colors";
import { Button } from "components/lib";

const Card = styled.div`
	padding-left: 24px;
	padding-right: 24px;
	border-radius: 6px;
	background-color: var(--element-background);
	${mediaQueries.small} {
		padding-left: 32px;
		padding-right: 32px;
	}
	${mediaQueries.medium} {
		padding-left: 48px;
		padding-right: 48px;
	}
`;

export const FlexContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h4,
	strong {
		font-size: 20px;
		text-transform: capitalize;
	}
	a {
		color: inherit;
	}
	${mediaQueries.small} {
		flex-direction: row;
		align-items: center;
		.btn-link {
			max-width: 160px;
		}
	}
`;

// the button that is an a tag
export const LinkButton = styled(Button).attrs(() => ({
	target: "_blank",
	rel: "noreferrer",
	className: "btn-link",
	as: "a",
}))`
	flex-grow: 1;
	min-width: 140px;
	width: 100%;
	color: ${colors.p01}!important;
	${mediaQueries.small} {
		max-width: 160px;
	}
`;

export const OuterLink = styled("a").attrs(() => ({
	target: "_blank",
	rel: "noreferrer",
	className: "btn-link",
	as: "a",
}))`
	color: inherit;
`;

// the container to render markdown format content
export const MdContent = styled.div`
	h1,
	h2,
	h4,
	h5,
	h6,
	strong {
		display: block;
		padding-top: 2rem;
	  padding-bottom: 2rem;
		&:first-child {
			padding-top: 0;
		}
	}
	}
	p,
	li {
		line-height: 26px;
	}
	a {
		font-weight: bold;
		word-break: break-all;
	}
`;

/*--------------------------About company section---------------------------------*/
export const AboutCompany = styled.div`
	position: relative;
	max-width: 730px;
	margin-left: auto;
	margin-right: auto;
	border-radius: 6px;
	background-color: var(--element-background);

	${mediaQueries.small} {
		display: flex;
		height: 140px;
	}
`;

export const ComapnyDesc = styled(FlexContent)`
	padding-top: 49px;
	padding-bottom: 32px;
	align-items: center;
	h4 {
		margin-bottom: 13px;
	}
	.btn-link {
		margin-top: 27px;
		max-width: 140px;
	}
	${mediaQueries.small} {
		flex-grow: 1;
		padding: 42px;
		text-align: left;
		.job-owner {
			flex-grow: 1;
		}
		.btn-link {
			margin-top: 0;
		}
	}
`;

export const CompanyLogo = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 50px;
	height: 50px;
	border-radius: 15px;
	background-size: 25px auto;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #f2f2f2;
	${mediaQueries.small} {
		position: relative;
		left: 0;
		height: 140px;
		width: 140px;
		transform: translate(0, 0);
		border-radius: 0;
		background-size: 140px auto;
		border-radius: 6px 0 0 6px;
	}
`;

/*---------------------Job description section-----------------------------------------**/

export const JobDesc = styled(Card)`
	padding-top: 40px;
	padding-bottom: 32px;
	margin-top: 32px;
	margin-bottom: 32px;
	${mediaQueries.medium} {
		padding-top: 48px;
		padding-bottom: 48px;
	}
`;

export const JobContent = styled(FlexContent)`
	.job-type {
		margin-left: 16px;
	}
	.job-role {
		margin: 8px 0 12px 0;
		line-height: 1.625;
	}
	.job-location {
		font-size: 14px;
		font-weight: bold;
		color: var(--button-background);
	}
	.apply-now {
		margin-top: 32px;
	}
	${mediaQueries.small} {
		padding-bottom: 40px;
		.apply-now {
			margin-top: 0;
		}
	}
`;

/*----------------------------How to apply----------------------------------*/

export const HowToApply = styled(Card)`
	padding-top: 24px;
	padding-bottom: 24px;
	margin-bottom: 30vw;
	color: var(--title-color);
	h4 {
		margin-bottom: 28px;
	}
	${mediaQueries.small} {
		padding-top: 32px;
		padding-bottom: 32px;
	}
	${mediaQueries.medium} {
		margin-bottom: 200px;
		padding-top: 40px;
		padding-bottom: 40px;
	}
`;

/*----------------------Fixed footer--------------------*/

export const ApplyNow = styled(FlexContent)`
	width: 89%;
	max-width: 730px;
	margin-left: auto;
	margin-right: auto;
	.job-role {
		display: none;
	}
	${mediaQueries.small} {
		h4 {
			padding-bottom: 12px;
		}
		.job-role {
			display: block;
		}
	}
`;
