import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";
import PageHero from "components/PageHero";
import * as React from "react";
import FeatureItem from "components/FeatureItem";
import { features } from "constant/features";
import Head from "next/head";

const intro = {
  title: "features",
  content: `We make sure all of our features are designed to be loved by every
					aspiring and even professional photograpers who wanted to share their
					stories.`,
};
export default function FeaturesScreen() {
  return (
    <>
      <Head>
        <title>Photonap | Features</title>
      </Head>
      <PageHero
        {...intro}
        css={`
          .hero-img {
            background-image: url(/features/mobile/hero.jpg);
          }
          ${mediaQueries.medium} {
            .hero-img {
              background-image: url(/features/tablet/hero.jpg);
            }
          }
          ${mediaQueries.large} {
            .hero-img {
              background-image: url(/features/desktop/hero.jpg);
            }
          }
        `}
      />
      <Content>
        <ul
          css={`
            padding-top: 4rem;
            padding-bottom: 5.3125rem;
            li {
              padding-bottom: 3.125rem;
            }
            ${mediaQueries.medium} {
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              li {
                width: 50%;
                padding-bottom: calc(3.125rem + 4vw);
              }
            }
            ${mediaQueries.xlarge} {
              padding-top: 9.06rem;
              padding-bottom: 9.06rem;
              li {
                padding-bottom: calc(4.75rem + 1.7vw);
                &:nth-child(n + 4) {
                  padding-bottom: 0;
                }
              }
            }
            @media only screen and (min-width: 1440px) {
              padding-bottom: 6.18754m;
            }
          `}
        >
          {features.map((feature) => (
            <FeatureItem {...feature} key={feature.title} />
          ))}
        </ul>
      </Content>
    </>
  );
}
