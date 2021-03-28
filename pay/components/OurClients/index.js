import * as React from 'react';
import { Content } from 'components/lib';
import { Wrapper, IntroText } from './styles';
import { BtnSecondary } from 'components/lib';
import { Tesla, Google, Hewlett, Microsoft, Nvidia, Oracle } from 'components/Icons';
import Link from 'next/link';

export default function OurClients() {
  return (
    <Wrapper>
      <Content className="content">
        <p className="clients">
          <span>
            <Tesla />
          </span>
          <span>
            <Microsoft />
          </span>
          <span>
            <Hewlett />
          </span>
          <span>
            <Oracle />
          </span>
          <span>
            <Google />
          </span>
          <span>
            <Nvidia />
          </span>
        </p>
        <IntroText>
          <h4 className="title">Who we work with</h4>
          <p className="text">
            Today, millions of people around the world have successfully connected their accounts to
            apps they love using our API. We provide developers with the tools they need to create
            easy and accessible experiences for their users. About Us
          </p>
          <Link href="/about">
            <BtnSecondary>About Us</BtnSecondary>
          </Link>
        </IntroText>
      </Content>
    </Wrapper>
  );
}
