import styled from "styled-components";
import Head from "next/head";
import { STORIES } from "constant/stories";
import StoryList from "components/StoryList";
import FeatureList from "components/FeatureList";
import { features } from "constant/features";
import HomeStories from "components/HomeStories";
import { Content } from "components/lib";

const stories = STORIES.slice(0, 4);
const homeFeatures = features.slice(0, 3);

export default function Home() {
  return (
    <>
      <Head>
        <title>Photonap</title>
      </Head>
      <>
        <HomeStories />
        <StoryList
          stories={stories}
          css={`
            max-width: 1580px;
            margin-left: auto;
            margin-right: auto;
          `}
        />
        <Content>
          <FeatureList features={homeFeatures} />
        </Content>
      </>
    </>
  );
}
