import * as React from 'react';
import PropTypes from 'prop-types';
import { FeatureWrap, UseCaseWrap, Wrapper } from './styles';
import { USE_CASES } from 'constant/home';
import IntroText from 'components/IntroText';

const UseCase = ({ title, content, svg, ...props }) => (
  <UseCaseWrap {...props}>
    <img src={svg} alt={title} />
    <IntroText title={title} content={content} />
  </UseCaseWrap>
);

export default function UseCaseList() {
  return (
    <Wrapper>
      {USE_CASES.map((useCase) => (
        <UseCase {...useCase} key={useCase.title} />
      ))}
    </Wrapper>
  );
}
