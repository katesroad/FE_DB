import * as React from "react";
import PropTypes from "prop-types";
import { IconCheck } from "components/Icons";
import { FEATURE_PRICING } from "./features";
import { Wrapper, FeatureWrap, FeatureTiers, FeatureList } from "./styles";

const FeatureIntro = ({ name, tiers }) => (
  <FeatureWrap>
    <h4 className="feature-name">{name}</h4>
    <FeatureTiers>
      {tiers.map(({ name, covered }) => (
        <p key={name}>
          <span className="tier-name">{name}</span>
          {covered ? (
            <span className={`icon-check tier-${name}`}>
              <IconCheck />
            </span>
          ) : (
            <span />
          )}
        </p>
      ))}
    </FeatureTiers>
  </FeatureWrap>
);
FeatureIntro.propTypes = {
  name: PropTypes.string.isRequired,
  tiers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOf(["basic", "pro", "business"]).isRequired,
      covered: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

// pricing tier compare
export default function TireCompare() {
  return (
    <Wrapper>
      <h2 className="title title--desktop">Compare</h2>
      <div className="title title--tablet">
        <span>The features</span>
        <div className="tier-types">
          <span>basic</span>
          <span>pro</span>
          <span>business</span>
        </div>
      </div>
      <h4 className="title title--mobile"> The features</h4>
      <FeatureList>
        {FEATURE_PRICING.map((feature) => (
          <li key={feature.name}>
            <FeatureIntro key={feature.name} {...feature} />
          </li>
        ))}
      </FeatureList>
    </Wrapper>
  );
}
