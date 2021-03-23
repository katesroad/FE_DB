import * as React from "react";
import { STORIES } from "constant/stories";
import StoryList from "components/StoryList";
import FeaturedStory from "components/FeaturedStory";

export default function StoriesScreen() {
	return (
		<>
			<FeaturedStory />
			<StoryList stories={STORIES} />
		</>
	);
}
