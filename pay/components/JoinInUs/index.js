import * as React from 'react';
import { Tesla, Google, Hewlett, Microsoft, Nvidia, Oracle } from 'components/Icons';
import { Wrapper } from './styles';

export default function JoinInUs(props) {
  return (
    <Wrapper {...props}>
      <h4>Join the thousands of innovators already building with us</h4>
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
    </Wrapper>
  );
}
