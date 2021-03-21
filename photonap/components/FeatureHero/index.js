import * as React from "react";
import { Wrapper, HeroImg } from "./styles";
import IntroText from "components/IntroText";

export default function FeatureHero() {
	const intro = {
		title: "features",
		content: `	We make sure all of our features are designed to be loved by every
					aspiring and even professional photograpers who wanted to share their
					stories.`,
	};
	return (
		<Wrapper>
			<HeroImg />
			<IntroText variant="dark" {...intro} className="intro-text" />
		</Wrapper>
	);
}
