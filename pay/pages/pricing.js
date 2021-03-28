import styled from 'styled-components/macro';
import * as mediaQueries from 'styles/media-queries';
import * as React from 'react';
import PricingPlans from 'components/PricingPlans';
import { Content } from 'components/lib';
import Head from 'next/head';

export default function PricingScreen() {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <Content>
        <h2
          css={`
            margin-bottom: 3rem;
            font-size: 2rem;
            line-height: 1.125;
            color: var(--c10);
            letter-spacing: -0.015rem;
            text-align: center;
            ${mediaQueries.medium} {
              margin-bottom: calc(2.5rem + 2.73w);
              font-size: 3rem;
              letter-spacing: -0.023rem;
            }
            ${mediaQueries.xlarge} {
              margin-bottom: 4.5rem;
            }
          `}>
          Pricing
        </h2>
        <PricingPlans />
      </Content>
    </>
  );
}
