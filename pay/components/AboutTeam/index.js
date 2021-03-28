import * as React from 'react';
import IntroText from 'components/IntroText';
import { thePeople, theCultuer } from 'constant/about';
import { OurStats, Wrapper } from './styles';

export default function AboutTeam(props) {
  return (
    <Wrapper {...props}>
      <OurStats>
        <p>
          <span>Team members</span>
          <strong> 300+</strong>
        </p>
        <p>
          <span>Offices in the US</span>
          <strong>3</strong>
        </p>
        <p>
          <span>Transactions analyzed</span>
          <strong>1M+</strong>
        </p>
      </OurStats>
      <div className="content">
        <IntroText {...theCultuer} />
        <IntroText {...thePeople} />
      </div>
    </Wrapper>
  );
}
