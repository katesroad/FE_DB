import { Button } from "components/lib";
import * as React from "react";
import {
  BillType,
  Switch,
  Plan,
  PlanIntro,
  PlanPrice,
  Wrapper,
  BillTypeWrap,
  PlanList,
} from "./styles";
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
    <Wrapper>
      <BillTypeWrap>
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
      </BillTypeWrap>
      <PlanList>
        {PRICING_PLAN.map(({ tier, variant }) => (
          <PlanItem
            tier={tier}
            variant={variant}
            billType={billType}
            key={tier.name}
          />
        ))}
      </PlanList>
    </Wrapper>
  );
}
