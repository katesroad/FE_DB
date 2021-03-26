import * as mediaQueries from 'styles/media-queries';
import styled from 'styled-components/macro';
import * as React from 'react';
import AboutUs from 'components/AboutUs';
import AboutTeam from 'components/AboutTeam';

export default function AboutScreen() {
  return (
    <>
      <AboutUs />
      <div
        css={`
          height: 80vw;
          background-position: center top;
          background-repeat: no-repeat;
          background-image: url(/about/mobile/image-team-members.jpg);
          background-size: cover;
          ${mediaQueries.small} {
            height: 34.765vw;
            background-image: url(/about/tablet/image-team-members.jpg);
          }
          ${mediaQueries.xlarge} {
            height: 31.25rem;
            background-image: url(/about/desktop/image-team-members.jpg);
            background-position: center;
          }
        `}></div>
      <AboutTeam />
    </>
  );
}
