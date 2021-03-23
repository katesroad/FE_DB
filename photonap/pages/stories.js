import * as React from "react";
import Head from "next/head";
import { STORIES } from "constant/stories";
import StoryList from "components/StoryList";
import FeaturedStory from "components/FeaturedStory";

export default function StoriesScreen() {
	return (
		<>
			<Head>
				<title>Photonap | Stories</title>
			</Head>
			<FeaturedStory />
			<StoryList stories={STORIES} />
		</>
	);
}
