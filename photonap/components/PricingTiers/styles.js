import { Content } from "components/lib";
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

/*--------------------------The plan list---------------------- */
export const PlanList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	${mediaQueries.large} {
		flex-direction: row;
		align-items: baseline;
		.plan-item {
			width: 33.333%;
		}
	}
`;

/*------------------------The plan item------------------- */

export const Plan = styled.li.attrs(() => ({
	className: "plan-item",
}))`
	position: relative;
	padding: 3.5rem 1.25rem 2.5rem 1.25rem;
	width: 100%;
	margin-bottom: 1.5rem;
	text-align: center;
	button {
		min-width: 10rem;
		text-transform: uppercase;
	}
	&.is-gray {
		background-color: #f5f5f5;
	}
	&.is-black {
		background-color: var(--black);
		.price,
		.title {
			color: var(--white);
		}
		p {
			color: var(--white);
			opacity: 0.6;
		}
		button {
			background-color: var(--white);
			color: var(--dark);
		}
		${mediaQueries.medium} {
			&:after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 0.375rem;
				height: 100%;
				background: linear-gradient(
					26.57deg,
					#ffc593 0%,
					#bc7198 43.29%,
					#5a77ff 83.33%
				);
			}
		}
		${mediaQueries.large} {
			padding-top: 5.28125rem;
			padding-bottom: 5.28125rem;
			border-left: 0;
			margin-left: 1.875rem;
			margin-right: 1.875rem;
			&:after {
				width: 100%;
				height: 0.375rem;
			}
		}
	}
	${mediaQueries.medium} {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		& > div {
			width: 50%;
		}
		flex-direction: row;
	}
	${mediaQueries.large} {
		flex-direction: column;
		& > div {
			width: 100%;
		}
	}
`;

export const PlanIntro = styled.div`
	padding-bottom: 2.1875rem;
	.title {
		padding-bottom: 0.8125rem;
		font-size: 1.5rem;
		text-transform: capitalize;
	}
	.intro {
		color: var(--dark);
		opacity: 0.6;
		max-width: 17.875rem;
		margin-left: auto;
		margin-right: auto;
	}
`;

export const PlanPrice = styled.div`
	padding-bottom: 2.5rem;
	.price {
		padding-bottom: 0.75rem;
		font-size: 2.5rem;
		letter-spacing: 0.25rem;
	}
	.bill-type {
		color: var(--dark);
		opacity: 0.6;
	}
`;

/*--------------------The pricing plan list-----------------------**/

export const Wrapper = styled(Content)`
	padding-top: calc(3rem + 4.2vw);
	padding-bottom: calc(3rem + 4.2vw);
	${mediaQueries.medium} {
		padding-top: 7rem;
		padding-bottom: 7rem;
	}
	${mediaQueries.xlarge} {
		padding-top: 7.5rem;
		padding-bottom: 10rem;
	}
`;

/*-------------------the bill type switch-----------------------------------*/

export const BillTypeWrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 2.5rem;
	text-transform: capitalize;
	${mediaQueries.medium} {
		padding-bottom: calc(2.5rem + 1vw);
	}
	${mediaQueries.xlarge} {
		padding-bottom: 3rem;
	}
`;

export const BillType = styled.strong`
	font-size: 1.125rem;
	color: var(--dark);
	opacity: 0.5;
	&.is-selected {
		opacity: 1;
	}
`;

export const Switch = styled.div.attrs(() => ({
	className: "button-switch",
}))`
	position: relative;
	margin-left: 2rem;
	margin-right: 2rem;
	width: 4rem;
	height: 2rem;
	padding: 0.25rem;
	border-radius: 1rem;
	background-color: #dfdfdf;
	cursor: pointer;
	&:after {
		content: "";
		display: block;
		position: absolute;
		left: 0.25rem;
		top: 0.25rem;
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 50%;
		background-color: var(--black);
		background-color: var(--black);
		transition: all 0.25s ease;
	}
	&.is-active {
		&:after {
			left: 2rem;
		}
	}
`;
