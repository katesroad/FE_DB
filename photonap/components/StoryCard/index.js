import * as React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import Image from "next/image";
import ButtonArrow from "components/ButtonArrow";

const StoryCard = ({ createdAt, topic, author, name, ...props }) => (
	<li
		css={`
			position: relative;
			color: var(--white);
			background-color: rgba(0, 0, 0, 0.1);
		`}
	>
		<Image
			src={"/stories/mobile/" + name}
			layout="fill"
			alt={topic}
			css={`
				display: none;
			`}
		/>
		<div
			css={`
				position: absolute;
				width: 100%;
				bottom: 0;
				left: 0;
				padding: 1rem;
				background: linear-gradient(
					180deg,
					rgba(0, 0, 0, 0.0001) 0.27%,
					rgba(0, 0, 0, 0.661222) 100%
				);
				.read-story {
					width: 100%;
				}
			`}
		>
			<h6>{createdAt}</h6>
			<h4>{topic}</h4>
			<p>By {author}</p>
			<ButtonArrow className="read-story">
				<span>Read story</span>
			</ButtonArrow>
		</div>
	</li>
);
StoryCard.propTypes = {
	createdAt: PropTypes.string.isRequired,
	topic: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};
export default StoryCard;
