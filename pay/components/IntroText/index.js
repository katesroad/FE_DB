import * as React from 'react';
import { Wrapper } from './styles';

export default function IntroText({ title, content, ...props }) {
  return (
    <Wrapper {...props}>
      <h4>{title}</h4>
      <p>{content}</p>
    </Wrapper>
  );
}
