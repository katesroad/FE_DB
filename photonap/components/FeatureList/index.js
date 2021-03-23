import * as React from "react";
import { FeatureWrap, Wrapper } from "./styles";

// the feature item for features page
const FeatureItem = ({ img, title, desc }) => {
	return (
		<FeatureWrap>
			<div className="img">
				<img src={img} alt={title} />
			</div>
			<h4 className="title">{title}</h4>
			<p className="desc"> {desc}</p>
		</FeatureWrap>
	);
};

export default function FeatureList({ features }) {
	return (
		<Wrapper>
			{features.map((feature) => (
				<FeatureItem {...feature} key={feature.title} />
			))}
		</Wrapper>
	);
}
