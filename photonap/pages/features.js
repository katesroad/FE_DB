import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";
import PageHero from "components/PageHero";
import * as React from "react";
import { features } from "constant/features";
import Head from "next/head";
import FeatureList from "components/FeatureList";

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
				<FeatureList features={features} />
			</Content>
		</>
	);
}
