import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

/*-------------------the bill type switch-----------------------------------*/

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
			width: 29.9% !important;
			border-left: 0;
			margin-left: 2.875rem;
			margin-right: 2.875rem;
			transform: scale(1.1);
			&:after {
				display: none;
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
