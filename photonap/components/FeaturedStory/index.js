import styled from "styled-components/macro";
import { Content } from "components/lib";
import { story } from "./intro";
import {
  Wrapper,
  HeroImg,
  StoryIntro,
  IntroTitle,
  IntroContent,
  IntroStamp,
} from "./styles";
import ButtonArrow from "components/ButtonArrow";

export default function FeaturedStory() {
  return (
    <Wrapper>
      <HeroImg />
      <StoryIntro>
        <IntroTitle>
          <h6 className="sub-title">last month's featured story</h6>
          <h2>{story.topic}</h2>
        </IntroTitle>
        <IntroStamp>
          <span className="date">{story.createdAt}</span>
          <span className="author"> by {story.author}</span>
        </IntroStamp>
        <IntroContent>{story.content}</IntroContent>
        <ButtonArrow>
          <span
            css={`
              margin-right: 1rem;
            `}
          >
            read the story
          </span>
        </ButtonArrow>
      </StoryIntro>
    </Wrapper>
  );
}
