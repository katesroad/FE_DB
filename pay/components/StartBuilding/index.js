import * as React from 'react';
import Link from 'next/link';
import { Wrapper, ContentText } from './styles';
import ScheduleDemo from 'components/ScheduleDemo/inedx';

export default function StartBuilding(props) {
  return (
    <Wrapper {...props}>
      <img src="/home/desktop/illustration-phone-mockup.svg" alt="start building" />
      <ContentText>
        <h4 className="title">Start builidng with our APIs for absolutely free.</h4>
        <ScheduleDemo className="schedule-demo" />
        <p className="contact-us">
          Have any questions?{' '}
          <Link href="/contact">
            <b>Contact Us</b>
          </Link>
        </p>
      </ContentText>
    </Wrapper>
  );
}
