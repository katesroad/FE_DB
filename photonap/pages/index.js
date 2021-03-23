import styled from "styled-components";
import { STORIES } from "constant/stories";
import StoryList from "components/StoryList";
import FeatureList from "components/FeatureList";
import { features } from "constant/features";

const stories = STORIES.slice(0, 4);
const homeFeatures = features.slice(0, 3);

export default function Home() {
	return (
		<div
			css={`
				max-width: 1440px;
				margin-left: auto;
				margin-right: auto;
			`}
		>
			<StoryList stories={stories} />
			<FeatureList features={homeFeatures} />
		</div>
	);
}
