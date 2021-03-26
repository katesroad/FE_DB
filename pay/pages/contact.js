import ContactForm from 'components/ContactForm';
import * as mediaQueries from 'styles/media-queries';
import styled from 'styled-components/macro';
import JoinInUs from 'components/JoinInUs';
import { Content } from 'components/lib';
import * as React from 'react';

export default function ContactScreen() {
  return (
    <Content>
      <div
        css={`
          ${mediaQueries.xlarge} {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5.8125rem;
          }
        `}>
        <ContactForm
          css={`
            ${mediaQueries.xlarge} {
              margin-right: 1.75rem;
              width: 45.65rem;
            }
          `}
        />
        <JoinInUs
          css={`
            ${mediaQueries.xlarge} {
              padding-top: 7.025rem;
            }
          `}
        />
      </div>
    </Content>
  );
}
