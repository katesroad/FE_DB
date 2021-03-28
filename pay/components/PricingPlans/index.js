import * as React from 'react';
import PropTypes from 'prop-types';
import { Plan, FeaturesWrap, Wrapper } from './styles';
import { OUR_FEATURES, PRICING_PLANS } from 'constant/pricing';
import { BtnSecondary } from 'components/lib';

const CheckIcon = () => (
  <svg width="14" height="11" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 5.718L4.893 9.56l8.107-8"
      stroke="#BA4270"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

function PricingPlan({ name, price, features, desc, ...props }) {
  return (
    <Plan {...props}>
      <h6 className="plan-name">{name}</h6>
      <h4 className="plan-price">$ {price}</h4>
      <p className="plan-desc">{desc}</p>
      <FeaturesWrap>
        {OUR_FEATURES.map((feature) => {
          const isAvailable = features.includes(feature);
          return (
            <p key={feature} className={isAvailable ? 'available' : ''}>
              <span className="icon">{isAvailable ? <CheckIcon /> : null}</span>
              <span className="name">{feature}</span>
            </p>
          );
        })}
      </FeaturesWrap>
      <BtnSecondary>Request Access</BtnSecondary>
    </Plan>
  );
}
PricingPlan.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  desc: PropTypes.string.isRequired
};

export default function PricingPlans() {
  return (
    <Wrapper>
      {PRICING_PLANS.map((plan) => (
        <PricingPlan key={plan.name} {...plan} />
      ))}
    </Wrapper>
  );
}
