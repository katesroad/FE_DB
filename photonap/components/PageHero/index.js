import * as React from "react";
import { Wrapper, HeroImg } from "./styles";
import IntroText from "components/IntroText";

export default function PageHero({ title, content, ...props }) {
	const intro = { title, content };
	return (
		<Wrapper {...props}>
			<HeroImg />
			<IntroText variant="dark" {...intro} className="intro-text" />
		</Wrapper>
	);
}
