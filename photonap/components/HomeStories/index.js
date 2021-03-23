import * as React from "react";
import styled from "styled-components/macro";
import * as mediaQueries from "styles/media-queries";
import IntroText from "components/IntroText";
import { StoryWrap, SotryImg, Wrapper } from "./styles";
import { stories } from "./stories";
import ButtonArrow from "components/ButtonArrow";

const Story = ({ title, content, variant, name }) => {
	const intro = { title, content, variant };
	return (
		<StoryWrap>
			<SotryImg
				css={`
					backgrouhd-size: cover;
					background-image: url(/home/mobile/${name});
					${mediaQueries.medium} {
						background-image: url(/home/tablet/${name});
						background-position: top center;
					}
					${mediaQueries.large} {
						background-image: url(/home/desktop/${name});
					}
				`}
			/>
			<IntroText {...intro} className="intro-text">
				<ButtonArrow
					css={`
						margin-top: 1.4375rem;
						color: ${variant === "dark" ? "var(--white)" : "var(--black)"};
						svg path {
							stroke: ${variant === "dark"
								? "var(--white)"
								: "var(--black)"}!important;
						}
						${mediaQueries.medium} {
							margin-top: 3rem;
						}
					`}
				>
					<span>View the story</span>
				</ButtonArrow>
			</IntroText>
		</StoryWrap>
	);
};

export default function HomeStories() {
	return (
		<Wrapper>
			{stories.map((story) => (
				<Story {...story} key={story.title} />
			))}
		</Wrapper>
	);
}
