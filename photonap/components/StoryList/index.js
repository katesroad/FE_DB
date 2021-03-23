import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import ButtonArrow from "components/ButtonArrow";
import { StoryWrap, StoryIntro, Wrapper } from "./styles";

const Story = ({ createdAt, topic, author, name }) => (
	<StoryWrap>
		<Image src={"/stories/desktop/" + name} layout="fill" alt={topic} />
		<StoryIntro>
			<h6 className="created-at">{createdAt}</h6>
			<h4 className="topic">{topic}</h4>
			<p className="author">By {author}</p>
			<p className="gray-line"></p>
			<ButtonArrow className="read-story">
				<span>Read story</span>
			</ButtonArrow>
		</StoryIntro>
	</StoryWrap>
);
Story.propTypes = {
	createdAt: PropTypes.string.isRequired,
	topic: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default function StoryList({ stories }) {
	return (
		<Wrapper>
			{stories.map((story) => (
				<Story {...story} key={story.name + story.createdAt} />
			))}
		</Wrapper>
	);
}

StoryList.propTypes = {
	stories: PropTypes.arrayOf(
		PropTypes.shape({
			createdAt: PropTypes.string.isRequired,
			topic: PropTypes.string.isRequired,
			author: PropTypes.string,
			name: PropTypes.string.isRequired, // the picture
		})
	),
};
