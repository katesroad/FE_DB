import styled from 'styled-components';
import * as mediaQueries from 'styles/media-queries';

/*-------------------The pricing plan item--------------------------*/
export const Plan = styled.li`
  margin-bottom: 3rem;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
  .plan-desc {
    margin: 0.8125rem auto 1.1875rem auto;
    display: none;
    font-size: 0.9375rem;
    line-height: 1.8666;
  }
  .plan-name {
    text-transform: capitalize;
    color: var(--c00);
    font-size: 1.5rem;
    line-height: 1.333rem;
  }
  .plan-price {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 3.5rem;
    line-height: 1.285714;
  }
  button {
    height: 3rem;
    width: 10.5rem;
    margin: 1.5rem auto 0 auto;
  }
  ${mediaQueries.medium} {
    margin-bottom: 0;
    width: calc(30.3333% - 0.625rem);
    &:nth-child(2n) {
      margin-left: 0.625rem;
      margin-right: 0.625rem;
    }
    .plan-desc {
      display: block;
    }
    .plan-price {
      margin: 1.25rem 0;
      font-size: 3rem;
      line-height: 1.5;
    }
  }
  ${mediaQueries.xlarge} {
    width: calc(33.3333% - 1.875rem);
  }
`;

export const FeaturesWrap = styled.div`
  padding: 1.5rem 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(54, 83, 107, 0.25);
  text-align: left;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--c10);
    opacity: 0.5;

    &.available {
      opacity: 1;
      svg {
        display: inline;
      }
    }
  }
  svg {
    display: none;
  }
  span {
    display: inline-block;
    line-height: 1.75;
  }
  .icon {
    min-width: 0.625rem;
  }
  .name {
    margin-left: 1.5rem;
    width: 5.687rem;
  }
`;

/*-----------------------The plan list---------------------------------*/

export const Wrapper = styled.ul`
  margin-bottom: 5rem;
  ${mediaQueries.medium} {
    margin-bottom: calc(5rem + 2.605vw);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
