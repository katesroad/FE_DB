import * as React from 'react';
import IntroText from 'components/IntroText';
import { Wrapper } from './styles';
import { ourBusiness, ourVision } from 'constant/about';

export default function AboutUs(props) {
  return (
    <Wrapper {...props}>
      <h3>Empower innovators by delivering access to the financial system</h3>
      <div className="content">
        <IntroText {...ourVision} />
        <IntroText {...ourBusiness} />
      </div>
    </Wrapper>
  );
}
