import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import { Content } from "components/lib";
import FeatureHero from "components/FeatureHero";
import * as React from "react";
import FeatureItem from "components/FeatureItem";
import { features } from "constant/features";
import ButtonArrow from "components/ButtonArrow";

export default function FeaturesScreen() {
	return (
		<>
			<FeatureHero />
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
							justify-conent: space-between;
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
			<div
				css={`
					padding-top: 4rem;
					padding-bottom: 4rem;
					color: var(--white);
					background-repeat: no-repeat;
					background-size: cover;
					background-color: #fff;
					background-image: url(/shared/mobile/bg-beta.jpg);
					.title {
						margin-bottom: 1.25rem;
						font-size: 2rem;
						line-height: 2.5rem;
						text-transform: uppercase;
						letter-spacing: 0.20625rem;
					}
					.btn {
						font-size: 0.75rem;
						span {
							margin-right: 1rem;
						}
					}
				`}
			>
				<Content
					css={`
						${mediaQueries.medium} {
							display: flex;
							justify-content: space-between;
							align-items: center;
						}
					`}
				>
					<h2 className="title">
						We're in beta.
						<br /> get your invitation
						<br /> today!
					</h2>
					<ButtonArrow className="btn">
						<span>GET INVITED</span>
					</ButtonArrow>
				</Content>
			</div>
		</>
	);
}