import * as React from 'react';
import { SimpleUI, EasyWrap, IntroText } from './styles';

export default function Features() {
  return (
    <>
      <EasyWrap>
        <img src="/home/desktop/illustration-easy-to-implement.png" className="picture" />
        <IntroText>
          <h4 className="title">Easy to implement</h4>
          <p className="content">
            Our API comes with just a few lines of code. You’ll be up and running in no time. We
            built our documentation page to integrate payments functionality with ease.
          </p>
        </IntroText>
      </EasyWrap>
      <SimpleUI>
        <img src="/home/desktop/illustration-simple-ui.png" className="picture" />
        <IntroText>
          <h4 className="title"> Simple UI & UX</h4>
          <p className="content">
            Our pre-built form is easy to integrate in your app or website’s checkout flow and
            designed to optimize conversion.
          </p>
        </IntroText>
      </SimpleUI>
    </>
  );
}
