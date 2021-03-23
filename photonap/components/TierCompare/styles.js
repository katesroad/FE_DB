import { Content } from "components/lib";
import styled from "styled-components";
import * as mediaQueries from "styles/media-queries";

export const FeatureWrap = styled.div`
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
  .feature-name {
    font-size: 0.75rem;
    letter-spacing: 0.125rem;
    word-spacing: 0.25rem;
    text-transform: uppercase;
  }
  ${mediaQueries.medium} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0.875rem;
    border-bottom: 1px solid #dfdfdf;
  }
`;

export const FeatureTiers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 1rem;
  border-bottom: 1px solid #dfdfdf;
  span {
    display: inline-block;
    min-width: 2rem;
  }
  .tier-name {
    display: block;
    padding-bottom: 0.5rem;
    font-size: 0.75rem;
    color: var(--black);
    opacity: 0.5;
    text-transform: uppercase;
  }
  ${mediaQueries.medium} {
    width: 50%;
    padding-top: 0;
    border-bottom: none;
    .tier-name {
      display: none;
    }
    .icon-check {
      display: inline-block;
      width: 2rem;
      text-align: center;
      &.tier-basic {
        width: 2.875rem;
      }
      &.tier-business {
        width: 4.5rem;
      }
    }
  }
`;

export const Wrapper = styled(Content)`
  margin-bottom: 4rem;
  .title {
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
  .title--desktop {
    display: none;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding-bottom: 3.5rem;
  }
  .title--tablet {
    display: none;
  }
  .title--mobile {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--black);
    letter-spacing: 0.125rem;
    font-size: 0.75rem;
  }
  ${mediaQueries.medium} {
    .title--mobile {
      display: none;
    }
    .title--tablet {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 0.875rem;
      padding-right: 0.875rem;
      font-size: 0.75rem;
      .tier-types {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
      }
    }
  }
  ${mediaQueries.large} {
    .title--desktop {
      display: block;
      text-align: center;
    }
  }
`;
