import * as React from "react";
import { STORIES } from "constant/stories";
import StoryList from "components/StoryList";

export default function StoriesScreen() {
	return <StoryList stories={STORIES} />;
}
