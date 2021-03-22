import styled from "styled-components";
import { Content } from "components/lib";
import * as React from "react";
import * as mediaQueries from "styles/media-queries";
import PageHero from "components/PageHero";
import PricingPlans from "components/PricingTiers";

const intro = {
	title: "pricing",
	content:
		"Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
};

export default function PricingScreen() {
	return (
		<>
			<PageHero
				{...intro}
				css={`
					.hero-img {
						background-image: url(/pricing/mobile/hero.jpg);
					}
					${mediaQueries.medium} {
						.hero-img {
							background-image: url(/pricing/tablet/hero.jpg);
						}
					}
					${mediaQueries.large} {
						.hero-img {
							background-image: url(/pricing/desktop/hero.jpg);
						}
					}
				`}
			/>
			<PricingPlans />
		</>
	);
}
