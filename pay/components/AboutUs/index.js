import * as React from 'react';
import { Wrapper, IntroText } from './styles';

export default function AboutUs(props) {
  return (
    <Wrapper {...props}>
      <h3>Empower innovators by delivering access to the financial system</h3>
      <div className="content">
        <IntroText>
          <h4>Our Vision</h4>
          <p>
            Our main goal is to build beautiful consumer experiences along with developer-friendly
            infrastructure. The result is an intelligent tool that gives everyone the ability to
            create amazing products that solve big problems. We are deeply focused on democratizing
            financial services through technology.
          </p>
        </IntroText>
        <IntroText>
          <h4> Our Business</h4>
          <p>
            At the core of our platform is the technical infrastructure APIs that connect consumers.
            Our innovative product provides key insights for businesses and individuals, as well as
            robust reporting for traditional financial institutions and developers.
          </p>
        </IntroText>
      </div>
    </Wrapper>
  );
}
