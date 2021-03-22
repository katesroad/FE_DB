import styled from "styled-components/macro";
import { Content } from "components/lib";
import * as mediaQueries from "styles/media-queries";
import { Button } from "components/lib";
import * as React from "react";
import { BillType, Switch, Plan, PlanIntro, PlanPrice } from "./styles";
import { PRICING_PLAN } from "./pricing";

function PlanItem({ tier, variant, billType }) {
	return (
		<Plan className={variant === "black" ? "is-black" : "is-gray"}>
			<PlanIntro>
				<h4 className="title">{tier.name}</h4>
				<p className="intro">{tier.desc}</p>
			</PlanIntro>
			<PlanPrice>
				<h4 className="price">${tier.price[billType]}</h4>
				<span className="bill-type">
					{billType === "monthly" ? "per month" : "per year"}
				</span>
			</PlanPrice>
			<div>
				<Button>pick plan</Button>
			</div>
		</Plan>
	);
}

export default function PricingPlans() {
	const [billType, setBillType] = React.useState("monthly");
	const handleClick = () => {
		setBillType((billType) => (billType === "monthly" ? "yearly" : "monthly"));
		return false;
	};
	return (
		<Content
			css={`
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
			`}
		>
			<div
				css={`
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
				`}
			>
				<BillType className={billType === "monthly" ? "is-selected" : ""}>
					monthly
				</BillType>
				<Switch
					onClick={handleClick}
					className={billType === "yearly" ? "is-active" : ""}
				/>
				<BillType className={billType === "yearly" ? "is-selected" : ""}>
					yearly
				</BillType>
			</div>
			<ul
				css={`
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 100%;
					${mediaQueries.large} {
						flex-direction: row;
						.plan-item {
							width: 33.333%;
						}
					}
				`}
			>
				{PRICING_PLAN.map(({ tier, variant }) => (
					<PlanItem
						tier={tier}
						variant={variant}
						billType={billType}
						key={tier.name}
					/>
				))}
			</ul>
		</Content>
	);
}
